import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    SuitSymbol,
    RankSymbol
} from '../graphics'

const useStyles = makeStyles(theme => ({
    maxIconSize: {
        maxHeight: 100,
        maxWidth: 100,
    }
}));

export default function SuitsRanks() {
    const classes = useStyles();
    const color = '#212121'
    return (
        <React.Fragment>
            <SuitSymbol suit={`S`} color={color} className={classes.maxIconSize} />
            <SuitSymbol suit={`D`} color={color} className={classes.maxIconSize} />
            <SuitSymbol suit={`C`} color={color} className={classes.maxIconSize} />
            <SuitSymbol suit={`H`} color={color} className={classes.maxIconSize} />
            <RankSymbol rank={`R_2`} color={color} className={classes.maxIconSize} />
            <RankSymbol rank={`R_3`} color={color} className={classes.maxIconSize} />
            <RankSymbol rank={`R_4`} color={color} className={classes.maxIconSize} />
            <RankSymbol rank={`R_5`} color={color} className={classes.maxIconSize} />
            <RankSymbol rank={`R_6`} color={color} className={classes.maxIconSize} />
            <RankSymbol rank={`R_7`} color={color} className={classes.maxIconSize} />
            <RankSymbol rank={`R_8`} color={color} className={classes.maxIconSize} />
            <RankSymbol rank={`R_9`} color={color} className={classes.maxIconSize} />
            <RankSymbol rank={`R_10`} color={color} className={classes.maxIconSize} />
            <RankSymbol rank={`R_J`} color={color} className={classes.maxIconSize} />
            <RankSymbol rank={`R_Q`} color={color} className={classes.maxIconSize} />
            <RankSymbol rank={`R_K`} color={color} className={classes.maxIconSize} />
            <RankSymbol rank={`R_A`} color={color} className={classes.maxIconSize} />
        </React.Fragment>
    );
}