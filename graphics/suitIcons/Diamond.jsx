import React from "react";
const Diamond = props => {
    const { color } = props;
    let c = `#ddc73f`;
    if (color) {
        c = color;
    }
    return (
        <React.Fragment>
            <svg {...props} viewBox="0 0 66 77" >
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <path d="M33.0474981,0 C41.3699094,15.7270936 52.3503514,28.5766629 66,38.5187339 C52.3503514,48.5038928 41.3699094,61.338475 33.0474981,77 C24.6598933,61.338475 13.6440606,48.5038928 0,38.5187339 C13.6440606,28.5766629 24.6598933,15.7270936 33.0474981,0" fill={c}></path>
                </g>
            </svg>
        </React.Fragment>
    )
};
export default Diamond;
