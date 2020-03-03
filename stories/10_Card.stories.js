import React from "react";
import { 
	DealSomeCards,
	PickACard,
	Overlay,
} from "../Cards";

export default {
  title: "React Playing Cards"
};


export const Example_Poker_Hand = () => <DealSomeCards />;
export const Overlay_On_Anything = () => <Overlay />;
export const Pick_a_card = () => <PickACard />;

