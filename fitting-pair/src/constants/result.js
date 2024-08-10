const textResult = [
	{
		title: 'FEATURES',
		content:
			' consectetur. Vestibulum sit facilisis purus orci commodo ornare. Donec fermentum urna sit sed est cras faucibus in et. Eget habitasse vitae in in dictum viverra velit. Lorem morbi massa neque massa adipiscing pharetra facilisi sagittis viverra. Aliquam nec volutpat nulla aenean. Sed sollicitudin odio felis imperdiet faucibus quis mattis porttitor. Duis vehicula aliquet dui nulla sagittis potenti purus dignissim. Lacus dictum eget pellentesque quis nunc lectus. Dignissim amet ultricies velit etiam aenean.',
	},
	{
		title: 'FEATURES',
		content:
			' consectetur. Vestibulum sit facilisis purus orci commodo ornare. Donec fermentum urna sit sed est cras faucibus in et. Eget habitasse vitae in in dictum viverra velit. Lorem morbi massa neque massa adipiscing pharetra facilisi sagittis viverra. Aliquam nec volutpat nulla aenean. Sed sollicitudin odio felis imperdiet faucibus quis mattis porttitor. Duis vehicula aliquet dui nulla sagittis potenti purus dignissim. Lacus dictum eget pellentesque quis nunc lectus. Dignissim amet ultricies velit etiam aenean.',
	},
];

const SelectedApparel = [
	{
		id: 1,
		url: 'https://www.musinsa.com/app/goods/2507613',
		image: '/images/cloth.png',
	},
	{
		id: 2,
		url: 'https://www.musinsa.com/app/goods/2507613',
		image: '/images/cloth.png',
	},
	{
		id: 3,
		url: 'https://www.musinsa.com/app/goods/2507613',
		image: '/images/cloth.png',
	},
];

const result = [
	{
		id: 0,
		date: 'MAY, 15th',
		text: textResult,
		cloth: SelectedApparel,
	},
	{
		id: 1,
		date: 'April, 10th',
		text: textResult,
		cloth: [
			{
				id: 1,
				url: 'https://www.musinsa.com/app/goods/2507613',
				image: '/images/cloth.png',
			},
			{
				id: 2,
				url: 'https://www.musinsa.com/app/goods/2507613',
				image: '/images/cloth2.png',
			},
			{
				id: 3,
				url: 'https://www.musinsa.com/app/goods/2507613',
				image: '/images/cloth.png',
			},
		],
	},
	{
		id: 2,
		date: 'MAY, 15th',
		text: textResult,
		cloth: [
			{
				id: 1,
				url: 'https://www.musinsa.com/app/goods/2507613',
				image: '/images/cloth.png',
			},
			{
				id: 2,
				url: 'https://www.musinsa.com/app/goods/2507613',
				image: '/images/cloth2.png',
			},
			{
				id: 3,
				url: 'https://www.musinsa.com/app/goods/2507613',
				image: '/images/cloth2.png',
			},
		],
	},
	{
		id: 4,
		date: 'MAY, 14th',
		text: textResult,
		cloth: SelectedApparel,
	},
];

export { textResult, SelectedApparel, result };
