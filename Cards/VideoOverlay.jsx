import React, { useEffect } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { muiTheme } from '../MaterialUI/theme'
import { makeStyles } from '@material-ui/core/styles';
import IconVideo from '@material-ui/icons/Tv';
import {
    CssBaseline,
    Button,
    AppBar,
    Toolbar,
    Typography
} from '@material-ui/core';
import {
    CardBack,
    Base,
    Rank,
    Suit
} from './graphics'
import { 
    getShuffledDeck 
} from './utils/'
import { CardSingle } from './'
import {
    flipCard,
    moveTo
} from './animation'
import { getViewport } from './utils'
import Vimeo from '@u-wave/react-vimeo';

const useStyles = makeStyles(theme => ({
    table:{
        position: 'relative',
        height: 'calc(100vh - 65px)',
        overflow: 'hidden',
        background: 'black',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
}));

export default function VideoOverlay() {
    const classes = useStyles()
    let viewport = getViewport()

    const [videoSize, setVideoSize] = React.useState({
        width: viewport.width,
        height: viewport.height,
        height: 300,
    });

    useEffect(() => {
    })

    return (
        <React.Fragment>
            <MuiThemeProvider theme={createMuiTheme(muiTheme)}>
                <CssBaseline />
                <AppBar position="static">
                    <Toolbar>
                      <IconVideo className={classes.menuButton} />
                      <Typography 
                        variant="h6" 
                        className={classes.title}>
                        Overlay onto anything
                      </Typography>
                    </Toolbar>
                </AppBar>
                
                <div className={classes.table}>
                    <Vimeo
                        autoplay
                        responsive
                        controls
                        loop
                        showTitle={false}
                        video="380844432"
                        width={videoSize.width}
                        height={videoSize.height}
                    />
                </div>

            </MuiThemeProvider>
        </React.Fragment>
    );
}
