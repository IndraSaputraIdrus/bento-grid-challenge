<script lang="ts">
	function getMonthYearWeek(date = new Date()) {
		const year = date.getFullYear();
		const month = date.toLocaleString('default', { month: 'long' }); // Nama bulan
		const week = getISOWeek(date); // Minggu dalam tahun (ISO-8601)

		return { year, month, week };
	}

	function getISOWeek(date: Date) {
		const tempDate = new Date(date.getTime());
		tempDate.setDate(tempDate.getDate() + 4 - (tempDate.getDay() || 7)); // Set ke Kamis
		const startOfYear = new Date(tempDate.getFullYear(), 0, 1); // Awal tahun
		const weekNumber = Math.ceil(((+tempDate - +startOfYear) / 86400000 + 1) / 7); // Hitung minggu
		return weekNumber;
	}

	const currentDate = $derived(getMonthYearWeek());
</script>

{#snippet checkmark(className: string)}
	<svg
		class={className}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg
	>
{/snippet}

{#snippet calendar()}
	<div class="absolute w-[70%] overflow-hidden rounded-lg">
		<div
			class="text-neutral-white bg-accent-purple-500 flex items-center justify-between px-3 py-2 text-sm font-medium"
		>
			<p>{currentDate.month} {currentDate.year}</p>
			<p>Week {currentDate.week}</p>
		</div>
		<div class="bg-neutral-white grid grid-cols-4 gap-4 p-4">
			{#each { length: 12 }, index}
				{#if index < 4}
					<span
						class="bg-accent-purple-500 block flex size-5 items-center justify-center rounded-full"
						>{@render checkmark('size-3.5 stroke-3 text-neutral-white')}</span
					>
				{:else}
					<span class="bg-accent-yellow-100 block size-5 rounded"></span>
				{/if}
			{/each}
		</div>
	</div>
{/snippet}

<div
	class="bg-accent-yellow-500 relative space-y-4 overflow-hidden rounded-lg p-4 pb-32 md:pb-24 h-full"
>
	<div class="text-start text-2xl/6 font-medium text-balance md:text-3xl/6">
		<h2>Maintain a consistent posting schedule.</h2>
	</div>
	{@render calendar()}
</div>
