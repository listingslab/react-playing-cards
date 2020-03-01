import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
    Divider,
    IconButton,
    Icon,
    Typography
} from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import SaveIcon from '@material-ui/icons/Save';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import IconSend from '@material-ui/icons/Send';
import IconUpload from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    button: {
        margin: theme.spacing(1),
    },
    margin: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

export default function ButtonExamples() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Typography variant={`button`}>
                Upload Button
            </Typography>
            <input
                accept="image/*"
                className={classes.input}
                id="icon-button-file"
                type="file" />

            <label htmlFor="icon-button-file">
                <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span">
                    <IconUpload />
                </IconButton>
            </label>

            <Divider />

            <Typography variant={`button`}>
                Buttons with icons and label
            </Typography>

            <div>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                >
                    Delete
      </Button>
                {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<IconSend />}
                >
                    Send
                </Button>
                <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    startIcon={<CloudUploadIcon />}
                >
                    Upload
                </Button>
                <Button
                    variant="contained"
                    disabled
                    color="secondary"
                    className={classes.button}
                    startIcon={<KeyboardVoiceIcon />}
                >
                    Talk
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                >
                    Save
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                >
                    Save
      </Button>
            </div>


            <Divider />

            <Typography variant={`button`}>
                Contained buttons
            </Typography>
            <Button
                variant={`contained`}
                color={`primary`}
            >
                Primary
            </Button>
            <Button
                variant={`contained`}
                color={`secondary`}>
                Secondary
            </Button>
            <Button
                variant={`contained`}
                disabled>
                Disabled
            </Button>

            <Divider />



            <Typography variant={`button`}>
                Outlined Buttons
            </Typography>

            <Button
                variant="outlined"
                color="primary">
                Primary
            </Button>
            <Button
                variant="outlined"
                color="secondary">
                Secondary
            </Button>

            <Button
                variant="outlined"
                disabled>
                Disabled
            </Button>

            <Divider />

            <Typography variant={`button`}>
                Sizes
            </Typography>

            <div>
                <div>
                    <Button
                        size="small"
                        className={classes.margin}>
                        Small
                    </Button>
                    <Button
                        size="medium"
                        className={classes.margin}>
                        Medium
                    </Button>
                    <Button
                        size="large"
                        className={classes.margin}>
                        Large
                    </Button>
                </div>
                <div>
                    <Button
                        variant="outlined"
                        size="small"
                        color="primary"
                        className={classes.margin}>
                        Small
                    </Button>
                    <Button
                        variant="outlined"
                        size="medium"
                        color="primary"
                        className={classes.margin}>
                        Medium
                    </Button>
                    <Button
                        variant="outlined"
                        size="large"
                        color="primary"
                        className={classes.margin}>
                        Large
                    </Button>
                </div>
                <div>
                    <Button
                        variant="contained"
                        size="small"
                        color="primary"
                        className={classes.margin}>
                        Small
                    </Button>
                    <Button
                        variant="contained"
                        size="medium"
                        color="primary"
                        className={classes.margin}>
                        Medium
                    </Button>
                    <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        className={classes.margin}>
                        Large
                    </Button>
                </div>
                <div>
                    <IconButton
                        aria-label="delete"
                        className={classes.margin}
                        size="small">
                        <ArrowDownwardIcon fontSize="inherit" />
                    </IconButton>

                    <IconButton
                        aria-label="delete"
                        className={classes.margin}>
                        <DeleteIcon fontSize="small" />
                    </IconButton>

                    <IconButton
                        aria-label="delete"
                        className={classes.margin}>
                        <DeleteIcon />
                    </IconButton>

                    <IconButton
                        aria-label="delete"
                        className={classes.margin}>
                        <DeleteIcon fontSize="large" />
                    </IconButton>

                </div>
            </div>
        </div>
    );
}