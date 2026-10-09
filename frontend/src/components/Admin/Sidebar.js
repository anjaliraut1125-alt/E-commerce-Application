import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-icon">
            <i className="fa-solid fa-cart-shopping" />
          </div>
          <span>ShopAdmin</span>
        </div>
        <div className="menu-title">MAIN MENU</div>
        <ul className="sidebar-menu">
          <li className="active">
            <Link to="/dashboard">
              <i className="fa-solid fa-chart-pie" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/products">
              <i className="fa-solid fa-box" />
              <span>Products</span>
              {/* <span className="badge">24</span> */}
            </Link>
          </li>
          <li>
            <Link to="/addProduct">
              <i className="fa-solid fa-cart-shopping" />
              <span>AddProduct</span>
              {/* <span className="badge">12</span> */}
            </Link>
          </li>
          
        </ul>
        {/* Admin Profile */}
        <div className="sidebar-bottom">
          <div className="admin-profile">
            <div className="admin-avatar">AS</div>
            <div>
              <h4>Anjali Singh</h4>
              <p>Administrator</p>
            </div>
            <i className="fa-solid fa-ellipsis-vertical" />
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
