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
                <Grid item xs={3} className={classes.gridItem}>
                    <RankSymbol rank={`R_A`} color={`black`} />
                </Grid>
                <Grid item xs={3} className={classes.gridItem}>
                    <RankSymbol rank={`R_2`} color={`black`} />
                </Grid>
                <Grid item xs={3} className={classes.gridItem}>
                    <RankSymbol rank={`R_3`} color={`black`} />
                </Grid>
                <Grid item xs={3} className={classes.gridItem}>
                    <RankSymbol rank={`R_4`} color={`black`} />
                </Grid>
                <Grid item xs={3} className={classes.gridItem}>
                    <RankSymbol rank={`R_5`} color={`black`} />
                </Grid>
                <Grid item xs={3} className={classes.gridItem}>
                    <RankSymbol rank={`R_6`} color={`black`} />
                </Grid>
                <Grid item xs={3} className={classes.gridItem}>
                    <RankSymbol rank={`R_7`} color={`black`} />
                </Grid>
                <Grid item xs={3} className={classes.gridItem}>
                    <RankSymbol rank={`R_8`} color={`black`} />
                </Grid>
                <Grid item xs={3} className={classes.gridItem}>
                    <RankSymbol rank={`R_9`} color={`black`} />
                </Grid>
                <Grid item xs={3} className={classes.gridItem}>
                    <RankSymbol rank={`R_10`} color={`black`} />
                </Grid>
                <Grid item xs={3} className={classes.gridItem}>
                    <RankSymbol rank={`R_J`} color={`black`} />
                </Grid>
                <Grid item xs={3} className={classes.gridItem}>
                    <RankSymbol rank={`R_Q`} color={`black`} />
                </Grid>
                <Grid item xs={3} className={classes.gridItem}>
                    <RankSymbol rank={`R_K`} color={`black`} />
                </Grid>
            </Grid>

        </div>
    );
}