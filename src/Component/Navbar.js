import { Link } from "react-router-dom";

const Navbar = () => {





  return (
    <>
      <div className="container">

        <nav className="navbar navbar-expand-lg bg-light fixed-top ">
          <div className="container-fluid">
            <Link className="navbar-brand fs-3" to="/Home">
              <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="/" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
                {/* <form className="d-flex " role="search"> */}
                <input className="form-control me-3 w-55" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
                {/* </form> */}
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-4">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/Home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/refrance">
                    Refrence
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Community">
                    Community
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Blog">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
