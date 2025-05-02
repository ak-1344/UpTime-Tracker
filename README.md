## 🖥️ Uptime Tracker (Ubuntu Desktop App)

A minimalist desktop utility that shows how long your Ubuntu system has been up since the last reboot. This app launches at startup, records the boot time, and displays a real-time updating GUI with the current uptime — formatted neatly as **DD\:HH\:MM\:SS**.

### 🚀 Features

* Records system boot time using a lightweight shell script at startup.
* Clean, sleek Electron-based GUI to show uptime in real-time.
* Avoids running any background daemons or processes.
* Resilient and works even if the UI is closed and reopened.
* Self-contained and local-first — no networking or server setup needed.

---

## 📁 Directory Structure

```
uptime-tracker/
├── scripts/
│   └── setup_boot_service.sh       # Sets up systemd service to write boot time
├── systemd/
│   └── boot-time.service           # Systemd unit file for boot script
├── uptime_data.txt                 # File storing the boot timestamp
├── web-ui/
│   ├── node_modules/               # Node dependencies (auto-generated)
│   ├── index.html                  # Electron GUI layout
│   ├── main.js                     # Electron main process logic
│   ├── package.json                # Electron project manifest
│   ├── package-lock.json           # Dependency lock file
│   ├── script.js                   # JavaScript to update uptime in UI
│   └── style.css                   # Modern black/white sleek design
├── .gitignore                      # Git ignore rules
└── README.md                       # You're here
```

---

## 🛠️ Installation & Usage

### 1. Clone this Repository

```bash
git clone https://github.com/yourusername/uptime-tracker.git
cd uptime-tracker
```

### 2. Install Electron Dependencies

```bash
cd web-ui
npm install
```

### 3. Setup Boot Time Recorder

```bash
cd ../scripts
chmod +x setup_boot_service.sh
./setup_boot_service.sh
```

This creates a systemd service that writes the current boot timestamp to `uptime_data.txt` every time your system boots.

### 4. Launch the GUI

```bash
cd ../web-ui
npm start
```

This will open the Electron GUI window showing your current uptime since boot.

---

## ⚠️ Known Issue Encountered

While developing this, we encountered a **CORS policy** restriction when trying to read a local file (`uptime_data.txt`) from a browser context. JavaScript doesn’t allow direct access to `file://` from the browser due to security constraints.

**💡 Solution:** We used Electron to package the web project, allowing JavaScript to read local files directly through Node.js capabilities — seamlessly avoiding the CORS issue.

---

## 🧠 What I Learned

This was a fun, learning-focused personal project for Ubuntu where I explored:

* Systemd services and boot automation
* Electron.js for desktop app creation
* Real-time DOM manipulation and system integration
* Debugging cross-origin and file access issues in web tech

---

## 🤖 Made with ChatGPT

I used **ChatGPT** to brainstorm, structure, and build this project step by step. It helped simplify complex concepts and provided practical code scaffolding while I focused on implementing and understanding the internals.

---

## 🧾 Why I Made This

Ubuntu doesn’t come with a built-in visual tool to show how long the system has been running — at least not in a clean, minimal way on the desktop.

I wanted a lightweight tracker that:

* Starts with the system
* Displays uptime clearly (like `DD:HH:MM:SS`)
* Doesn’t rely on any daemon or terminal commands
* Looks modern, elegant, and sits subtly on the desktop

Also, I wanted to **explore Electron.js** and understand how web technologies can be used to build desktop apps. This project served as a great hands-on opportunity to learn about Electron’s architecture, Node.js integration, and cross-platform GUI logic.
