import { create } from '@storybook/theming/create';
import { addons } from '@storybook/addons';
import pJSON from "../package.json";

console.log(`${pJSON.name} ${pJSON.version} (${process.env.REACT_APP_ENV})`);

addons.setConfig({
    isFullscreen: false,
    showNav: true,
    showPanel: false,
    panelPosition: 'right',
    sidebarAnimations: true,
    enableShortcuts: true,
    isToolshown: true,
    theme: create({
        brandTitle: `Playing Cards`,
        brandUrl: 'https://react-playing-cards.com',
        colorPrimary: '#ddc73f',
        colorSecondary: '#2a9ec5',
        base: 'dark',
        appBg: '#212121',
        appContentBg: '#f9f9f9',
        appBorderColor: '#f9f9f9',
        barBg: '#f9f9f9',
        fontBase: '"Open Sans", sans-serif',
        fontCode: 'monospace',
        textColor: 'white',
        textInverseColor: 'rgba(255,255,255,0.9)',
        barTextColor: '#2a9ec5',
        barSelectedColor: '#ddc73f',
        appBorderRadius: 0,
    })
})