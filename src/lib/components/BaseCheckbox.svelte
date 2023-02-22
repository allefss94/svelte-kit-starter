<script lang="ts">
	export let value: boolean = false;
	export let label: string = 'Default Label';
</script>

<label for={label}>{label}</label>
<input type="checkbox" id={label} bind:checked={value} />

<style></style>
