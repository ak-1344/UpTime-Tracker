## 🖥️ Uptime Tracker (Ubuntu Desktop App)

A minimalist desktop utility that shows how long your Ubuntu system has been up since the last reboot. This app launches at startup, records the boot time using a compiled C program, and displays a real-time updating GUI with the current uptime — formatted neatly as **DD\:HH\:MM\:SS**.

---

## 🚀 Features

* Records system boot time at startup using a lightweight compiled C program via systemd.
* Clean, sleek Electron-based GUI shows uptime in real-time.
* No daemons or background processes — runs only when opened.
* Auto-start ready via Ubuntu desktop shortcut (`.desktop` file).
* Fully local — no server, no internet, just system integration.
* Elegant black-and-white modern design with transparent draggable window.

---

## 📁 Project Structure

```
uptime-tracker/
├── CPUUsage.desktop                # Ubuntu desktop shortcut file
├── uptime_data.txt                 # Stores the boot timestamp
├── play.c                          # C program to write boot time to file
├── CPU_Time_Usage                  # Compiled executable from play.c
├── scripts/
│   └── setup_boot_service.sh       # Sets up systemd service for play
├── systemd/
│   └── boot-time.service           # systemd unit file to run play at boot
├── web-ui/
│   ├── index.html                  # Electron GUI layout
│   ├── style.css                   # Modern black/white UI styling
│   ├── script.js                   # Live uptime clock logic
│   ├── main.js                     # Electron main process script
│   ├── icon.png                    # App icon
│   ├── package.json                # Electron app config
│   └── package-lock.json           # Dependency lock file
└── README.md                       # You're here!
```

---

## 🛠️ Installation & Usage

### 1. Clone this Repository

```bash
git clone https://github.com/yourusername/uptime-tracker.git
cd uptime-tracker
```

### 2. Compile and Setup Boot Time Recorder

```bash
gcc play.c -o CPU_Time_Usage
cd scripts
chmod +x setup_boot_service.sh
./setup_boot_service.sh
```

This sets up a **systemd service** that runs the compiled binary (`play`) at system boot, writing the current time to `uptime_data.txt`.

### 3. Install and Launch the GUI

```bash
cd ../web-ui
npm install
npm start
```

This opens the Electron GUI showing your system uptime in a clean, frameless window.

(Optional) To run it like a native app:

* Use the provided `CPUUsage.desktop` file.
* Move it to `~/.local/share/applications/` and adjust paths inside.

---

## ⚠️ Issue Encountered

While building the initial version, accessing `uptime_data.txt` from a browser using JavaScript led to **CORS errors**, as browsers block direct `file://` access.

### ✅ Workaround:

Electron allows JavaScript to interact with the local filesystem directly using Node.js, bypassing the browser's security restrictions. This made everything smoother and cleaner.

---

## 🧾 Why I Made This

Ubuntu doesn’t include a built-in desktop visual tracker for uptime.

I wanted something that:

* Starts with the system.
* Clearly shows how long my PC has been running.
* Avoids daemons, terminals, or complex dependencies.
* Looks modern, subtle, and lives on the desktop.
* Serves as a hands-on **Electron.js exploration project**.

This was an ideal use case to combine system-level scripting with modern UI frameworks like Electron — a fun and practical learning experience.

---

## 🤖 Built with ChatGPT

This project was created with **ChatGPT’s assistance** — helping with brainstorming, debugging, and structuring code while I focused on learning and applying concepts.

A fun and functional personal project built for **Ubuntu**, with love for simplicity and learning.

---
