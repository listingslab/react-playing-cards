import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
console.log(INITIAL_VIEWPORTS)
addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS,
        defaultViewport: 'iphone8p',
    },
});