import React, { useEffect } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { muiTheme } from '../MaterialUI/theme'
import { makeStyles } from '@material-ui/core/styles';
import MaterialColorPicker from 'react-material-color-picker';
import IconColor from '@material-ui/icons/ColorLens';
import IconCard from '@material-ui/icons/ViewCarousel';
import {
    Grid,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Typography,
    Popover,
    CssBaseline,
    AppBar,
    Toolbar,
} from '@material-ui/core';
import { CardSingle } from './'
import { 
    flipCard,
    moveTo
} from './animation'

const useStyles = makeStyles(theme => ({
    btnTxt: {
        marginLeft: theme.spacing(),
    },
    controlField:{
        marginBottom: theme.spacing(2)
    },
    formControl:{
        width: '100%',
        maxWidth: 300,
    },
    controls:{
        padding: theme.spacing(2)
    },
    cardPad:{
        padding: theme.spacing(2)
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    table:{
        height: 'calc(100vh - 65px)'
    },
    cardContainer: {
        margin: 'auto',
        position: 'relative',
        textAlign: 'center',
        width: 200
    },
}));

export default function PickACard() {

    // S=Spades, D=Diamonds, H=Hearts, C=Clubs
    const [suit, setSuit] = React.useState('S');
    const [rank, setRank] = React.useState('A');
    const [color, setColor] = React.useState('#212121');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [cardStatus, setCardStatus] = React.useState(`face-down`);
    
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const classes = useStyles();

    useEffect(() => {
        moveTo('makeVisible',`#${suit}_${rank}`)
    })

    return (
        <React.Fragment>
            <MuiThemeProvider theme={createMuiTheme(muiTheme)}>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                  <IconCard className={classes.menuButton} />
                  <Typography 
                    variant="h6" 
                    className={classes.title}>
                    Pick a card, any card...
                  </Typography>
                </Toolbar>
              </AppBar>
            <div className={classes.table}>
                <Grid container>
                <Grid item xs={6}>
                    <div className={classes.controls}>

                        <div className={classes.controlField}>
                            <FormControl className={classes.formControl} >
                                <InputLabel id="rank-label">Rank</InputLabel>
                                <Select
                                    labelId="rank-label"
                                    id="rank-select"
                                    value={rank}
                                    onChange={(e) => {
                                        setRank(e.target.value);
                                        setCardStatus(`face-down`)
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
                        </div>
                        <div className={classes.controlField}>
                            <FormControl className={classes.formControl} >
                                <InputLabel id="suit-label">Suit</InputLabel>
                                <Select
                                    labelId="suit-label"
                                    id="suit-select"
                                    value={suit}
                                    onChange={(e) => {
                                        setSuit(e.target.value);
                                        setCardStatus(`face-down`)
                                    }}>
                                    <MenuItem value={`S`}>Spades</MenuItem>
                                    <MenuItem value={`D`}>Diamonds</MenuItem>
                                    <MenuItem value={`C`}>Clubs</MenuItem>
                                    <MenuItem value={`H`}>Hearts</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className={classes.controlField}>
                            <Button
                                className={classes.colorBtn}
                                aria-describedby={id}
                                onClick={handleClick}>
                                <IconColor />
                                <span className={classes.btnTxt}>Change Color</span>
                            </Button>
                        </div>
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}>
                            <MaterialColorPicker
                                initColor={color}
                                onSubmit={(e) => {
                                    if (e.target.value) {
                                        setColor(e.target.value)
                                        setAnchorEl(null)
                                        setCardStatus(`face-down`)
                                    }
                                }}
                                submitLabel='OK'
                                resetLabel='Reset'/>
                        </Popover>
                    </div>
                </Grid>
                <Grid item xs={6} className={classes.cardPad}>
                    <CardSingle 
                        id={`${suit}_${rank}`}
                        card={{
                            suit, 
                            rank, 
                            color,
                            backColor: `#1A1919`,
                        }} 
                    />
                </Grid>
            </Grid> 
            </div>
            </MuiThemeProvider>
        </React.Fragment>
    );
}
