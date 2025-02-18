"use client";

import { useRouter } from "next/navigation";
import DataService from "../../../data.service";
import ReviewForm from "@/components/form";

export default function CreateReview() {
  const router = useRouter();
  const restaurants = DataService.getRestaurants();
  const review = { restaurant_id: restaurants[0]?.id || "" };

  const handleSubmit = (data) => {
    const newReview = DataService.createReview(data);
    router.push(`/restaurants/${newReview.restaurant_id}/reviews`);
  };

  return <ReviewForm review={review} restaurants={restaurants} onSubmit={handleSubmit} />;
}
