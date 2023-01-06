<script>
	// @ts-nocheck

	export let power;
	export let variant;
</script>

<div class="power_card">
	{#if variant == null}
		<h1>{power}</h1>
	{:else}
		<h1>{power}</h1>
		<h3>{variant}</h3>
	{/if}
</div>

<style>
	.power_card {
		border: 1px solid black;
		width: 20%;
	}
</style>
