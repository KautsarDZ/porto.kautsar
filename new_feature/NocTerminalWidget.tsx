"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Play, RefreshCw, CheckCircle2, ShieldAlert } from "lucide-react";
import { cvData } from "@/data/cvData";

interface HistoryItem {
  command: string;
  output: string | React.ReactNode;
  time: string;
}

export default function NocTerminalWidget() {
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: "init --noc-dashboard",
      output: (
        <div className="text-emerald-400">
          <p>[OK] NOC Terminal v2.4 initialized.</p>
          <p>[OK] Telecommunication & Network Monitoring Services Active.</p>
          <p className="text-[#94a3b8] text-xs mt-1">Ketik atau klik tombol perintah di bawah untuk menjalankan tes diagnostics.</p>
        </div>
      ),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    }
  ]);
  const [inputVal, setInputVal] = useState("");

  const executeCommand = (cmdStr: string) => {
    const cleanCmd = cmdStr.trim().toLowerCase();
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    let outputContent: React.ReactNode = "";

    if (cleanCmd === "clear") {
      setHistory([]);
      return;
    } else if (cleanCmd === "status" || cleanCmd === "system") {
      outputContent = (
        <div className="space-y-1 text-xs">
          <p className="text-[#4ee1d4] font-semibold">=== NOC SYSTEM HEALTH & STATUS ===</p>
          <p><span className="text-[#94a3b8]">Engineer:</span> Kautsar Aldzikra Harlan</p>
          <p><span className="text-[#94a3b8]">Status:</span> <span className="text-emerald-400">Ready for NOC / IT Support Opportunities</span></p>
          <p><span className="text-[#94a3b8]">Focus Areas:</span> Network Monitoring, VSAT, Linux Admin, MikroTik</p>
          <p><span className="text-[#94a3b8]">Homelab Uptime:</span> 99.98% (Ubuntu VPS + Winbox RouterOS)</p>
        </div>
      );
    } else if (cleanCmd.startsWith("ping")) {
      outputContent = (
        <div className="space-y-1 text-xs text-emerald-400">
          <p>PING gateway.net.id (192.168.1.1) 56(84) bytes of data.</p>
          <p>64 bytes from 192.168.1.1: icmp_seq=1 ttl=64 time=1.42 ms</p>
          <p>64 bytes from 192.168.1.1: icmp_seq=2 ttl=64 time=1.18 ms</p>
          <p>64 bytes from 192.168.1.1: icmp_seq=3 ttl=64 time=1.25 ms</p>
          <p className="text-[#4ee1d4]">--- 0% packet loss, min/avg/max = 1.18/1.28/1.42 ms ---</p>
        </div>
      );
    } else if (cleanCmd === "skills") {
      outputContent = (
        <div className="space-y-1 text-xs">
          <p className="text-[#4ee1d4] font-semibold">=== TECHNICAL SKILLSET OVERVIEW ===</p>
          <p><span className="text-[#e5fffa]">Networking:</span> VSAT Operations, Routing & Switching, VLAN, DHCP, NAT, VPN, QoS</p>
          <p><span className="text-[#e5fffa]">Systems & Tools:</span> MikroTik Winbox, Linux Ubuntu Server, SSH, PuTTY, Wireshark</p>
          <p><span className="text-[#e5fffa]">Tech Support:</span> CCTV Installation, Hardware/Software Troubleshooting, Remote Support</p>
        </div>
      );
    } else if (cleanCmd === "experience") {
      outputContent = (
        <div className="space-y-1 text-xs">
          <p className="text-[#4ee1d4] font-semibold">=== RECENT WORK & INTERNSHIPS ===</p>
          {cvData.experiences.map((exp) => (
            <div key={exp.id} className="border-l-2 border-[#4ee1d4] pl-2 my-1">
              <p className="font-semibold text-white">{exp.role} @ {exp.company}</p>
              <p className="text-[11px] text-[#94a3b8]">{exp.period}</p>
            </div>
          ))}
        </div>
      );
    } else if (cleanCmd === "help") {
      outputContent = (
        <div className="space-y-1 text-xs text-[#e5fffa]">
          <p className="text-[#4ee1d4]">Perintah yang tersedia:</p>
          <p><code className="text-amber-300">status</code> - Cek status ketersediaan & sistem</p>
          <p><code className="text-amber-300">ping</code> - Jalankan simulasi ping latency jaringan</p>
          <p><code className="text-amber-300">skills</code> - Tampilkan daftar keahlian jaringan & sistem</p>
          <p><code className="text-amber-300">experience</code> - Ringkasan riwayat kerja & magang</p>
          <p><code className="text-amber-300">clear</code> - Bersihkan layar terminal</p>
        </div>
      );
    } else {
      outputContent = (
        <div className="text-rose-400 text-xs">
          Command not recognized: &quot;{cmdStr}&quot;. Ketik <code className="text-amber-300">help</code> untuk daftar perintah.
        </div>
      );
    }

    setHistory((prev) => [
      ...prev,
      {
        command: cmdStr,
        output: outputContent,
        time: currentTime
      }
    ]);
    setInputVal("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal) return;
    executeCommand(inputVal);
  };

  return (
    <section id="noc-terminal" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#344e64]/30 border border-[#4ee1d4]/30 text-[#4ee1d4] text-xs font-semibold uppercase tracking-wider mb-3">
            <Terminal className="w-3.5 h-3.5" /> Interactive Diagnostics
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Live NOC Console Simulator
          </h2>
          <p className="text-[#94a3b8] text-sm sm:text-base mt-2">
            Simulasi terminal interaktif untuk melihat keahlian sistem & pemantauan jaringan secara real-time.
          </p>
        </div>

        {/* Terminal Window Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto glass-card rounded-2xl overflow-hidden shadow-2xl border border-[#4ee1d4]/30"
        >
          {/* Top Bar Header */}
          <div className="bg-[#15102a] px-4 py-3 border-b border-[#4ee1d4]/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-xs font-mono text-[#94a3b8] ml-2">bash - kautsar@noc-host:~</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-[#4ee1d4] font-mono">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> NOC ACTIVE
              </span>
            </div>
          </div>

          {/* Terminal Screen Body */}
          <div className="p-4 sm:p-6 bg-[#0f0b1f]/95 min-h-[320px] max-h-[420px] overflow-y-auto font-mono text-sm space-y-4">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-[#4ee1d4]">
                  <span className="text-[#344e64] text-xs">[{item.time}]</span>
                  <span className="text-[#75f0e3]">kautsar@noc-host:~$</span>
                  <span className="text-white font-semibold">{item.command}</span>
                </div>
                <div className="pl-4 text-[#e5fffa]/90">{item.output}</div>
              </div>
            ))}
          </div>

          {/* Interactive Quick Command Preset Buttons */}
          <div className="bg-[#15102a] p-3 border-t border-[#4ee1d4]/20 flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-[#94a3b8] hidden sm:inline">Pintas CLI:</span>
              {["status", "ping 192.168.1.1", "skills", "experience", "help", "clear"].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => executeCommand(cmd)}
                  className="px-2.5 py-1 rounded bg-[#344e64]/40 hover:bg-[#4ee1d4] hover:text-[#15102a] text-[#e5fffa] text-xs font-mono transition-colors border border-[#4ee1d4]/20"
                >
                  ${cmd}
                </button>
              ))}
            </div>

            {/* Input form */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full sm:w-auto mt-2 sm:mt-0">
              <span className="text-[#4ee1d4] font-mono text-sm">$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Ketik perintah (contoh: help)..."
                className="bg-[#0f0b1f] border border-[#4ee1d4]/30 rounded px-3 py-1 text-xs text-white font-mono focus:outline-none focus:border-[#4ee1d4] w-full sm:w-64"
              />
              <button
                type="submit"
                className="p-1.5 rounded bg-[#4ee1d4] text-[#15102a] hover:opacity-90"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
              </button>
            </form>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
