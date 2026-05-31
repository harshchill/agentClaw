```
███████╗███████╗███╗   ██╗████████╗██╗███╗   ██╗███████╗██╗     
██╔════╝██╔════╝████╗  ██║╚══██╔══╝██║████╗  ██║██╔════╝██║     
███████╗█████╗  ██╔██╗ ██║   ██║   ██║██╔██╗ ██║█████╗  ██║     
╚════██║██╔══╝  ██║╚██╗██║   ██║   ██║██║╚██╗██║██╔══╝  ██║     
███████║███████╗██║ ╚████║   ██║   ██║██║ ╚████║███████╗███████╗
╚══════╝╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚═╝╚═╝  ╚═══╝╚══════╝╚══════╝
```

## 🤖 SENTINEL - CLI-Based Agent

A powerful command-line agent framework that provides a seamless interface for intelligent automation and task execution. Built with TypeScript and designed for maximum flexibility.

---

## ✨ Features

- **🖥️ CLI Mode** - Full-featured terminal interface for direct interaction
- **📱 Telegram Mode** - Remote control and monitoring via Telegram bot integration
- **🎨 Interactive UI** - Beautiful terminal prompts with Clack
- **✅ Clean Architecture** - Modular, maintainable TypeScript codebase
- **⚡ Fast & Responsive** - Optimized for quick command execution

---

## 🚀 Getting Started

### Installation

```bash
bun install
```

### Usage

```bash
bun run index.ts
```

Upon startup, you'll be greeted with the SENTINEL banner and prompted to select your operating mode:

```bash
$ bun run index.ts
Which mode do you want to select?
❯ CLI
  Telegram
```

---

## 📋 Available Modes

### 🖥️ CLI Mode
Direct command-line interface for immediate interaction and control.

```bash
$ bun run index.ts
# Select: CLI
# Starting CLI mode ...
```

### 📱 Telegram Mode
Remote bot integration for distributed control and monitoring.

```bash
$ bun run index.ts
# Select: Telegram
# Starting telegram mode
```

---

## 🛠️ Tech Stack

- **Language**: TypeScript
- **Runtime**: [Bun](https://bun.com) - Fast all-in-one JavaScript runtime
- **CLI Prompts**: [@clack/prompts](https://github.com/natemoo-re/clack)
- **Styling**: [Chalk](https://github.com/chalk/chalk)
- **ASCII Art**: [Figlet](https://github.com/patorjk/figlet.js)

---

## 📁 Project Structure

```
agentClaw/
├── tui/
│   └── wakeup.ts          # Startup UI with mode selection
├── index.ts               # Main entry point
├── package.json           # Dependencies & scripts
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file
```

---

## 🎯 Core Components

### Wakeup Module (`tui/wakeup.ts`)

The entry point that displays the SENTINEL banner with custom styling:

- **SHADOW Effect**: White background text for depth
- **FACE Effect**: Golden/yellow foreground text for visual pop
- **Font**: ANSI Shadow with Standard fallback

```typescript
// Beautiful banner with dual-layer rendering
printBannerWithShadow(ascii: string)
```

---

## 💻 Development

### Run Development

```bash
bun run index.ts
```

### Build & Bundle

```bash
bun build
```

---

## 🔒 Features Coming Soon

- [ ] Advanced agent logic
- [ ] Database integration
- [ ] API endpoints
- [ ] Custom command modules
- [ ] Logging & monitoring

---

## 📝 License

MIT

---

## 🎮 Experience the Power of SENTINEL

```bash
$ bun run index.ts

███████╗███████╗███╗   ██╗████████╗██╗███╗   ██╗███████╗██╗     
██╔════╝██╔════╝████╗  ██║╚══██╔══╝██║████╗  ██║██╔════╝██║     
███████╗█████╗  ██╔██╗ ██║   ██║   ██║██╔██╗ ██║█████╗  ██║     
╚════██║██╔══╝  ██║╚██╗██║   ██║   ██║██║╚██╗██║██╔══╝  ██║     
███████║███████╗██║ ╚████║   ██║   ██║██║ ╚████║███████╗███████╗
╚══════╝╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚═╝╚═╝  ╚═══╝╚══════╝╚══════╝

Which mode do you want to select?
❯ CLI
  Telegram
```

---

**Built with ❤️ for terminal enthusiasts and automation engineers**
