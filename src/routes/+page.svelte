<script lang="ts">
	import {
		MediaWidth,
		Comp1,
		Comp2,
		Comp3,
		Comp4,
		Comp5,
		Comp6,
		Comp7,
		Comp8
	} from '$lib/components';
	import { type Component } from 'svelte';

	const gridAreas = [
		{ rowStart: 1, colStart: 2, rowSpan: 2, colSpan: 2, component: Comp1 },
		{ rowStart: 3, colStart: 2, rowSpan: 2, colSpan: 1, component: Comp2 },
		{ rowStart: 3, colStart: 3, rowSpan: 2, colSpan: 1, component: Comp3 },
		{ rowStart: 1, colStart: 4, rowSpan: 4, colSpan: 1, component: Comp4 },
		{ rowStart: 5, colStart: 3, rowSpan: 2, colSpan: 2, component: Comp5 },
		{ rowStart: 5, colStart: 2, rowSpan: 2, colSpan: 1, component: Comp6 },
		{ rowStart: 1, colStart: 1, rowSpan: 3, colSpan: 1, component: Comp7 },
		{ rowStart: 4, colStart: 1, rowSpan: 3, colSpan: 1, component: Comp8 }
	];
</script>

<div class="bg-accent-purple-100/30 text-neutral-black font-dm-sans min-h-dvh text-lg">
	<main class="container mx-auto px-4 py-8 md:py-50">
		<div
			class="grid grid-cols-1 gap-8 md:grid-cols-4 md:grid-rows-[repeat(2,_150px)_80px_repeat(3,_115px)]"
		>
			{#each gridAreas as area}
				<div
					style="--rowStart: {area.rowStart}; --colStart: {area.colStart}; --rowSpan: {area.rowSpan}; --colSpan: {area.colSpan}"
					class="shadow-lg md:col-span-(--colSpan) md:col-start-(--colStart) md:row-span-(--rowSpan) md:row-start-(--rowStart)"
				>
					<svelte:component this={area.component as Component} />
				</div>
			{/each}
			<MediaWidth />
		</div>
	</main>
</div>
