<script>
	import 'uno.css';
	import '@unocss/reset/tailwind.css';
	import { page } from '$app/stores';
	import Transitions from '$lib/components/Transitions.svelte';
</script>

<div class="bg-gray-300 overflow-hidden">
	<Transitions url={$page.url}>
		<slot />
	</Transitions>
</div>
