import { addParameters } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

addParameters({
  viewport: {
    viewports: {
      dumbfoneL: {
        name: "Generic Dumbfone Landscape",
        styles: {
          width: "750px",
          height: "450px"
        },
      },
      dumbfoneP: {
        name: "Generic Dumbfone Potrait",
        styles: {
          width: "450px",
          height: "750px"
        },
      },
    },
    ...INITIAL_VIEWPORTS,
    defaultViewport: "dumbfoneL"
  }
});
