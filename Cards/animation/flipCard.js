import { gsap } from "gsap"

let duration = 1;

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

export const flipCard = (animation, card, callback) => {
    switch (animation) {
        

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
