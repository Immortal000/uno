<script>
	// @ts-nocheck

	import { deck, num_players, current_player, top_card } from '../store';
	import { shuffleDeck } from '../card_functions/shuffle';

	// Local variables
	let number_players_input = 2;

	// Change the current player based on the total number of players
	// NEED TO UPDATE TOP CARD AFTER EVERY TURN
	const nextTurn = () => {
		if ($current_player < $num_players) {
			current_player.update((n) => n + 1);
		} else {
			current_player.set(1);
		}
	};

	// Change the total number of players
	const updateNumberPlayers = () => {
		num_players.set(number_players_input);
	};
</script>

<h1>Current Player: {$current_player}</h1>
<button on:click={nextTurn}>Switch turns</button>
<button on:click={shuffleDeck($deck)}>Shuffle Deck</button>
<button on:click={() => console.log($top_card)}>Show Top card</button>

<label for="numPlayers">Number of Players: </label>
<input
	type="number"
	placeholder="Number of Players"
	bind:value={number_players_input}
	on:change={updateNumberPlayers}
	id="numPlayers"
/>
