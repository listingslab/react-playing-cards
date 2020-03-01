import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function SimpleSelect() {
    const classes = useStyles();
    const [suit, setSuit] = React.useState('');
    const inputLabel = React.useRef(null);

    const handleChange = event => {
        setSuit(event.target.value);
    };

    return (
        <FormControl className={classes.formControl} >
            <InputLabel ref={inputLabel} id="suit-label">
                Suit
            </InputLabel>
            <Select
                labelId="suit-label"
                id="suit-select"
                value={suit}
                onChange={handleChange}>
                <MenuItem value={`S`}>Spades</MenuItem>
                <MenuItem value={`D`}>Diamonds</MenuItem>
                <MenuItem value={`C`}>Clubs</MenuItem>
                <MenuItem value={`H`}>Hearts</MenuItem>
            </Select>
        </FormControl>
    );
}
