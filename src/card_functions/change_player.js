// @ts-nocheck
import { current_player, num_players } from '../store';

let c_player, n_players;
current_player.subscribe((value) => (c_player = value));
num_players.subscribe((value) => (n_players = value));

// NEED TO UPDATE TOP CARD AFTER EVERY TURN
export const nextTurn = () => {
	if (c_player < n_players) {
		current_player.update((n) => n + 1);
	} else {
		current_player.set(1);
	}
};
