import React from 'react';

const makeGraphic = (props, svg) => {
    return (
        <React.Fragment>
            <svg {...props} viewBox="0 0 15 25" >
                {svg}
            </svg>
        </React.Fragment>
    )
}

export default function SuitSymbol(props) {
    let c = `#000`;
    let s = `S`;
    const {
        color,
        suit
    } = props;
    if (color) c = color
    if (suit) r = suit

    switch (suit) {

        case `S`:
            return makeGraphic(props, <g fill={c}>

            </g>)

        case `D`:
            return makeGraphic(props, <g fill={c}>

            </g>)

        case `C`:
            return makeGraphic(props, <g fill={c}>

            </g>)

        case `H`:
            return makeGraphic(props, <g fill={c}>

            </g>)


        default: {
            return null
        }


    }
}


