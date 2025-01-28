type Record = {
	hour: number;
	period: string;
	count: number;
};

type ChartData = {
	[day: string]: Record[];
};

export const chartData: ChartData = {
	Mon: [
		{ hour: 12, period: 'am', count: 4 },
		{ hour: 3, period: 'am', count: 5 },
		{ hour: 6, period: 'am', count: 10 },
		{ hour: 9, period: 'am', count: 8 },
		{ hour: 12, period: 'pm', count: 6 },
		{ hour: 3, period: 'pm', count: 7 },
		{ hour: 6, period: 'pm', count: 9 },
		{ hour: 9, period: 'pm', count: 6 }
	],
	Tue: [
		{ hour: 12, period: 'am', count: 6 },
		{ hour: 3, period: 'am', count: 10 },
		{ hour: 6, period: 'am', count: 5 },
		{ hour: 9, period: 'am', count: 1 },
		{ hour: 12, period: 'pm', count: 7 },
		{ hour: 3, period: 'pm', count: 2 },
		{ hour: 6, period: 'pm', count: 8 },
		{ hour: 9, period: 'pm', count: 4 }
	],
	Wed: [
		{ hour: 12, period: 'am', count: 9 },
		{ hour: 3, period: 'am', count: 9 },
		{ hour: 6, period: 'am', count: 4 },
		{ hour: 9, period: 'am', count: 1 },
		{ hour: 12, period: 'pm', count: 10 },
		{ hour: 3, period: 'pm', count: 9 },
		{ hour: 6, period: 'pm', count: 5 },
		{ hour: 9, period: 'pm', count: 7 }
	],
	Thu: [
		{ hour: 12, period: 'am', count: 6 },
		{ hour: 3, period: 'am', count: 2 },
		{ hour: 6, period: 'am', count: 9 },
		{ hour: 9, period: 'am', count: 2 },
		{ hour: 12, period: 'pm', count: 1 },
		{ hour: 3, period: 'pm', count: 2 },
		{ hour: 6, period: 'pm', count: 6 },
		{ hour: 9, period: 'pm', count: 5 }
	],
	Fri: [
		{ hour: 12, period: 'am', count: 1 },
		{ hour: 3, period: 'am', count: 1 },
		{ hour: 6, period: 'am', count: 7 },
		{ hour: 9, period: 'am', count: 8 },
		{ hour: 12, period: 'pm', count: 1 },
		{ hour: 3, period: 'pm', count: 7 },
		{ hour: 6, period: 'pm', count: 10 },
		{ hour: 9, period: 'pm', count: 9 }
	],
	Sat: [
		{ hour: 12, period: 'am', count: 2 },
		{ hour: 3, period: 'am', count: 3 },
		{ hour: 6, period: 'am', count: 10 },
		{ hour: 9, period: 'am', count: 3 },
		{ hour: 12, period: 'pm', count: 5 },
		{ hour: 3, period: 'pm', count: 4 },
		{ hour: 6, period: 'pm', count: 9 },
		{ hour: 9, period: 'pm', count: 4 }
	],
	Sun: [
		{ hour: 12, period: 'am', count: 5 },
		{ hour: 3, period: 'am', count: 8 },
		{ hour: 6, period: 'am', count: 9 },
		{ hour: 9, period: 'am', count: 7 },
		{ hour: 12, period: 'pm', count: 1 },
		{ hour: 3, period: 'pm', count: 7 },
		{ hour: 6, period: 'pm', count: 10 },
		{ hour: 9, period: 'pm', count: 9 }
	]
};
