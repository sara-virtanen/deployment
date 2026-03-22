# **Exercise 8 – Deployment**

**Author:** Sara Virtanen  
**Course:** AT00BY10-3012 Ohjelmistojen ylläpito ja testaus

[![Coverage Status](https://coveralls.io/repos/github/sara-virtanen/deployment/badge.svg)](https://coveralls.io/github/sara-virtanen/deployment?branch=main)

# 1. Introduction and approach

The goal of this task was to implement unit tests for a provided JavaScript utility library, achieve at least 60% test coverage, set up a working GitHub Actions pipeline, and report coverage results via Coveralls. The library contains 43 source files. The `.internal` directory was excluded from testing per the assignment instructions.

## Approach

I started by mapping the library's dependencies using grep to identify which files imported from other source files. I prioritized testing foundational modules first, as testing these provided cascade coverage for files that depend on them.

Once foundational files were covered, I read the remaining source files visually to identify obvious bugs before deciding which ones to test. Several bugs were spotted this way before writing a single test.

Tests were written using Vitest. Coverage was reported via GitHub Actions and Coveralls only, since local coverage reporting could not be made to work on Windows.

## Coverage issues encountered locally

I attempted to get local coverage working through several approaches:

- Mocha + c8 produced 0% coverage

- Mocha + NYC (Istanbul) – same result, 0% coverage regardless of configuration

- Switching to Vitest + `@vitest/coverage-v8` still 0% locally, traced to a known incompatibility between V8 coverage and ES modules on Windows with spaces and special characters in the file path

- Vitest + `@vitest/coverage-istanbul` crashed with a path encoding error caused by Finnish characters in the folder path

- Moving the project to a path without spaces or special
 characters resolved the Istanbul crash but coverage remained 0%

Coverage was ultimately confirmed to work correctly in GitHub Actions on Ubuntu, but it was extremely annoying to not have coverage available locally in the author's Windows development environment.

# 2. Testing environment and configuration

**Local environment**

- Node.js: v22.19.0
- npm: 10.9.3
- Test runner: Vitest 2.1.9

Tests were run locally during development to verify correctness before pushing to GitHub.

**CI environment**

- GitHub Actions, Ubuntu 24.04.3 LTS
- Node.js: v22.22.1
- npm: 10.9.4
- Test runner: Vitest 2.1.9

**Coverage reporting**

- Coveralls – linked to GitHub repository via `coverallsapp/github-action@v2`

**Key configuration files**

- `vitest.config.js` – configures coverage provider, include/exclude patterns, lcov reporter, and `reportOnFailure: true` to ensure coverage is written even when tests fail
- `.github/workflows/ci.yml` – runs on push to main, installs dependencies, runs coverage, uploads lcov report to Coveralls

# 3. CI pipeline and Coveralls

## GitHub Actions

The pipeline is configured in `.github/workflows/ci.yml` and triggers on every push to the `main` branch. It runs on Ubuntu 24.04 and performs the following steps:

1. Check out the repository
2. Set up Node.js v22
3. Install dependencies with `npm install`
4. Run tests with coverage using `npm run coverage`
5. Upload the generated `coverage/lcov.info` report to Coveralls

The `continue-on-error: true` flag is set on the coverage step, ensuring that the Coveralls upload runs even when tests fail due to known bugs in the library.  

**Screenshots of GitHub Actions workflow and runs**  

![GitHub Actions Workflow File](https://github.com/user-attachments/assets/68b8d1d9-5c8a-4d5f-a4f5-2598c5561e8c)  

![GitHub Actions Workflow Run](https://github.com/user-attachments/assets/c703813b-efd1-47df-a0f8-832ddbbcbc8b)  

![GitHub Actions Workflow Runs](https://github.com/user-attachments/assets/b9ff98cb-2b3a-4541-b6e5-f8bf8d9203d2)  

**Screenshots of GitHub Actions test results**  

![GitHub Actions Test Results](https://github.com/user-attachments/assets/d4e0471b-98c0-4628-9739-d1d1183ffd40)  

![GitHub Actions Test Results](https://github.com/user-attachments/assets/9b7efd7f-5a2b-4095-be86-d47c8464c90a)  

![GitHub Actions Test Results](https://github.com/user-attachments/assets/65a2b336-8c7d-43e4-911a-0c4b4811958e)  

## Coveralls

The repository is linked to Coveralls via the `coverallsapp/github-action@v2` action using the `GITHUB_TOKEN` secret, which is provided automatically by GitHub Actions.

A Coveralls badge has been added to the repository README, displaying the current coverage percentage.

# 4. Files tested and rationale

## Testing strategy

I started by mapping the dependency graph of the library to identify which source files depended on other source files. This was done by running the following command in the project root:
```bash
grep -n "require\|import" src/*.js
```

This produced a list of all import statements across the library, for example:
```
src/camelCase.js:1:import upperFirst from './upperFirst.js'
src/camelCase.js:2:import words from './words.js'
src/camelCase.js:3:import toString from './toString.js'
src/chunk.js:1:import slice from './slice.js'
src/chunk.js:2:import toInteger from './toInteger.js'
src/toFinite.js:1:import toNumber from './toNumber.js'
src/toInteger.js:1:import toFinite from './toFinite.js'
```

This revealed dependency chains such as `toNumber → toFinite → toInteger → chunk`, meaning that testing `toNumber` provided foundational coverage for all other files in the chain. I prioritized testing these foundational modules first.

I then read all remaining source files visually and selected additional files to test based on identifying suspected bugs.

## Files tested

| File | Reason for testing |
|------|--------------------|
| `camelCase.js` | Depends on tested foundations |
| `capitalize.js` | Depends on tested foundations |
| `castArray.js` | Suspected bug: no argument handling |
| `chunk.js` | Suspected bug: off-by-one in result index |
| `clamp.js` | Suspected bug: inverted comparison operators |
| `compact.js` | Suspected bug: off-by-one in result index |
| `countBy.js` | Suspected bug: incorrect initial count value |
| `defaultTo.js` | Suspected bug: missing NaN handling |
| `defaultToAny.js` | Confirmed cascade from `defaultTo.js` bug |
| `difference.js` | Depends on tested foundations |
| `divide.js` | Suspected bug: wrong variable in division operation |
| `drop.js` | Depends on tested foundations |
| `endsWith.js` | Depends on tested foundations |
| `filter.js` | Suspected bug: incorrect result initialisation |
| `isArguments.js` | Depends on tested foundations |
| `isArrayLike.js` | Foundational – depended on by multiple files |
| `isArrayLikeObject.js` | Depends on tested foundations |
| `isBoolean.js` | Depends on tested foundations |
| `isDate.js` | Depends on tested foundations |
| `isEmpty.js` | Depends on tested foundations |
| `isLength.js` | Foundational – depended on by multiple files |
| `isObject.js` | Foundational – depended on by multiple files |
| `isObjectLike.js` | Foundational – depended on by multiple files |
| `isSymbol.js` | Foundational – depended on by multiple files |
| `toFinite.js` | Foundational – depended on by multiple files |
| `toInteger.js` | Foundational – depended on by multiple files |
| `toNumber.js` | Foundational – depended on by multiple files |
| `toString.js` | Foundational – depended on by multiple files |
| `upperFirst.js` | Foundational – depended on by multiple files |
| `words.js` | Depends on tested foundations |

## Files not tested

| File | Reason for exclusion |
|------|----------------------|
| `add.js` | Delegates entirely to `.internal` |
| `at.js` | Delegates entirely to `.internal` |
| `ceil.js` | Delegates entirely to `.internal` |
| `eq.js` | Visually inspected, no bugs found |
| `every.js` | Visually inspected, no bugs found |
| `get.js` | Delegates entirely to `.internal` |
| `isBuffer.js` | Indirectly covered through `isEmpty` tests |
| `isTypedArray.js` | Indirectly covered through `isEmpty` tests |
| `keys.js` | Visually inspected, no bugs found |
| `map.js` | Visually inspected, no bugs found |
| `memoize.js` | Visually inspected, no bugs found |
| `reduce.js` | Delegates primarily to `.internal` |
| `slice.js` | Indirectly covered through `chunk` and `drop` tests |

# 5. Test implementation

Tests were written using Vitest, with assertions using the `expect` syntax. Each source file has its own dedicated test file in the `test/` directory, named after the file it tests.

## Test style

Tests follow a consistent structure: one `describe` block per file, with individual `it` blocks for each case. Test names are written as plain English sentences describing the expected behaviour, for example:
```javascript
it('should return empty string for null', () => {
  expect(toString(null)).toBe('')
})
```

## Running tests

All tests can be run together with:
```bash
npm test
```

Individual test files can be run in isolation with:
```bash
npx vitest run test/<filename>.test.js
```

Running tests individually was the preferred approach during development, allowing each new test file to be verified before moving on to the next.

## Test rationale

Tests were written based on the documented behaviour described in each function's JSDoc comment, not based on what the code actually does. Where the code deviated from the documentation, the test was written to reflect the documented expectation, causing it to fail and exposing the bug.

Each test file covers:
- The primary use cases shown in the JSDoc examples
- Edge cases such as null, undefined, empty arrays, and NaN inputs
- Both truthy and falsy branches where applicable

## Bugs found through testing

Several bugs were identified visually before writing tests. In these cases, tests were written specifically to confirm the suspected bug. In other cases, bugs were discovered when tests failed against code that appeared correct on first reading.

# 6. Bugs found

11 bugs were identified and reported in the GitHub issue tracker. All bugs were confirmed by failing unit tests. No bugs were fixed in the library – my approach was to observe and document incorrect behaviour, not to correct it.

| # | File | Description |
|---|------|-------------|
| 1 | `toString.js` | Returns `'null'` and `'undefined'` instead of empty string for null and undefined inputs |
| 2 | `camelCase.js` | Returns result with a leading space due to incorrect initial accumulator value `' '` instead of `''` |
| 3 | `chunk.js` | `resIndex` is never incremented, causing every chunk to overwrite the first element |
| 4 | `clamp.js` | Comparison operators are inverted, always returning the lower bound |
| 5 | `compact.js` | `resIndex` initialised at `-1` instead of `0`, silently losing the first truthy element |
| 6 | `filter.js` | Result initialised as `[[]]` instead of `[]`, always returning an unwanted empty array element when no elements pass the predicate |
| 7 | `defaultTo.js` | Missing NaN check – only handles `null` and `undefined` |
| 8 | `defaultToAny.js` | Cascading bug from `defaultTo.js`  (sub-issue) – NaN is treated as a valid default value |
| 9 | `divide.js` | Divides `divisor` by itself instead of `dividend` by `divisor`, always returning `1` |
| 10 | `castArray.js` | Returns `[undefined]` instead of `[]` when called with no arguments |
| 11 | `countBy.js` | Initialises count at `0` instead of `1`, every count is one less than expected |

All issues are documented in the [repository's issue tracker](https://github.com/sara-virtanen/deployment/issues) with root cause analysis, expected vs actual behaviour, and the number of failing unit tests confirming each bug.  

**Screenshot of GitHub Issue Tracker**

![Issue Tracker](https://github.com/user-attachments/assets/bb047e2d-7b2f-44fb-883b-f671fb5bb2fd)

# 7. Coverage results

Coverage reports are publicly accessible at [Coveralls](https://coveralls.io/github/sara-virtanen/deployment?branch=main).

Final coverage as reported by Coveralls:

| Metric | Result |
|--------|--------|
| Line coverage | 82.62% (1193/1444 lines) |
| Branch coverage | 86.41% (159/184 branches) |
| Hits per line | 2.45 |

The 60% minimum requirement was exceeded comfortably. Coverage was measured across all 43 source files in `src/`, excluding the `.internal` directory.

The remaining uncovered lines are concentrated in the 13 untested files listed in section 4. Of these, several delegate their core logic entirely to `.internal` files, meaning their behaviour cannot be fully verified through black-box testing alone. The `.internal` directory itself is not included in coverage metrics and represents an unknown quantity, bugs may exist there that the test suite cannot detect.

# 8. Production readiness assessment

**Verdict: The library is not production ready.**

Testing uncovered 11 confirmed bugs across 30 tested files. Several affect core, commonly used functions in ways that would cause silent data corruption in production: `divide.js` always returns `1`, `clamp.js` always returns the lower bound, and `chunk.js`, `compact.js`, and `filter.js` all produce incorrect array output due to initialisation errors.

The `defaultTo.js` bug cascades into `defaultToAny.js`, demonstrating that bugs in foundational functions propagate upward through the dependency chain.

The 13 untested files were reviewed visually and appeared correct, but have not been verified through testing. The `.internal` directory was excluded entirely from testing per the assignment instructions, and may contain additional bugs.

The library requires thorough bug fixing and re-verification before it can be considered suitable for production deployment.

_____

Last edited 2026-03-22
