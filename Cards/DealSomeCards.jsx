import React, { useEffect } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { muiTheme } from '../MaterialUI/theme'
import { makeStyles } from '@material-ui/core/styles';
import IconDeal from '@material-ui/icons/ViewColumn';
import {
    CssBaseline,
    Button,
    AppBar,
    Toolbar,
    IconButton,
    Typography
} from '@material-ui/core';
import {
    CardBack,
    Base,
    Rank,
    Suit
} from './graphics'
import { getShuffledDeck } from './utils/deck'
import { CardSingle } from './'
import {
    flipCard,
    moveTo
} from './animation'

const useStyles = makeStyles(theme => ({
    appbarBtn:{
        marginLeft: theme.spacing()
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    table:{
        height: 'calc(100vh - 65px)',
        overflow: 'hidden',
    },
}));

const id = `#C_9`

export default function DealSomeCards() {
    const classes = useStyles();
    const [deck, setDeck] = React.useState(getShuffledDeck());
    const [color, setColor] = React.useState('#212121');
    const [nextAction, setNextAction] = React.useState('Deal First Card');
    useEffect(() => {
        // console.log ('cardStatus', cardStatus);
        moveTo(`placeInDeck`, id)
        flipCard(`setToHidden`, `${id}-card-face`)
        flipCard(`setToShown`, `${id}-card-back`)
    })
    
    return (
        <React.Fragment>
            <MuiThemeProvider theme={createMuiTheme(muiTheme)}>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                  <IconButton 
                    edge="start" 
                    className={classes.menuButton} 
                    color="inherit" 
                    aria-label="menu">
                    <IconDeal />
                  </IconButton>
                  <Typography 
                    variant="h6" 
                    className={classes.title}>
                    Deal cards
                  </Typography>
                  <Button 
                  className={classes.appbarBtn}
                    variant={`contained`}
                    color={`secondary`}
                    onClick={(e) => {
                        e.preventDefault()
                        moveTo(`dealFirstCard`, id, () => {console.log ('dealt it.')})
                        flipCard(`hide`, `${id}-card-back`, () => {})
                        flipCard(`show`, `${id}-card-face`, () => {})
                    }}>
                    {nextAction}
                    </Button>
                </Toolbar>
            </AppBar>

            <div className={classes.table}>
                <CardSingle 
                    initialState={`in-deck`}
                    id={`C_9`}
                    card={{
                        suit:`C`, 
                        rank: `9`, 
                        color: `#212121`
                    }}
                />
            </div>
            
            </MuiThemeProvider>
        </React.Fragment>
    );
}


/*
<Button 
                    className={classes.appbarBtn}
                    variant={`contained`}
                    color={`secondary`}
                    onClick={(e) => {
                        e.preventDefault()
                        console.log ('Deal Flop')
                    }}>
                    Deal Flop
                    </Button>
*/