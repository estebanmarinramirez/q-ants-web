# 🐜 Q-Ants Financial Analysis Interface

A cutting-edge Vue 3 + PrimeVue application for advanced financial analysis and portfolio management, powered by modern web technologies and beautiful UI components.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Vue](https://img.shields.io/badge/Vue-3.4-brightgreen.svg)
![PrimeVue](https://img.shields.io/badge/PrimeVue-4.3-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)

## 🎯 Project Overview

Q-Ants is a professional-grade financial analysis interface that enables sophisticated portfolio management, real-time data visualization, and intelligent financial insights. Built with enterprise-ready architecture and modern development practices.

### ✨ Key Features

- **🎨 Modern UI/UX**: Built with PrimeVue 4.3 components and Aura design system
- **📱 Responsive Design**: Mobile-first approach with adaptive layouts
- **🚀 High Performance**: Optimized with Vite build system and lazy loading
- **🔄 Real-time Updates**: Live data integration and WebSocket support
- **📊 Data Visualization**: Advanced charts and analytics with Chart.js
- **🛡️ Type Safety**: Full TypeScript integration for robust development
- **🎭 Multi-theme Support**: Light/dark mode with custom Q-Ants branding
- **🧩 Modular Architecture**: Component-based design with Pinia state management

## 🏗️ Architecture

### Tech Stack

| Category             | Technology   | Version | Purpose                          |
| -------------------- | ------------ | ------- | -------------------------------- |
| **Framework**        | Vue.js       | 3.4+    | Progressive web framework        |
| **UI Library**       | PrimeVue     | 4.3.4   | Enterprise UI components         |
| **Styling**          | Tailwind CSS | 3.4+    | Utility-first CSS framework      |
| **Build Tool**       | Vite         | 5.1+    | Next-generation frontend tooling |
| **State Management** | Pinia        | 2.1+    | Vue state management             |
| **Router**           | Vue Router   | 4.3+    | Single-page application routing  |
| **Charts**           | Chart.js     | 4.4+    | Data visualization library       |
| **Icons**            | Lucide Vue   | Latest  | Beautiful icon system            |
| **Language**         | TypeScript   | 5.x     | Type-safe JavaScript             |

### Project Structure

```
q-ants-web/
├── 📁 src/
│   ├── 📁 components/
│   │   ├── 📁 home/           # Dashboard components
│   │   └── 📁 layout/         # Navigation & layout components
│   ├── 📁 layouts/            # Page layout templates
│   ├── 📁 views/              # Page components
│   ├── 📁 assets/             # Static assets & styling
│   ├── 📄 main.js             # Application entry point
│   └── 📄 App.vue             # Root component
├── 📁 public/                 # Public assets
├── 📁 .github/                # GitHub workflows & templates
├── 📄 package.json            # Dependencies & scripts
├── 📄 vite.config.js          # Vite configuration
├── 📄 tailwind.config.js      # Tailwind CSS configuration
└── 📄 TODO.md                 # Development roadmap
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.0+ ([Download here](https://nodejs.org/))
- **npm** 9.0+ (comes with Node.js)
- **Git** ([Download here](https://git-scm.com/))

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/estebanmarinramirez/q-ants-web.git
   cd q-ants-web
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173`

### Available Scripts

| Script          | Command              | Description                      |
| --------------- | -------------------- | -------------------------------- |
| **Development** | `npm run dev`        | Start Vite dev server with HMR   |
| **Build**       | `npm run build`      | Create production build          |
| **Preview**     | `npm run preview`    | Preview production build locally |
| **Lint**        | `npm run lint`       | Run ESLint for code quality      |
| **Type Check**  | `npm run type-check` | Run TypeScript compiler checks   |
| **Test**        | `npm run test`       | Run unit tests with Vitest       |
| **Performance** | `npm run lighthouse` | Run Lighthouse performance audit |

## 🎨 Design System

### Q-Ants Brand Colors

```css
/* Primary Blue Palette */
--primary-50: #eff6ff; /* Lightest blue */
--primary-500: #3b82f6; /* Main brand blue */
--primary-900: #1e3a8a; /* Darkest blue */

/* Surface Colors */
--surface-0: #ffffff; /* Pure white */
--surface-50: #f8fafc; /* Light gray */
--surface-900: #0f172a; /* Dark surface */
```

### Component Hierarchy

- **Layout Components**: Sidebar, TopToolbar, Breadcrumb, ChatPanel
- **Navigation**: Dynamic routing with breadcrumbs
- **Content Areas**: Resizable with PrimeVue Splitter
- **Interactive Elements**: Buttons, forms, and data displays

## 📊 Current Implementation Status

### ✅ Phase 1: Navigation & Layout (COMPLETED)

- **Sidebar Navigation**: PrimeVue Menu with collapsible functionality
- **Top Toolbar**: User profile, notifications, search, and settings
- **Breadcrumb System**: Dynamic route-based navigation
- **Resizable Layout**: Splitter component for flexible panels
- **Chat Interface**: Enhanced with PrimeVue components
- **Responsive Foundation**: Tailwind CSS integration

### 🚧 Phase 2: Data Visualization (IN PROGRESS)

- Chart.js integration for financial data
- Real-time portfolio tracking
- Interactive dashboards
- Data table implementations

### 📋 Phase 3: Advanced Features (PLANNED)

- WebSocket integration for live data
- Advanced filtering and search
- Export/import functionality
- Multi-language support

## 🔧 Development Workflow

### GitHub Integration

- **Issues**: Track features and bugs with labeled templates
- **Pull Requests**: Code review workflow with CI/CD
- **Actions**: Automated testing and deployment
- **Releases**: Semantic versioning with changelogs

### Code Quality

- **ESLint**: Enforced coding standards
- **Prettier**: Consistent code formatting
- **TypeScript**: Type safety and IntelliSense
- **Vitest**: Unit testing framework

### Performance Monitoring

- **Lighthouse**: Automated performance audits
- **Bundle Analysis**: Dependency size tracking
- **Core Web Vitals**: Real user experience metrics

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Process

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **PrimeVue Team**: For the exceptional UI component library
- **Vue.js Community**: For the amazing framework and ecosystem
- **Tailwind CSS**: For the utility-first CSS framework
- **Vite**: For the lightning-fast build tool

## 📞 Support & Contact

- **Project Lead**: Esteban Marin ([@estebanmarinramirez](https://github.com/estebanmarinramirez))
- **Company**: Bazar Network
- **Location**: Berlin, Germany
- **Issues**: [GitHub Issues](https://github.com/estebanmarinramirez/q-ants-web/issues)

---

<div align="center">
  <strong>Built with ❤️ by the Q-Ants Team</strong><br>
  <em>Empowering financial analysis through modern web technology</em>
</div>
