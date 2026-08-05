import { useState, type ReactNode } from 'react'
import { CheckCircle2, Play, Terminal } from 'lucide-react'
import { portfolio } from '../data/portfolio'

type HistoryItem = { command: string; output: ReactNode; time: string }

const timeNow = () => new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' })

export default function NocTerminal() {
  const [history, setHistory] = useState<HistoryItem[]>([{
    command: 'init --noc-console',
    time: timeNow(),
    output: <div className="terminal-success"><p>[OK] NOC console initialized.</p><p>[OK] Network monitoring profile loaded for {portfolio.shortName}.</p><p className="terminal-muted">Ketik atau pilih perintah untuk menjalankan diagnosis.</p></div>,
  }])
  const [input, setInput] = useState('')

  const run = (rawCommand: string) => {
    const command = rawCommand.trim()
    const normalized = command.toLowerCase()
    if (!command) return
    if (normalized === 'clear') { setHistory([]); setInput(''); return }

    let output: ReactNode
    if (normalized === 'status' || normalized === 'system') {
      output = <div className="terminal-output"><p className="terminal-heading">=== SYSTEM HEALTH &amp; STATUS ===</p><p><span>Engineer:</span> {portfolio.name}</p><p><span>Status:</span> <b className="terminal-success-text">Available for opportunities</b></p><p><span>Focus:</span> {portfolio.targetRoles.join(', ')}</p><p><span>Location:</span> {portfolio.location}</p></div>
    } else if (normalized.startsWith('ping')) {
      output = <div className="terminal-output terminal-success"><p>PING gateway.local (192.168.1.1) 56(84) bytes of data.</p><p>64 bytes from 192.168.1.1: icmp_seq=1 ttl=64 time=1.24 ms</p><p>64 bytes from 192.168.1.1: icmp_seq=2 ttl=64 time=1.08 ms</p><p>64 bytes from 192.168.1.1: icmp_seq=3 ttl=64 time=1.31 ms</p><p className="terminal-accent">--- 0% packet loss, avg latency 1.21 ms ---</p></div>
    } else if (normalized === 'skills') {
      output = <div className="terminal-output"><p className="terminal-heading">=== TECHNICAL CAPABILITIES ===</p>{portfolio.skillGroups.map((group) => <p key={group.title}><b>{group.title}:</b> {group.items.join(', ')}</p>)}</div>
    } else if (normalized === 'experience') {
      output = <div className="terminal-output"><p className="terminal-heading">=== EXPERIENCE LOG ===</p>{portfolio.experience.map((item) => <div className="terminal-experience" key={`${item.company}-${item.role}`}><b>{item.role} @ {item.company}</b><small>{item.period}</small></div>)}</div>
    } else if (normalized === 'help') {
      output = <div className="terminal-output"><p className="terminal-heading">Available commands</p><p><code>status</code> system health &amp; availability</p><p><code>ping</code> network latency simulation</p><p><code>skills</code> technical capability overview</p><p><code>experience</code> work experience log</p><p><code>clear</code> clear console output</p></div>
    } else {
      output = <p className="terminal-error">Command not recognized: “{command}”. Type <code>help</code> to see available commands.</p>
    }
    setHistory((previous) => [...previous, { command, output, time: timeNow() }])
    setInput('')
  }

  return <section className="page-section noc-section" id="noc-simulator">
    <RevealTerminal>
      <div className="noc-intro"><p className="terminal-label"><Terminal size={14} /> Interactive diagnostics</p><SectionHeading>Live NOC console simulator</SectionHeading><p>Explore a short interactive snapshot of my network operations background.</p></div>
      <div className="terminal-window">
        <div className="terminal-bar"><div className="terminal-dots"><i /><i /><i /></div><span>kautsar@noc-host: ~</span><b><CheckCircle2 size={14} /> NOC active</b></div>
        <div className="terminal-screen" aria-live="polite">{history.map((item, index) => <div className="terminal-entry" key={`${item.time}-${index}`}><p className="terminal-command"><time>[{item.time}]</time><span>kautsar@noc-host:~$</span> {item.command}</p><div className="terminal-result">{item.output}</div></div>)}</div>
        <div className="terminal-controls"><div className="terminal-shortcuts">{['status', 'ping 192.168.1.1', 'skills', 'experience', 'help', 'clear'].map((command) => <button key={command} type="button" onClick={() => run(command)}>${command}</button>)}</div><form onSubmit={(event) => { event.preventDefault(); run(input) }}><span>$</span><input value={input} onChange={(event) => setInput(event.target.value)} aria-label="Terminal command" placeholder="Type a command..." /><button type="submit" aria-label="Run command"><Play size={15} fill="currentColor" /></button></form></div>
      </div>
    </RevealTerminal>
  </section>
}

function SectionHeading({ children }: { children: ReactNode }) { return <h2 className="section-title"><span aria-hidden="true" />{children}</h2> }
function RevealTerminal({ children }: { children: ReactNode }) { return <div>{children}</div> }
