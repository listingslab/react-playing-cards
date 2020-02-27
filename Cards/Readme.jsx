import React, { useEffect } from 'react';
import {
    CssBaseline,
    Typography,
} from '@material-ui/core';

export default function Readme() {
    useEffect(() => {
        // console.log('this is fired after DOM has updated')
    })

    return (
        <React.Fragment>
            <CssBaseline />
            <Typography variant={`h5`}>
                Cards
            </Typography>
        </React.Fragment>
    );
}
