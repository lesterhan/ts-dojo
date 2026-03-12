# ts-dojo

A TypeScript learning dojo. Problems progress incrementally from basic syntax to production-ready patterns and interview-level challenges. Each problem introduces one new concept.

## Goal

Build TypeScript proficiency through hands-on problem solving — starting from the very basics and working up to real-world patterns used in production codebases and technical interviews.

## Structure

```
src/problems/<NN-problem-name>/
  solution.ts       # exported function stub with JSDoc description
  solution.test.ts  # Vitest tests
```

## Commands

```
npm test              # run all tests once
npm run test:watch    # watch mode
npm run test:ui       # browser UI
```

## Problem progression

Each problem introduces one new concept. Don't skip ahead — the concepts build on each other.

### Stage 1 — Basic syntax & types
01. `two-sum` — function signatures, primitive types, arrays, tuples
02. `reverse-string` — string methods, return types
03. `fizz-buzz` — union types (`"Fizz" | "Buzz" | "FizzBuzz" | number`)
04. `factorial` — recursion, type narrowing with `typeof`
05. `palindrome` — optional parameters, default values

### Stage 2 — Objects & interfaces
06. `count-words` — `Record<K, V>`, object indexing
07. `merge-objects` — `interface`, structural typing, spread
08. `find-user` — `interface`, optional fields (`?`), `undefined` returns
09. `group-by` — generics intro: `<T>`, `Array<T>`
10. `deep-clone` — `unknown` type, type guards (`typeof`, `instanceof`)

### Stage 3 — Arrays & functional patterns
11. `flatten` — `Array` methods (`reduce`, `flat`), generic constraints
12. `chunk` — rest/spread with generics
13. `zip` — multiple type parameters `<A, B>`
14. `dedupe` — `Set`, generic identity functions
15. `sort-by` — function types, comparators, `keyof`

### Stage 4 — Type system features
16. `pick` — `Pick<T, K>`, `keyof`, mapped types intro
17. `omit` — `Omit<T, K>`, conditional mapped types
18. `readonly-deep` — recursive mapped types, `Readonly<T>`
19. `nullable-chain` — `NonNullable<T>`, optional chaining, nullish coalescing
20. `result-type` — discriminated unions (`{ ok: true, value } | { ok: false, error }`)

### Stage 5 — Generics & utility types
21. `stack` — generic classes
22. `maybe` — generic type aliases, chaining methods
23. `pipeline` — function composition with generics, variadic inference
24. `event-emitter` — `Record` + generics, method overloads
25. `typed-fetch` — `Promise<T>`, async/await, error handling patterns

### Stage 6 — Advanced type-level programming
26. `infer-return` — `ReturnType<T>`, `infer` keyword
27. `deep-partial` — recursive conditional types
28. `string-template-types` — template literal types
29. `builder-pattern` — fluent API with type accumulation
30. `branded-types` — nominal typing via brands, type-safe IDs

## Adding new problems

When adding a problem:
1. Pick the next number in sequence
2. Name it for what it teaches, not just what it does
3. One new concept per problem — keep the focus tight
4. Write the test file before the stub so the intent is clear
5. The stub should throw `new Error("not implemented")` so tests fail red initially

## Conventions

- Imports use `.js` extension (ESM): `import { fn } from "./solution.js"`
- `noUncheckedIndexedAccess` is enabled — array access returns `T | undefined`
- Strict mode is on — no implicit `any`, no loose nulls
- Prefer `type` for aliases, `interface` for object shapes (until Stage 4 where the distinction matters)
