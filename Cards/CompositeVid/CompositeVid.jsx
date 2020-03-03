import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import {
    CssBaseline,
} from '@material-ui/core/';
import CurlyBrace from './graphics/jsx/CurlyBrace';
import BlueC from './graphics/jsx/BlueC';
import BlueD from './graphics/jsx/BlueD';
import BlueE from './graphics/jsx/BlueE';
import BlueO from './graphics/jsx/BlueO';
import WhiteO from './graphics/jsx/WhiteO';
import WhiteR from './graphics/jsx/WhiteR';
import WhiteW from './graphics/jsx/WhiteW';
import WhiteX from './graphics/jsx/WhiteX';
import { animate } from './animation';
// import bgImage from './graphics/brisvegas.jpg';
import Vimeo from '@u-wave/react-vimeo';

const styles = theme => ({
    stage: {
        position: 'relative',
        height: '100vh',
        background: 'black',
        overflow: 'hidden',
    },
    logo: {
        position: 'absolute',
        width: 370,
        height: 86,
        left: 'calc(50vw - 375px)',
        top: 'calc(50vh + 100px)',
    },
    image: {
        width: '100%',
    }
});


class CompositeVid extends Component {

    componentDidMount() {
        animate(`start`, 0.25, this.callBack);
    }

    componentDidUpdate() {
        animate(`reanimate`);
    }

    callBack = (completionEvent) => {
        // console.log('completionEvent', completionEvent);
        setTimeout(() => {
            animate(`fade`, 0.5);
        }, 2000)
    }

    render() {
        const {
            classes,
        } = this.props;

        return (
            <React.Fragment>
                <CssBaseline />
                <div className={cn(classes.stage)}>
                    <div className={cn(classes.logo)} >
                        <BlueC
                            id={`blue-c`}
                            colors={
                                { fill: '#4CA5FF' }
                            }
                            style={{
                                xIndex: 360,
                                position: `absolute`,
                                opacity: '0',
                                height: 41,
                                left: 0,
                                top: 23,
                            }} />

                        <BlueO
                            id={`blue-o`}
                            colors={
                                { fill: '#4CA5FF' }
                            }
                            style={{
                                zIndex: 380,
                                position: `absolute`,
                                opacity: '0',
                                left: 41,
                                top: 23,
                                height: 41,

                            }} />

                        <BlueD
                            id={`blue-d`}
                            colors={
                                { fill: '#4CA5FF' }
                            }
                            style={{
                                zIndex: 400,
                                position: `absolute`,
                                opacity: '0',
                                left: 84,
                                top: 9,
                                height: 56,
                            }} />

                        <BlueE
                            id={`blue-e`}
                            colors={
                                { fill: '#4CA5FF' }
                            }
                            style={{
                                zIndex: 420,
                                position: `absolute`,
                                opacity: '0',
                                left: 128,
                                top: 23,
                                height: 41,

                            }} />

                        <WhiteW
                            id={`white-w`}
                            colors={
                                { fill: '#EFEFEF' }
                            }
                            style={{
                                zIndex: 440,
                                position: `absolute`,
                                opacity: '0',
                                left: 167,
                                top: 24,
                                height: 40,

                            }} />

                        <WhiteO
                            id={`white-o`}
                            colors={
                                { fill: '#EFEFEF' }
                            }
                            style={{
                                zIndex: 460,
                                position: `absolute`,
                                opacity: '0',
                                left: 225,
                                top: 24,
                                height: 41,

                            }} />

                        <WhiteR
                            id={`white-r`}
                            colors={
                                { fill: '#EFEFEF' }
                            }
                            style={{
                                zIndex: 480,
                                position: `absolute`,
                                opacity: '0',
                                left: 270,
                                top: 24,
                                height: 40,

                            }} />

                        <WhiteX
                            id={`white-x`}
                            colors={
                                { fill: '#EFEFEF' }
                            }
                            style={{
                                zIndex: 500,
                                position: `absolute`,
                                opacity: '0',
                                left: 292,
                                top: 24,
                                height: 40,

                            }} />

                        <CurlyBrace
                            id={`curly-brace`}
                            colors={
                                { fill: '#EFEFEF' }
                            }
                            style={{
                                zIndex: 540,
                                position: `absolute`,
                                left: 335,
                                height: 86,
                                opacity: '0',
                            }} />

                        <CurlyBrace
                            id={`cursor`}
                            colors={
                                { fill: '#EFEFEF' }
                            }
                            style={{
                                zIndex: 1,
                                position: `absolute`,
                                height: 86,
                                opacity: '0',
                            }} />

                    </div>

                    <Vimeo
                        video="380844432"
                        width={`854`}
                        height={`480`}
                    />

                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles, { withTheme: true })(CompositeVid);
