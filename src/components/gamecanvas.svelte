<script>
	// @ts-nocheck

	import { deck, top_card, num_players, players_cards, current_player } from '../store';
	import Number from '../components/cards/number.svelte';
	import Power from '../components/cards/power.svelte';

	const check_card = (card) => {
		if (card['type'] == 'number') {
			return 'number';
		} else {
			if (card['variant'] != null) {
				return 'power normal';
			} else {
				return 'power exclusive';
			}
		}
	};
</script>

<div class="canvas">
	<!-- Top card -->
	<div class="card">
		{#if check_card($top_card) == 'number'}
			<Number number={$top_card['number']} variant={$top_card['variant']} />
		{:else}
			<Power power={$top_card['power']} variant={$top_card['variant']} />
		{/if}
	</div>

	<button on:click={() => console.log($players_cards[$current_player - 1])}>click</button>

	<!-- Player cards -->
	<div class="player_cards">
		{#each $players_cards[$current_player - 1] as card}
			{#if check_card(card) == 'number'}
				<Number number={card['number']} variant={card['variant']} />
			{:else}
				<Power power={card['power']} variant={card['variant']} />
			{/if}
		{/each}
	</div>
</div>

<style>
	.player_cards {
		display: flex;
	}
</style>
