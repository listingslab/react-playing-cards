import { addons } from '@storybook/addons';
// import { themes } from '@storybook/theming';
import { theme } from './theme';
addons.setConfig({
    isFullscreen: false,
    showNav: false,
    showPanel: false,
    panelPosition: 'right',
    sidebarAnimations: true,
    enableShortcuts: true,
    isToolshown: true,
    theme,
    selectedPanel: undefined,
});