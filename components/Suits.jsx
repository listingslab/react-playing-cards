import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Divider,
    Grid,
    Typography
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
            <Typography variant={`button`}>
                &lt;Suits /&gt;
            </Typography>
            <Divider />
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
            <Divider />
            <Typography variant={`button`}>
                Icon Buttons
            </Typography>

        </div>
    );
}