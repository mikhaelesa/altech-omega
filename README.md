# Altech Omega React JS Technical Test

This monorepo contains the solutions for the two tasks assigned for the technical test. Each task is implemented as a separate app within the repository.

## Table of Contents

- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Task 1: Fishbash, Sort, and isPalindrome](#task-1-fishbash-sort-and-isPalindrome)
  - [Description](#description)
  - [Usage](#usage)
  - [Tests](#tests)
- [Task 2: Slicing](#task-2-slicing)
  - [Description](#description)
  - [Usage](#usage)
  - [Tests](#tests)

## Project Structure

```
altech-omega/
├── apps/
│ ├── test-1/
│ │ ├── src/
│ │ │ ├── fishBash.ts
│ │ │ ├── sort.ts
│ │ │ └── palindrome.ts
│ │ ├── __tests__/
│ │ │ ├── fishBash.spec.ts
│ │ │ ├── sort.spec.ts
│ │ │ └── isPalindrome.spec.ts
│ │ ├── jest.config.ts
│ │ ├── package.json
│ │ └── README.md
│ ├── test-2/
│ │ ├── src/
│ │ │ └── slicing.js
│ │ ├── tests/
│ │ │ └── slicing.test.js
│ │ ├── package.json
│ │ └── README.md
├── .eslintignore
├── .eslintrc.json
├── jest.config.ts
├── package-lock.json
├── package.json
├── tsconfig.base.json
└── README.md
```

## Setup Instructions

To get started with this monorepo, follow these steps:

1. **Clone the Repository:**

```bash
$ git clone https://github.com/mikhaelesa/altech-omega.git
$ cd altech-omega
```

2. **Install Dependencies:**

Install the root dependencies and the dependencies for each package:

```
$ npm install
# or
$ yarn
# or
$ pnpm install
```

## Task 1: Fishbash, Sort, and Palindrome

### Description

This task involves three different functionalities:

1. `fishBash`: Logs "fish", "bash", or "fish bash" depending on divisibility.
2. `sort`: Sorts an array of numbers in ascending and descending order.
3. `isPalindrome`: Checks if a given string is a palindrome.

To use these functions:

1. **Build the Project**:

```bash
$ npm run build:test-1
```

2. **Use the Functions**

```js
import { fishBash } from "./apps/test-1/dist/fishBash.js";
import { sortAsc, sortDesc } from "./apps/test-1/dist/sort.js";
import { isPalindrome } from "./apps/test-1/dist/isPalindrome.js";

// Example usage
fishBash(15); // Outputs: "1", "2", "fish", "4", "bash", "fish", "7", "8", "fish", "bash", "11", "fish", "13", "14", "fish bash"
console.log(sortAsc([5, 3, 1, 4, 2])); // Output: [1, 2, 3, 4, 5]
console.log(sortDesc([5, 3, 1, 4, 2])); // Output: [1, 2, 3, 4, 5]
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
```

### Tests

To run the tests for Task 1:

```bash
$ npm run test:test-1
```
