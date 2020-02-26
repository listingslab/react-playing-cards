import React, { useEffect } from 'react';
import {
    Typography,
} from '@material-ui/core';

export default function Readme() {
    useEffect(() => {
        console.log('this is fired after DOM has updated')
    })

    return (
        <React.Fragment>
            <Typography variant={`h5`}>
                Cards
            </Typography>
            <Typography variant={`body1`}>
                lorem ipsum
            </Typography>
        </React.Fragment>
    );
}
