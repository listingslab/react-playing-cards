import { addParameters } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
// console.log(INITIAL_VIEWPORTS)

addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      dumbfoneL: {
        name: "Dumbfone",
        styles: {
          width: "738px",
          height: "414px"
        },
      },
      dumbfoneP: {
        name: "Dumbfone",
        styles: {
          width: "414px",
          height: "738px"
        },
      },
    },
    defaultViewport: "dumbfoneL"
  }
});
