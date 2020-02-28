## Redux

Redux came out in the summer of 2015, at the tail end of the "Flux Wars". Within a year, it had swept aside all other Flux implementations, and became the de-facto standard state management tool for React applications.

Redux was deliberately designed to be extensible, and it succeeded brilliantly. The design led to a thriving ecosystem of addons and related libraries, ranging from action/reducer generation utilities to store persistence to dozens of immutable update utilities to middleware for manipulating dispatched actions. In particular, since Redux deliberately did not include a built-in solution for managing async behavior and side effects, dozens of side effect addons appeared.

### Redux Toolkit

Looking back at the original ideas and goals that came up in those early discussion issues, I think we've pretty much nailed a majority of the desired capabilities.

RTK is:

an official opinionated package, with our recommended best practices built in
that drastically simplifies Redux apps and reduces "boilerplate" for the most common use cases
while still remaining "visibly Redux" in the process
that can all be added to a new project on day 1, or used for incremental migration of an existing project
is useful for both new learners and experienced developers
and provides solid TypeScript support without requiring a painful amount of type declarations
I'd say we've hit the sweet spot with that list!


[source blog.isquaredsoftware.com](https://blog.isquaredsoftware.com/2019/10/redux-starter-kit-1.0/)