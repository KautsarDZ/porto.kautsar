import { useState, type ReactNode } from 'react'
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Award, Check, ChevronRight, ContactRound, Cpu, GraduationCap, Headphones, Mail, Menu, Network, Satellite, Wrench, X, type LucideIcon } from 'lucide-react'
import { portfolio } from './data/portfolio'
import NocTerminal from './components/NocTerminal'
import './App.css'

const profilePhoto = '/profile-photo.jpeg'

const navigation = [
  { label: 'Overview', href: '#overview' }, { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' }, { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' }, { label: 'NOC Console', href: '#noc-simulator' },
]

function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion()
  return <motion.div className={className} initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: reduceMotion ? 0 : 0.45 }}>{children}</motion.div>
}

function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="section-title"><span aria-hidden="true" />{children}</h2>
}

function SectionWrapper({ children, id, className = '' }: { children: ReactNode; id: string; className?: string }) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.section
      id={id}
      className={`page-section ${className}`}
      initial={reduceMotion ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: reduceMotion ? 0 : 0.6 }}
    >
      {children}
    </motion.section>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [emailCopied, setEmailCopied] = useState(false)
  const [showSuccessCheck, setShowSuccessCheck] = useState(false)
  const [skillCarouselIndex, setSkillCarouselIndex] = useState(0)
  const closeMenu = () => setMenuOpen(false)
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolio.email)
      setEmailCopied(true)
      setShowSuccessCheck(true)
      window.setTimeout(() => {
        setEmailCopied(false)
        setShowSuccessCheck(false)
      }, 2200)
    } catch {
      setEmailCopied(false)
    }
  }
  const skillIcons: LucideIcon[] = [Network, Satellite, Wrench, Headphones]
  
  const skillGroupsPerView = 3
  const totalSkillGroups = portfolio.skillGroups.length
  const maxSkillCarouselIndex = totalSkillGroups - skillGroupsPerView
  
  const handleSkillNext = () => {
    setSkillCarouselIndex((prev) => prev >= maxSkillCarouselIndex ? 0 : prev + 1)
  }
  
  const visibleSkillGroups = portfolio.skillGroups.slice(skillCarouselIndex, skillCarouselIndex + skillGroupsPerView)

  return <>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Kautsar Aldzikra Harlan, home">{portfolio.shortName}</a>
      <button className="menu-toggle" type="button" aria-label="Toggle navigation menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
        {navigation.map((item) => <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>)}
        <a className="nav-contact" href="#contact" onClick={closeMenu}>Contact <ArrowUpRight size={15} /></a>
      </nav>
    </header>

    <main id="top">
      <motion.section className="hero page-section" id="overview" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="topology" aria-hidden="true"><i /><i /><i /><i /></div>
        <Reveal className="hero-content">
          <div className="hero-copy">
            <p className="status"><span /> Available for opportunities</p>
            <p className="hero-kicker">{portfolio.location}</p>
            <h1>{portfolio.name}</h1>
            <p className="hero-role">{portfolio.role}</p>
            <p className="hero-summary">{portfolio.summary}</p>
            <div className="hero-actions"><a className="button button-primary" href="#experience">View experience <ChevronRight size={18} /></a><a className="button button-secondary" href="#contact">Contact me</a></div>
          </div>
          <div className="profile-photo-wrap">
            <img className="profile-photo" src={profilePhoto} alt={`Portrait of ${portfolio.name}`} />
          </div>
        </Reveal>
      </motion.section>

      <SectionWrapper id="summary" className="overview-section" >
        <Reveal className="overview-card"><div className="card-heading"><Cpu /><h2>System overview</h2></div><p>Methodical and reliable in keeping systems connected, observable, and ready to support day-to-day operations.</p><div className="role-list">{portfolio.targetRoles.map((role) => <span key={role}><Check size={14} /> {role}</span>)}</div></Reveal>
      </SectionWrapper>

      <SectionWrapper id="skills">
        <Reveal><SectionTitle>Technical capabilities</SectionTitle></Reveal>
        <div className="skill-carousel-container">
          <motion.div className="skill-grid" layout initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}>
            <AnimatePresence mode="popLayout">
              {visibleSkillGroups.map((group, index) => { 
                const Icon = skillIcons[skillCarouselIndex + index] || Wrench
                return (
                  <motion.div 
                    key={group.title} 
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Reveal className="skill-card">
                      <div className="card-heading">{Icon && <Icon />}<h3>{group.title}</h3></div>
                      <div className="chip-list">{group.items.map((item) => <span className="chip" key={item}><i />{item}</span>)}</div>
                    </Reveal>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>
          
          <button
            className="skill-carousel-button skill-carousel-next"
            onClick={handleSkillNext}
            aria-label="Next skills"
            type="button"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </SectionWrapper>

      <SectionWrapper id="experience">
        <Reveal><SectionTitle>Experience</SectionTitle></Reveal>
        <motion.div className="timeline" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } } }}>
          {portfolio.experience.map((job) => (
            <motion.div key={`${job.company}-${job.role}`} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}>
              <Reveal className="timeline-item">
                <div className="timeline-node" />
                <article className="experience-card">
                  <p className="period">{job.period}</p>
                  <h3>{job.role}</h3>
                  <p className="company">{job.company}</p>
                  <ul>{job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                </article>
              </Reveal>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      <SectionWrapper id="education">
        <Reveal><SectionTitle>Education</SectionTitle></Reveal>
        <motion.div className="education-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}>
          {portfolio.education.map((item) => (
            <motion.div key={item.institution} variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } } }}>
              <Reveal className="education-card"><GraduationCap /><p className="period">{item.period}</p><h3>{item.institution}</h3><p>{item.degree}</p></Reveal>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      <SectionWrapper id="projects">
        <Reveal><SectionTitle>Selected projects</SectionTitle></Reveal>
        <motion.div className="project-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } } }}>
          {portfolio.projects.map((project) => (
            <motion.div key={project.title} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
              <Reveal className="project-card"><Network /><h3>{project.title}</h3><p>{project.description}</p><div className="chip-list">{project.stack.map((item) => <span className="chip" key={item}><i />{item}</span>)}</div></Reveal>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      <NocTerminal />

      <SectionWrapper id="certifications">
        <Reveal><SectionTitle>Certifications</SectionTitle></Reveal>
        <motion.div className="certification-list" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }}>
          {portfolio.certifications.map((certificate) => (
            <motion.div key={certificate.name} variants={{ hidden: { opacity: 0, x: -15 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4 } } }}>
              <Reveal className="certificate"><Award /><div><h3>{certificate.name}</h3><p>{certificate.issuer}</p></div><span>{certificate.year}</span></Reveal>
            </motion.div>
          ))}
        </motion.div>
        <a className="certificate-more" href="https://drive.google.com/drive/folders/1Kfy1HigP5-iIGRgRtSPjNE4PvkARVzhg?usp=sharing" target="_blank" rel="noreferrer">View more certificates <ArrowUpRight size={16} /></a>
      </SectionWrapper>

      <SectionWrapper id="contact" className="contact-section">
        <Reveal><p className="contact-label">Let&apos;s connect</p><h2>Need a dependable<br />technical partner?</h2><p>I&apos;m open to NOC, IT support, and network support opportunities.</p><div className="contact-actions"><button className="button button-light copy-email-btn" type="button" onClick={copyEmail}><Mail size={18} /> {emailCopied ? 'Email copied!' : 'Copy email'}<span className="t-success-check" data-state={showSuccessCheck ? 'in' : 'out'} aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" width="18" height="18" style={{marginLeft: '6px', display: showSuccessCheck ? 'inline-block' : 'none'}}><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span></button><a className="contact-link" href={portfolio.linkedin} target="_blank" rel="noreferrer"><ContactRound size={18} /> LinkedIn <ArrowUpRight size={16} /></a></div></Reveal>
      </SectionWrapper>
    </main>
    <footer><span>© {new Date().getFullYear()} {portfolio.name}</span><a href={`mailto:${portfolio.email}`}>{portfolio.email}</a></footer>
  </>
}

export default App
