
# ****Walter Personal Portfolio****

## Getting Started

Run your app in the development mode.

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Todo
- [ ] Responsive design - mobile
- [ ] Animation
- [ ] 3D effects
- [ ] E2E Testing
- [ ] Dark Model
- [ ] Performance statistics & optimization

- [ ] Dynamic content from server-side(Static Props/Server Props)
- [ ] Mailer, 3rd party auth integration

- [ ] Prisma data-proxy
- [ ] Edge function

## Environment Variables

Ensure the `.env.local` file has required environment variables:

```
DATABASE_URL=postgresql://<YOUR_DB_USERNAME>@localhost:5432/interview-run
```

Ensure the `.env.test.local` file has required environment variables:

```
DATABASE_URL=postgresql://<YOUR_DB_USERNAME>@localhost:5432/interview-run_test
```

## Tests

Runs your tests using Jest.

```
yarn test
```

Blitz comes with a test setup using [Vitest](https://vitest.dev/) and [react-testing-library](https://testing-library.com/).

## Commands

Run npm scripts with:

```
  dev       Start a development server
  build     Create a production build
  start     Start a production server
  migrate   Apply schema changes into current DB
  db-push   [!]Push DB changes into current DATABASE
  studio    run prisma studio check db lines
```
see also blitz cmds:
```
  export    Export this web app as a static application
  prisma    Run prisma commands
  generate  Generate new files for your Blitz project(no data-proxy)
  console   Run the Blitz console REPL
  help      Display help for blitz
  test      Run project tests
```
You can read more about it on the [CLI Overview](https://blitzjs.com/docs/cli-overview) documentation.

## What's included?

Here is the starting structure of your app.

```
interview-run
├── src/
│   ├── api/
│   ├── auth/
│   │   ├── components/
│   │   │   ├── LoginForm.tsx
│   │   │   └── SignupForm.tsx
│   │   ├── mutations/
│   │   │   ├── changePassword.ts
│   │   │   ├── forgotPassword.test.ts
│   │   │   ├── forgotPassword.ts
│   │   │   ├── login.ts
│   │   │   ├── logout.ts
│   │   │   ├── resetPassword.test.ts
│   │   │   ├── resetPassword.ts
│   │   │   └── signup.ts
│   │   └── validations.ts
│   ├── core/
│   │   ├── components/
│   │   │   ├── components/
│   │   │   └── Index.tsx
│   │   └── Index.tsx
│   ├── pages/
│   │   ├── auth/
│   │   │   ├── forgot-password.tsx
│   │   │   ├── login.tsx
│   │   │   ├── reset-password.tsx
│   │   │   └── signup.tsx
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   ├── 404.tsx
│   │   ├── index.test.tsx
│   │   └── index.tsx
│   └── users/
│       ├── hooks/
│       │   └── useCurrentUser.ts
│       └── queries/
│           └── getCurrentUser.ts
├── db/
│   ├── migrations/
│   ├── index.ts
│   ├── schema.prisma
│   └── seeds.ts
├── integrations/
├── mailers/
│   └── forgotPasswordMailer.ts
├── public/
│   ├── favicon.ico
│   └── logo.png
├── test/
│   ├── setup.ts
│   └── utils.tsx
├── .eslintrc.js
├── babel.config.js
├── blitz.config.ts
├── vitest.config.ts
├── package.json
├── README.md
├── tsconfig.json
└── types.ts
```

These files are:

- The `src/` folder is a container for most of your project. This is where you’ll put any pages or API routes.
- `db/` is where your database configuration goes. If you’re writing models or checking migrations, this is where to go.
- `public/` is a folder where you will put any static assets. If you have images, files, or videos which you want to use in your app, this is where to put them.
- `integrations/` is a folder to put all third-party integrations like with Stripe, Sentry, etc.
- `test/` is a folder where you can put test utilities and integration tests.
- `package.json` contains information about your dependencies and devDependencies. If you’re using a tool like `npm` or `yarn`, you won’t have to worry about this much.
- `tsconfig.json` is our recommended setup for TypeScript.
- `.babel.config.js`, `.eslintrc.js`, `.env`, etc. ("dotfiles") are configuration files for various bits of JavaScript tooling.
- `blitz.config.ts` is for advanced custom configuration of Blitz. [Here you can learn how to use it](https://blitzjs.com/docs/blitz-config).
- `vitest.config.ts` contains config for Vitest tests. You can [customize it if needed](https://vitejs.dev/config/).

You can read more about it in the [File Structure](https://blitzjs.com/docs/file-structure) section of the documentation.
