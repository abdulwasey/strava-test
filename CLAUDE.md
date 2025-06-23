# Development Guide

## User Preferences

- **IMPORTANT**: Always search the web for simple solutions or available packages before implementing custom code
- Prefer importing and using existing functionality over creating custom implementations
- Look for established npm packages, React hooks, Next.js utilities, and third-party APIs
- Only create custom code when necessary or when existing solutions don't meet requirements
- Prioritize well-maintained, popular packages with good documentation
- Keep solutions simple and maintainable by leveraging community packages
- Don't create backup of files when refactoring or cleaning up the codebase. Rely on git for versioning.

## Critical Requirements

- MUST run `npm run lint` and `npm run type-check` after EVERY code modification
- All code changes must be formatted using prettier before being committed
- All code changes must pass type checking before being committed
- Follow Next.js App Router conventions and best practices

## Common Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Check for code style issues
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Auto-format all code with prettier

## Code Style Guidelines

- Use Prettier for formatting with tab indentation and single quotes
- Use TypeScript for type safety; avoid `any` types
- Use functional components with React hooks
- Use Next.js patterns for web applications
- Follow package-based architecture for modularity
- Use async/await for asynchronous code rather than promises
- Error handling: use try/catch blocks and propagate errors appropriately
- Tests should follow `*.test.ts` naming pattern and use Vitest

## Naming Conventions

- **Files**: Use kebab-case for all filenames (e.g., `user-profile.ts`)
- **Components**: Use PascalCase for React components and classes (e.g., `UserProfile`)
- **Variables**: Use camelCase for variables, functions, and methods (e.g., `userEmail`)
- **Boolean Variables and Functions**: Use prefixes like `is`, `has`, `can`, `should` for clarity:
  - For variables: `isEnabled`, `hasPermission` (not `status`)
  - For functions: `isTriggerRequiringCallsign()`, `hasActiveSubscription()` (not `requiresCallsign()` or `checkActive()`)
- **Function Naming**: Use verbs or verb phrases that clearly indicate purpose (e.g., `calculateTotalPrice()`, not `process()`)
- **Consistency**: Follow these conventions throughout the codebase

## Standard Workflow

1. First think through the problem, read the codebase for relevant files, and write a plan to todo.md.
2. The plan should have a list of todo items that you can check off as you complete them
3. Before you begin working, check in with me and I will verify the plan.
4. Then, begin working on the todo items, marking them as complete as you go.
5. Please every step of the way just give me a high level explanation of what changes you made
6. Make every task and code change you do as simple as possible. We want to avoid making any massive or complex changes. Every change should impact as little code as possible. Everything is about simplicity.
7. Finally, add a review section to the todo.md file with a summary of the changes you made and any other relevant information.
