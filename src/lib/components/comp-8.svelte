<script lang="ts">
	import { sparkleIcon } from './comp-7.svelte';
	import { arrowUp } from './comp-5.svelte';
	const chats = [
		{
			role: 'user',
			text: 'Give me a 5 tips to growth my follower on insta!'
		},
		{
			role: 'ai',
			text: 'Certainly! Here are five tips to help you grow your instagram...'
		}
	];

	const userImage = 'https://avatar.iran.liara.run/public/85';
</script>

<div class="bg-accent-yellow-500 space-y-4 rounded-lg p-4 w-full h-full">
	<h2 class="text-2xl font-medium text-pretty md:text-4xl">Write your content using AI.</h2>

	<div class="relative max-w-55 ">
		<div class="bg-neutral-white flex flex-col gap-4 rounded-xl p-4">
			{#each chats as chat}
				<div
					data-role={chat.role}
					class="flex flex-row-reverse items-start gap-2 data-[role=user]:flex-row"
				>
					<div
						data-role={chat.role}
						class="bg-accent-yellow-100 rounded-2xl p-2 text-start text-sm text-balance data-[role=user]:text-end"
					>
						{chat.text}
					</div>
					<div class="size-9 flex-none">
						{#if chat.role === 'user'}
							<img src={userImage} alt="user" />
						{/if}
						{#if chat.role === 'ai'}
							<div
								class="bg-accent-purple-100 text-accent-purple-500 flex aspect-square items-center justify-center rounded-full"
							>
								{@render sparkleIcon()}
							</div>
						{/if}
					</div>
				</div>
			{/each}
		</div>

		<div class="absolute -right-3 top-12 bg-neutral-white inline-block rounded-full p-4">
			{@render arrowUp("size-13")}
		</div>
	</div>
</div>
