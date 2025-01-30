<script lang="ts">
	const images = [
		'https://avatar.iran.liara.run/public/5',
		'https://avatar.iran.liara.run/public/40',
		'https://avatar.iran.liara.run/public/85'
	];
</script>

<div class="bg-neutral-white h-full w-full rounded-lg p-4">
	<div class="mb-2 flex items-center gap-1 text-5xl font-medium md:text-6xl">
		<span class="-mt-2 leading-0">&gt;</span>
		<h2>56%</h2>
	</div>

	<p class="md:text-xl">faster audience growth</p>

	<div class="mt-6 flex items-center">
		{#each images as image, index}
			<img
				style="--index: {99 + index}; --left: {index === 0 ? 0 : 10}px"
				class="relative z-(--index) -ml-(--left) size-15 rounded-full drop-shadow-lg md:size-20"
				src={image}
				alt="people-{index}"
			/>
		{/each}
	</div>
</div>
