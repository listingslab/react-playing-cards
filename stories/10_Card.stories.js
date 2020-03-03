import React from "react";
import { 
	DealSomeCards,
	PickACard,
	VideoOverlay,
} from "../Cards";

export default {
  title: "React Playing Cards"
};


export const Example_Hand = () => <DealSomeCards />;
export const Pick_a_card = () => <PickACard />;
export const Overlay_Onto_Anything = () => <VideoOverlay />;
