<script lang="ts">
	const chartData = [
		{
			hour: 12,
			period: 'am'
		},
		{
			hour: 3,
			period: 'am'
		},
		{
			hour: 6,
			period: 'am'
		},
		{
			hour: 9,
			period: 'am'
		},
		{
			hour: 12,
			period: 'pm'
		},
		{
			hour: 3,
			period: 'pm'
		},
		{
			hour: 6,
			period: 'pm'
		},
		{
			hour: 9,
			period: 'pm'
		}
	];
</script>

<div>
	<div>
		<h2>Schedule to social media.</h2>
	</div>
	<div>
		<p>Best Time to Post</p>
		<hr />
		<div>
			<ul>
				<li>Mon</li>
				<li>Tue</li>
				<li>Wed</li>
				<li>Thu</li>
				<li>Sat</li>
				<li>Sun</li>
			</ul>

			<ul>
				{#each chartData as data}
					<li>
						<div></div>
						<span>{data.hour}{data.period.charAt(0)}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<div>
		<p>Optimize post timings to publish content at the perfect time for your audience.</p>
	</div>
</div>
