/*
  PROJECTS DATA
  =============
  To add a new project, copy the object below and paste it into the PROJECTS
  array (anywhere — order in this file doesn't matter, see `order`).

  {
    id:         "short-unique-slug",       // used internally, no spaces
    designator: "U4",                      // see the note on designators below
    title:      "Project Name",
    category:   "Hardware",                // shown as a small tag on the card
    period:     "Month Year – Month Year", // or "Month Year – Present"
    org:        "Where you built it",
    summary:    "1-2 sentence overview of what it is and why it exists.",
    highlights: [
      "A specific, quantified thing you did.",
      "Another one."
    ],
    tech:  ["C", "STM32", "KiCad"],        // short tags, rendered in mono
    link:  "https://github.com/you/repo",  // repo, demo, or write-up. "" hides the link.
    order: 20                              // lower numbers show first
  }

  ON DESIGNATORS
  --------------
  These mirror real PCB reference-designator prefixes:
    U  = IC / embedded or hardware-centric project
    SW = software-only project (a little pun on the real "switch" designator)
  Pick whichever fits, then the next free number for that prefix.
*/

const PROJECTS = [
  {
    id: "tsjp-board",
    designator: "U1",
    title: "TSJP — Tractive System Junction Box",
    category: "Hardware",
    period: "Oct 2025 – Present",
    org: "UCalgary Racing — High Voltage Team",
    summary:
      "PCB redesign for the car's high-voltage junction box, built to meet formula-racing electrical safety standards while shrinking the board footprint.",
    highlights: [
      "Redesigned the PCB in Altium Designer, reducing board size by 20% while holding to competition safety standards.",
      "Implemented FDCAN communication in C on STM32 microcontrollers for reliable inter-module comms.",
      "Diagnosed and resolved embedded electronics faults on high-reliability racing hardware."
    ],
    tech: ["Altium Designer", "STM32", "C", "FDCAN"],
    link: "",
    order: 10
  },
  {
    id: "rc-car",
    designator: "U2",
    title: "Remote-Controlled Car",
    category: "Embedded Systems",
    period: "Jan 2026 – Apr 2026",
    org: "University of Calgary",
    summary:
      "Team-built RC car with a unified STM32 motor controller, sensor integration, and a live connectivity readout — my focus was the firmware and sensor/display wiring.",
    highlights: [
      "Wrote motor controller code on a unified STM32 board handling 8 simultaneous remote commands, with a live connectivity status readout.",
      "Wrote C to interface a 16x16 LCD with a distance sensor in STM32CubeIDE.",
      "Debugged electrical connections across 2 PCBs and ran system integration tests for full robot operation."
    ],
    tech: ["C", "STM32CubeIDE", "PCB Debugging"],
    link: "",
    order: 20
  },
  {
    id: "electron-app",
    designator: "SW1",
    title: "[Add your Electron.js app name]",
    category: "Software",
    period: "[Month Year – Month Year]",
    org: "[Where you built it]",
    summary:
      "[One or two sentences: what the app does and who it's for.]",
    highlights: [
      "[A specific feature you built — e.g. 'Built a settings panel with persisted user preferences via electron-store.']",
      "[A specific technical decision — e.g. 'Structured IPC between main and renderer processes to keep the UI responsive during file I/O.']"
    ],
    tech: ["Electron.js", "JavaScript", "HTML/CSS"],
    link: "",
    order: 15
  },
  {
    id: "bmerit-wearable",
    designator: "U3",
    title: "Wearable Gait-Analysis Sensor",
    category: "Hardware",
    period: "Sep 2025 – Present",
    org: "BMERIT",
    summary:
      "Low-power wearable sensing system with wireless data transmission, built for a clinical gait-analysis application in partnership with Calgary Foothills Hospital.",
    highlights: [
      "Designed schematics and optimized PCB layouts in KiCad, passing DRC for an automated goniometer with live sensor integration.",
      "Ran live data collection and visualization from multiple IMUs on an ESP32, in C++ with PlatformIO.",
      "Validated the design in partnership with Calgary Foothills Hospital across mechanical, electrical, and software teams."
    ],
    tech: ["KiCad", "ESP32", "C++", "PlatformIO"],
    link: "",
    order: 30
  },
  {
    id: "team-scheduler",
    designator: "SW2",
    title: "Team Scheduling App",
    category: "Software",
    period: "Aug 2024",
    org: "University of Calgary",
    summary:
      "Custom scheduling application with SharePoint integration, built for a 20-member intramural soccer team's tournament availability.",
    highlights: [
      "Developed and deployed a PowerApps application with SharePoint integration for a 20-member team.",
      "Built a dynamic availability-toggle feature with automated rule enforcement for tournament regulations."
    ],
    tech: ["PowerApps", "SharePoint"],
    link: "",
    order: 40
  }
];
