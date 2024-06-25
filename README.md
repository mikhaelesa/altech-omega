# Altech Omega Technical Test

This repository contains two tasks structured within a monorepo. The tasks are located in the `apps/test-1` and `apps/test-2` directories. Each task is designed to test different technical skills.

## Installation

Before running the tasks, you need to install the dependencies. From the root directory, run:

```sh
npm install
```

This will install all the required dependencies for both tasks.

## Task 1: Algorithm Challenges

The first task involves creating algorithms for three specific problems:

1. **Fish, Bash, Fish Bash**: Print "fish" if a number is divisible by 3, "bash" if divisible by 5, and "fish bash" if divisible by 15.
2. **Sort**: Implement functions to sort an array of numbers in both ascending and descending order.
3. **Palindrome**: Create a function that returns `true` if a given string is a palindrome, and `false` otherwise.

### Implementation

- The solutions are written in TypeScript.
- Jest is used for testing.

### Running Task 1

To run the tests for Task 1, use the following command from the root directory:

```sh
$ npm run test:test-1
```

To build the project, use:

```sh
npm run build:test-1
```

After building the project, you can create an index.js file in the root directory and import the functions from the build output folder (dist).

## Task 2: Company Profile Slicing

The second task involves creating a company profile webpage with four sections: Hero, About, Pricing, and Contact. The page is designed to showcase an ERP product.

### Implementation

- **Next.js**: Used for its easy routing setup and optimization features.
- **SCSS**: Used for styling due to its powerful features and reusability.
- **clsx**: A utility library for parsing classNames.

### Running Task 2

To run the project in development mode, use:

```sh
npm run dev:test-2
```

To build and run the project in production mode (recommended), use:

```sh
npm run build:test-2
npm run start:test-2
```

After starting the project, open localhost:3000 in your browser. If port 3000 is occupied, the project might run on another port or the process might be aborted.
