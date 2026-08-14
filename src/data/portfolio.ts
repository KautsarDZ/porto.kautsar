export const portfolio = {
  name: 'Kautsar Aldzikra Harlan',
  shortName: 'KAUTSARDZ',
  role: 'Network Engineer · IT Support · NOC',
  location: 'Cakung, East Jakarta, Indonesia',
  email: 'kautsardz.kerja@gmail.com',
  phone: '+62 896-6394-0508',
  linkedin: 'https://linkedin.com/in/kautsar-aldzikra-harlan',
  summary:
    'Telecommunications graduate with hands-on expertise in network troubleshooting, VSAT operations, MikroTik configuration, LAN/WLAN deployment, and IT technical support. Proficient in Linux administration, RF signal analysis, and network device setup.',
  targetRoles: ['Network Operations Center (NOC)', 'Network Support', 'Junior Network Engineering', 'IT Support'],
  skillGroups: [
    { title: 'Networking & Infrastructure', items: ['TCP/IP', 'IPv4 & Subnetting', 'VLAN', 'DHCP', 'NAT', 'Static Routing', 'Firewall', 'QoS Management', 'Wireless Config', 'LAN/WLAN Setup'] },
    { title: 'Telecommunication & RF', items: ['VSAT Operations', 'Antenna Pointing', 'Polarization', 'Azimuth & Elevation', 'Spectrum Analysis', 'SNR Monitoring', 'LNA Maintenance', 'VSAT Modem Config'] },
    { title: 'Systems & Tools', items: ['Ubuntu Linux', 'SSH', 'VMware', 'VirtualBox', 'Winbox', 'Wireshark', 'Nmap', 'PuTTY', 'Bash'] },
    { title: 'IT Support', items: ['Hardware & Software Troubleshooting', 'CCTV Installation', 'Wireless Access Point', 'POS/Computer Support', 'Printer Troubleshooting'] },
  ],
  experience: [
    {
      company: 'CV Mandha Sejati', role: 'Operations Support', period: 'Jan 2025 — Jul 2026',
      highlights: ['Managed daily operational and technical support activities for a retail food outlet including inventory, reporting, and IT infrastructure.', 'Developed Microsoft Excel-based revenue calculation and reporting system that improved efficiency and accuracy of daily reporting.', 'Installed and configured 6 TP-Link Tapo CCTV cameras across multiple outlets using Wi-Fi and PoE connectivity with centralized monitoring.', 'Configured Huawei BE3 Wi-Fi 7 router for office environment with wireless settings, device whitelisting, and QoS/bandwidth management.', 'Performed first-level troubleshooting for cashier computers, printers, network connectivity, and hardware/software issues.'],
    },
    {
      company: 'PT Pasifik Satelit Nusantara (PSN)', role: 'SSC & VSAT Operations Intern', period: 'Aug 2023 — Dec 2023',
      highlights: ['Assisted senior technicians in installation, configuration, maintenance, and troubleshooting of UBIQU VSAT systems at field sites.', 'Performed antenna alignment checks including polarization, azimuth, and elevation according to site requirements before signal verification.', 'Performed VSAT modem/IP configuration using predefined templates and operational SOPs including IP addressing, subnet, gateway, routing, VLAN, NAT, and QoS.', 'Supported troubleshooting by checking operating frequency and SNR using >8 dB reference under clear-weather conditions based on operational procedures.', 'Assisted in updating LNA replacement procedure and work schedule under mentor supervision to simplify maintenance workflow.'],
    },
    {
      company: 'PT Telekomunikasi Seluler (TELKOMSEL)', role: 'Network Engineer Intern', period: 'Jan 2020 — Feb 2020',
      highlights: ['Assisted senior technicians in deploying internet and LAN infrastructure for new commercial office environment with ONT, modem, router, and switches.', 'Assisted in configuring MikroTik RouterBoard and Huawei EchoLife HG8145V5 equipment.', 'Performed RJ45 cable termination and single-mode fiber optic splicing.', 'Conducted basic network testing using Wireshark and Nmap to verify connectivity.'],
    },
  ],
  education: [
    { institution: 'Politeknik Negeri Jakarta (PNJ)', degree: 'D3 Electrical Engineering — Telecommunication', period: 'Aug 2021 — Aug 2024' },
    { institution: 'SMK Dinamika Pembangunan 1 Jakarta', degree: 'Computer & Network Engineering (TKJ)', period: 'Jun 2018 — Jun 2021' },
  ],
  projects: [
    { title: 'Linux VPS & Network Administration', description: 'Deployed and administered an Ubuntu-based VPS for remote system and networking practice. Configured SSH remote access, Linux users, packages, firewall rules, and basic server services and used Ngrok for temporary external access without directly exposing VPS ports to the public. Practiced web server deployment and Linux command-line administration.', stack: ['Ubuntu Server', 'VMware', 'SSH', 'Firewall', 'Bash', 'Ngrok'] },
    { title: 'MikroTik Network Homelab', description: 'Built a small-office network simulation using a physical MikroTik RB750R2 hEX Lite router. Configured IP address, DHCP, NAT, firewall rules, static routing, VLANs, QoS, and basic wireless settings. Practiced network troubleshooting, subnetting, and connectivity verification through a segmented LAN environment.', stack: ['RouterOS', 'VLAN', 'DHCP', 'NAT', 'Firewall', 'Static Routing', 'QoS'] },
  ],
  certifications: [
    { name: 'Certified Radio RF Planner', issuer: 'LSP Telekomunikasi Digital Indonesia', year: '2024' },
    { name: 'Google IT Support Certificate', issuer: 'Google Career Certificates', year: '2026' },
    { name: 'Network Addressing and Basic Troubleshooting', issuer: 'Cisco Networking Academy', year: '2026' },
  ],
} as const
