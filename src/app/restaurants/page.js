import "bootstrap/dist/css/bootstrap.min.css";
import DataService from "../../data.service";
import Link from "next/link";

export default function Restaurants() {
  let restaurants = DataService.getRestaurants();

  return (
    <div className="container mt-5">
      <div className="row">
        {restaurants.map((r) => (
          <div key={r.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <img
                className="card-img-top"
                alt={r.name}
                src={`https://raw.githubusercontent.com/philippederyck/pws-tournament-restograde-react/master/src/assets/${r.image}`}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{r.name}</h5>
                <h6 className="text-muted">{r.city}</h6>
                <p className="card-text">{r.description}</p>
                <Link href={`/restaurants/${r.id}/reviews`}>
                  <button className="btn btn-primary">
                    Reviews
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}