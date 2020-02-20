import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
// console.log(INITIAL_VIEWPORTS)

const newViewports = {
    landscape: {
        name: '800x600',
        styles: {
            width: '800px',
            height: '600px',
        },
    },
};

addParameters({
    viewport: {
        viewports: {
            ...INITIAL_VIEWPORTS,
            ...newViewports,
        },
        defaultViewport: 'iphone8p',
    },
});