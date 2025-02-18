"use client";

import { useState, useEffect } from "react";

const ReviewForm = ({ review = {}, restaurants = [], onSubmit }) => {
  const [data, setData] = useState({ ...review });

  useEffect(() => {
    setData({ ...review }); // Sync state when review prop changes
  }, [review]);

  const handleChange = (event) => {
    setData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(data);
  };

  return (
    <div className="row mt-5">
      <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12 text-center">
        <form onSubmit={handleSubmit}>
          <select
            className="form-select mb-3"
            name="restaurant_id"
            value={data.restaurant_id || ""}
            onChange={handleChange}
          >
            <option value="" disabled>Select a restaurant</option>
            {restaurants.map((r) => (
              <option key={r.id} value={r.id}>
                {r.name}
              </option>
            ))}
          </select>

          <input
            type="number"
            className="form-control mb-3"
            placeholder="Your rating"
            name="rating"
            value={data.rating ?? ""}
            onChange={handleChange}
          />

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Title"
            name="title"
            value={data.title ?? ""}
            onChange={handleChange}
          />

          <textarea
            className="form-control mb-3"
            placeholder="How was your experience?"
            name="content"
            value={data.content ?? ""}
            onChange={handleChange}
            rows="4"
          />

          <button type="submit" className="btn btn-primary">
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
