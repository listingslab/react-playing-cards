import { gsap } from "gsap"

let duration = 1;

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
        
        case `placeInDeck`:
            return placeInDeck(card)

        case `dealFirstCard`:
            return dealFirstCard(card, callback)

        default: {
            return null
        }
    }
}
