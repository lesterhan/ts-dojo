# ts-dojo

A TypeScript learning dojo. Problems progress from basic syntax to production-ready patterns, with spaced repetition built into the sequence — key concepts reappear ~8–12 problems after their first introduction, from a harder angle.

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

## Spaced repetition design

55 problems total, in three phases:

- **Problems 01–44:** 30 concept introductions + 15 revisits woven in. Each revisit appears 8–12 problems after its first exposure, from a new angle. Marked with `↩` in the table.
- **Problems 45–55:** Synthesis — no new concepts, but each problem combines 3–4 earlier ones. These are the hardest and closest to real interview/production problems.

Don't skip ahead. The placement of revisits is deliberate.

---

## Problem list

| # | Name | Concept | What it teaches |
|---|------|---------|-----------------|
| 01 | `two-sum` | function-signatures | Typed params, return types, tuple `[number, number]` |
| 02 | `reverse-string` | string-methods | `.split`, `.reverse`, `.join`, string indexing |
| 03 | `fizz-buzz` | union-types | Literal union return `"Fizz" \| "Buzz" \| "FizzBuzz" \| number` |
| 04 | `factorial` | recursion | Recursive functions, `typeof` narrowing |
| 05 | `palindrome` | optional-params | Optional params `?`, default values |
| 06 | `count-words` | record | `Record<K, V>`, building a frequency map |
| 07 | `merge-objects` | interface | `interface`, structural typing, spread |
| 08 | `find-user` | optional-fields | Optional fields `?`, `undefined` returns |
| 09 | `group-by` | generics | Generics intro: `<T>`, generic functions |
| 10 | `apply-discount` | ↩ function-signatures | Higher-order functions, typing a callback `(n: number) => number` |
| 11 | `deep-clone` | unknown-guards | `unknown`, type guards with `typeof` and `instanceof` |
| 12 | `flatten` | array-methods | `reduce`, `flat`, generic constraints `T extends unknown[]` |
| 13 | `traffic-light` | ↩ union-types | Union as state machine, exhaustive `switch` narrowing |
| 14 | `chunk` | rest-spread | Rest/spread with generics, typed tuple return |
| 15 | `zip` | multi-type-params | Multiple type params `<A, B>`, paired return type |
| 16 | `shape-area` | ↩ interface | Interface with methods, `interface extends`, polymorphic dispatch |
| 17 | `dedupe` | set | `Set<T>`, generic identity, referential vs structural equality |
| 18 | `sort-by` | function-types | Function types as values, `keyof`, typed comparators |
| 19 | `typed-factory` | ↩ generics | Generic factory functions, typed constructors |
| 20 | `assert-type` | ↩ unknown-guards | Assertion functions `asserts x is T`, narrowing via throw |
| 21 | `pick` | mapped-types | `Pick<T, K>`, `keyof`, intro to mapped types |
| 22 | `omit` | conditional-types | `Omit<T, K>`, `Exclude<T, U>`, conditional types |
| 23 | `interleave` | ↩ rest-spread | Interleave two arrays, rest in destructuring |
| 24 | `readonly-deep` | recursive-mapped | `Readonly<T>`, recursive mapped types, `readonly` modifier |
| 25 | `partition` | ↩ array-methods | Split array by predicate using `reduce`, typed tuple return |
| 26 | `nullable-chain` | nonnullable | `NonNullable<T>`, optional chaining `?.`, nullish coalescing `??` |
| 27 | `unique-by` | ↩ set | Dedup with a key selector, `Map` as a unique index |
| 28 | `result-type` | discriminated-unions | `{ ok: true; value: T } \| { ok: false; error: E }` |
| 29 | `required-keys` | ↩ mapped-types | `Required<T>`, the `-?` modifier, reversing `Partial` |
| 30 | `stack` | generic-classes | Generic classes, `class Stack<T>` |
| 31 | `maybe` | generic-aliases | Generic type aliases, method chaining on a wrapper type |
| 32 | `pipeline` | function-composition | Function composition with generics, variadic type inference |
| 33 | `event-emitter` | overloads | Method overloads, `Record` + generics for typed event maps |
| 34 | `typed-fetch` | async-await | `Promise<T>`, async/await, typed error handling |
| 35 | `mutable-deep` | ↩ recursive-mapped | Remove `readonly` recursively, the `-readonly` modifier |
| 36 | `action-reducer` | ↩ discriminated-unions | Redux-style reducer, action union, exhaustive `switch` |
| 37 | `infer-return` | infer | `ReturnType<T>`, the `infer` keyword |
| 38 | `deep-partial` | recursive-conditional | Recursive conditional types, `DeepPartial<T>` |
| 39 | `tap` | ↩ function-composition | `tap` utility — run a side effect inside a pipeline without breaking types |
| 40 | `string-template-types` | template-literals | Template literal types, `\`on${Capitalize<string>}\`` |
| 41 | `overloaded-format` | ↩ overloads | Overloads for different input types, single implementation signature |
| 42 | `builder-pattern` | builder | Fluent builder API, accumulating type state |
| 43 | `retry` | ↩ async-await | Retry logic with typed error classes, `async` with loops |
| 44 | `branded-types` | branded | Nominal typing via brands, type-safe IDs |
| 45 | `parameters-type` | ↩ infer | `Parameters<T>`, `Awaited<T>`, extracting types from functions |

---

### Synthesis problems (46–55)

No new concepts — combine 3–4 earlier ones. These are the hardest problems and the closest to real-world TypeScript.

| # | Name | Concepts combined | What it teaches |
|---|------|-------------------|-----------------|
| 46 | `parse-config` | generics + optional-fields + discriminated-unions | Parse an `unknown` config blob into a typed, validated structure |
| 47 | `event-bus` | generic-classes + overloads + template-literals | Typed pub/sub with `on${Capitalize<K>}` handler names |
| 48 | `state-machine` | discriminated-unions + mapped-types + conditional-types | Type-safe finite state machine — invalid transitions rejected at compile time |
| 49 | `api-client` | async-await + branded + infer | Typed HTTP client — branded resource IDs, inferred response shapes |
| 50 | `validator` | unknown-guards + recursive-conditional + function-types | Composable runtime validators that narrow `unknown` to `T` |
| 51 | `query-builder` | builder + template-literals + branded | Fluent SQL-like query builder with branded table/column names |
| 52 | `typed-router` | template-literals + discriminated-unions + generics | Type-safe URL routing — extract params from path strings |
| 53 | `di-container` | generic-classes + infer + overloads | Dependency injection container that resolves types at compile time |
| 54 | `stream` | generic-aliases + function-composition + async-await | Lazy async data stream with typed `map`, `filter`, `collect` |
| 55 | `mini-orm` | branded + mapped-types + recursive-conditional | Typed entity definitions — column types, relations, required vs optional fields |

---

## Adding new problems

1. Pick the next number in sequence
2. Name it for what it teaches, not just what it does
3. One concept per problem (or 3–4 for synthesis problems)
4. Write the test file before the stub so intent is clear
5. The stub should `throw new Error("not implemented")` so tests start red

## Conventions

- Imports use `.js` extension (ESM): `import { fn } from "./solution.js"`
- `noUncheckedIndexedAccess` is enabled — array access returns `T | undefined`
- Strict mode is on — no implicit `any`, no loose nulls
- Prefer `type` for aliases, `interface` for object shapes (until the mapped-types problems where the distinction matters)
