import React from "react";
import {
    IconClub,
    IconDiamond,
    IconHeart,
    IconSpade,
} from '../graphics'
import {
    Grid,
    Typography,
} from '@material-ui/core'

export default {
    title: 'Graphics',
}

export const Icons_ = () => (
    <React.Fragment>
        <Typography variant={`h5`}>
            Icons
        </Typography>
        <Grid container>
            <Grid item xs={6} style={{ padding: 4 }}>
                <IconSpade />
            </Grid>
            <Grid item xs={6} style={{ padding: 4 }}>
                <IconDiamond />
            </Grid>
            <Grid item xs={6} style={{ padding: 4 }}>
                <IconHeart />
            </Grid>
            <Grid item xs={6} style={{ padding: 4 }}>
                <IconClub />
            </Grid>
        </Grid>
    </React.Fragment>
)
