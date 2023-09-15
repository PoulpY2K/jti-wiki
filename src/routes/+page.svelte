<script lang='ts'>
	import { onMount } from 'svelte';

	onMount(() => {
		console.log('Je suis Svelte !');
	});
</script>

<div class='min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-jti'>
	<h1 class='text-9xl font-jti text-white'>Jujutsu Tech International</h1>
	<h2 class='text-7xl font-jti text-white'>Wiki</h2>
</div>

<style lang='postcss'>
    :global(html) {
        background-color: theme(colors.gray.100);
    }


</style>