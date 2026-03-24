# 📘 The SyncGuardian Monorepo Manual

Since you're new to monorepos, here is everything you need to know to work with your project like a pro.

---

## 1. Where do I install packages?

In a monorepo, you **stay at the root** and use the `--filter` flag. Avoid `cd` into folders unless you really have to.

| To install... | Use this command (from root) |
| :--- | :--- |
| **A backend package** (e.g. `express`) | `pnpm add express --filter @sync-guardian/backend` |
| **A mobile package** (e.g. `lucide-react-native`) | `pnpm add lucide-react-native --filter @sync-guardian/mobile` |
| **A shared package** (e.g. `zod`) | `pnpm add zod --filter @sync-guardian/shared` |
| **A root tool** (e.g. `prettier`) | `pnpm add -wD prettier` (the `-w` means "workspace root") |

---

## 🔥 Shortcuts (Pro Tips)

You don't need to type the full name! Use **`-F`** and short folder names.

| Long Version | **Fast Shortcut** (Recommended) |
| :--- | :--- |
| `pnpm add express --filter @sync-guardian/backend` | **`pnpm add express -F backend`** |
| `pnpm add expo --filter @sync-guardian/mobile` | **`pnpm add expo -F mobile`** |
| `pnpm remove express --filter @sync-guardian/backend` | **`pnpm rm express -F backend`** |
| `pnpm --filter @sync-guardian/backend dev` | **`pnpm -F backend dev`** |

> [!TIP]
> **Type less, do more:** `pnpm` will automatically match `-F backend` to your backend app. You don't need to type the `@sync-guardian/` part.

---

> [!IMPORTANT]
> **Why not `cd` and `npm install`?**
> If you `cd` and use `npm`, you'll create a second, conflicting `package-lock.json`. By staying at the root with `pnpm`, we keep **one single lockfile** for the whole project. This makes everything faster and prevents "it works on my machine" bugs.

---

## 2. Daily Commands (The Workflow)

You usually run everything from the root using the scripts I added to your root `package.json`.

| Action | Command |
| :--- | :--- |
| **Install everything** | `pnpm install` |
| **Run Backend Dev** | `pnpm dev:backend` |
| **Run Mobile Dev** | `pnpm dev:mobile` |
| **Run ALL at once** | `pnpm dev` (if you add a combined script) |
| **Check for errors** | `pnpm -r lint` (the `-r` means "recursive" — runs in every app) |

---

## 3. How "Shared" Code works

This is the "Superpower" of your monorepo.

1.  You define a type or constant in `packages/shared/src/constants.js`.
2.  In `apps/backend/package.json`, I already added: `"@sync-guardian/shared": "workspace:*"`
3.  Now, in your backend code, you just do:
    ```javascript
    const { DeviceStatus } = require('@sync-guardian/shared');
    ```
4.  **The Magic:** When you change the constant in the `shared` folder, **both the backend and mobile app get the update instantly**. No publishing to npm, no copy-pasting.

---

## 4. Why did we use `pnpm`?

We chose `pnpm` because it's built specifically for monorepos:
*   **Fast:** It shares files between projects (if both apps use `react`, it only downloads it once).
*   **Space Saving:** It doesn't duplicate `node_modules`.
*   **Strict:** It ensures you only use packages you actually declared in `package.json`.

---

## 5. Summary of the "Golden Rules"

1.  **Stay at the Root**: Run your commands from `d:\amit\sync-guardian`.
2.  **Use Filters**: Use `--filter <package-name>` to target a specific app.
3.  **One Lockfile**: Never run `npm install` inside the subfolders.
4.  **Shared first**: If a type or constant is used in more than one place, put it in `packages/shared`.

---

## Pro Tip: Finding Package Names
If you forget the "filter name", look at the `"name"` field in that folder's `package.json`.
*   `apps/backend` → `@sync-guardian/backend`
*   `apps/mobile` → `@sync-guardian/mobile`
*   `packages/shared` → `@sync-guardian/shared`
