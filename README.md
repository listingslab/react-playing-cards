
## React Playing Cards

[github.io docs](https://listingslab.github.io/react-playing-cards/)

A framework for creating responsive animated SVG graphics in react implemented as a deck of playing cards. It has no need for jQuery or bitmap graphics. It's lightweight and easily deployable within any JS project

- [Animated with Greensock](./animation/README.md)
- Newfangled SVG graphic system; no bitmaps
- Material UI desgin system

#### Install & Run Demo

```bash
git clone https://github.com/listingslab/react-playing-cards.git
cd react-playing-cards
yarn && yarn start
```

#### Add to an existing project

- Copy `/Cards` directory and paste it anywhere you need in your app
- Install the Greensock animation package

```yarn add gsap```

### Implement

- Copy `/Cards` directory from [react-playing-cards](https://github.com/listingslab/react-playing-cards) 

- Import & Use in an existing component

```bash
import { CardSingle } from '<path>/Cards'

<CardSingle
    id={`S_A`}
    card={ {
        suit: `S`, 
        rank: `A`, 
        backColor: `#1A1919`,
        color: item.suit === 'D' || item.suit === 'H' ? `#D33E43` : `#1A1919`
    } }
/>
&trade; should __just work__ 
