let restaurants = [
	{
		id: 1,
		name: 'L’autre chose',
		city: 'Paris, France',
		image: 'restaurant1.jpg',
		description:
			'For those who love lobster, beef, oysters,, champagne ... Cozy dining or a quick lunch at the counter.',
	},
	{
		id: 2,
		name: 'Luke’s',
		city: 'Nashville, TN, USA',
		image: 'restaurant2.jpg',
		description:
			'Luke’s is a family restaurant that wants to offer the tastiest gourmet burgers in Nashville and far beyond.',
	},
	{
		id: 3,
		name: 'Unter dem Turm',
		city: 'Berlin, Germany',
		image: 'restaurant3.jpg',
		description:
			'Unter den Turm serves local cuisine in a modern setting, but with a nostalgic touch to traditional rural life.',
	},
];

let reviews = [
	{
		id: 1,
		rating: 3,
		title: 'Too saucy!',
		content:
			'The quality of the food is poor. Too much sauce on everything. I would not return to this place. Price is way too high for what you get.',
		restaurant_id: 0,
	},
	{
		id: 2,
		rating: 1,
		title: 'Dual standards',
		content:
			'As locals we can say that this was our last visit. We were surprised by the downfall to his place. It used to be a very good price/quality, but now we are really disappointed. I ordered the same starter as my husband, but got half the portion that he got.  After we informed the staff, the owner came to yell at us. I have never been more humiliated in my life. ',
		restaurant_id: 0,
	},
	{
		id: 3,
		rating: 6,
		title: 'Just so so',
		content:
			'We were well received, the staff was OK, but we didn’t like the food. Not spectacular, but also not bad.',
		restaurant_id: 0,
	},
	{
		id: 4,
		rating: 9,
		title: 'The place to be',
		content:
			'The Restaurant is right in the center of town. It has top food en it’s a very nice place with a friendly and professional staff',
		restaurant_id: 1,
	},
	{
		id: 5,
		rating: 8,
		title: 'Friendly and delicious!',
		content: 'An incredibly friendly hostess. Nice atmosphere, a great place to eat. We will be coming back',
		restaurant_id: 1,
	},
	{
		id: 6,
		rating: 7,
		title: 'A bit expensive, bot not too bad',
		content: 'The service was slow. The food was OK, but the portions where to small for what you pay',
		restaurant_id: 1,
	},
	{
		id: 7,
		rating: 4,
		title: 'Go somewhere else',
		content: 'Bad and slow service. The quality of the food is really low. Way too expensive for what you get.',
		restaurant_id: 2,
	},
	{
		id: 8,
		rating: 4,
		title: 'Great parking, crappy restaurant',
		content:
			'Fine location, lots of parking. But those are the only good things. We had the suggestion menu. The meat wasn’t eatable, you had to look for the salad with a magnifier. There were exactly 3 pieces of fish in the stew. No we won’t be coming back.',
		restaurant_id: 2,
	},
	{
		id: 9,
		rating: 1,
		title: 'Kitchen nightmares!',
		content:
			"In contrast to the pleasant setting, the quality of the dishes was substandard. A steak that is heavily overcooked, a fish pan that looks more like a plate of soup, mashed potatoes from a pack and staff that comes to ask if everything is alright but when we said 'no' did not respond. I dare to say that I have never eaten something so bad.",
		restaurant_id: 2,
	},
];

export { restaurants, reviews };
