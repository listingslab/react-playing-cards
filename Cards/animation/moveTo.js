import { gsap } from "gsap"
import { getViewport } from  '../utils'

let duration = 1;

const initCard = (card) => {
    gsap.set(card, {
        opacity: 1,
        scale: 0.25,
        rotation: -30,
        x:-100,
        y: -150
    });
}

const dealRiverFirst = (card) => {
     gsap.to(card, {
        rotation: 0,
        duration: 1 * duration,
        x: 155,
        y: -75,
        scale: 0.33
    });
}

const dealRiverSecond= (card) => {
     gsap.to(card, {
        rotation: 0,
        duration: 1 * duration,
        x: 225,
        y: -75,
        scale: 0.33
    });
}

const dealFlopThird = (card) => {
     gsap.to(card, {
        rotation: 0,
        duration: 1 * duration,
        x: 85,
        y: -75,
        scale: 0.33
    });
}

const dealFlopSecond = (card) => {
     gsap.to(card, {
        rotation: 0,
        duration: 1 * duration,
        x: 15,
        y: -75,
        scale: 0.33
    });
}

const dealFlopFirst = (card) => {
     gsap.to(card, {
        rotation: 0,
        duration: 1 * duration,
        x: -55,
        y: -75,
        scale: 0.33
    });
}


const makeVisible = (card) => {
     gsap.set(card, {
        opacity: 1,
    });
}

const dealFirst = (card) => {
     gsap.to(card, {
        rotation: 0,
        duration: 1 * duration,
        x: -10,
        y: 110,
        scale: 0.8
    });
}

const dealSecond = (card) => {
     gsap.to(card, {
        rotation: 0,
        duration: 1 * duration,
        x: 160,
        y: 110,
        scale: 0.8
    });
}



const placeInDeck = (card, callback) => {
     gsap.set(card, {
        scale: 0.25,
        x: -75,
        y: -100
    });
}

const dealFirstCard = (card, callback) => {
	 gsap.to(card, {
        duration: 0.5 * duration,
        x: 275,
        y: 165,
        scale: 0.75,
        onComplete: callback,
    });
}

export const moveTo = (animation, card, callback) => {
    switch (animation) {

        case `makeVisible`:
            return makeVisible(card)

        case `dealSecond`:
            return dealSecond(card)
        
        case `dealFirst`:
            return dealFirst(card)
        
        case `initCard`:
            return initCard(card)

        case `placeInDeck`:
            return placeInDeck(card)

        case `dealFirstCard`:
            return dealFirstCard(card, callback)

        case `dealFlopFirst`:
            return dealFlopFirst(card, callback)

        case `dealFlopSecond`:
            return dealFlopSecond(card, callback)

        case `dealFlopThird`:
            return dealFlopThird(card, callback)

        case `dealRiverFirst`:
            return dealRiverFirst(card, callback)

        case `dealRiverSecond`:
            return dealRiverSecond(card, callback)

        default: {
            return null
        }
    }
}
