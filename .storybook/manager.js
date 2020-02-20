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
        brandTitle: `React Playing Cards`,
        brandUrl: 'https://react-playing-cards.com',
        // brandImage: 'https://firebasestorage.googleapis.com/v0/b/listingslab-cards.appspot.com/o/brandImage.png?alt=media&token=29a0dbfb-cb74-46d9-b980-95f854b95595',
        colorPrimary: '#2a9ec5',
        colorSecondary: '#ddc73f',
        base: 'dark',
        appBg: '#2a9ec5',
        appContentBg: '#e0e0e0',
        appBorderColor: '#aaaaaa',
        barBg: '#ddc73f',
        fontBase: '"Open Sans", sans-serif',
        fontCode: 'monospace',
        textColor: 'white',
        textInverseColor: 'rgba(255,255,255,0.9)',
        barTextColor: '#2a9ec5',
        barSelectedColor: '#2a9ec5',
        inputBg: 'white',
        inputBorder: 'silver',
        inputTextColor: 'black',
        inputBorderRadius: 4,
        gridCellSize: 12,
        appBorderRadius: 0,
    })
})