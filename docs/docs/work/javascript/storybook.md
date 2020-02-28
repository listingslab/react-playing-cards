## Storybook

[JavaScript](./) | [Work](../) | [Home](../../..)

![Just like in the Matrix](https://firebasestorage.googleapis.com/v0/b/listingslab-storybook.appspot.com/o/png%2fstorybook_matrix_construct.png?alt=media&token=172b8689-20bf-4c45-b2f5-cb128969761d)

[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://storybook.js.org)

[Storybook](https://storybook.js.org) is what the cool kids are using as part of design systems. Trouble is; the cool kids are oftem morons, so it often gets used badly. Having seen it being more trouble than it was worth, I'm not evangelising. It's not going to change your life. But it is quite useful. And it looks cool. Which is important.

Storybook is the construct. Just like in the Matrix. It is an excellent piece of JavaScript software which keeps components comlpetely separate from their destination. This is good. Say a company has many products, they can create a set of UI components which look and function identically across all the companys' apps. This is used brilliantly by folk like Atlassian and Airbnb and in a really crap way by thousands of others. You know who you are.

Another approach is to use Storybook is as part of the development process. For us, Stories are the finest grain in our Agile GitHub workflow. Everything starts with a Story.

### The Bad

Like any environment where experimentation is encouraged, It's quite easy to leave storybook broken or get halfway
through some component and then move it into some other project or whatever. Storybook needs to be curated and always available to be useful.

### The Good

- Easy to knock up and share ideas quickly
- Stories can be connected to real services like auth etc
- Great for responsive development, letting you set custom viewport sizes

### The Even Better

Even betterer would be when a storybook repo could double as a GitHub package. Properly linted and CI'd, the package could be used across multiple projects while keeping the development and QA of UI components away from places that matter.
