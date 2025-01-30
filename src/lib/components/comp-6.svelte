<script lang="ts">
	const images = [
		'https://avatar.iran.liara.run/public/5',
		'https://avatar.iran.liara.run/public/40',
		'https://avatar.iran.liara.run/public/85'
	];
</script>

<div class="bg-neutral-white rounded-lg p-4 min-w-68 max-w-88 md:w-min">
	<div class="flex items-center gap-1 text-5xl font-medium mb-2">
		<span class="-mt-2 leading-0">&gt;</span>
		<h2>56%</h2>
	</div>

	<p>faster audience growth</p>

	<div class="flex items-center mt-6">
		{#each images as image, index}
			<img
				style="--index: {99 + index}; --left: {index === 0 ? 0 : 10}px"
				class="rounded-full relative z-(--index) -ml-(--left) size-15 drop-shadow-lg"
				src={image}
				alt="people-{index}"
			/>
		{/each}
	</div>
</div>
