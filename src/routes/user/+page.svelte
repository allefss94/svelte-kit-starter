<script lang="ts">
	import { goto } from '$app/navigation';
	import { currentUser } from '$lib/services/User/store';
	import { toast } from '@zerodevx/svelte-toast';
	import { onMount, tick } from 'svelte';
	let user: any = {};
	currentUser.subscribe((current) => (user = current));
	onMount(async () => {
		console.log(user, 'userrrr');
		await tick();
		if (!Object.keys(user).length) {
			toast.push('You are being redirected to Sign-In page');
			goto('/sign-in');
		}
	});
</script>

<div class="page h-screen flex flex-col justify-center items-center">
	<h1 class="my-5 text-4xl">User Basic Info</h1>

	<div class="relative overflow-x-auto w-1/2 rounded-md">
		<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
			<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
				<tr>
					<th scope="col" class="px-6 py-3"> Property name </th>
					<th scope="col" class="px-6 py-3"> Value </th>
				</tr>
			</thead>
			<tbody>
				<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
					<th
						scope="row"
						class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
					>
						User Email
					</th>
					<td class="px-6 py-4"> {user.email} </td>
				</tr>
				<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
					<th
						scope="row"
						class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
					>
						Email was verified
					</th>
					<td class="px-6 py-4"> {user.emailVerified} </td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
