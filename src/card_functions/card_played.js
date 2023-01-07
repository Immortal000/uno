// @ts-nocheck
import { top_card, current_player, players_cards } from '../store';

let current_top_card;
let c_player;
let players_deck;

top_card.subscribe((value) => (current_top_card = value));
current_player.subscribe((value) => (c_player = value));
players_cards.subscribe((value) => (players_deck = value));

export const card_played = (type, variant, number, power) => {
	let card_removed = false;
	if (type == 'number' && current_top_card['type'] == 'number') {
		if (variant == current_top_card['variant'] || number == current_top_card['number']) {
			let played_card = { type: 'number', variant: variant, number: number };
			top_card.set(played_card);

			for (let i = 0; i < players_deck[c_player - 1].length; i++) {
				let card_to_check = players_deck[c_player - 1][i];
				if (card_to_check['variant'] == variant && card_to_check['number'] == number) {
					if (card_removed == false) {
						players_deck[c_player - 1].splice(i, 1);
						console.log(players_deck);
						players_cards.set(players_deck);
						card_removed = true;
					}
				}
			}
		}
	}

	card_removed = false;
};
