import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
} from '@material-ui/core';
import {
    Club,
    Diamond,
    Heart,
    Spade,
} from '../graphics'

const useStyles = makeStyles(theme => ({
    gridItem: {
        padding: theme.spacing()
    }
}));

export default function Suits() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={3} className={classes.gridItem}>
                    <Spade />
                </Grid>
                <Grid item xs={3} className={classes.gridItem}>
                    <Diamond />
                </Grid>
                <Grid item xs={3} className={classes.gridItem}>
                    <Club />
                </Grid>
                <Grid item xs={3} className={classes.gridItem}>
                    <Heart />
                </Grid>
            </Grid>

        </div>
    );
}