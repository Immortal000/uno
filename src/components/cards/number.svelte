<script>
	// @ts-nocheck
	import { card_played } from '../../card_functions/card_played';

	export let number;
	export let variant;
	export let type;
</script>

<div
	class="number_card"
	on:click={card_played(type, variant, number, null)}
	on:keydown={card_played(type, variant, number, null)}
>
	<h1>{number}</h1>
	<h3>{variant}</h3>
</div>

<style>
	.number_card {
		border: 1px solid black;
		width: 20%;
	}
</style>
