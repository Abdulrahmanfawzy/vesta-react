# Vesta

Production-ready React + TypeScript scaffold using Feature-Based Architecture.

## Stack

React 19 · TypeScript · Vite · React Router DOM · Redux Toolkit · Axios · Tailwind CSS v4 · shadcn/ui · React Hook Form · Zod · Sonner · xlsx

## Scripts

```bash
npm install
npm run dev        # start dev server
npm run build      # typecheck + production build
npm run preview    # preview production build
npm run lint       # eslint
npm run typecheck  # tsc -b
```

## Architecture

```
src/
├── app/          # initialization, providers, app config
├── routes/       # route definitions and guards
├── features/     # business features (auth, users, dashboard)
│   └── <feature>/
│       ├── components/  pages/  hooks/  services/
│       ├── schemas/     types/  store/  constants/  utils/
├── components/   # ui/ (shadcn), shared/, forms/, layout/
├── lib/          # axios instance, api error handling, cn util
├── store/        # global Redux store configuration
├── hooks/        # global reusable hooks
├── services/     # cross-feature API services only
├── types/        # global shared types
├── schemas/      # global shared zod schemas
├── constants/    # app-wide constants
├── utils/        # generic utilities (format, file, excel)
├── assets/       # static assets
└── styles/       # global styles / tailwind entry
```

### Rules

- A feature owns its components, hooks, services, schemas, types, and state.
- Promote code to `src/components`, `src/hooks`, or `src/services` only when genuinely shared across features.
- Keep component-local state local; add a Redux slice only for genuinely global state.
- Validate form data with Zod schemas colocated with the feature that owns them.
