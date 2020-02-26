import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
} from '@material-ui/core';
import { IconSpade } from '../graphics'

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    maxW: {
        maxWidth: 250
    },
    link: {
        color: "#2194BB",
        textDecoration: 'none'
    }
}));

export default function Readme() {
    const classes = useStyles();

    useEffect(() => {
        console.log('this is fired after DOM has updated')
    })

    return (
        <div className={classes.root}>
            <Typography variant={`h5`}>
                Greensock Animation
            </Typography>
            <Typography variant={`body1`}>
                React Playing Cards is animated using <a
                    className={classes.link}
                    target={`_blank`}
                    href={`https://greensock.com/`}>
                    Greensock's
                </a> animation framework; a high-performance, professional-grade animation system for the modern web
            </Typography>
            <Typography variant={`h6`}>
                Fade In/Out
            </Typography>
            <div id={`icon`} className={classes.maxW}>
                <IconSpade />
            </div>
        </div>
    );
}
