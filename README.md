This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run devLOL
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Pre-Push Checks

When you push code, the following checks are triggered:

- **ESLint** – lints your code to catch common errors
- **Prettier** – checks for consistent code formatting

If issues are found, your push will be blocked with an error message.

Fixing Issues Before Pushing:

You can auto-fix most issues with:

```bash
# Using Yarn
yarn run lint:fix
yarn run prettier:fix

# Using npm
npm run lint:fix
npm run prettier:fix
```

If you absolutely need to bypass the checks (only do if necessary), you can skip the pre-push hook like this:

```bash
git push --no-verify
```

This project uses [Husky](https://typicode.github.io/husky) to automatically run code quality checks before any `git push`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
