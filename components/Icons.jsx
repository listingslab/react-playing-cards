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
    quarters: {
        margin: 'auto',
        maxWidth: 400
    },
    gridItem: {
        padding: theme.spacing()
    }
}));

export default function Icons() {
    const classes = useStyles();
    return (
        <div className={classes.quarters}>
            <Grid container>
                <Grid item xs={6} className={classes.gridItem}>
                    <IconSpade />
                </Grid>
                <Grid item xs={6} className={classes.gridItem}>
                    <IconDiamond />
                </Grid>
                <Grid item xs={6} className={classes.gridItem}>
                    <IconHeart />
                </Grid>
                <Grid item xs={6} className={classes.gridItem}>
                    <IconClub />
                </Grid>
            </Grid>

        </div>
    );
}