{#snippet star()}
	<svg
		class="fill-secondary stroke-secondary size-7"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="1"
		stroke-linecap="round"
		stroke-linejoin="round"
		><path
			d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
		/></svg
	>
{/snippet}

<div class="bg-primary text-neutral-white space-y-6 rounded-lg p-11 max-w-136">
	<div class="text-center text-4xl font-medium text-balance md:text-5xl">
		<h1>Social Media <span class="text-secondary">10x</span> Faster with AI</h1>
	</div>
	<div class="space-y-2.5 text-center">
		<div class="flex items-center justify-center gap-3">
			{#each { length: 5 }}
				{@render star()}
			{/each}
		</div>
		<p class="text-accent-purple-100">Over 4,000 5-star reviews</p>
	</div>
</div>
