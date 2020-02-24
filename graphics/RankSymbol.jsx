import React from 'react';

export default function RankSymbol(props) {
    let c = `#000`;
    let r = `R_A`;
    const {
        color,
        rank
    } = props;
    if (color) c = color
    if (rank) r = rank

    switch (rank) {

        case `R_A`:
            return <div>ra</div>

        case `R_2`:
            return <div>r2</div>

        case `R_3`:
            return <div>r3</div>

        case `R_4`:
            return <div>r4</div>

        default: {
            return null
            // return <React.Fragment>
            //     {r}
            // </React.Fragment>’
        }
    }
}
