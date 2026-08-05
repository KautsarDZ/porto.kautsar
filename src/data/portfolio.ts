export const portfolio = {
  name: 'Kautsar Aldzikra Harlan',
  shortName: 'KAUTSARDZ',
  role: 'Network Engineer · IT Support · NOC',
  location: 'Cakung, East Jakarta',
  email: 'kautsar.al.dzikra.harlan.kerja@gmail.com',
  phone: '+62 896-6394-0508',
  linkedin: 'https://linkedin.com/in/kautsar-aldzikra-harlan',
  summary:
    'Telecommunication Engineering graduate with hands-on experience in network monitoring, VSAT operations, LAN troubleshooting, Linux server administration, MikroTik configuration, and technical support.',
  targetRoles: ['Network Operations Center', 'IT Support', 'Network Support Engineer'],
  skillGroups: [
    { title: 'Networking', items: ['Network Monitoring', 'VSAT Operation', 'LAN Troubleshooting', 'Routing & Switching', 'VLAN', 'DHCP', 'NAT', 'Firewall', 'QoS', 'VPN', 'TCP/IP'] },
    { title: 'Systems & Tools', items: ['MikroTik (Winbox)', 'Linux (Ubuntu)', 'SSH', 'PuTTY', 'Wireshark', 'Basic Router Configuration', 'Excel / Office'] },
    { title: 'Technical Support', items: ['CCTV Installation & Configuration', 'Hardware & Software Troubleshooting', 'Remote Support'] },
  ],
  experience: [
    {
      company: 'CV Mandha Sejati', role: 'Operations Support', period: 'Jan 2025 — Jul 2026',
      context: 'F&B retail business · Madha Geprek',
      highlights: ['Coordinated outlet operations and workforce activity during high-demand periods.', 'Built Excel reporting tools and dashboards for revenue monitoring.', 'Installed CCTV and Wi-Fi routers, and handled first-level computer and network troubleshooting.'],
    },
    {
      company: 'PT Pasifik Satelit Nusantara (PSN)', role: 'Satellite Control Center Intern', period: 'Aug 2023 — Dec 2023',
      highlights: ['Monitored real-time VSAT performance and satellite connectivity against SLA targets.', 'Performed TT&C operations for Mobile VSAT systems.', 'Conducted first-level incident analysis and helped develop an LNA replacement SOP.'],
    },
    {
      company: 'PT Telekomunikasi Seluler (Telkomsel)', role: 'Network Engineer Intern', period: 'Jan 2020 — Feb 2020',
      highlights: ['Supported network deployment and basic office topology implementation.', 'Installed and configured MikroTik routers and network switches.', 'Performed monitoring and first-level troubleshooting for connectivity issues.'],
    },
  ],
  education: [
    { institution: 'Politeknik Negeri Jakarta (PNJ)', degree: 'D3 Electrical Engineering — Telecommunication', period: 'Aug 2021 — Aug 2024' },
    { institution: 'SMK Dinamika Pembangunan 1 Jakarta', degree: 'Computer & Network Engineering (TKJ)', period: 'Jun 2018 — Jun 2021' },
  ],
  projects: [
    { title: 'Linux VPS & Network Administration', description: 'Deployed and managed an Ubuntu-based VPS for remote administration, service monitoring, and connectivity troubleshooting. Configured SSH access, firewall rules, and port forwarding.', stack: ['Ubuntu Server', 'SSH', 'Winbox', 'Port Forwarding', 'Firewall', 'Service Monitoring'] },
    { title: 'Network Homelab & Simulation', description: 'Built lab environments to practise VLAN, DHCP, NAT, subnetting, static routing, and LAN troubleshooting through simulated network scenarios.', stack: ['MikroTik', 'Cisco Packet Tracer', 'VMware'] },
  ],
  certifications: [
    { name: 'Network Addressing and Basic Troubleshooting', issuer: 'Cisco Networking Academy', year: '2026' },
    { name: 'Google IT Support', issuer: 'Google Career Certificates · Coursera', year: '2026' },
    { name: 'Certified Radio RF Planner', issuer: 'LSP Telekomunikasi Digital Indonesia · BNSP', year: '2024' },
  ],
} as const
