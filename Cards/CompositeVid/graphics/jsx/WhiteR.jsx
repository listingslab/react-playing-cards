import React from "react";
const WhiteR = props => {
    const { colors } = props;
    const c = {
        fill: `#EFEFEF`,
    };
    if (colors) {
        if (colors.fill) c.fill = colors.fill;
    }
    return (
        <React.Fragment>
            <svg {...props} viewBox="0 0 21 40">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="codeworx-logo" transform="translate(-269.000000, -23.000000)" fill={c.fill} fillRule="nonzero">
                        <path d="M275.561,23.89 L275.561,32.14 C276.951,28.97 278.78,26.63 281.03,25.11 C283.28,23.6 286.132,22.89 289.581,22.99 L289.581,29.99 C287.041,29.99 284.861,30.35 283.07,31.05 C281.251,31.75 279.799,32.78 278.711,34.13 C277.611,35.47 276.813,37.11 276.313,39.05 C275.813,40.99 275.563,43.19 275.563,45.69 L275.563,62.99 L269.563,62.99 L269.563,23.89 L275.561,23.89 Z"></path>
                    </g>
                </g>
            </svg>
        </React.Fragment>
    )
};
export default WhiteR;