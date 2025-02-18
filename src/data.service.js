import { restaurants, reviews } from './data';

const DataService = {
	getRestaurants: () => {
		return restaurants;
	},
	getRestaurantById: id => {
		return restaurants.find(r => r.id == id); // eslint-disable-line eqeqeq
	},
	getReviewsByRestaurantId: id => {
		return reviews.filter(r => r.restaurant_id == id); // eslint-disable-line eqeqeq
	},
	getReviewById: id => {
		return reviews.find(r => r.id == id); // eslint-disable-line eqeqeq
	},
	createReview: ({ rating, title, content, restaurant_id }) => {
		let id = Math.max(...reviews.map(r => r.id)) + 1;
		let review = { id, rating, title, content, restaurant_id };
		reviews.push(review);

		return review;
	},
	updateReview: ({ id, rating, title, content, restaurant_id }) => {
		let review = DataService.getReviewById(id);
		Object.assign(review, { rating, title, content, restaurant_id });

		return review;
	},
};

export default DataService;
