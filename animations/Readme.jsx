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
                Animations
            </Typography>
            <Typography variant={`body1`}>
                React Playing Cards is animated using <a
                    // className={classes.link}
                    target={`_blank`}
                    href={`https://greensock.com/`}>
                    Greensock's
                </a> animation framework; a high-performance, professional-grade animation system for the modern web
            </Typography>
        </React.Fragment>
    );
}
