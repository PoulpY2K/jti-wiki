<script>
	import { pwaInfo } from 'virtual:pwa-info';
	import '../app.css';

	$: webManifestLink = pwaInfo ? pwaInfo.webManifest.linkTag : '';
</script>

<!-- eslint-disable svelte/no-at-html-tags -->
<svelte:head>
	{@html webManifestLink}
</svelte:head>

<main>
	<slot />
</main>

{#await import('$lib/ReloadPrompt.svelte') then { default: ReloadPrompt }}
	<ReloadPrompt />
{/await}
