import { addParameters } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

addParameters({
  viewport: {
    viewports: {
      dumbfoneL: {
        name: "Dumbfone Landscape",
        styles: {
          width: "738px",
          height: "414px"
        },
      },
      dumbfoneP: {
        name: "Dumbfone Potrait",
        styles: {
          width: "414px",
          height: "738px"
        },
      },
    },
    ...INITIAL_VIEWPORTS,
    defaultViewport: "dumbfoneL"
  }
});
