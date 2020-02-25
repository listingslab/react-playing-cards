import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
} from '@material-ui/core';
import {
    IconClub,
    IconDiamond,
    IconHeart,
    IconSpade,
} from '../graphics'

const useStyles = makeStyles(theme => ({
    maxIconSize: {
        maxWidth: '100%',
        maxHeight: 100,
        margin: 4
    }
}));

export default function Icons() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <IconSpade className={classes.maxIconSize} />
            <IconDiamond className={classes.maxIconSize} />
            <IconClub className={classes.maxIconSize} />
            <IconHeart className={classes.maxIconSize} />
        </React.Fragment>
    );
}