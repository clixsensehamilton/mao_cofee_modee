# Frontend Tech Stack

The Mao Coffee Modee frontend is designed for clarity, maintainability, and cross-platform reach. Below is an overview of the technologies and tools used:

## Monorepo Structure
- **Single codebase** for web and mobile, organized as a monorepo.
- **React Native** (mobile), **Expo** (build/deployment), and **React Native Web** (web) are integrated for unified development.

## Programming Language
- **TypeScript** (primary language) — ensures type safety and modern JavaScript features.
- Version: _See `package.json` for current version._

## Main Frameworks & Libraries
- **React Native** — core UI framework for mobile.
- **Expo** — simplifies development, builds, and deployment for iOS, Android, and web.
- **React Native Web** — enables React Native components to run on the web.

## Styling
- **NativeWind** — Enables literal Tailwind CSS classes in React Native and Web, ensuring consistent styling across platforms.
- **Tamagui** — universal UI component library for React Native, Expo, and Web, providing accessible, themeable, and performant components.

## State Management
- **Redux Toolkit** — Production-standard, robust state management for scalable apps. Provides advanced debugging, middleware, and ecosystem support. Used for global and cross-component state.

## Data Fetching
- **React Query (TanStack Query)** — Production-standard data fetching, caching, and server state management for REST and GraphQL APIs. Integrates seamlessly with Redux Toolkit and supports background sync, pagination, and optimistic updates.

## Navigation
- **React Navigation** — handles navigation and routing for both mobile and web platforms.

## Testing Tools
- **Jest** — unit and integration testing.
- **React Native Testing Library** — component testing.
- **Detox** — End-to-end testing for React Native apps (mobile).
- **Playwright** — E2E testing for web (React Native Web).

## Key Libraries & Utilities
- **Axios** or **Fetch API** — for HTTP requests.
- **React Query** or **SWR** — for data fetching and caching (if used).
- **ESLint** & **Prettier** — code quality and formatting.
- **Husky** & **lint-staged** — pre-commit hooks for code consistency.

## Build & Deployment
- **Expo CLI** — unified build and deployment for iOS, Android, and web.
- **Expo Application Services (EAS)** — for advanced builds and over-the-air updates.

## CI/CD (Continuous Integration & Deployment)
- **Expo Application Services (EAS) Build & Submit** — Official Expo CI/CD platform for cloud builds, app signing, OTA updates, and store submissions. Handles iOS, Android, and web deployments with deep Expo integration.
- **GitHub Actions** — Automates testing, linting, and orchestrates EAS builds/deployments as part of the CI pipeline. Flexible and widely adopted for Expo monorepos.

> **Best Practice:**
> - Use EAS Build for building, signing, and deploying Expo apps.
> - Use GitHub Actions for running tests, linting, and triggering EAS builds.

## Other Infrastructure & Tools
- **TypeScript path aliases** — for cleaner imports.
- **Monorepo tooling** (e.g., pnpm workspaces) — manages dependencies and packages across frontend, backend, and shared code.

## Tailwind CSS Integration
- **NativeWind** — Production-standard Tailwind CSS integration for React Native and Web. Enables use of literal Tailwind classes for styling, ensuring consistency across platforms. Used to supplement Tamagui UI components for utility-first, rapid styling.
- **Tamagui Shorthands** — Built-in utility-first styling system for Tamagui components, inspired by Tailwind. Can be used alongside NativeWind for maximum flexibility.

## E2E (End-to-End) Testing
- **Detox** — Industry-standard E2E testing framework for React Native mobile apps (iOS and Android). Automates real device and simulator interactions, supports CI/CD, and ensures mobile flows work as expected.
- **Playwright** — Modern, fast, and reliable E2E testing for web (React Native Web). Supports multiple browsers, parallel execution, and advanced automation features.

---
This stack enables rapid development, code sharing, and consistent user experience across all platforms.
