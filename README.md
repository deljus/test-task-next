# Test Task Next - Modern React Application

A feature-rich React application built with TypeScript, Vite, Storybook, and Vitest. This project follows a clean architecture pattern with feature-based organization and includes internationalization, state management, and comprehensive testing.

## 🚀 Tech Stack

- **React 19** with React Compiler
- **TypeScript** for type safety
- **Vite** for fast development and building
- **Storybook** for component documentation and testing
- **Vitest** for unit and integration testing
- **Tailwind CSS** for styling
- **React Router** for routing
- **React Query (TanStack Query)** for server state management
- **React Hook Form** with Yup validation
- **i18next** for internationalization
- **Axios** for HTTP requests

## 📁 Project Structure

The project follows a feature-sliced design architecture:

```
test-task-next/
├── src/
│   ├── app/                    # Application layer
│   │   ├── css/               # Global styles
│   │   ├── providers/         # React providers (i18n, queries, etc.)
│   │   ├── index.html         # HTML entry point
│   │   └── index.tsx          # React entry point
│   │
│   ├── features/              # Feature modules
│   │   └── auth/              # Authentication feature
│   │       └── login/         # Login feature
│   │           ├── ui/        # UI components
│   │           ├── model/     # Business logic, schemas, hooks
│   │           └── index.tsx  # Feature entry point
│   │
│   ├── pages/                 # Page components
│   │   └── auth/              # Auth pages
│   │       └── login/         # Login page
│   │           ├── ui/        # Page UI
│   │           └── index.tsx  # Page entry point
│   │
│   ├── shared/                # Shared modules
│   │   ├── api/               # API client and configurations
│   │   ├── assets/            # Static assets
│   │   ├── config/            # Configuration files
│   │   ├── lib/               # Libraries and utilities
│   │   │   ├── i18n/         # Internationalization setup
│   │   │   └── storages/     # Storage utilities (token, web storage)
│   │   ├── model/             # Shared types and interfaces
│   │   └── ui/                # Reusable UI components
│   │       ├── button/        # Button component
│   │       ├── controls/      # Form controls (input, select)
│   │       ├── flex-table/    # Flexible table component
│   │       ├── flat-form/     # Form components
│   │       └── language-switcher/ # Language switcher
│   │
│   └── widgets/               # Widgets (composite components)
│       └── layouts/           # Layout components
│           └── auth/          # Auth layout
│               ├── ui/        # Layout UI
│               └── index.tsx  # Layout entry point
│
├── public/                    # Public assets
├── .storybook/               # Storybook configuration
├── vitest.config.ts          # Vitest configuration
├── vite.config.ts            # Vite configuration
└── package.json              # Dependencies and scripts
```

## 🛠️ Available Commands

### Development
```bash
# Start development server
npm run dev

# Run Storybook for component development
npm run storybook

# Run tests
npm run test

# Run linter
npm run lint
```

### Building
```bash
# Build for production
npm run build

# Build Storybook documentation
npm run build-storybook

# Preview production build
npm run preview
```

## 🧪 Testing

The project uses **Vitest** for testing with the following setup:

- **Unit tests**: Component testing with `@testing-library/react`
- **Storybook tests**: Component testing integrated with Storybook
- **Browser tests**: Playwright for browser-based testing
- **Coverage**: V8 coverage reporting

Test files follow the naming convention: `*.test.tsx` or `*.test.ts`

## 📚 Storybook

Storybook is configured for component documentation and testing:

- Accessible at `http://localhost:6006` when running `npm run storybook`
- Includes accessibility addon (`@storybook/addon-a11y`)
- Includes documentation addon (`@storybook/addon-docs`)
- Integrated with Vitest for testing stories

## 🌐 Internationalization

The application supports multiple languages using **i18next**:

- English (`en`) and Russian (`ru`) locales included
- Language detection from browser
- Language switcher component available
- Translations stored in JSON files under `src/shared/lib/i18n/locales/`

## 🎨 Styling

- **Tailwind CSS** for utility-first styling
- **Tailwind Merge** for conditional class merging
- Custom CSS in `src/app/css/styles.css`

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration with React, TypeScript paths, and Tailwind
- `vitest.config.ts` - Test configuration with Storybook integration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint configuration
- `.storybook/` - Storybook configuration

## 🚦 Development Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd test-task-next
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Development server: `http://localhost:5173`
   - Storybook: `http://localhost:6006`

## 📦 Key Dependencies

### Runtime Dependencies
- `react`, `react-dom` - React 19 with React Compiler
- `@tanstack/react-query` - Server state management
- `react-router-dom` - Routing
- `react-hook-form` + `yup` - Form handling and validation
- `i18next` + `react-i18next` - Internationalization
- `axios` - HTTP client
- `tailwindcss` - CSS framework

### Development Dependencies
- `typescript` - TypeScript support
- `vite` - Build tool and dev server
- `storybook` - Component documentation
- `vitest` - Testing framework
- `eslint` - Code linting
- `@testing-library/react` - React testing utilities

## 🏗️ Architecture Principles

1. **Feature-Sliced Design**: Code organized by features rather than technical concerns
2. **Separation of Concerns**: Clear separation between UI, business logic, and data access
3. **Reusability**: Shared components and utilities in `shared/` directory
4. **Testability**: Comprehensive testing setup with Vitest and Storybook
5. **Type Safety**: Full TypeScript support throughout the codebase

## 🔄 Git Integration

The project is configured with Git hooks and includes:
- `.gitignore` for common patterns
- Git repository initialized with commit history

## 📝 Code Quality

- ESLint configured for React and TypeScript
- TypeScript strict mode enabled
- Prettier integration recommended
- Consistent code organization patterns

## 🚀 Deployment

The application can be deployed to any static hosting service:

1. Build the application: `npm run build`
2. Deploy the `dist/` directory to your hosting service
3. For Storybook documentation: `npm run build-storybook` and deploy the `storybook-static/` directory

## 🤝 Contributing

1. Follow the established project structure
2. Write tests for new features
3. Add Storybook stories for new components
4. Maintain TypeScript type safety
5. Follow existing code style and conventions

## 📄 License

This project is for demonstration purposes as part of a test task.