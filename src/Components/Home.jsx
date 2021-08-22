function Home() {
  return (
    <div className="page-content-wrapper">
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
        <div className="d-flex align-items-center">
          <i className="fas fa-align-left primary-text fs-4 me-3 menu-toggle"></i>
          <h2 className="fs-2 m-0">Dashboard</h2>
        </div>

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

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle second-text fw-bold"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-user me-2"></i>John Doe
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container-fluid px-4">
        <div className="row g-3 my-2">
          <div className="col-md-3">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">720</h3>
                <p className="fs-5">Products</p>
              </div>
              <i className="fas fa-gift fs-1 primary-text border rounded-full secondary-bg p-3"></i>
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">4920</h3>
                <p className="fs-5">Sales</p>
              </div>
              <i className="fas fa-hand-holding-usd fs-1 primary-text border rounded-full secondary-bg p-3"></i>
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">3899</h3>
                <p className="fs-5">Delivery</p>
              </div>
              <i className="fas fa-truck fs-1 primary-text border rounded-full secondary-bg p-3"></i>
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">%25</h3>
                <p className="fs-5">Increase</p>
              </div>
              <i className="fas fa-chart-line fs-1 primary-text border rounded-full secondary-bg p-3"></i>
            </div>
          </div>
        </div>

        <div className="row my-5">
          <h3 className="fs-4 mb-3">Recent Orders</h3>
          <div className="col">
            <table className="table bg-white rounded shadow-sm  table-hover">
              <thead>
                <tr>
                  <th scope="col" width="50">
                    #
                  </th>
                  <th scope="col">Product</th>
                  <th scope="col">Customer</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Television</td>
                  <td>Jonny</td>
                  <td>$1200</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Laptop</td>
                  <td>Kenny</td>
                  <td>$750</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Cell Phone</td>
                  <td>Jenny</td>
                  <td>$600</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Fridge</td>
                  <td>Killy</td>
                  <td>$300</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Books</td>
                  <td>Filly</td>
                  <td>$120</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Gold</td>
                  <td>Bumbo</td>
                  <td>$1800</td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>Pen</td>
                  <td>Bilbo</td>
                  <td>$75</td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>Notebook</td>
                  <td>Frodo</td>
                  <td>$36</td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td>Dress</td>
                  <td>Kimo</td>
                  <td>$255</td>
                </tr>
                <tr>
                  <th scope="row">10</th>
                  <td>Paint</td>
                  <td>Zico</td>
                  <td>$434</td>
                </tr>
                <tr>
                  <th scope="row">11</th>
                  <td>Carpet</td>
                  <td>Jeco</td>
                  <td>$1236</td>
                </tr>
                <tr>
                  <th scope="row">12</th>
                  <td>Food</td>
                  <td>Haso</td>
                  <td>$422</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
