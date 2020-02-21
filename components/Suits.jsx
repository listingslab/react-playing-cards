import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function Suits() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            Suits
        </div>
    );
}