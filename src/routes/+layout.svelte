<script>
	import Header from './Header.svelte';
	import './styles.css';
	import "../app.css";
</script>

<div class="app">
	<Header />

	<main class="h-full">
		<slot />
	</main>

</div>

<style>
</style>
