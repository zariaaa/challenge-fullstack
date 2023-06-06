# Tracking Orders
Display tracking information to the user.

## Installation

1. Install the node_modules in the client and server folders:

```bash
cd server
npm install
```

```bash
cd client
npm install
```

2. Start the server:

```bash
cd server
npm run dev
```

2. Start React app:

```bash
cd client
npm start
```

## Testing
To start current existing tests run:
```bash
cd tests
npx playwright test
```

To create a new test with a simulator use:
```bash
cd tests
npx playwright codegen http:/localhost:3000/
```

## TBD

The app required unit-tests for the BE and FE.
