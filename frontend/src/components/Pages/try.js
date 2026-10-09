
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">


    <title>Admin Dashboard</title>

    {/* <!-- CSS --> */}
    <link rel="stylesheet" href="style.css">
</head>

<body>

    {/* <!-- ================= SIDEBAR ================= --> */}

    <aside class="sidebar">

        <div class="logo">
            <h2>Shop<span>Admin</span></h2>
        </div>

        <nav>

            <a href="index.html" class="active">
                <span>▣</span>
                Dashboard
            </a>

            <a href="products.html">
                <span>▤</span>
                Products
            </a>

            <a href="orders.html">
                <span>🛒</span>
                Orders
            </a>

            <a href="customers.html">
                <span>👥</span>
                Customers
            </a>

            <a href="categories.html">
                <span>▦</span>
                Categories
            </a>

            <a href="payments.html">
                <span>💳</span>
                Payments
            </a>

            <a href="settings.html">
                <span>⚙</span>
                Settings
            </a>

        </nav>

        <div class="logout">
            <a href="#">
                <span>↪</span>
                Logout
            </a>
        </div>

    </aside>


    {/* <!-- ================= MAIN ================= --> */}

    <main class="main">

        {/* <!-- TOP NAVBAR --> */}

        <header class="topbar">

            <div class="search-box">
                <input
                    type="text"
                    placeholder="Search anything..."
                />

                <button>🔍</button>
            </div>

            <div class="top-right">

                <button class="notification">
                    🔔
                    <span>3</span>
                </button>

                <div class="profile">

                    <div class="profile-img">
                        A
                    </div>

                    <div class="profile-info">
                        <strong>Admin</strong>
                        <small>Administrator</small>
                    </div>

                </div>

            </div>

        </header>


        {/* <!-- DASHBOARD CONTENT --> */}

        <section class="dashboard">

            {/* <!-- PAGE TITLE --> */}

            <div class="page-title">

                <div>
                    <h1>Dashboard</h1>
                    <p>Welcome back! Here's what's happening with your store.</p>
                </div>

                <button class="add-btn">
                    + Add Product
                </button>

            </div>


            {/* <!-- ================= STATISTICS ================= --> */}

            <div class="stats">

                {/* <!-- SALES --> */}

                <div class="stat-card">

                    <div class="stat-top">
                        <div>
                            <p>Total Sales</p>
                            <h2>₹1,25,000</h2>
                        </div>

                        <div class="stat-icon sales">
                            ₹
                        </div>
                    </div>

                    <div class="stat-bottom">
                        <span class="up">↑ 12.5%</span>
                        <span>vs last month</span>
                    </div>

                </div>


                {/* <!-- ORDERS --> */}

                <div class="stat-card">

                    <div class="stat-top">

                        <div>
                            <p>Total Orders</p>
                            <h2>1,250</h2>
                        </div>

                        <div class="stat-icon orders">
                            🛒
                        </div>

                    </div>

                    <div class="stat-bottom">
                        <span class="up">↑ 8.2%</span>
                        <span>vs last month</span>
                    </div>

                </div>


                {/* <!-- PRODUCTS --> */}

                <div class="stat-card">

                    <div class="stat-top">

                        <div>
                            <p>Total Products</p>
                            <h2>356</h2>
                        </div>

                        <div class="stat-icon products">
                            📦
                        </div>

                    </div>

                    <div class="stat-bottom">
                        <span class="up">↑ 5.4%</span>
                        <span>vs last month</span>
                    </div>

                </div>


                {/* <!-- CUSTOMERS --> */}

                <div class="stat-card">

                    <div class="stat-top">

                        <div>
                            <p>Total Customers</p>
                            <h2>2,450</h2>
                        </div>

                        <div class="stat-icon customers">
                            👥
                        </div>

                    </div>

                    <div class="stat-bottom">
                        <span class="up">↑ 10.1%</span>
                        <span>vs last month</span>
                    </div>

                </div>

            </div>


            {/* <!-- ================= MIDDLE SECTION ================= --> */}

            <div class="dashboard-grid">


                {/* <!-- SALES OVERVIEW --> */}

                <div class="box sales-overview">

                    <div class="box-header">

                        <div>
                            <h3>Sales Overview</h3>
                            <p>Monthly sales performance</p>
                        </div>

                        <select>
                            <option>2026</option>
                            <option>2025</option>
                            <option>2024</option>
                        </select>

                    </div>


                    {/* <!-- SIMPLE BAR CHART --> */}

                    <div class="chart">

                        <div class="bar-group">
                            <div class="bar bar1"></div>
                            <span>Jan</span>
                        </div>

                        <div class="bar-group">
                            <div class="bar bar2"></div>
                            <span>Feb</span>
                        </div>

                        <div class="bar-group">
                            <div class="bar bar3"></div>
                            <span>Mar</span>
                        </div>

                        <div class="bar-group">
                            <div class="bar bar4"></div>
                            <span>Apr</span>
                        </div>

                        <div class="bar-group">
                            <div class="bar bar5"></div>
                            <span>May</span>
                        </div>

                        <div class="bar-group">
                            <div class="bar bar6"></div>
                            <span>Jun</span>
                        </div>

                        <div class="bar-group">
                            <div class="bar bar7"></div>
                            <span>Jul</span>
                        </div>

                        <div class="bar-group">
                            <div class="bar bar8"></div>
                            <span>Aug</span>
                        </div>

                        <div class="bar-group">
                            <div class="bar bar9"></div>
                            <span>Sep</span>
                        </div>

                        <div class="bar-group">
                            <div class="bar bar10"></div>
                            <span>Oct</span>
                        </div>

                        <div class="bar-group">
                            <div class="bar bar11"></div>
                            <span>Nov</span>
                        </div>

                        <div class="bar-group">
                            <div class="bar bar12"></div>
                            <span>Dec</span>
                        </div>

                    </div>

                </div>


                {/* <!-- ORDER STATUS --> */}

                <div class="box">

                    <div class="box-header">

                        <div>
                            <h3>Order Status</h3>
                            <p>Current order overview</p>
                        </div>

                    </div>


                    <div class="order-status">

                        <div class="status-item">
                            <div class="status-circle delivered">
                                ✓
                            </div>

                            <div>
                                <strong>Delivered</strong>
                                <p>850 Orders</p>
                            </div>

                            <strong>68%</strong>
                        </div>


                        <div class="status-item">
                            <div class="status-circle shipped">
                                →
                            </div>

                            <div>
                                <strong>Shipped</strong>
                                <p>200 Orders</p>
                            </div>

                            <strong>16%</strong>
                        </div>


                        <div class="status-item">
                            <div class="status-circle pending">
                                ⏳
                            </div>

                            <div>
                                <strong>Pending</strong>
                                <p>150 Orders</p>
                            </div>

                            <strong>12%</strong>
                        </div>


                        <div class="status-item">
                            <div class="status-circle cancelled">
                                ×
                            </div>

                            <div>
                                <strong>Cancelled</strong>
                                <p>50 Orders</p>
                            </div>

                            <strong>4%</strong>
                        </div>

                    </div>

                </div>

            </div>


            {/* <!-- ================= BOTTOM SECTION ================= --> */}

            <div class="bottom-grid">


                {/* <!-- RECENT ORDERS --> */}

                <div class="box recent-orders">

                    <div class="box-header">

                        <div>
                            <h3>Recent Orders</h3>
                            <p>Latest orders from your store</p>
                        </div>

                        <a href="orders.html">
                            View All
                        </a>

                    </div>


                    <div class="table-container">

                        <table>

                            <thead>

                                <tr>
                                    <th>Order ID</th>
                                    <th>Customer</th>
                                    <th>Product</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                </tr>

                            </thead>

                            <tbody>

                                <tr>

                                    <td>
                                        <strong>#ORD001</strong>
                                    </td>

                                    <td>
                                        Anjali Singh
                                    </td>

                                    <td>
                                        Smart Watch
                                    </td>

                                    <td>
                                        ₹2,999
                                    </td>

                                    <td>
                                        <span class="badge delivered-badge">
                                            Delivered
                                        </span>
                                    </td>

                                </tr>


                                <tr>

                                    <td>
                                        <strong>#ORD002</strong>
                                    </td>

                                    <td>
                                        Rahul Kumar
                                    </td>

                                    <td>
                                        Running Shoes
                                    </td>

                                    <td>
                                        ₹1,999
                                    </td>

                                    <td>
                                        <span class="badge pending-badge">
                                            Pending
                                        </span>
                                    </td>

                                </tr>


                                <tr>

                                    <td>
                                        <strong>#ORD003</strong>
                                    </td>

                                    <td>
                                        Priya Sharma
                                    </td>

                                    <td>
                                        Handbag
                                    </td>

                                    <td>
                                        ₹1,499
                                    </td>

                                    <td>
                                        <span class="badge shipped-badge">
                                            Shipped
                                        </span>
                                    </td>

                                </tr>


                                <tr>

                                    <td>
                                        <strong>#ORD004</strong>
                                    </td>

                                    <td>
                                        Amit Verma
                                    </td>

                                    <td>
                                        Headphones
                                    </td>

                                    <td>
                                        ₹2,499
                                    </td>

                                    <td>
                                        <span class="badge cancelled-badge">
                                            Cancelled
                                        </span>
                                    </td>

                                </tr>

                            </tbody>

                        </table>

                    </div>

                </div>


                {/* <!-- TOP PRODUCTS --> */}

                <div class="box top-products">

                    <div class="box-header">

                        <div>
                            <h3>Top Products</h3>
                            <p>Best selling products</p>
                        </div>

                        <a href="products.html">
                            View All
                        </a>

                    </div>


                    <div class="product-item">

                        <div class="product-image">
                            📱
                        </div>

                        <div class="product-details">
                            <strong>Smart Phone</strong>
                            <small>125 sold</small>
                        </div>

                        <strong>₹25,999</strong>

                    </div>


                    <div class="product-item">

                        <div class="product-image">
                            👟
                        </div>

                        <div class="product-details">
                            <strong>Running Shoes</strong>
                            <small>98 sold</small>
                        </div>

                        <strong>₹1,999</strong>

                    </div>


                    <div class="product-item">

                        <div class="product-image">
                            🎧
                        </div>

                        <div class="product-details">
                            <strong>Wireless Headphones</strong>
                            <small>87 sold</small>
                        </div>

                        <strong>₹2,499</strong>

                    </div>


                    <div class="product-item">

                        <div class="product-image">
                            ⌚
                        </div>

                        <div class="product-details">
                            <strong>Smart Watch</strong>
                            <small>72 sold</small>
                        </div>

                        <strong>₹2,999</strong>

                    </div>

                </div>

            </div>

        </section>

    </main>

</body>
</html>
