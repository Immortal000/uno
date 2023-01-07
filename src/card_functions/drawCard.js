// @ts-nocheck
import { players_cards, deck, current_player } from '../store';

let c_player, players_deck, current_deck;

players_cards.subscribe((value) => (players_deck = value));
deck.subscribe((value) => (current_deck = value));
current_player.subscribe((value) => (c_player = value));

export const drawCard = () => {
	players_deck[c_player - 1] = [current_deck[0], ...players_deck[c_player - 1]];
	current_deck.splice(0, 1);

	players_cards.set(players_deck);
	deck.set(current_deck);
};
