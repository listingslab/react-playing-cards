import { gsap } from "gsap"

let duration = 1;

const removeCard = (card, callback) => {
    gsap.to(card, {
        duration: 1 * duration,
        rotation: 45,
        x: '100vw',
        scale: 0.25,
        onComplete: callback,
    });
}

const playCard = (card, callback) => {
    gsap.set(card, {
        rotation: -45,
        opacity: 1,
        x: 0,
        scale: 0.25
    });
    gsap.to(card, {
        duration: 1 * duration,
        rotation: 0,
        x: '50vw - 100px',
        scale: 1,
        onComplete: () => {
            removeCard(card, callback)
        }
    });
}

const makeVisible = (card, callback) => {
     gsap.set(card, {
        opacity: 1,
    });
}

const setToHidden = (card) => {
	 gsap.set(card, {
        rotationY: 90
    });
}

const setToShown = (card) => {
     gsap.set(card, {
        rotationY: 0
    });
}


const hide = (card, callback) => {
     gsap.to(card, {
        duration: 0.5 * duration,
        rotationY: -90,
        onComplete: callback,
    });
}

const show = (card, callback) => {
	 gsap.to(card, {
        duration: 0.5 * duration,
        rotationY: 0,
        onComplete: callback,
    });
}

export const overlay = (animation, card, callback) => {
    switch (animation) {

        case `playCard`:
            return playCard(card, callback)

        case `makeVisible`:
            return makeVisible(card, callback)

        case `setToShown`:
            return setToShown(card, callback)

        case `setToHidden`:
            return setToHidden(card, callback)

        case `hide`:
            return hide(card, callback)

        case `show`:
            return show(card, callback)

        default: {
            return null
        }
    }
}
