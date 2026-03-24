# SyncGuardian

Cross-platform device sync solution — keep all your devices in perfect harmony.

## Project Structure

```
sync-guardian/
├── apps/
│   ├── backend/       # Express.js API (Node.js + Firebase Admin)
│   ├── mobile/        # Expo/React Native mobile app
│   └── web/           # (Coming soon) Web dashboard
│
├── packages/
│   └── shared/        # Shared types, constants, and utilities
│
├── package.json       # Root workspace config
└── pnpm-workspace.yaml
```

## Prerequisites

- [Node.js](https://nodejs.org/) >= 20.0.0
- [pnpm](https://pnpm.io/) >= 9.0.0

---

## 📘 Monorepo Guide

> [!IMPORTANT]
> **New to Monorepos?** Check out our [Monorepo Guide](./MONOREPO_GUIDE.md) for shortcuts, tips on installing packages, and the shared code workflow.

---

## Getting Started

```bash
# Install all dependencies (from root)
pnpm install

# Run the backend
pnpm dev:backend

# Run the mobile app
pnpm dev:mobile
```

## Apps

### Backend (`apps/backend`)
Express.js API server with Firebase Admin SDK for push notifications and device sync.

### Mobile (`apps/mobile`)
Expo/React Native app with file-based routing (expo-router), NativeWind for styling.

## Packages

### Shared (`packages/shared`)
Shared TypeScript types, constants, and utility functions used across all apps.

```typescript
import { SyncStatus, Device } from '@sync-guardian/shared';
```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm install` | Install all workspace dependencies |
| `pnpm dev:backend` | Start the backend dev server |
| `pnpm dev:mobile` | Start the Expo dev server |
| `pnpm lint` | Run linting across all apps |
| `pnpm clean` | Remove all node_modules |
