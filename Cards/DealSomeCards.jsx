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
import { 
    getShuffledDeck 
} from './utils/'
import { CardSingle } from './'
import {
    flipCard,
    moveTo
} from './animation'

const useStyles = makeStyles(theme => ({
    table:{
        position: 'relative',
        height: 'calc(100vh - 65px)',
        overflow: 'hidden',
    },
    gameBtns:{
        position: 'absolute',
        width: 200,
        top: 8,
        right: 8,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
}));

export default function DealSomeCards() {
    const classes = useStyles();
    const [shoe, setShoe] = React.useState(null);
    const [inPlay, setInPlay] = React.useState([]);
    const [color, setColor] = React.useState('#212121');
    const [nextAction, setNextAction] = React.useState({key:`dealHand`, value:`Deal Player Hand`});
    const [trigger, setTrigger] = React.useState('trigger');

    const initHandCards = () => {
        setTimeout(() => {
        moveTo('initCard', `#${inPlay[0].id}`)
        moveTo('dealFirst', `#${inPlay[0].id}`)
        flipCard(`setToHidden`, `#${inPlay[0].id}-card-face`)
        flipCard(`hide`, `#${inPlay[0].id}-card-back`, () => {})
        flipCard(`show`, `#${inPlay[0].id}-card-face`, () => {})
        setTimeout(() => {
            moveTo('initCard', `#${inPlay[1].id}`)
            moveTo('dealSecond', `#${inPlay[1].id}`)
            flipCard(`setToHidden`, `#${inPlay[1].id}-card-face`)
            flipCard(`hide`, `#${inPlay[1].id}-card-back`, () => {})
            flipCard(`show`, `#${inPlay[1].id}-card-face`, () => {})
        }, 750)}, 100)
    }

    const initFlop = () => {
        setTimeout(() => {
            moveTo('initCard', `#${inPlay[2].id}`)
            moveTo('dealFlopFirst', `#${inPlay[2].id}`)
            flipCard(`setToHidden`, `#${inPlay[2].id}-card-face`)
            flipCard(`hide`, `#${inPlay[2].id}-card-back`, () => {})
            flipCard(`show`, `#${inPlay[2].id}-card-face`, () => {})
            setTimeout(() => {
                moveTo('initCard', `#${inPlay[3].id}`)
                moveTo('dealFlopSecond', `#${inPlay[3].id}`)
                flipCard(`setToHidden`, `#${inPlay[3].id}-card-face`)
                flipCard(`hide`, `#${inPlay[3].id}-card-back`, () => {})
                flipCard(`show`, `#${inPlay[3].id}-card-face`, () => {})
                setTimeout(() => {
                    moveTo('initCard', `#${inPlay[4].id}`)
                    moveTo('dealFlopThird', `#${inPlay[4].id}`)
                    flipCard(`setToHidden`, `#${inPlay[4].id}-card-face`)
                    flipCard(`hide`, `#${inPlay[4].id}-card-back`, () => {})
                    flipCard(`show`, `#${inPlay[4].id}-card-face`, () => {})
                }, 750)
            }, 750)
        }, 100)
    }

    const initRivers = () => {
        setTimeout(() => {
        moveTo('initCard', `#${inPlay[5].id}`)
        moveTo('dealRiverFirst', `#${inPlay[5].id}`)
        flipCard(`setToHidden`, `#${inPlay[5].id}-card-face`)
        flipCard(`hide`, `#${inPlay[5].id}-card-back`, () => {})
        flipCard(`show`, `#${inPlay[5].id}-card-face`, () => {})
        setTimeout(() => {
            moveTo('initCard', `#${inPlay[6].id}`)
            moveTo('dealRiverSecond', `#${inPlay[6].id}`)
            flipCard(`setToHidden`, `#${inPlay[6].id}-card-face`)
            flipCard(`hide`, `#${inPlay[6].id}-card-back`, () => {})
            flipCard(`show`, `#${inPlay[6].id}-card-face`, () => {})
        }, 750)}, 100)
    }

    useEffect(() => {
        if (!shoe){
            setShoe(getShuffledDeck())
        }
    })

    return (
        <React.Fragment>
            <MuiThemeProvider theme={createMuiTheme(muiTheme)}>
                <CssBaseline />
                <AppBar position="static">
                    <Toolbar>
                    <IconDeal className={classes.menuButton} />
                      <Typography 
                        variant="h6" 
                        className={classes.title}>
                        Example Hand
                      </Typography>

                      <Button
                            variant={`contained`}
                            color={`secondary`}
                            onClick={(e) => {
                                e.preventDefault()
                                if (nextAction.key === 'dealHand'){
                                    let newInPlay = inPlay
                                    newInPlay.push(shoe.pop(),shoe.pop(),shoe.pop(),shoe.pop(),shoe.pop(),shoe.pop(),shoe.pop())
                                    setInPlay(newInPlay)
                                    setNextAction({key:`initFlop`, value:`Deal Flop`})
                                    initHandCards()
                                }
                                if (nextAction.key === 'initFlop'){
                                    setNextAction({key:`initRiver`, value:`Deal Rivers`})
                                    initFlop()
                                }
                                if (nextAction.key === 'initRiver'){
                                    setNextAction({key:`nextHand`, value:`Next Hand`})
                                    initRivers()
                                }
                            }}>
                            {nextAction.value}
                        </Button>
                    </Toolbar>
                </AppBar>
                
                <div className={classes.table}>
                    <div id={`gameBtns`} className={classes.gameBtns}>
                        
                    </div>

                    {inPlay.map((item, i) => {
                        return (
                            <CardSingle
                                key={`card_${i}`}
                                id={item.id}
                                card={{
                                    suit: item.suit, 
                                    rank: item.rank, 
                                    backColor: `#1A1919`,
                                    color: item.suit === 'D' || item.suit === 'H' ? `#D33E43` : `#1A1919`
                                }}
                            />
                        )
                    })}

                </div>

            </MuiThemeProvider>
        </React.Fragment>
    );
}
