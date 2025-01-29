<script lang="ts"></script>

{#snippet badge(text: string)}
	<span class="block rounded-lg bg-green-200 px-1 py-0.5 text-xs text-green-700">{text}</span>
{/snippet}

{#snippet chartBadge()}
	<div class="bg-neutral-white absolute -right-8 -bottom-5 z-[99] flex rounded-full p-2.5">
		<div class="flex items-center gap-2">
			<div class="bg-accent-yellow-500 flex size-11 items-center justify-center rounded-full">
				<svg
					class="text-accent-purple-500 size-8"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></svg
				>
			</div>

			<div>
				<span class="text-muted text-sm">Followers</span>
				<div class="-mt-1 flex items-center gap-2">
					<p class="text-xl">89,532</p>
					{@render badge('+120%')}
				</div>
			</div>
		</div>
	</div>
{/snippet}

{#snippet chart()}
	<div class="bg-neutral-white relative w-full max-w-49 rounded-xl p-6">
		<div>
			<span class="text-muted text-sm">Follower Growth</span>
			<div class="flex items-center justify-between">
				<h3 class="text-2xl font-medium">20,642</h3>
				{@render badge('+490%')}
			</div>
		</div>

		<ul class="mt-4 flex items-end justify-between">
			{#each { length: 5 }, index}
				{@const height = (index + 2 * 2) * 10}
				<li style="height: {height}px" class="bg-accent-purple-500 w-4.5 rounded-full">
					<span class="sr-only">{index + 1}</span>
				</li>
			{/each}
		</ul>

		{@render chartBadge()}
	</div>
{/snippet}

<div class="bg-accent-purple-500 max-w-136 rounded-lg p-4 md:pb-9">
	<div class="flex flex-col items-center gap-13 md:flex-row">
		{@render chart()}
		<div class="text-neutral-white text-center text-2xl font-medium text-balance md:text-start md:text-4xl md:text-pretty">
			<h2>Grow followers with non-stop content.</h2>
		</div>
	</div>
</div>
