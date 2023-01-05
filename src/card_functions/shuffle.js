// @ts-nocheck
import { deck, top_card } from '../store';

// Shuffles the deck and updates the store value: Different every time shuffled
export const shuffleDeck = (array) => {
	for (var i = array.length - 1; i > 0; i--) {
		var rand = Math.floor(Math.random() * (i + 1));
		[array[i], array[rand]] = [array[rand], array[i]];
	}

	deck.set(array);
	top_card.set(array[0]);
};
