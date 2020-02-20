import { addParameters } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
// console.log(INITIAL_VIEWPORTS)

addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      dumbfone: {
        name: "Dumbfone",
        styles: {
          width: "738px",
          height: "414px"
        }
      }
    },
    defaultViewport: "dumbfone"
  }
});
