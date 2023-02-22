<script lang="ts">
	import 'uno.css';
	import '@unocss/reset/tailwind.css';
</script>

<div
	class="flex flex-col justify-center items-center h-screen max-w-screen overflow-hidden px-1rem text-center"
>
	<div class="hero w-5/8 mb-10 flex flex-col items-center">
		<h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
		<h1 class="flex items-center text-4xl min-h-12rem">Awesome Title // Brand Image</h1>
		<p class="text-lg ">
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti aliquam reiciendis, ut
			fugiat nostrum aperiam repellat tempora natus aliquid quos cum ea pariatur nobis ipsam, velit
			repellendus quas debitis necessitatibus!
		</p>
	</div>

	<div class="flex items-center">
		<a
			href="/sign-in"
			class="cursor-pointer flex place-items-center mx-3 px-2 h-12 bg bg-white rounded-xl hover:shadow hover:shadow-gray-400 transition-shadow duration-300"
			>Sign In</a
		>
		<p
			class="cursor-pointer flex place-items-center px-2 h-12 bg-white rounded-xl hover:shadow hover:shadow-gray-400 transition-shadow duration-300"
		>
			You don't have an account?<a
				href="/register"
				class=" underline underline-2px underline-indigo-600">click here</a
			>
		</p>
	</div>
	<!-- <button on:click={()=>toast.push('Testing Toast')}>Open new Toast</button> -->
</div>
