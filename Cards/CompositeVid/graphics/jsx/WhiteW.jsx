import React from "react";
const WhiteW = props => {
    const { colors } = props;
    const c = {
        fill: `#EFEFEF`,
    };
    if (colors) {
        if (colors.fill) c.fill = colors.fill;
    }
    return (
        <React.Fragment>
            <svg {...props} viewBox="0 0 56 40">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g transform="translate(-165.000000, -23.000000)" fill={c.fill} fillRule="nonzero">
                        <polygon id="WhiteW" points="201 62.99 193.12 31.99 192.97 31.99 185.17 62.99 178.26 62.99 165.82 23.99 172.87 23.99 181.64 55.898 181.79 55.898 189.59 23.99 196.58 23.99 204.67 55.898 204.83 55.898 213.52 23.99 220.13 23.99 207.75 62.99"></polygon>
                    </g>
                </g>
            </svg>
        </React.Fragment>
    )
};
export default WhiteW;