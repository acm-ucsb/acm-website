# Creating a test file

1. Create a new file in `__tests__` with the extension `*.test.ts`.
2. Importing necessary testing functions

- `import '@testing-library/jest-dom'` for testing UI logic
- `import '@jest/globals'` for testing code logic

3. Write necessary tests
4. run `npm run test`

## Jest Documentation

- Jest documentation: https://jestjs.io/docs/getting-started
- Jest + Next.js documentation: https://nextjs.org/docs/app/building-your-application/testing/jest

## Environment variables

- Put all testing environment variables in `.env.test.local`
- Do not push API credentials to GitHub!
