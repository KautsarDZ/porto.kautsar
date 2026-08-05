import { useState, type ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Award, Check, ChevronRight, ContactRound, Cpu, GraduationCap, Mail, Menu, Network, Server, Wrench, X } from 'lucide-react'
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

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [emailCopied, setEmailCopied] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolio.email)
      setEmailCopied(true)
      window.setTimeout(() => setEmailCopied(false), 2200)
    } catch {
      setEmailCopied(false)
    }
  }
  const skillIcons = [Network, Server, Wrench]

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
      <section className="hero page-section" id="overview">
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
        <a className="scroll-cue" href="#skills" aria-label="Scroll to skills"><span>Explore profile</span><ArrowDown size={17} /></a>
      </section>

      <section className="page-section overview-section" aria-label="Professional summary">
        <Reveal className="overview-card"><div className="card-heading"><Cpu /><h2>System overview</h2></div><p>Methodical and reliable in keeping systems connected, observable, and ready to support day-to-day operations.</p><div className="role-list">{portfolio.targetRoles.map((role) => <span key={role}><Check size={14} /> {role}</span>)}</div></Reveal>
      </section>

      <section className="page-section" id="skills"><Reveal><SectionTitle>Technical capabilities</SectionTitle></Reveal><div className="skill-grid">{portfolio.skillGroups.map((group, index) => { const Icon = skillIcons[index]; return <Reveal key={group.title} className="skill-card"><div className="card-heading"><Icon /><h3>{group.title}</h3></div><div className="chip-list">{group.items.map((item) => <span className="chip" key={item}><i />{item}</span>)}</div></Reveal> })}</div></section>

      <section className="page-section" id="experience"><Reveal><SectionTitle>Experience</SectionTitle></Reveal><div className="timeline">{portfolio.experience.map((job) => <Reveal key={`${job.company}-${job.role}`} className="timeline-item"><div className="timeline-node" /><article className="experience-card"><p className="period">{job.period}</p><h3>{job.role}</h3><p className="company">{job.company}</p>{'context' in job && <p className="context">{job.context}</p>}<ul>{job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></article></Reveal>)}</div></section>

      <section className="page-section" id="education"><Reveal><SectionTitle>Education</SectionTitle></Reveal><div className="education-grid">{portfolio.education.map((item) => <Reveal key={item.institution} className="education-card"><GraduationCap /><p className="period">{item.period}</p><h3>{item.institution}</h3><p>{item.degree}</p></Reveal>)}</div></section>

      <section className="page-section" id="projects"><Reveal><SectionTitle>Selected projects</SectionTitle></Reveal><div className="project-grid">{portfolio.projects.map((project) => <Reveal key={project.title} className="project-card"><Network /><h3>{project.title}</h3><p>{project.description}</p><div className="chip-list">{project.stack.map((item) => <span className="chip" key={item}><i />{item}</span>)}</div></Reveal>)}</div></section>

      <NocTerminal />

      <section className="page-section" id="certifications"><Reveal><SectionTitle>Certifications</SectionTitle></Reveal><div className="certification-list">{portfolio.certifications.map((certificate) => <Reveal key={certificate.name} className="certificate"><Award /><div><h3>{certificate.name}</h3><p>{certificate.issuer}</p></div><span>{certificate.year}</span></Reveal>)}</div><a className="certificate-more" href="https://drive.google.com/drive/folders/1Kfy1HigP5-iIGRgRtSPjNE4PvkARVzhg?usp=sharing" target="_blank" rel="noreferrer">View more certificates <ArrowUpRight size={16} /></a></section>

      <section className="contact-section" id="contact"><Reveal><p className="contact-label">Let&apos;s connect</p><h2>Need a dependable<br />technical partner?</h2><p>I&apos;m open to NOC, IT support, and network support opportunities.</p><div className="contact-actions"><button className="button button-light" type="button" onClick={copyEmail}><Mail size={18} /> {emailCopied ? 'Email copied!' : 'Copy email'}</button><a className="contact-link" href={portfolio.linkedin} target="_blank" rel="noreferrer"><ContactRound size={18} /> LinkedIn <ArrowUpRight size={16} /></a></div></Reveal></section>
    </main>
    <footer><span>© {new Date().getFullYear()} {portfolio.name}</span><a href={`mailto:${portfolio.email}`}>{portfolio.email}</a><span>{portfolio.phone}</span></footer>
  </>
}

export default App
