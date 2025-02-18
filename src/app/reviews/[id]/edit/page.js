"use client";

import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import DataService from "../../../../data.service";
import ReviewForm from "@/components/form";

export default function UpdateReview() {
  const router = useRouter();
  const { id } = useParams();
  const [review, setReview] = useState(null);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    if (id) {
      setReview(DataService.getReviewById(id)); 
      setRestaurants(DataService.getRestaurants());
    }
  }, [id]);

  const handleSubmit = (data) => {
    const updatedReview = DataService.updateReview(data);
    router.push(`/restaurants/${updatedReview.restaurant_id}/reviews`);
  };

  if (!review) return <div>Loading...</div>;

  return <ReviewForm review={review} restaurants={restaurants} onSubmit={handleSubmit} />;
}
