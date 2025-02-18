import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container-fluid p-0">
        <nav className="navbar navbar-light bg-light mb-4 px-5">
          <a className="navbar-brand" href="#">PWS Tournament Restograde</a>
          <div>
            <Link href="/restaurants">
              <button className="btn btn-primary btn-sm me-2">
                View Restaurants
              </button>
            </Link>
            <Link href="/reviews/new">
              <button className="btn btn-primary btn-sm me-2">
                Add Review
              </button>
            </Link>
          </div>
        </nav>
        
        <main className="container-fluid px-5">{children}</main>

        <footer className="page-footer font-small bg-light pt-2 mt-4">
          <div className="container-fluid text-center text-md-left">
            <div className="advertisement-row row m-3">
              <div id="advertisement-container" className="advertisement-col col-lg-8 offset-lg-2 text-center">
                Want to see your advertisement here? Get in touch!
              </div>
            </div>
          </div>
          <div className="footer-copyright text-center py-3">
            Restograde is a training application provided by{' '}
            <a href="https://pragmaticwebsecurity.com/" target="_blank" rel="noopener noreferrer">
              Pragmatic Web Security
            </a>
            . All data in this application is fictional. Photos from{' '}
            <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">
              Unsplash
            </a>
            .
          </div>
        </footer>
      </body>
    </html>
  );
}
