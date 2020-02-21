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

export default function Dropdown() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            Dropdown
        </div>
    );
}