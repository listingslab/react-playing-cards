## NPM scopes

[npmjs.com](https://docs.npmjs.com/about-scopes)

When you sign up for an npm user account or create an Org, you are granted a scope that matches your user or Org name. You can use this scope as a namespace for related packages.

A scope allows you to create a package with the same name as a package created by another user or Org without conflict.

When listed as a dependent in a package.json file, scoped packages are preceded by their scope name. The scope name is everything between the @ and the slash:

> gotcha: Scoped packages are private by default; you must pass a command-line flag when publishing to make them public.
