import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    SuitSymbol,
    RankSymbol
} from '../graphics'

const useStyles = makeStyles(theme => ({
    maxIconSize: {
        maxHeight: 100,
        maxWidth: 10
    }
}));

export default function Card() {
    const classes = useStyles();
    const color = '#212121'
    return (
        <React.Fragment>
            <SuitSymbol suit={`D`} color={color} className={classes.maxIconSize} />
            <RankSymbol rank={`R_Q`} color={color} className={classes.maxIconSize} />
        </React.Fragment>
    );
}