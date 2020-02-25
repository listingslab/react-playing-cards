import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    King,
} from '../graphics'

const useStyles = makeStyles(theme => ({
    maxIconSize: {
        maxHeight: 100,
        maxWidth: 100,
        margin: 4
    }
}));

export default function Faces() {
    const classes = useStyles();
    const color = '#212121'
    return (
        <React.Fragment>
            <King />
        </React.Fragment>
    );
}