<script lang="ts">
	import { MediaQuery } from 'svelte/reactivity';

	let windowWidth = $state(0);

	const tablet = new MediaQuery('min-width: 768px');
	const laptop = new MediaQuery('min-width: 1024px');
	const desktop = new MediaQuery('min-width: 1280px');

	const handleResize = (e: Event) => {
		const target = e.target as Window;
		windowWidth = target.innerWidth;
	};

	$effect(() => {
		windowWidth = window.innerWidth;
	});
</script>

<svelte:window onresize={handleResize} />

<div class={['fixed z-[99999] bottom-5 w-full', 'flex gap-2 justify-center']}>
	<div class={['bg-black text-white', 'shadow-lg', 'inline-block p-2', 'rounded-md']}>
		Width: {windowWidth}px / {(windowWidth / 16).toFixed(2)}rem
	</div>

	<div class={['bg-black text-white', 'shadow-lg', 'inline-block p-2', 'rounded-md']}>
		{#if desktop.current}
			<span>Dekstop</span>
		{:else if laptop.current}
			<span>Laptop</span>
		{:else if tablet.current}
			<span>Tablet</span>
		{:else}
			<span>Mobile</span>
		{/if}
	</div>
</div>
