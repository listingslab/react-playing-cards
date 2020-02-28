## Iconduit

[Iconduit](./) | [Work](../) | [Home](../../..)

Iconduit is a clever JavaScript utility developers can use to easily manage complex PWA web asset manifests in one or multiple projects.

### Install & Use

- Clone & install Iconduit with dependendies

```bash
cd <working-dir>
git clone git@github.com:listingslab-software/iconduit.git
cd iconduit
yarn
```

- Create a new project using a url friendly naming convention

```bash
 cp -rf ./projects/new-project ./projects/our-thing
```

- Prepare inputs
  - [Using Sketch](./docs/how-to/Sketch.md)
  - [Using Gimp](./docs/how-to/Gimp.md)
  - Using Illustrator (by Stevo?)
- Run iconduit

```bash
# Change to your own iconduit root directory
cd ~/Desktop/Node/iconduit/iconduit
./bin/iconduit ./projects/our-thing
```

### Glossary

- **project**
  The namespace of your iconduit project
- **inputs**
  A collection of files associated with a project which iconduit uses to create output
- **output**
  A directory of assets ready to deploy

#### Smallprint

See the [license] and [attribution] documents for license information.
[attribution]: ATTRIBUTION.md
[license]: LICENSE
