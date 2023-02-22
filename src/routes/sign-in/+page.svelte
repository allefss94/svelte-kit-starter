<script lang="ts">
	import BaseInput from '$lib/components/BaseInput.svelte';
	import { SignInWithCredentials } from '$lib/services/User/auth';
	import { currentUser } from '$lib/services/User/store';

	import type { User } from '$lib/types/user';
	/** @type {import('$lib/types/user').User}*/

	let user: User = {
		email: '',
		password: ''
	};

	let LoggedInUser: any = null;
	currentUser.subscribe((current) => (LoggedInUser = current));

	$: console.log('user from store', LoggedInUser);

	function handleSubmit() {
		SignInWithCredentials(user);
	}
</script>

<div class="flex justify-center items-center h-screen max-w-screen overflow-hidden">
	<div class="w-full hidden lg:flex justify-center items-center bg-light-300 h-full">Image and texts</div>
	<div class="w-full flex justify-center items-center">
		<form class="flex flex-col w-8/12 md:w-2/3 bg-gray-400 rounded px-4 py-3 text-left ">
			<h1 class="text-3xl text-white">SignIn</h1>
			<p class="text-md text-gray-700">Enter your credential to access the plataform:</p>
			<BaseInput
				label="Email"
				placeholder="bestEmail@email.com"
				type="text"
				bind:value={user.email}
			/>
			<BaseInput label="Password" placeholder="Secret" type="password" bind:value={user.password} />
			<button
				on:click={handleSubmit}
				class="py-1rem text-white font-bold tracking-wide rounded mt-4 bg-indigo-700 hover:bg-indigo-800 transition-all duration-300"
			>
				Entrar
			</button>
		</form>
	</div>
</div>
