import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    SuitSymbol
} from '../graphics'

const useStyles = makeStyles(theme => ({
    maxIconSize: {
        maxHeight: 100,
        maxWidth: 100,
        margin: 4
    }
}));

export default function Suits() {
    const classes = useStyles();
    const color = '#212121'
    return (
        <React.Fragment>
            <SuitSymbol suit={`S`} color={`#2194BB`} className={classes.maxIconSize} />
            <SuitSymbol suit={`D`} color={`#DAC338`} className={classes.maxIconSize} />
            <SuitSymbol suit={`C`} color={`#2194BB`} className={classes.maxIconSize} />
            <SuitSymbol suit={`H`} color={`#DAC338`} className={classes.maxIconSize} />
        </React.Fragment>
    );
}