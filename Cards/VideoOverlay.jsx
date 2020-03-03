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
    overlay
} from './animation'
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
    const [shoe, setShoe] = React.useState(null)
    const [currentCard, setCurrentCard] = React.useState(null)
    const [playing, setPlaying] = React.useState(false)

    useEffect(() => {
        if (!shoe){
            let shuffledDeck = getShuffledDeck()
            setShoe(shuffledDeck)
            setCurrentCard(shuffledDeck[0])
            setTimeout(() => {
                overlay(`makeVisible`, `#${shuffledDeck[0].id}`)
            }, 100)
        }
        if (currentCard && !playing){
            console.log (currentCard)
            setTimeout(() => {
                overlay(`makeVisible`, `#${currentCard.id}`)
                overlay(`playCard`, `#${currentCard.id}`, () => {
                    console.log ('next card')
                })
            }, 2000)
            // setPlaying(true)
            
        }
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
                    {currentCard ? 
                        <CardSingle
                            key={`card_${currentCard}`}
                            id={currentCard.id}
                            card={{
                                suit: currentCard.suit, 
                                rank: currentCard.rank, 
                                backColor: `#1A1919`,
                                color: currentCard.suit === 'D' || currentCard.suit === 'H' ? `#D33E43` : `#1A1919`
                            }}
                        />
                    : null}
                    
                    <Vimeo
                        autoplay
                        responsive
                        controls
                        loop
                        showTitle={false}
                        video="380844432"
                    />
                </div>

            </MuiThemeProvider>
        </React.Fragment>
    );
}
