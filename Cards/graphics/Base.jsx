import React from 'react';

const makeGraphic = (props, svg) => {
    return (
        <React.Fragment>
            <svg {...props} viewBox="0 0 181 251" >
                {svg}
            </svg>
        </React.Fragment >
    )
}

export default function Base(props) {
    let c = `black`;
    const { color } = props;
    if (color) c = color
    return makeGraphic(props, <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(1.000000, 1.000000)">
            <g>
                <g>
                    <path d="M178.582,235.276 C178.582,243.104 172.237,249.449 164.409,249.449 L14.174,249.449 C6.346,249.449 0,243.104 0,235.276 L0,14.173 C0,6.346 6.346,-1.42108547e-14 14.174,-1.42108547e-14 L164.409,-1.42108547e-14 C172.237,-1.42108547e-14 178.582,6.346 178.582,14.173 L178.582,235.276 Z" fill="#F7F6F1" fillRule="nonzero"></path>
                    <path d="M178.582,235.276 C178.582,243.104 172.237,249.449 164.409,249.449 L14.174,249.449 C6.346,249.449 0,243.104 0,235.276 L0,14.173 C0,6.346 6.346,-1.42108547e-14 14.174,-1.42108547e-14 L164.409,-1.42108547e-14 C172.237,-1.42108547e-14 178.582,6.346 178.582,14.173 L178.582,235.276 Z" stroke={c}></path>
                </g>
            </g>
        </g>
    </g>)
}
