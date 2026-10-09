import "./Products.css";
import Layout from "./Layout";


function Products() {
  return (
    <>
      <Layout>
        {/* Main Content */}
       
          {/* Topbar */}
          <div className="topbar">
            <h2>Products Management</h2>
            <div className="admin">
              <i className="fas fa-user-circle" />
              <div>
                <strong>Admin</strong>
                <p style={{ fontSize: 12, color: "#64748b", marginTop: 4 }}>
                  Administrator
                </p>
              </div>
            </div>
          </div>
          {/* Page Heading */}
          <div className="page-heading">
            <div>
              <h1>Products</h1>
              <p>Manage and organize your store products.</p>
            </div>
            <a href="add-product.html" className="btn">
              <i className="fas fa-plus" /> Add New Product
            </a>
          </div>
          {/* Statistics */}
          <section className="stats">
            <div className="stat-card">
              <div className="stat-top">
                <span>Total Products</span>
                <i className="fas fa-box blue" />
              </div>
              <h2>1,250</h2>
              <p>Products in your store</p>
            </div>
            <div className="stat-card">
              <div className="stat-top">
                <span>Active Products</span>
                <i className="fas fa-check-circle green" />
              </div>
              <h2>1,180</h2>
              <p>Currently available</p>
            </div>
            <div className="stat-card">
              <div className="stat-top">
                <span>Low Stock</span>
                <i className="fas fa-exclamation-triangle orange" />
              </div>
              <h2>45</h2>
              <p>Products running low</p>
            </div>
            <div className="stat-card">
              <div className="stat-top">
                <span>Out of Stock</span>
                <i className="fas fa-times-circle red" />
              </div>
              <h2>25</h2>
              <p>Products unavailable</p>
            </div>
          </section>
          {/* Products Table */}
          <section className="products-box">
            <div className="products-header">
              <h2>Product Inventory</h2>
              <a href="add-product.html" className="btn">
                <i className="fas fa-plus" /> Add Product
              </a>
            </div>
            {/* Search and Filters */}
            <div className="filters">
              <div className="search">
                <i className="fas fa-search" />
                <input type="text" placeholder="Search products..." />
              </div>
              <select>
                <option value>All Categories</option>
                <option>Electronics</option>
                <option>Clothing</option>
                <option>Accessories</option>
                <option>Footwear</option>
              </select>
              <select>
                <option value>All Status</option>
                <option>Active</option>
                <option>Low Stock</option>
                <option>Out of Stock</option>
              </select>
            </div>
            {/* Table */}
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="product-info">
                        <img
                          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100"
                          alt="Headphones"
                        />
                        <div>
                          <h4>Wireless Headphones</h4>
                          <p>SKU: PRD001</p>
                        </div>
                      </div>
                    </td>
                    <td>Electronics</td>
                    <td>₹2,499</td>
                    <td>120</td>
                    <td>
                      <span className="status active-status">Active</span>
                    </td>
                    <td className="actions">
                      <a href="edit-product.html" title="Edit">
                        <i className="fas fa-edit" />
                      </a>
                      <a href="#" title="Delete">
                        <i className="fas fa-trash" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="product-info">
                        <img
                          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100"
                          alt="Watch"
                        />
                        <div>
                          <h4>Smart Watch</h4>
                          <p>SKU: PRD002</p>
                        </div>
                      </div>
                    </td>
                    <td>Accessories</td>
                    <td>₹3,999</td>
                    <td>8</td>
                    <td>
                      <span className="status low-status">Low Stock</span>
                    </td>
                    <td className="actions">
                      <a href="edit-product.html" title="Edit">
                        <i className="fas fa-edit" />
                      </a>
                      <a href="#" title="Delete">
                        <i className="fas fa-trash" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="product-info">
                        <img
                          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100"
                          alt="Shoes"
                        />
                        <div>
                          <h4>Running Shoes</h4>
                          <p>SKU: PRD003</p>
                        </div>
                      </div>
                    </td>
                    <td>Footwear</td>
                    <td>₹1,899</td>
                    <td>75</td>
                    <td>
                      <span className="status active-status">Active</span>
                    </td>
                    <td className="actions">
                      <a href="edit-product.html" title="Edit">
                        <i className="fas fa-edit" />
                      </a>
                      <a href="#" title="Delete">
                        <i className="fas fa-trash" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="product-info">
                        <img
                          src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=100"
                          alt="Handbag"
                        />
                        <div>
                          <h4>Women's Handbag</h4>
                          <p>SKU: PRD004</p>
                        </div>
                      </div>
                    </td>
                    <td>Accessories</td>
                    <td>₹1,499</td>
                    <td>0</td>
                    <td>
                      <span className="status out-status">Out of Stock</span>
                    </td>
                    <td className="actions">
                      <a href="edit-product.html" title="Edit">
                        <i className="fas fa-edit" />
                      </a>
                      <a href="#" title="Delete">
                        <i className="fas fa-trash" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="product-info">
                        <img
                          src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=100"
                          alt="Camera"
                        />
                        <div>
                          <h4>Digital Camera</h4>
                          <p>SKU: PRD005</p>
                        </div>
                      </div>
                    </td>
                    <td>Electronics</td>
                    <td>₹12,999</td>
                    <td>32</td>
                    <td>
                      <span className="status active-status">Active</span>
                    </td>
                    <td className="actions">
                      <a href="edit-product.html" title="Edit">
                        <i className="fas fa-edit" />
                      </a>
                      <a href="#" title="Delete">
                        <i className="fas fa-trash" />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Pagination */}
            <div className="pagination">
              <p>Showing 1 to 5 of 1,250 products</p>
              <div className="pages">
                <a href="#">Previous</a>
                <a href="#" className="current">
                  1
                </a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">Next</a>
              </div>
            </div>
          </section>
      
      </Layout>
    </>
  );
}

export default Products;
