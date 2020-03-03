
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { flipCard } from './animation'
import {
    CardBack,
    Base,
    Rank,
    Suit
} from './graphics'

const useStyles = makeStyles(theme => ({
    cardContainer: {
        opacity: 0,
        width: 200,
        position: 'absolute',
    },
    back:{
        zIndex: 25,
    },
    base: {
        zIndex: 50,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    rank: {
        zIndex: 100,
        position: 'absolute',
        left: 20,
        top: 20,
        width: 60,
    },
    suit: {
        zIndex: 150,
        position: 'absolute',
        top: 8,
        right: 5,
        width: 120,
    },
}));

export default function CardSingle(props) {
    const {id, card, status} = props
    const classes = useStyles();
    // S=Spades, D=Diamonds, H=Hearts, C=Clubs
    const [cardStatus, setCardStatus] = React.useState(props.initialState);
    useEffect(() => {
        if (cardStatus === `face-down`){
            flipCard(`setToHidden`, `#${id}-card-face`)
            flipCard(`setToShown`, `#${id}-card-back`)
        }
        if (cardStatus === `turn-face-up`){
            flipCard(`hide`, `#${id}-card-back`, () => setCardStatus(`show_face`))
        }
        if (cardStatus === `show_face`){
            flipCard(`show`, `#${id}-card-face`, () => setCardStatus(`finished`))
        }
    })
    
    return (
        <div 
            id={id}
            className={classes.cardContainer}>
            <div id={`${id}-card-face`}>
                <Suit card={card} className={classes.suit} />
                <Rank card={card} className={classes.rank} />
                <Base card={card} className={classes.base} />
            </div>
            <CardBack 
                className={classes.back}
                id={`${id}-card-back`}
                color={card.backColor}
            />
        </div>
    );
}