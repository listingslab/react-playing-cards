import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from '@material-ui/core';
import {
    Base,
    Rank,
    Suit
} from './graphics'

const useStyles = makeStyles(theme => ({

    cardContainer: {
        position: 'relative',
        width: 300,
        margin: 'auto',
    },
    base: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 50,
    },
    rank: {
        position: 'absolute',
        left: 35,
        top: 45,
        zIndex: 100,
        width: 90,

    },
    suit: {
        position: 'absolute',
        top: 15,
        right: 0,
        zIndex: 150,
        width: 190,
    },



    boSelecta: {
        margin: theme.spacing(2),
        textAlign: 'center'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

const makeCard = (card) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Suit card={card} className={classes.suit} />
            <Rank card={card} className={classes.rank} />
            <Base card={card} className={classes.base} />
        </React.Fragment>
    );
}

export default function Readme() {
    const classes = useStyles();
    const [suit, setSuit] = React.useState('S'); // S=Spades, D=Diamonds, H=Hearts, C=Clubs
    const [rank, setRank] = React.useState('A');

    return (
        <React.Fragment>

            <div className={classes.boSelecta}>
                <FormControl className={classes.formControl} >
                    <InputLabel id="rank-label">Rank</InputLabel>
                    <Select
                        labelId="rank-label"
                        id="rank-select"
                        value={rank}
                        onChange={(e) => {
                            setRank(e.target.value);
                        }}>
                        <MenuItem value={`A`}>Ace</MenuItem>
                        <MenuItem value={`K`}>King</MenuItem>
                        <MenuItem value={`Q`}>Queen</MenuItem>
                        <MenuItem value={`J`}>Jack</MenuItem>
                        <MenuItem value={`10`}>10</MenuItem>
                        <MenuItem value={`9`}>9</MenuItem>
                        <MenuItem value={`8`}>8</MenuItem>
                        <MenuItem value={`7`}>7</MenuItem>
                        <MenuItem value={`6`}>6</MenuItem>
                        <MenuItem value={`5`}>5</MenuItem>
                        <MenuItem value={`4`}>4</MenuItem>
                        <MenuItem value={`3`}>3</MenuItem>
                        <MenuItem value={`2`}>2</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl} >
                    <InputLabel id="suit-label">Suit</InputLabel>
                    <Select
                        labelId="suit-label"
                        id="suit-select"
                        value={suit}
                        onChange={(e) => {
                            setSuit(e.target.value);
                        }}>
                        <MenuItem value={`S`}>Spades</MenuItem>
                        <MenuItem value={`D`}>Diamonds</MenuItem>
                        <MenuItem value={`C`}>Clubs</MenuItem>
                        <MenuItem value={`H`}>Hearts</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <div className={classes.cardContainer}>
                {makeCard({
                    color: `#212121`,
                    suit,
                    rank,
                })}
            </div>

        </React.Fragment>
    );
}


/*
<Typography variant={`h6`}>
                Pick a card, any card
            </Typography>


*/