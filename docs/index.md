---
layout: default
---

## React Playing Cards

<div>
    <ul>
        <li><a href="docs/storybook">Storybook</a></li>
        <li><a href="docs/greensock">Greensock</a></li>
        <li><a href="docs/webclient-integration">Webclient integration</a></li>
    </ul>
</div>

### Implementation

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
```