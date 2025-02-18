'use client'

import DataService from "../../../../data.service";
import { useParams } from 'next/navigation';
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";

const RestaurantSingleReview = ({ review: r }) => {
  return (
    <div key={r.id} className="card w-75 mt-4 mb-2">
      <div className="card-body">
        <h4 className="card-title">
          <span className="font-weight-bold">{r.rating}/10</span>
          <span className="font-weight-light ms-3">{r.title}</span>
          <span className="float-end">
            <Link href={`/reviews/${r.id}/edit`}>
              <button className="p-2 small btn btn-primary align-self-end">
                Edit
              </button>
            </Link>
          </span>
        </h4>
        <p className="card-text pt-2" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(r.content) }} />
      </div>
    </div>
  );
};

export default function Reviews() {
  const { id } = useParams();
  let restaurant = DataService.getRestaurantById(id);
  let reviews = DataService.getReviewsByRestaurantId(id);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <h2>{restaurant.name}</h2>
          <h6>{restaurant.description}</h6>
        </div>
        {reviews.map((r) => (
          <RestaurantSingleReview key={r.id} review={r} />
        ))}
      </div>
    </div>
  );
}
