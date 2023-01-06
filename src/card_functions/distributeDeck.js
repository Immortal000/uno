// @ts-nocheck
import { deck, num_players, top_card, players_cards } from '../store';

export const distribute = () => {
	// Getting the player count and the deck
	let players_count;
	let current_deck;
	let current_cards;

	deck.subscribe((value) => (current_deck = value));
	num_players.subscribe((value) => (players_count = value));
	players_cards.subscribe((value) => (current_cards = value));

	players_cards.set([]);

	for (let i = 0; i < players_count; i++) {
		let new_cards = current_deck.splice(0, 7);
		current_cards.push(new_cards);
	}

	deck.set(current_deck);
	if (current_deck[0]['type'] == 'number') {
		top_card.set(current_deck[0]);
	} else {
		while (current_deck[0]['type'] != 'number') {
			current_deck.push(current_deck[0]);
			current_deck = current_deck.slice(1, current_deck.length);
		}

		top_card.set(current_deck[0]);
	}

	console.log(current_cards);
};
