import Layout from "./Layout";

function Dashboard() {
  return (
    <>
      <Layout>
        <div>
          {/* ================= DASHBOARD CARDS ================= */}
          <section className="stats-grid">
            {/* Card 1 */}
            <div className="stat-card">
              <div className="stat-top">
                <div className="stat-icon purple">
                  <i className="fa-solid fa-dollar-sign" />
                </div>
                <span className="growth positive">
                  <i className="fa-solid fa-arrow-up" />
                  12.5%
                </span>
              </div>
              <p>Total Revenue</p>
              <h2>₹84,560</h2>
              <span className="comparison">Compared to last month</span>
            </div>
            {/* Card 2 */}
            <div className="stat-card">
              <div className="stat-top">
                <div className="stat-icon blue">
                  <i className="fa-solid fa-cart-shopping" />
                </div>
                <span className="growth positive">
                  <i className="fa-solid fa-arrow-up" />
                  8.2%
                </span>
              </div>
              <p>Total Orders</p>
              <h2>1,248</h2>
              <span className="comparison">Compared to last month</span>
            </div>
            {/* Card 3 */}
            <div className="stat-card">
              <div className="stat-top">
                <div className="stat-icon green">
                  <i className="fa-solid fa-users" />
                </div>
                <span className="growth positive">
                  <i className="fa-solid fa-arrow-up" />
                  15.8%
                </span>
              </div>
              <p>Total Customers</p>
              <h2>8,549</h2>
              <span className="comparison">Compared to last month</span>
            </div>
            {/* Card 4 */}
            <div className="stat-card">
              <div className="stat-top">
                <div className="stat-icon orange">
                  <i className="fa-solid fa-box" />
                </div>
                <span className="growth negative">
                  <i className="fa-solid fa-arrow-down" />
                  3.4%
                </span>
              </div>
              <p>Total Products</p>
              <h2>356</h2>
              <span className="comparison">Compared to last month</span>
            </div>
          </section>
          {/* ================= CHART SECTION ================= */}
          <section className="charts-grid">
            {/* Sales Chart */}
            <div className="chart-card large">
              <div className="card-header">
                <div>
                  <h3>Sales Overview</h3>
                  <p>Monthly sales performance</p>
                </div>
                <select>
                  <option>Last 7 Months</option>
                  <option>Last 6 Months</option>
                  <option>Last Year</option>
                </select>
              </div>
              <div className="chart">
                <div className="y-axis">
                  <span>₹40k</span>
                  <span>₹30k</span>
                  <span>₹20k</span>
                  <span>₹10k</span>
                  <span>₹0</span>
                </div>
                <div className="chart-area">
                  <div className="grid-line" />
                  <div className="grid-line" />
                  <div className="grid-line" />
                  <div className="grid-line" />
                  <div className="grid-line" />
                  <div className="bars">
                    <div className="bar-item">
                      <div className="bar" style={{ height: "45%" }} />
                      <span>Apr</span>
                    </div>
                    <div className="bar-item">
                      <div className="bar" style={{ height: "58%" }} />
                      <span>May</span>
                    </div>
                    <div className="bar-item">
                      <div className="bar" style={{ height: "52%" }} />
                      <span>Jun</span>
                    </div>
                    <div className="bar-item">
                      <div className="bar" style={{ height: "72%" }} />
                      <span>Jul</span>
                    </div>
                    <div className="bar-item">
                      <div className="bar" style={{ height: "65%" }} />
                      <span>Aug</span>
                    </div>
                    <div className="bar-item">
                      <div className="bar" style={{ height: "82%" }} />
                      <span>Sep</span>
                    </div>
                    <div className="bar-item">
                      <div className="bar current" style={{ height: "95%" }} />
                      <span>Oct</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Revenue Chart */}
            <div className="chart-card">
              <div className="card-header">
                <div>
                  <h3>Revenue</h3>
                  <p>Revenue by category</p>
                </div>
                <i className="fa-solid fa-ellipsis" />
              </div>
              <div className="donut-section">
                <div className="donut-chart">
                  <div className="donut-center">
                    <strong>₹84.5K</strong>
                    <span>Total</span>
                  </div>
                </div>
                <div className="legend">
                  <div>
                    <span className="dot purple-dot" />
                    Electronics
                    <strong>42%</strong>
                  </div>
                  <div>
                    <span className="dot blue-dot" />
                    Fashion
                    <strong>28%</strong>
                  </div>
                  <div>
                    <span className="dot green-dot" />
                    Home
                    <strong>18%</strong>
                  </div>
                  <div>
                    <span className="dot orange-dot" />
                    Others
                    <strong>12%</strong>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ================= LOWER SECTION ================= */}
          <section className="bottom-grid">
            {/* Recent Orders */}
            <div className="orders-card">
              <div className="card-header">
                <div>
                  <h3>Recent Orders</h3>
                  <p>Latest customer orders</p>
                </div>
                <a href="#">View All</a>
              </div>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Product</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>#ORD-1024</strong>
                      </td>
                      <td>
                        <div className="customer">
                          <div className="customer-avatar">RS</div>
                          Rahul Sharma
                        </div>
                      </td>
                      <td>Wireless Headphones</td>
                      <td>Oct 08, 2026</td>
                      <td>
                        <strong>₹2,499</strong>
                      </td>
                      <td>
                        <span className="status delivered">Delivered</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>#ORD-1023</strong>
                      </td>
                      <td>
                        <div className="customer">
                          <div className="customer-avatar">PK</div>
                          Priya Kapoor
                        </div>
                      </td>
                      <td>Smart Watch</td>
                      <td>Oct 07, 2026</td>
                      <td>
                        <strong>₹4,999</strong>
                      </td>
                      <td>
                        <span className="status pending">Pending</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>#ORD-1022</strong>
                      </td>
                      <td>
                        <div className="customer">
                          <div className="customer-avatar">AM</div>
                          Amit Mehta
                        </div>
                      </td>
                      <td>Running Shoes</td>
                      <td>Oct 06, 2026</td>
                      <td>
                        <strong>₹3,499</strong>
                      </td>
                      <td>
                        <span className="status shipped">Shipped</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>#ORD-1021</strong>
                      </td>
                      <td>
                        <div className="customer">
                          <div className="customer-avatar">NS</div>
                          Neha Singh
                        </div>
                      </td>
                      <td>Leather Bag</td>
                      <td>Oct 05, 2026</td>
                      <td>
                        <strong>₹2,899</strong>
                      </td>
                      <td>
                        <span className="status delivered">Delivered</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Top Products */}
            <div className="products-card">
              <div className="card-header">
                <div>
                  <h3>Top Products</h3>
                  <p>Best selling products</p>
                </div>
                <a href="#">View All</a>
              </div>
              <div className="product-list">
                <div className="product-item">
                  <div className="product-image">
                    <i className="fa-solid fa-headphones" />
                  </div>
                  <div className="product-info">
                    <h4>Wireless Headphones</h4>
                    <p>Electronics</p>
                  </div>
                  <div className="product-sales">
                    <strong>₹24,500</strong>
                    <span>124 sales</span>
                  </div>
                </div>
                <div className="product-item">
                  <div className="product-image">
                    <i className="fa-solid fa-clock" />
                  </div>
                  <div className="product-info">
                    <h4>Smart Watch</h4>
                    <p>Electronics</p>
                  </div>
                  <div className="product-sales">
                    <strong>₹18,750</strong>
                    <span>98 sales</span>
                  </div>
                </div>
                <div className="product-item">
                  <div className="product-image">
                    <i className="fa-solid fa-shoe-prints" />
                  </div>
                  <div className="product-info">
                    <h4>Running Shoes</h4>
                    <p>Fashion</p>
                  </div>
                  <div className="product-sales">
                    <strong>₹15,200</strong>
                    <span>76 sales</span>
                  </div>
                </div>
                <div className="product-item">
                  <div className="product-image">
                    <i className="fa-solid fa-bag-shopping" />
                  </div>
                  <div className="product-info">
                    <h4>Leather Bag</h4>
                    <p>Fashion</p>
                  </div>
                  <div className="product-sales">
                    <strong>₹12,850</strong>
                    <span>64 sales</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}

export default Dashboard;
