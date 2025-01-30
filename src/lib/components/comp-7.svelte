{#snippet sparkleIcon()}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="size-4 fill-current stroke-4"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		><path
			d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
		/></svg
	>
{/snippet}

{#snippet pointerIcon()}
	<svg
		class="size-7 rotate-90 fill-current"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		><path
			d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"
		/></svg
	>
{/snippet}

<div class="bg-accent-yellow-100 max-w-88 min-w-66 space-y-4 rounded-lg p-4 md:w-min">
	<h2 class="text-2xl font-medium md:text-4xl">
		Create and schedule content <span class="text-accent-purple-500 italic">quicker.</span>
	</h2>
	<div class="relative">
		<button
			class="text-accent-purple-500 bg-accent-yellow-500 flex items-center gap-3 rounded-full px-5 py-2 font-medium"
			>Create Post {@render sparkleIcon()}</button
		>
		<div class="relative bottom-2 left-16">{@render pointerIcon()}</div>
	</div>
</div>
