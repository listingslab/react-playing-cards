import { TimelineMax, Power2 } from "gsap";

const ani = {
  i: 0,
  letters: [
    {
      divId: `blue-c`,
      cursorPositionLeft: 10
    },
    {
      divId: `blue-o`,
      cursorPositionLeft: 52
    },
    {
      divId: `blue-d`,
      cursorPositionLeft: 96
    },
    {
      divId: `blue-e`,
      cursorPositionLeft: 139
    },
    {
      divId: `white-w`,
      cursorPositionLeft: 186
    },
    {
      divId: `white-o`,
      cursorPositionLeft: 235
    },
    {
      divId: `white-r`,
      cursorPositionLeft: 271
    },
    {
      divId: `white-x`,
      cursorPositionLeft: 300
    },
    {
      divId: `curly-brace`,
      cursorPositionLeft: 335
    }
  ]
};

const fade = baseDuration => {
  const letterDivs = [];
  for (var i = 0; i < ani.letters.length; i++) {
    letterDivs.push(document.getElementById(ani.letters[i].divId));
  }
  var tl = new TimelineMax({
    onComplete: () => {
      ani.i = 0;
    }
  });
  tl.staggerTo(letterDivs, baseDuration / 2, {
    opacity: "0",
    repeat: 2,
    yoyo: true,
    cycle: {
      delay: function(i) {
        return (
          (Math.abs(Math.floor(letterDivs.length / 2) - i) * baseDuration) / 2
        );
      }
    }
  });
};

const startTimer = (baseDuration, callBack) => {
  const div = document.getElementById(`cursor`);
  const timeline = new TimelineMax({ repeat: -1 });
  showCursor();
  timeline.to(div, baseDuration * 0.4, {
    opacity: "0.75",
    ease: Power2.easeOut,
    onComplete: () => {
      tick(baseDuration, callBack);
    }
  });
};

const printLetter = (divId, baseDuration) => {
  const div = document.getElementById(divId);
  const timeline = new TimelineMax();
  timeline.to(div, baseDuration * 2, {
    opacity: "1",
    ease: Power2.easeOut
  });
};

const moveCursor = (baseDuration, left) => {
  const div = document.getElementById(`cursor`);
  const timeline = new TimelineMax();
  timeline.to(div, baseDuration * 0.75, {
    left,
    ease: Power2.easeOut
  });
};

const hideCursor = baseDuration => {
  //   const div = document.getElementById(`cursor`);
  //   const timeline = new TimelineMax();
  //   timeline.to(div, baseDuration * 0.5, {
  //     rotationY: -90,
  //     ease: Power2.easeOut
  //   });
};

const showCursor = baseDuration => {
  const div = document.getElementById(`cursor`);
  moveCursor(baseDuration, 0);
  const timeline = new TimelineMax();
  timeline.to(div, baseDuration * 0.5, {
    opacity: "1",
    // rotationY: "0",
    ease: Power2.easeOut
  });
};

const tick = (baseDuration, callBack) => {
  const tick = ani.i++;
  switch (tick) {
    case 0:
      moveCursor(baseDuration, ani.letters[0].cursorPositionLeft);
      break;
    case 1:
      printLetter(ani.letters[0].divId, baseDuration);
      break;
    case 2:
      moveCursor(baseDuration, ani.letters[1].cursorPositionLeft);
      break;
    case 3:
      printLetter(ani.letters[1].divId, baseDuration);
      break;
    case 4:
      moveCursor(baseDuration, ani.letters[2].cursorPositionLeft);
      break;
    case 5:
      printLetter(ani.letters[2].divId, baseDuration);
      break;
    case 6:
      moveCursor(baseDuration, ani.letters[3].cursorPositionLeft);
      break;
    case 7:
      printLetter(ani.letters[3].divId, baseDuration);
      break;
    case 8:
      moveCursor(baseDuration, ani.letters[4].cursorPositionLeft);
      break;
    case 9:
      printLetter(ani.letters[4].divId, baseDuration);
      break;
    case 10:
      moveCursor(baseDuration, ani.letters[5].cursorPositionLeft);
      break;
    case 11:
      printLetter(ani.letters[5].divId, baseDuration);
      break;
    case 12:
      moveCursor(baseDuration, ani.letters[6].cursorPositionLeft);
      break;
    case 13:
      printLetter(ani.letters[6].divId, baseDuration);
      break;
    case 14:
      moveCursor(baseDuration, ani.letters[7].cursorPositionLeft);
      break;
    case 15:
      printLetter(ani.letters[7].divId, baseDuration);
      break;
    case 16:
      moveCursor(baseDuration, ani.letters[8].cursorPositionLeft);
      break;
    case 17:
      printLetter(ani.letters[8].divId, baseDuration);
      break;
    case 18:
      hideCursor(baseDuration);
      callBack({ eventId: `logo-complete` });
      break;
    default:
  }
};

export function animate(animation, baseDuration, callBack) {
  switch (animation) {
    case `fade`:
      fade(baseDuration);
      break;
    case `start`:
      startTimer(baseDuration, callBack);
      break;
    default:
  }
}
