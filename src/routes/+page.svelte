<script>
	// @ts-nocheck

	import { deck, num_players, current_player, top_card } from '../store';
	import { shuffleDeck } from '../card_functions/shuffle';
	import { distribute } from '../card_functions/distributeDeck';
	import Gamecanvas from '../components/gamecanvas.svelte';
	import { nextTurn } from '../card_functions/change_player';

	// Local variables
	let number_players_input = 2;
	let distributed = false;

	// Change the current player based on the total number of players

	// Change the total number of players
	const updateNumberPlayers = () => {
		num_players.set(number_players_input);
	};
</script>

<h1>Current Player: {$current_player}</h1>
<button on:click={nextTurn}>Switch turns</button>
<button on:click={shuffleDeck($deck)}>Shuffle Deck</button>
<button on:click={() => console.log($top_card)}>Show Top card</button>
<button
	on:click={() => {
		if (!distributed) {
			distribute();
			distributed = true;
		}
	}}>Distribute cards</button
>

<label for="numPlayers">Number of Players: </label>
<input
	type="number"
	placeholder="Number of Players"
	bind:value={number_players_input}
	on:change={updateNumberPlayers}
	id="numPlayers"
/>

{#if distributed}
	<Gamecanvas />
{/if}
