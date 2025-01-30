<script lang="ts">
	import { scale } from 'svelte/transition';
	import { chartData } from './data';
	import { MediaQuery } from 'svelte/reactivity';
	let selected = $state('Mon');
	const activeChartData = $derived(chartData[selected]);
	const maxCount = $derived(
		Math.max(...activeChartData.map(({ count }, index) => count + index * 0.1))
	);

	const desktop = new MediaQuery('min-width: 1280px');
</script>

{#snippet chartElement()}
	{#key activeChartData}
		<ul
			in:scale={{ duration: 200 }}
			class="text-neutral-black/50 flex h-39 md:h-55 items-end justify-between text-xs"
		>
			{#each activeChartData as data, index}
				{@const mossActive = data.count + index * 0.1 === maxCount}
				<li class="relative flex flex-col items-center gap-3">
					{#if mossActive}
						<span
							class={[
								'absolute z-[999] w-max rounded-lg',
								'bg-green-200 text-green-800',
								'px-2 py-1',
								'font-medium shadow',
								'-top-10'
							]}>Most active</span
						>
					{/if}
					<div
						style="height: {data.count * (desktop.current ? 14 : 8)}px"
						class={['bg-accent-purple-500 w-4 md:w-5 rounded-full']}
					></div>
					<span>{data.hour}{data.period.charAt(0)}</span>
				</li>
			{/each}
		</ul>
	{/key}
{/snippet}

<div class="bg-accent-purple-100 h-full space-y-4 rounded-lg p-4 md:space-y-6">
	<div class="text-center text-xl font-medium md:text-start md:text-3xl">
		<h2>Schedule to social media.</h2>
	</div>
	<div class="bg-neutral-white space-y-3 rounded-2xl p-4">
		<p class="text-base font-medium md:text-xl">Best Time to Post</p>
		<hr class="text-neutral-black/20" />
		<div class="space-y-4">
			<ul class="text-neutral-black/50 flex items-center justify-between gap-1 text-xs">
				{#each Object.keys(chartData) as day}
					{@const active = selected === day}
					<li>
						<button
							onclick={() => (selected = day)}
							class={[
								active && 'bg-red-200 font-medium text-red-500',
								'rounded-full px-1.5 py-0.5',
								'cursor-pointer transition',
								'hover:bg-neutral-black/20 focus:outline-none'
							]}>{day}</button
						>
					</li>
				{/each}
			</ul>

			{@render chartElement()}
		</div>
	</div>
	<div class="text-center leading-6 md:text-start">
		<p>Optimize post timings to publish content at the perfect time for your audience.</p>
	</div>
</div>
