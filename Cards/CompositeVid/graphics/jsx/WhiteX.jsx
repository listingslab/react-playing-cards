import React from "react";
const WhiteX = props => {
    const { colors } = props;
    const c = {
        fill: `#EFEFEF`,
    };
    if (colors) {
        if (colors.fill) c.fill = colors.fill;
    }
    return (
        <React.Fragment>
            <svg {...props} viewBox="0 0 38 40">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g transform="translate(-291.000000, -23.000000)" fill={c.fill} fillRule="nonzero">
                        <polygon id="WhiteX" points="292.29 23.99 300.48 23.99 309.77 37.65 319.45 23.99 327.11 23.99 313.74 41.939 328.75 62.99 320.569 62.99 309.77 46.852 298.98 62.99 291.24 62.99 305.79 42.471"></polygon>
                    </g>
                </g>
            </svg>
        </React.Fragment>
    )
};
export default WhiteX;