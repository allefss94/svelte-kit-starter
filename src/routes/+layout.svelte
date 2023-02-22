<script lang="ts">
	import 'uno.css';
	import '@unocss/reset/tailwind.css';
	import { page } from '$app/stores';
	import Transitions from '$lib/components/Transitions.svelte';
	import { SvelteToast } from '@zerodevx/svelte-toast'
	import type { SvelteToastOptions } from '@zerodevx/svelte-toast'

	const options: SvelteToastOptions = {
		pausable: true,
		duration: 10000,

	}
</script>

<div class="bg-gray-300 overflow-hidden">
	<Transitions url={$page.url}>
		<slot />
	</Transitions>

	<SvelteToast {options}/>
</div>
<style>
	:root {
		--toastWidth: 350px
	}
</style>
