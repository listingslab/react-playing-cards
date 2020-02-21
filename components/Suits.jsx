import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
} from '@material-ui/core';
import {
    Club,
    Diamond,
    Heart,
    IconSpade,
} from '../graphics'

const useStyles = makeStyles(theme => ({
    quarters: {
        margin: 'auto',
        maxWidth: 300
    },
    gridItem: {
        padding: theme.spacing()
    }
}));

export default function Suits() {
    const classes = useStyles();
    return (
        <div className={classes.quarters}>
            <Grid container>
                <Grid item xs={6} className={classes.gridItem}>
                    <IconSpade />
                </Grid>
                <Grid item xs={6} className={classes.gridItem}>
                    <Diamond />
                </Grid>
                <Grid item xs={6} className={classes.gridItem}>
                    <Heart />
                </Grid>
                <Grid item xs={6} className={classes.gridItem}>
                    <Club />
                </Grid>
            </Grid>

        </div>
    );
}