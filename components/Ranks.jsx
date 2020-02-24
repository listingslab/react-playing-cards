import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
} from '@material-ui/core';
import {
    RankSymbol
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

export default function Ranks() {
    const classes = useStyles();
    return (
        <div className={classes.quarters}>
            <Grid container>
                <Grid item xs={6} className={classes.gridItem}>
                    <RankSymbol rank={`R_A`} color={`red`} />
                </Grid>
                <Grid item xs={6} className={classes.gridItem}>
                    <RankSymbol rank={`R_2`} />
                </Grid>
                <Grid item xs={6} className={classes.gridItem}>
                    <RankSymbol rank={`R_3`} />
                </Grid>
                <Grid item xs={6} className={classes.gridItem}>
                    <RankSymbol rank={`R_4`} />
                </Grid>
            </Grid>

        </div>
    );
}