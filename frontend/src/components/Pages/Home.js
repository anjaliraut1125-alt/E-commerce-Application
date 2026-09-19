import Layout from "../Layout/Layout";

function Home() {
  return (
    <Layout>
      <div>
        <div className="popup-mobile-menu">
          <div className="inner-wrapper">
            <div className="mobile-menu-top">
              <div className="inner-top">
                <div className="content">
                  <div className="logo">
                    <a href="index.html">
                      <img
                        src="assets/images/logo/logo.webp"
                        alt="Unimart Logo Images"
                      />
                    </a>
                  </div>
                  <div className="rbt-btn-close">
                    <button className="close-button rbt-round-btn">
                      <i className="fa-solid fa-xmark" />
                    </button>
                  </div>
                </div>
                <p className="description">
                  Unimart is a E-commerce Template. Worldwide electronics store
                  since 1978.
                </p>
                <div className="rbt-inner-search-field style-one rbt-search-field-rounded rbt-search-field-sm-width">
                  <input type="text" placeholder="Search for products" />
                  <button
                    className="rbt-round-btn search-btn rbt-text-color-gray-500"
                    type="submit"
                  >
                    <i className="fa-solid fa-magnifying-glass" />
                  </button>
                </div>
              </div>
              <div className="rbt-tab rbt-round-shape-tab">
                <ul
                  className="nav nav-tabs mb--0"
                  id="mobile-menuTab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="rbt-tab-mobilemenu-1"
                      data-bs-toggle="tab"
                      data-bs-target="#rbt-tab-pane-mobilemenu-1"
                      type="button"
                      role="tab"
                      aria-controls="rbt-tab-pane-mobilemenu-1"
                      aria-selected="true"
                    >
                      <i className="fa-solid fa-bars-sort" />
                      Menu
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="rbt-tab-mobilemenu-2"
                      data-bs-toggle="tab"
                      data-bs-target="#rbt-tab-pane-mobilemenu-2"
                      type="button"
                      role="tab"
                      aria-controls="rbt-tab-pane-mobilemenu-2"
                      aria-selected="false"
                    >
                      <i className="fa-sharp fa-regular fa-layer-group" />
                      Catagories
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="mobile-menuTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="rbt-tab-pane-mobilemenu-1"
                    role="tabpanel"
                    aria-labelledby="rbt-tab-mobilemenu-1"
                    tabIndex={0}
                  >
                    <nav className="rbt-mainmenu-nav">
                      <ul className="mainmenu">
                        <li className="with-rbt-megamenu has-menu-child-item position-static">
                          <a href="#!">
                            Home <i className="fa-regular fa-chevron-down" />
                          </a>
                          {/* Start Mega Menu  */}
                          <div className="rbt-megamenu rbt-prsentation-megamenu rbt-width-fullscreen">
                            <div className="rbt-megamenu-wrapper">
                              <div className="container p_sm--0 p_md--0 p_lg--0">
                                <div className="row row--12 home-plesentation-wrapper single-dropdown-menu-presentation mt_dec--24 mb_sm--0">
                                  {/* Start Single Demo  */}
                                  <div className="col-lg-1-5 col-md-12 col-sm-12 col-12 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                                    <div className="demo-single rbt-scroll-trigger zoom_in animation-order-1">
                                      <div className="inner">
                                        <div className="thumbnail">
                                          <a href="home-electronics.html">
                                            <img
                                              src="assets/images/splash/demo-pages/demo-1.webp"
                                              alt="Demo Images"
                                            />
                                          </a>
                                        </div>
                                        <div className="content">
                                          <h2 className="rbt-title h4">
                                            <a href="home-electronics.html">
                                              Electronics One
                                            </a>
                                          </h2>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* End Single Demo  */}
                                  {/* Start Single Demo  */}
                                  <div className="col-lg-1-5 col-md-12 col-sm-12 col-12 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                                    <div className="demo-single rbt-scroll-trigger zoom_in animation-order-2">
                                      <div className="inner">
                                        <div className="thumbnail">
                                          <a href="home-fashion.html">
                                            <img
                                              src="assets/images/splash/demo-pages/demo-5.webp"
                                              alt="Demo Images"
                                            />
                                          </a>
                                        </div>
                                        <div className="content">
                                          <h2 className="rbt-title h4">
                                            <a href="home-fashion.html">
                                              Fashion One
                                            </a>
                                          </h2>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* End Single Demo  */}
                                  {/* Start Single Demo  */}
                                  <div className="col-lg-1-5 col-md-12 col-sm-12 col-12 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                                    <div className="demo-single rbt-scroll-trigger zoom_in animation-order-3">
                                      <div className="inner">
                                        <div className="thumbnail">
                                          <a href="home-furniture.html">
                                            <img
                                              src="assets/images/splash/demo-pages/demo-8.webp"
                                              alt="Demo Images"
                                            />
                                          </a>
                                        </div>
                                        <div className="content">
                                          <h2 className="rbt-title h4">
                                            <a href="home-furniture.html">
                                              Furniture One
                                            </a>
                                          </h2>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* End Single Demo  */}
                                  {/* Start Single Demo  */}
                                  <div className="col-lg-1-5 col-md-12 col-sm-12 col-12 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                                    <div className="demo-single rbt-scroll-trigger zoom_in animation-order-4">
                                      <div className="inner">
                                        <div className="thumbnail">
                                          <a href="home-printing-service.html">
                                            <img
                                              src="assets/images/splash/demo-pages/demo-6.webp"
                                              alt="Demo Images"
                                            />
                                          </a>
                                        </div>
                                        <div className="content">
                                          <h2 className="rbt-title h4">
                                            <a href="home-printing-service.html">
                                              Print Service One
                                            </a>
                                          </h2>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* End Single Demo  */}
                                  {/* Start Single Demo  */}
                                  <div className="col-lg-1-5 col-md-12 col-sm-12 col-12 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                                    <div className="demo-single rbt-scroll-trigger zoom_in animation-order-5">
                                      <div className="inner">
                                        <div className="thumbnail">
                                          <a href="home-cosmetic-beauty.html">
                                            <img
                                              src="assets/images/splash/demo-pages/demo-2.webp"
                                              alt="Demo Images"
                                            />
                                          </a>
                                        </div>
                                        <div className="content">
                                          <h2 className="rbt-title h4">
                                            <a href="home-cosmetic-beauty.html">
                                              Cosmetic Beauty One
                                            </a>
                                          </h2>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* End Single Demo  */}
                                  {/* Start Single Demo  */}
                                  <div className="col-lg-1-5 col-md-12 col-sm-12 col-12 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                                    <div className="demo-single rbt-scroll-trigger zoom_in animation-order-6">
                                      <div className="inner">
                                        <div className="thumbnail">
                                          <a href="home-sports.html">
                                            <img
                                              src="assets/images/splash/demo-pages/demo-9.webp"
                                              alt="Demo Images"
                                            />
                                          </a>
                                        </div>
                                        <div className="content">
                                          <h2 className="rbt-title h4">
                                            <a href="home-sports.html">
                                              Sports One
                                            </a>
                                          </h2>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* End Single Demo  */}
                                  {/* Start Single Demo  */}
                                  <div className="col-lg-1-5 col-md-12 col-sm-12 col-12 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                                    <div className="demo-single rbt-scroll-trigger zoom_in animation-order-7">
                                      <div className="inner">
                                        <div className="thumbnail">
                                          <a href="home-glass.html">
                                            <img
                                              src="assets/images/splash/demo-pages/demo-3.webp"
                                              alt="Demo Images"
                                            />
                                          </a>
                                        </div>
                                        <div className="content">
                                          <h2 className="rbt-title h4">
                                            <a href="home-glass.html">
                                              Glass One
                                            </a>
                                          </h2>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* End Single Demo  */}
                                  {/* Start Single Demo  */}
                                  <div className="col-lg-1-5 col-md-12 col-sm-12 col-12 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                                    <div className="demo-single rbt-scroll-trigger zoom_in animation-order-8">
                                      <div className="inner">
                                        <div className="thumbnail">
                                          <a href="home-phone-case.html">
                                            <img
                                              src="assets/images/splash/demo-pages/demo-4.webp"
                                              alt="Demo Images"
                                            />
                                          </a>
                                        </div>
                                        <div className="content">
                                          <h2 className="rbt-title h4">
                                            <a href="home-phone-case.html">
                                              Phone One
                                            </a>
                                          </h2>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* End Single Demo  */}
                                  {/* Start Single Demo  */}
                                  <div className="col-lg-1-5 col-md-12 col-sm-12 col-12 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                                    <div className="demo-single rbt-scroll-trigger zoom_in animation-order-9">
                                      <div className="inner">
                                        <div className="thumbnail">
                                          <a href="home-accessories.html">
                                            <img
                                              src="assets/images/splash/demo-pages/demo-10.webp"
                                              alt="Demo Images"
                                            />
                                          </a>
                                        </div>
                                        <div className="content">
                                          <h2 className="rbt-title h4">
                                            <a href="home-accessories.html">
                                              Accessories One
                                            </a>
                                          </h2>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* End Single Demo  */}
                                  {/* Start Single Demo  */}
                                  <div className="col-lg-1-5 col-md-12 col-sm-12 col-12 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                                    <div className="demo-single rbt-scroll-trigger zoom_in animation-order-10">
                                      <div className="inner">
                                        <div className="thumbnail">
                                          <a href="home-jewellery.html">
                                            <img
                                              src="assets/images/splash/demo-pages/demo-11.webp"
                                              alt="Demo Images"
                                            />
                                          </a>
                                        </div>
                                        <div className="content">
                                          <h2 className="rbt-title h4">
                                            <a href="home-jewellery.html">
                                              jewellery One
                                            </a>
                                          </h2>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* End Single Demo  */}
                                </div>
                                <div className="load-demo-btn text-center pt--24 pt_sm--0 pt_lg--0 position-relative">
                                  <a
                                    href="index.html#rbt-demo-presentation-section"
                                    className="rbt-btn-grp rbt-has-separator-shape justify-content-center rbt-scroll-trigger fade_in animation-order-2 pb_sm--0"
                                  >
                                    <span className="rbt-btn rbt-btn-single rbt-btn rbt-marquee-btn marquee-auto rbt-btn-md has-primary-overlay has-no-hover-transform">
                                      <span data-text="View All The Trending Collection">
                                        VIEW ALL DEMOS (81+) New drops every
                                        month 🔥
                                      </span>
                                    </span>
                                    <span className="rbt-btn rbt-btn-single animated-icon-btn round-sm defalt-primary-bg p--0">
                                      <span className="animated-icon">
                                        <svg
                                          className="icon_external"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 15.5 15.5"
                                        >
                                          <g className="icon-wrapper">
                                            <path
                                              className="icon-rectangle"
                                              d="m7.75,0c.41,0,.75.34.75.75s-.34.75-.75.75H3.08c-.87,0-1.58.71-1.58,1.58v9.33c0,.87.71,1.58,1.58,1.58h9.33c.87,0,1.58-.71,1.58-1.58v-4.67c0-.41.34-.75.75-.75s.75.34.75.75v4.67c0,1.7-1.38,3.08-3.08,3.08H3.08c-1.7,0-3.08-1.38-3.08-3.08V3.08C0,1.38,1.38,0,3.08,0h4.67Z"
                                              strokeWidth={0}
                                            />
                                            <path
                                              className="icon-arrow-el-one"
                                              d="m15.5,0v4.29c0,.41-.34.75-.75.75s-.75-.34-.75-.75V1.5h-2.75c-.38,0-.69-.28-.74-.65v-.1c0-.41.33-.75.74-.75h4.25Z"
                                              strokeWidth={0}
                                              style={{
                                                translate: "none",
                                                rotate: "none",
                                                scale: "none",
                                                transformOrigin: "0px 0px 0px",
                                              }}
                                              data-svg-origin="15.5 0"
                                              transform="matrix(1,0,0,1,0,0)"
                                            />
                                            <path
                                              className="icon-arrow-line-one"
                                              d="m14.22.22c.29-.29.77-.29,1.06,0,.29.29.29.77,0,1.06L5.95,10.61c-.29.29-.77.29-1.06,0-.29-.29-.29-.77,0-1.06.4-.4.76-.76,1.09-1.09l.47-.47c.37-.37.7-.7,1-1l.34-.34.46-.46.41-.41c.74-.74,1.29-1.29,2.09-2.09l.61-.61c.17-.17.34-.34.53-.53.13-.13.25-.25.36-.36l.59-.59c.08-.08.16-.16.23-.23l.36-.36c.1-.1.19-.19.26-.26l.42-.42s.07-.07.11-.11Z"
                                              strokeWidth={0}
                                              style={{
                                                translate: "none",
                                                rotate: "none",
                                                scale: "none",
                                                transformOrigin: "0px 0px 0px",
                                              }}
                                              data-svg-origin="15.4975004196167 0.002499997615814209"
                                              transform="matrix(1,0,0,1,0,0)"
                                            />
                                            <path
                                              className="icon-arrow-el-two"
                                              d="m15.5,0v4.29c0,.41-.34.75-.75.75s-.75-.34-.75-.75V1.5h-2.75c-.38,0-.69-.28-.74-.65v-.1c0-.41.33-.75.74-.75h4.25Z"
                                              strokeWidth={0}
                                              style={{
                                                translate: "none",
                                                rotate: "none",
                                                scale: "none",
                                                transformOrigin: "0px 0px 0px",
                                              }}
                                              data-svg-origin="15.5 0"
                                              transform="matrix(1,0,0,1,0,0)"
                                            />
                                            <path
                                              className="icon-arrow-line-two"
                                              d="m14.22.22c.29-.29.77-.29,1.06,0,.29.29.29.77,0,1.06L5.95,10.61c-.29.29-.77.29-1.06,0-.29-.29-.29-.77,0-1.06.4-.4.76-.76,1.09-1.09l.47-.47c.37-.37.7-.7,1-1l.34-.34.46-.46.41-.41c.74-.74,1.29-1.29,2.09-2.09l.61-.61c.17-.17.34-.34.53-.53.13-.13.25-.25.36-.36l.59-.59c.08-.08.16-.16.23-.23l.36-.36c.1-.1.19-.19.26-.26l.42-.42s.07-.07.11-.11Z"
                                              strokeWidth={0}
                                              style={{
                                                translate: "none",
                                                rotate: "none",
                                                scale: "none",
                                                transformOrigin: "0px 0px 0px",
                                              }}
                                              data-svg-origin="15.4975004196167 0.002499997615814209"
                                              transform="matrix(1,0,0,1,0,0)"
                                            />
                                          </g>
                                        </svg>
                                      </span>
                                    </span>
                                  </a>
                                  <span className="rbt-overlay-counter counter-md rbt-scroll-trigger fade_in animation-order-4">
                                    <span className="odometer" data-count={100}>
                                      00
                                    </span>
                                    <span className="counter-suffix">+</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* End Mega Menu  */}
                        </li>
                        <li className="with-rbt-megamenu has-menu-child-item">
                          <a href="#!">
                            Shop <i className="fa-regular fa-chevron-down" />
                          </a>
                          {/* Start Mega Menu  */}
                          <div className="rbt-megamenu grid-item-3 pl_sm--0 pl_md--0 pl_lg--0">
                            <div className="rbt-megamenu-wrapper">
                              <div className="row d-none d-xl-flex">
                                <div className="col-lg-12">
                                  <div className="mega-top-banner bg-two">
                                    <div className="rbt-banner-inner justify-content-start">
                                      <div className="rbt-banner-content">
                                        <h2 className="title">
                                          Buy One and Get 50% Off the Second
                                          Purchase Now
                                        </h2>
                                        <p className="b3 desc">
                                          Send us your idea, it may appear on
                                          Unimart.
                                        </p>
                                      </div>
                                      <div className="pricing-action d-flex flex-column align-items-center rbt-gap--8">
                                        <div className="rbt-pricing-part d-flex">
                                          <span className="rbt-price-text offer-price">
                                            $189.00
                                          </span>
                                          <del className="rbt-dis-price-text">
                                            $295.00
                                          </del>
                                        </div>
                                        <a
                                          className="rbt-btn rbt-btn-sm rbt-btn-black"
                                          href="product-single-default.html"
                                        >
                                          View Details
                                        </a>
                                      </div>
                                      <a
                                        href="#"
                                        className="product-img position-bottom"
                                      >
                                        <img
                                          src="assets/images/splash/menu-banner/menu-prd-01.webp"
                                          alt="Eccommerce Product"
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row row--16">
                                <div className="col-lg-12 col-xl-6 col-xxl-4 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                                  <p className="rbt-short-title h5">
                                    Shop Pages
                                  </p>
                                  <ul className="mega-menu-item">
                                    <li>
                                      <a href="shop.html">
                                        Shop Default
                                        <div className="rbt-product-badge rbt-product-badge-bg-green border-rounded">
                                          SHOP
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-right-sidebar.html">
                                        Shop Right Sidebar
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-filter-list-left-sidebar.html">
                                        Shop List Left Sidebar
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-filter-list-right-sidebar.html">
                                        Shop List Right Sidebar
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-left-sidebar.html">
                                        Shop Left Sidebar
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-sticky-sidebar.html">
                                        Sticky Sidebar Shop
                                        <div className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                                          POPULAR
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-collapsible-sidebar.html">
                                        Collapse Sidebar Shop
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-scroll-sidebar.html">
                                        Scroll Sidebar Shop
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-loadmore.html">
                                        Load More Button
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-sm-categories.html">
                                        Shop Small Categories
                                      </a>
                                    </li>
                                    <li>
                                      <a href="products-inside-border-column-shop.html">
                                        Bordered inside Products Shop
                                      </a>
                                    </li>
                                    <li>
                                      <a href="products-show-rating-shop.html">
                                        Products Show Rating
                                        <div className="rbt-product-badge rbt-product-badge-bg-danger border-rounded">
                                          HOT
                                        </div>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-lg-12 col-xl-6 col-xxl-4 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                                  <p className="rbt-short-title h5">
                                    Custom Pages
                                  </p>
                                  <ul className="mega-menu-item">
                                    <li>
                                      <a href="shop-filter-grid-two.html">
                                        Two Columns
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-filter-grid-three.html">
                                        Three Columns
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-filter-grid-four.html">
                                        Four Columns
                                        <div className="rbt-product-badge rbt-product-badge-bg-danger border-rounded ml--8">
                                          POPULAR
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-wider.html">
                                        Three Columns Wide
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-wider-four.html">
                                        Four Columns
                                        <div className="rbt-product-badge rbt-product-badge-bg-green border-rounded ml--8">
                                          POPULAR
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-wider-five.html">
                                        Five Columns Wide
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-wider-six.html">
                                        Six Columns Wide
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-featured.html">
                                        Featured Products
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-best-prds.html">
                                        Best Selling Products
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-collapse-filter-top.html">
                                        Hidden Side Bar Shop
                                      </a>
                                    </li>
                                    <li>
                                      <a href="products-show-countdown-shop-style-two.html">
                                        Products Show Countdown Two
                                      </a>
                                    </li>
                                    <li>
                                      <a href="products-even-list-shop.html">
                                        Even List Products
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-lg-12 col-xl-6 col-xxl-4 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                                  <p className="rbt-short-title h5">
                                    Custom Pages
                                  </p>
                                  <ul className="mega-menu-item">
                                    <li>
                                      <a href="shop-no-page-heading.html">
                                        Shop No Page Heading
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-only-category.html">
                                        Shop Only Category
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-offcanvas-sidebar-left.html">
                                        Shop offcanvas Left
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-offcanvas-sidebar-right.html">
                                        Shop offcanvas Right
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-offcanvas-sidebar-top.html">
                                        Shop offcanvas top
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-offcanvas-sidebar-bottom.html">
                                        Shop offcanvas Bottom
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-collapse-filter-bottom.html">
                                        Shop Filter Collapse Bottom
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-collapse-filter-left.html">
                                        Shop Filter Collapse Left
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-collapse-filter-right.html">
                                        Shop Filter Collapse Right
                                      </a>
                                    </li>
                                    <li>
                                      <a href="products-show-progressbar-shop.html">
                                        Products Show Progress-bar
                                      </a>
                                    </li>
                                    <li>
                                      <a href="products-show-countdown-shop.html">
                                        Products Show Countdown
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#!">
                                        Infinite Scroll
                                        <div className="rbt-product-badge rbt-product-badge-bg-yellow border-rounded">
                                          Coming Soon
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#!">
                                        Shop Classic
                                        <div className="rbt-product-badge rbt-product-badge-bg-yellow border-rounded">
                                          Coming Soon
                                        </div>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* End Mega Menu  */}
                        </li>
                        <li className="with-rbt-megamenu has-menu-child-item position-static">
                          <a href="#!">
                            Pages <i className="fa-regular fa-chevron-down" />
                          </a>
                          {/* Start Mega Menu  */}
                          <div className="rbt-megamenu rbt-width-fullscreen mega-has-bg-img mega-bg-one p-0">
                            {/* Start Mega Menu  */}
                            <div className="rbt-megamenu-wrapper bg-transparent">
                              <div className="wrapper">
                                <div className="row row--12 mt_dec--12">
                                  <div className="col-xl-9">
                                    <div className="h-100 d-flex flex-column justify-content-between">
                                      <div className="row">
                                        <div className="col-12 col-lg-1-5 single-mega-item rbt-scroll-trigger fade_in animation-order-1 mt--16">
                                          <p className="rbt-short-title h5">
                                            Inner Pages
                                          </p>
                                          <ul className="mega-menu-item">
                                            <li>
                                              <a href="contact.html">
                                                Contact Page One
                                              </a>
                                            </li>
                                            <li>
                                              <a href="about.html">
                                                About Us One
                                              </a>
                                            </li>
                                            <li>
                                              <a href="faq-page-01.html">
                                                FAQs One
                                              </a>
                                            </li>
                                            <li>
                                              <a href="contact-two.html">
                                                Contact Page Two
                                              </a>
                                            </li>
                                            <li>
                                              <a href="about-two.html">
                                                About Us Two
                                              </a>
                                            </li>
                                            <li>
                                              <a href="contact-four.html">
                                                Contact Page Four
                                              </a>
                                            </li>
                                            <li>
                                              <a href="faq-page-02.html">
                                                FAQs Two
                                              </a>
                                            </li>
                                            <li>
                                              <a href="find-store.html">
                                                Find A Store
                                              </a>
                                            </li>
                                            <li>
                                              <a href="compare-product.html">
                                                Compare Products
                                              </a>
                                            </li>
                                            <li>
                                              <a href="compare-empty-page.html">
                                                Compare Empty
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                        <div className="col-12 col-lg-1-5 single-mega-item rbt-scroll-trigger fade_in animation-order-1 mt--16">
                                          <p className="rbt-short-title h5">
                                            Inner Pages
                                          </p>
                                          <ul className="mega-menu-item">
                                            <li>
                                              <a href="team-page-one.html">
                                                Team One
                                              </a>
                                            </li>
                                            <li>
                                              <a href="team-page-two.html">
                                                Team Two
                                              </a>
                                            </li>
                                            <li>
                                              <a href="team-page-three.html">
                                                Team Three
                                              </a>
                                            </li>
                                            <li>
                                              <a href="team-page-four.html">
                                                Team Four
                                              </a>
                                            </li>
                                            <li>
                                              <a href="privacy-policy.html">
                                                Privacy Policy
                                              </a>
                                            </li>
                                            <li>
                                              <a href="error-404.html">
                                                Error 404
                                              </a>
                                            </li>
                                            <li>
                                              <a href="error-maintanance.html">
                                                Maintanace
                                              </a>
                                            </li>
                                            <li>
                                              <a href="portfolio-default.html">
                                                Portfolio Default
                                              </a>
                                            </li>
                                            <li>
                                              <a href="portfolio-grid-layout-full-width.html">
                                                Portfolio Full Width
                                              </a>
                                            </li>
                                            <li>
                                              <a href="portfolio-details.html">
                                                Portfolio Details
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                        <div className="col-12 col-lg-1-5 single-mega-item rbt-scroll-trigger fade_in animation-order-1 mt--16">
                                          <p className="rbt-short-title h5">
                                            Inner Pages
                                          </p>
                                          <ul className="mega-menu-item">
                                            <li>
                                              <a href="blog-default.html">
                                                Blog Default
                                              </a>
                                            </li>
                                            <li>
                                              <a href="blog-grid.html">
                                                Blog Grid
                                              </a>
                                            </li>
                                            <li>
                                              <a href="blog-sidebar.html">
                                                Blog Sidebar
                                              </a>
                                            </li>
                                            <li>
                                              <a href="blog-modern.html">
                                                Blog Modern
                                              </a>
                                            </li>
                                            <li>
                                              <a href="blog-infinite-scroll.html">
                                                Blog Infinite Scroll
                                              </a>
                                            </li>
                                            <li>
                                              <a href="blog-load-more.html">
                                                Blog load-more
                                              </a>
                                            </li>
                                            <li>
                                              <a href="blog-single.html">
                                                Blog Details
                                              </a>
                                            </li>
                                            <li>
                                              <a href="brand-list.html">
                                                Brand List
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#!">
                                                Blog Timeline
                                                <div className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                                                  Coming
                                                </div>
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#!">
                                                Blog Gallery
                                                <div className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                                                  Coming
                                                </div>
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                        <div className="col-12 col-lg-1-5 single-mega-item rbt-scroll-trigger fade_in animation-order-1 mt--16">
                                          <p className="rbt-short-title h5">
                                            Shop User Pages
                                          </p>
                                          <ul className="mega-menu-item">
                                            <li>
                                              <a href="my-order-history.html">
                                                Order History
                                              </a>
                                            </li>
                                            <li>
                                              <a href="my-wishlist.html">
                                                Wishlist
                                              </a>
                                            </li>
                                            <li>
                                              <a href="my-payment-methods.html">
                                                Payment Methods
                                              </a>
                                            </li>
                                            <li>
                                              <a href="account-info.html">
                                                Personal info
                                              </a>
                                            </li>
                                            <li>
                                              <a href="account-notifications.html">
                                                Notifications
                                              </a>
                                            </li>
                                            <li>
                                              <a href="help-center.html">
                                                User Help Center
                                              </a>
                                            </li>
                                            <li>
                                              <a href="terms-policy.html">
                                                Terms and conditions
                                              </a>
                                            </li>
                                            <li>
                                              <a href="signin.html">Sign In</a>
                                            </li>
                                            <li>
                                              <a href="signup.html">Sign Up</a>
                                            </li>
                                            <li>
                                              <a href="#!">
                                                Membership Details
                                                <div className="rbt-product-badge rbt-product-badge-bg-success border-rounded">
                                                  Coming
                                                </div>
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                        <div className="col-12 col-lg-1-5 single-mega-item rbt-scroll-trigger fade_in animation-order-1 mt--16">
                                          <p className="rbt-short-title h5">
                                            E-commerce
                                          </p>
                                          <ul className="mega-menu-item">
                                            <li>
                                              <a href="cart.html">Cart Page</a>
                                            </li>
                                            <li>
                                              <a href="return-policy.html">
                                                Return Policy
                                                <div className="rbt-product-badge rbt-product-badge-bg-yellow border-rounded">
                                                  New
                                                </div>
                                              </a>
                                            </li>
                                            <li>
                                              <a href="wishlist.html">
                                                Wishlist Page
                                              </a>
                                            </li>
                                            <li>
                                              <a href="checkout-delivery-step-one.html">
                                                Checkout Page
                                              </a>
                                            </li>
                                            <li>
                                              <a href="checkout-delivery-step-two.html">
                                                Checkout Delivary Info
                                              </a>
                                            </li>
                                            <li>
                                              <a href="checkout-payment.html">
                                                Checkout Payment
                                              </a>
                                            </li>
                                            <li>
                                              <a href="checkout-shipping.html">
                                                Checkout Shipping
                                              </a>
                                            </li>
                                            <li>
                                              <a href="checkout-thankyou.html">
                                                Thank You
                                              </a>
                                            </li>
                                            <li>
                                              <a href="categories-list.html">
                                                Categories List
                                              </a>
                                            </li>
                                            <li>
                                              <a href="offer-list-page.html">
                                                Offer List
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-12">
                                          <hr className="rbt-separator rbt-separator-gray200 mb--16 mt--16 mt_sm--12 mb_sm--12 rbt-bg-color-gray-100" />
                                        </div>
                                        <div className="col-lg-12">
                                          <ul className="rbt-nav-brand-list liststyle d-flex justify-content-xl-between">
                                            <li>
                                              <a href="shop-by-brands.html">
                                                <img
                                                  src="assets/images/brands/brand-a-01.webp"
                                                  alt="Ecommerce Brand Image"
                                                />
                                              </a>
                                            </li>
                                            <li>
                                              <a href="shop-by-brands.html">
                                                <img
                                                  src="assets/images/brands/brand-a-02.webp"
                                                  alt="Ecommerce Brand Image"
                                                />
                                              </a>
                                            </li>
                                            <li>
                                              <a href="shop-by-brands.html">
                                                <img
                                                  src="assets/images/brands/brand-a-03.webp"
                                                  alt="Ecommerce Brand Image"
                                                />
                                              </a>
                                            </li>
                                            <li>
                                              <a href="shop-by-brands.html">
                                                <img
                                                  src="assets/images/brands/brand-a-04.webp"
                                                  alt="Ecommerce Brand Image"
                                                />
                                              </a>
                                            </li>
                                            <li>
                                              <a href="shop-by-brands.html">
                                                <img
                                                  src="assets/images/brands/brand-a-05.webp"
                                                  alt="Ecommerce Brand Image"
                                                />
                                              </a>
                                            </li>
                                            <li>
                                              <a href="shop-by-brands.html">
                                                <img
                                                  src="assets/images/brands/brand-a-06.webp"
                                                  alt="Ecommerce Brand Image"
                                                />
                                              </a>
                                            </li>
                                            <li>
                                              <a href="shop-by-brands.html">
                                                <img
                                                  src="assets/images/brands/brand-a-07.webp"
                                                  alt="Ecommerce Brand Image"
                                                />
                                              </a>
                                            </li>
                                            <li>
                                              <a href="shop-by-brands.html">
                                                <img
                                                  src="assets/images/brands/brand-a-01.webp"
                                                  alt="Ecommerce Brand Image"
                                                />
                                              </a>
                                            </li>
                                            <li>
                                              <a href="shop-by-brands.html">
                                                <img
                                                  src="assets/images/brands/brand-a-02.webp"
                                                  alt="Ecommerce Brand Image"
                                                />
                                              </a>
                                            </li>
                                            <li>
                                              <a href="shop-by-brands.html">
                                                <img
                                                  src="assets/images/brands/brand-a-03.webp"
                                                  alt="Ecommerce Brand Image"
                                                />
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* End Mega Menu  */}
                          </div>
                          {/* End Mega Menu  */}
                        </li>
                        <li className="with-rbt-megamenu has-menu-child-item position-static">
                          <a href="#!">
                            Elements{" "}
                            <i className="fa-regular fa-chevron-down" />
                          </a>
                          {/* Start Mega Menu  */}
                          <div className="rbt-megamenu container pl_sm--0 pl_md--0 pl_lg--0">
                            <div className="rbt-megamenu-wrapper">
                              <div className="row row--12 d-flex justify-content-between">
                                <div className="col-xl-9">
                                  <div className="h-100 d-flex flex-column justify-content-between">
                                    <div className="row row--12">
                                      <div className="col-xl-3 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                                        <p className="rbt-short-title h5">
                                          Base Elements
                                        </p>
                                        <ul className="mega-menu-item">
                                          <li>
                                            <a href="element-titles.html">
                                              Title Styles
                                            </a>
                                          </li>
                                          <li>
                                            <a href="element-carousels.html">
                                              Carosels Styles
                                            </a>
                                          </li>
                                          <li>
                                            <a href="element-sliders.html">
                                              Sliders Styles
                                            </a>
                                          </li>
                                          <li>
                                            <a href="element-product-banner.html">
                                              Banner Styles
                                            </a>
                                          </li>
                                          <li>
                                            <a href="element-button.html">
                                              Button Styles
                                            </a>
                                          </li>
                                          <li>
                                            <a href="element-brands.html">
                                              Brands Styles
                                            </a>
                                          </li>
                                          <li>
                                            <a href="element-list-styles.html">
                                              List Styles
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#!">
                                              Icon Box Styles
                                              <div className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                                                Coming
                                              </div>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="col-xl-3 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                                        <p className="rbt-short-title h5">
                                          Template Elements
                                        </p>
                                        <ul className="mega-menu-item">
                                          <li>
                                            <a href="element-hotspot-styles.html">
                                              Hotspot Styles
                                            </a>
                                          </li>
                                          <li>
                                            <a href="element-countdown-styles.html">
                                              Countdown Styles
                                            </a>
                                          </li>
                                          <li>
                                            <a href="element-insta-post.html">
                                              Instagram Posts
                                            </a>
                                          </li>
                                          <li>
                                            <a href="element-products.html">
                                              Product Card Styles
                                            </a>
                                          </li>
                                          <li>
                                            <a href="element-catagories-style.html">
                                              Catagories Card Styles
                                            </a>
                                          </li>
                                          <li>
                                            <a href="element-video-styles.html">
                                              Video Styles
                                            </a>
                                          </li>
                                          <li>
                                            <a href="element-header-styles.html">
                                              Header Styles
                                            </a>
                                          </li>
                                          <li>
                                            <a href="element-footer-styles.html">
                                              Footer Styles
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="col-xl-3 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                                        <p className="rbt-short-title h5">
                                          Template Elements
                                        </p>
                                        <ul className="mega-menu-item">
                                          <li>
                                            <a href="element-table-styles.html">
                                              Table Styles
                                            </a>
                                          </li>
                                          <li>
                                            <a href="element-social-buttons.html">
                                              Social Buttons
                                            </a>
                                          </li>
                                          <li>
                                            <a href="element-image-gallary.html">
                                              Image Gallary
                                            </a>
                                          </li>
                                          <li>
                                            <a href="element-team-styles.html">
                                              Team Card Styles
                                            </a>
                                          </li>
                                          <li>
                                            <a href="element-accordion-styles.html">
                                              Accordion Styles
                                            </a>
                                          </li>
                                          <li>
                                            <a href="element-portfolio-styles.html">
                                              PortFolio Card Styles
                                            </a>
                                          </li>
                                          <li>
                                            <a href="element-blog-styles.html">
                                              Blog Card Styles
                                            </a>
                                          </li>
                                          <li>
                                            <a href="element-review-card.html">
                                              Review Cards
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="col-xl-3 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                                        <p className="rbt-short-title h5">
                                          E-Commerce
                                        </p>
                                        <ul className="mega-menu-item">
                                          <li>
                                            <a href="element-recent-products.html">
                                              Recent Products
                                            </a>
                                          </li>
                                          <li>
                                            <a href="element-featured-products.html">
                                              Featured Products
                                            </a>
                                          </li>
                                          <li>
                                            <a href="element-best-selling-products.html">
                                              Best Selling Products
                                            </a>
                                          </li>
                                          <li>
                                            <a href="element-single-product.html">
                                              Single Product
                                            </a>
                                          </li>
                                          <li>
                                            <a href="element-sale-products.html">
                                              Sale Products
                                            </a>
                                          </li>
                                          <li>
                                            <a href="element-pricing.html">
                                              Pricing Styles
                                            </a>
                                          </li>
                                          <li>
                                            <a href="element-cart.html">
                                              Cart Styles
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              Order Tracking
                                              <div className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                                                Coming
                                              </div>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="row row--12 d-none d-xl-flex">
                                      <div className="col-12">
                                        <hr className="rbt-separator rbt-separator-gray200 mb--16 mt--16 mt_sm--12 mb_sm--12 rbt-bg-color-gray-100" />
                                      </div>
                                      <div className="col-lg-12">
                                        <ul className="rbt-nav-brand-list liststyle d-flex justify-content-xl-between">
                                          <li>
                                            <a href="shop-by-brands.html">
                                              <img
                                                src="assets/images/brands/brand-a-01.webp"
                                                alt="Ecommerce Brand Image"
                                              />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="shop-by-brands.html">
                                              <img
                                                src="assets/images/brands/brand-a-02.webp"
                                                alt="Ecommerce Brand Image"
                                              />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="shop-by-brands.html">
                                              <img
                                                src="assets/images/brands/brand-a-03.webp"
                                                alt="Ecommerce Brand Image"
                                              />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="shop-by-brands.html">
                                              <img
                                                src="assets/images/brands/brand-a-04.webp"
                                                alt="Ecommerce Brand Image"
                                              />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="shop-by-brands.html">
                                              <img
                                                src="assets/images/brands/brand-a-05.webp"
                                                alt="Ecommerce Brand Image"
                                              />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="shop-by-brands.html">
                                              <img
                                                src="assets/images/brands/brand-a-06.webp"
                                                alt="Ecommerce Brand Image"
                                              />
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xl-3 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                                  <div className="rbt-menu-offer-card rbt-bg-style-box rbt-bg-two">
                                    <div className="mega-top-banner">
                                      <div className="rbt-banner-inner flex-column justify-content-center rbt-gap--8 align-items-center text-center">
                                        <div className="rbt-banner-content">
                                          <h2 className="title rbt-text-color-white">
                                            New Aurora Watch
                                          </h2>
                                          <p className="b3 desc rbt-text-color-gray-200">
                                            Send your idea, appear Unimart.
                                          </p>
                                        </div>
                                        <a
                                          className="rbt-btn rbt-btn-sm"
                                          href="#"
                                        >
                                          View Details
                                        </a>
                                        <a
                                          href="#"
                                          className="product-img position-bottom mt--24"
                                        >
                                          <img
                                            src="assets/images/splash/menu-banner/menu-prd-03-lg.webp"
                                            alt="Eccommerce Product"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* End Mega Menu  */}
                        </li>
                        <li className="with-rbt-megamenu has-menu-child-item position-static">
                          <a href="#!">
                            Core Features{" "}
                            <i className="fa-regular fa-chevron-down" />
                          </a>
                          {/* Start Mega Menu  */}
                          <div className="rbt-megamenu p-0 container">
                            {/* Start Mega Menu  */}
                            <div className="rbt-megamenu-wrapper p--0">
                              <div className="wrapper">
                                <div className="row row--0 mt_dec--32">
                                  <div className="col-xl-8 mt--24 rbt-scroll-trigger zoom_in animation-order-2">
                                    <div className="rbt-inner-menu-wrapper p--24 p_sm--0 p_md--0 p_lg--0">
                                      <div className="row row-12 mt_dec--16">
                                        <div className="col-12 col-xl-4 single-mega-item rbt-scroll-trigger fade_in animation-order-1 mt--16">
                                          <p className="rbt-short-title h5">
                                            Ultimate User Experience
                                          </p>
                                          <ul className="mega-menu-item">
                                            <li>
                                              <a href="customize-options.html">
                                                Easy to Customize Codes
                                              </a>
                                            </li>
                                            <li>
                                              <a href="page-customizability.html">
                                                Highly Customizable Elements
                                              </a>
                                            </li>
                                            <li>
                                              <a href="performance.html">
                                                Fast Performance
                                                <div className="rbt-product-badge rbt-product-badge-bg-red border-rounded">
                                                  Hot
                                                </div>
                                              </a>
                                            </li>
                                            <li>
                                              <a href="header-builder.html">
                                                Ultimate Header Layouts
                                              </a>
                                            </li>
                                            <li>
                                              <a href="footer-builder.html">
                                                Excessive Footer Variation
                                              </a>
                                            </li>
                                            <li>
                                              <a href="advanced-megamenu.html">
                                                Advanced Mega Menu
                                              </a>
                                            </li>
                                            <li>
                                              <a href="popup-builder.html">
                                                Popup &amp; Sidebar Search
                                              </a>
                                            </li>
                                            <li>
                                              <a href="boost-features.html">
                                                All Boost Sales Features
                                                <div className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                                                  New
                                                </div>
                                              </a>
                                            </li>
                                            <li>
                                              <a href="mobile-first.html">
                                                Mobile-first Experience
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#!">
                                                User Feedback
                                                <div className="rbt-product-badge rbt-product-badge-bg-yellow border-rounded">
                                                  Coming
                                                </div>
                                              </a>
                                            </li>
                                            <li>
                                              <a href="#!">
                                                Seamless Integration
                                                <div className="rbt-product-badge rbt-product-badge-bg-yellow border-rounded">
                                                  Coming
                                                </div>
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                        <div className="col-12 col-xl-4 single-mega-item rbt-scroll-trigger fade_in animation-order-1 mt--16">
                                          <p className="rbt-short-title h5">
                                            Flexible Shopping
                                          </p>
                                          <ul className="mega-menu-item">
                                            <li>
                                              <a href="product-filtering.html">
                                                Smart Product Filtering
                                              </a>
                                            </li>
                                            <li>
                                              <a href="variant-switcher.html">
                                                Variant Swatches
                                                <div className="rbt-product-badge rbt-product-badge-bg-secondary border-rounded">
                                                  Fully Ready
                                                </div>
                                              </a>
                                            </li>
                                            <li>
                                              <a href="compare-table-builder.html">
                                                Product Compare
                                              </a>
                                            </li>
                                            <li>
                                              <a href="wishlist-builder.html">
                                                WishLists Builder
                                              </a>
                                            </li>
                                            <li>
                                              <a href="quick-view.html">
                                                Quick View
                                              </a>
                                            </li>
                                            <li>
                                              <a href="flash-sell-management.html">
                                                Flash Sales Management
                                              </a>
                                            </li>
                                            <li>
                                              <a href="cart-builder.html">
                                                Cart Upsell
                                                <div className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                                                  New
                                                </div>
                                              </a>
                                            </li>
                                            <li>
                                              <a href="size-chart-builder.html">
                                                Size Chart Variation
                                              </a>
                                            </li>
                                            <li>
                                              <a href="sticky-cart-builder.html">
                                                Sticky Add To Cart
                                              </a>
                                            </li>
                                            <li>
                                              <a href="product-display.html">
                                                Product Video &amp; 3D View
                                              </a>
                                            </li>
                                            <li>
                                              <a href="multi-step-checkout.html">
                                                Multi-Step Checkout
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                        <div className="col-12 col-xl-4 single-mega-item rbt-scroll-trigger fade_in animation-order-1 mt--16">
                                          <p className="rbt-short-title h5">
                                            Boost Sales
                                          </p>
                                          <ul className="mega-menu-item">
                                            <li>
                                              <a href="notifications.html">
                                                Back To Stock Notification
                                              </a>
                                            </li>
                                            <li>
                                              <a href="sales-popup.html">
                                                Sales Popup
                                              </a>
                                            </li>
                                            <li>
                                              <a href="pre-order.html">
                                                Pre Order
                                              </a>
                                            </li>
                                            <li>
                                              <a href="backorder.html">
                                                Backorder
                                              </a>
                                            </li>
                                            <li>
                                              <a href="partial-payment.html">
                                                Partial Payment
                                              </a>
                                            </li>
                                            <li>
                                              <a href="shareable-cart.html">
                                                Shareable Cart
                                              </a>
                                            </li>
                                            <li>
                                              <a href="bulk-amount-purchase.html">
                                                Bulk Amount Purchase
                                              </a>
                                            </li>
                                            <li>
                                              <a href="stock-progressbar.html">
                                                Stock Progress Bar
                                              </a>
                                            </li>
                                            <li>
                                              <a href="sale-push-notification.html">
                                                Sales Push Notification
                                              </a>
                                            </li>
                                            <li>
                                              <a href="offer-management.html">
                                                Special Offers Management
                                              </a>
                                            </li>
                                            <li>
                                              <a href="free-shipping.html">
                                                Free Shipping Threshold
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-4 mt--24 single-mega-item rbt-scroll-trigger zoom_in animation-order-2">
                                    <img
                                      className="h-100"
                                      src="assets/images/header-bg/megamenu-banner-hr-01.webp"
                                      alt="Eccommerce Banner"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* End Mega Menu  */}
                          </div>
                          {/* End Mega Menu  */}
                        </li>
                        <li className="has-dropdown position-relative">
                          <a href="#!">
                            More <i className="fa-regular fa-chevron-down" />
                          </a>
                          <ul className="submenu">
                            <li>
                              <a href="docs/index.htm">Documentation</a>
                            </li>
                            <li>
                              <a href="https://www.youtube.com/@rainbow-themes/videos">
                                Video Tutorials
                              </a>
                            </li>
                            <li>
                              <a href="https://support.rainbowit.net/support/login">
                                Support Center
                                <div className="rbt-product-badge rbt-product-badge-bg-green border-rounded">
                                  24/7
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="docs/doc-changelog.html">Change Log</a>
                            </li>
                            <li>
                              <a href="https://rainbowthemes.net/contact/">
                                Contact Us
                              </a>
                            </li>
                            <li>
                              <a href="https://rainbowthemes.net/faqs/">FAQ</a>
                            </li>
                            <li>
                              <a href="https://rainbowthemes.net/services/">
                                Customization
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="rbt-tab-pane-mobilemenu-2"
                    role="tabpanel"
                    aria-labelledby="rbt-tab-mobilemenu-2"
                    tabIndex={0}
                  >
                    <nav className="rbt-mainmenu-nav">
                      <ul className="mainmenu">
                        <li className="with-rbt-megamenu has-menu-child-item position-static">
                          <a href="shop-by-categories.html">
                            <span>
                              <i className="rbt-catagories-icon mr--8 fa-regular fa-house-chimney" />
                            </span>
                            Home &amp; Garden
                            <span className="rbt-chevron-right">
                              <i className="fa-regular fa-chevron-right" />
                            </span>
                          </a>
                          {/* Start Mega Menu  */}
                          <div className="rbt-megamenu grid-item-5 pl_sm--0 pl_md--0 pl_lg--0">
                            <div className="container p_sm--0 p_md--0 p_lg--0">
                              <div className="rbt-megamenu-wrapper">
                                {/* Start Card Area */}
                                <div className="row row--12">
                                  <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                                    <p className="rbt-short-title h5">
                                      Home &amp; Garden
                                    </p>
                                    <ul className="mega-menu-item">
                                      <li>
                                        <a href="shop-by-category.html">
                                          Furniture
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-by-category.html">
                                          Living Room Sets
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-by-category.html">
                                          Sofas &amp; Couches
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-by-category.html">
                                          Coffee Tables
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-by-category.html">
                                          Bedroom Furniture
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-by-category.html">
                                          Mattresses &amp; Bedding
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-by-category.html">
                                          Wardrobes &amp; Storage
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                                    <p className="rbt-short-title h5">
                                      More Home &amp; Garden
                                    </p>
                                    <ul className="mega-menu-item">
                                      <li>
                                        <a href="shop-by-category.html">
                                          Home Decor
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-by-category.html">
                                          Clocks &amp; Mirrors
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-by-category.html">
                                          Curtains &amp; Blinds
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-by-category.html">
                                          Rugs &amp; Carpets
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-by-category.html">
                                          Lighting &amp; Lamps
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-by-category.html">
                                          Outdoor Furniture
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-by-category.html">
                                          BBQ &amp; Grills
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                                    <div className="rbt-menu-offer-card">
                                      <div className="mega-top-banner rbt-bg-color-extra-six">
                                        <div className="rbt-banner-inner flex-column justify-content-center rbt-gap--8 align-items-center text-center">
                                          <div className="rbt-banner-content">
                                            <h2 className="title">
                                              All For Garden
                                            </h2>
                                            <p className="b3 desc">
                                              Send your idea, appear Unimart.
                                            </p>
                                          </div>
                                          <a
                                            className="rbt-btn rbt-btn-sm rbt-btn-black"
                                            href="product-single-default.html"
                                          >
                                            View Details
                                          </a>
                                          <a
                                            href="#"
                                            className="product-img position-bottom mt--24"
                                          >
                                            <img
                                              src="assets/images/splash/menu-banner/menu-prd-garden.webp"
                                              alt="Eccommerce Product"
                                            />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* End Card Area */}
                              </div>
                            </div>
                          </div>
                          {/* End Mega Menu  */}
                        </li>
                        <li className="with-rbt-megamenu has-menu-child-item position-static">
                          <a href="shop-by-categories.html">
                            <span>
                              <i className="rbt-catagories-icon mr--8 fa-regular fa-mobile-notch" />
                            </span>
                            Smart Phones
                            <span className="rbt-chevron-right">
                              <i className="fa-regular fa-chevron-right" />
                            </span>
                          </a>
                          {/* Start Mega Menu  */}
                          <div className="rbt-megamenu grid-item-5 pl_sm--0 pl_md--0 pl_lg--0">
                            <div className="container p_sm--0 p_md--0 p_lg--0">
                              <div className="rbt-megamenu-wrapper">
                                {/* Start Card Area */}
                                <div className="row row--12">
                                  <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                                    <p className="rbt-short-title h5">
                                      Smart Phones
                                    </p>
                                    <ul className="mega-menu-item">
                                      <li>
                                        <a href="shop-by-category.html">
                                          Latest Models
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-by-category.html">
                                          5G Phones
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-by-category.html">
                                          Android Phones
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-by-category.html">
                                          iPhones
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-by-category.html">
                                          Gaming Phones
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-by-category.html">
                                          Budget Phones
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-by-category.html">
                                          Accessories
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                                    <p className="rbt-short-title h5">
                                      Tablets &amp; Accessories
                                    </p>
                                    <ul className="mega-menu-item">
                                      <li>
                                        <a href="shop-by-category.html">
                                          Latest Tablets
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-by-category.html">
                                          Android Tablets
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-by-category.html">
                                          iPads
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-by-category.html">
                                          Tablet Keyboards
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-by-category.html">
                                          Stylus Pens
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-by-category.html">
                                          Screen Protectors
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-by-category.html">
                                          Tablet Cases
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                                    <div className="rbt-menu-offer-card rbt-bg-style-box rbt-bg-two">
                                      <div className="mega-top-banner">
                                        <div className="rbt-banner-inner flex-column justify-content-center rbt-gap--8 align-items-center text-center">
                                          <div className="rbt-banner-content">
                                            <h2 className="title rbt-text-color-white">
                                              Apple 16 Pro
                                            </h2>
                                            <p className="b3 desc rbt-text-color-gray-200">
                                              Send your idea, appear Unimart.
                                            </p>
                                          </div>
                                          <a
                                            className="rbt-btn rbt-btn-sm"
                                            href="#"
                                          >
                                            View Details
                                          </a>
                                          <a
                                            href="#"
                                            className="product-img position-bottom mt--24"
                                          >
                                            <img
                                              src="assets/images/splash/menu-banner/menu-prd-apple.webp"
                                              alt="Eccommerce Product"
                                            />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* End Card Area */}
                              </div>
                            </div>
                          </div>
                          {/* End Mega Menu  */}
                        </li>
                        <li className="with-rbt-megamenu has-menu-child-item position-static">
                          <a href="shop-by-categories.html">
                            <span>
                              <i className="rbt-catagories-icon mr--8 fa-regular fa-desktop" />
                            </span>
                            Electronics Gadgets
                            <span className="rbt-chevron-right">
                              <i className="fa-regular fa-chevron-right" />
                            </span>
                          </a>
                          {/* Start Mega Menu  */}
                          <div className="rbt-megamenu grid-item-5 pl_sm--0 pl_md--0 pl_lg--0">
                            <div className="container p_sm--0 p_md--0 p_lg--0">
                              <div className="rbt-megamenu-wrapper">
                                {/* Start Card Area */}
                                <div className="row row--12">
                                  <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                                    <p className="rbt-short-title h5">
                                      Wearable Tech
                                    </p>
                                    <ul className="mega-menu-item">
                                      <li>
                                        <a href="shop-by-category.html">
                                          Smartwatches
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-by-category.html">
                                          Fitness Trackers
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-by-category.html">
                                          VR &amp; AR Headsets
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-by-category.html">
                                          Smart Glasses
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-by-category.html">
                                          Sleep Trackers
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-by-category.html">
                                          Wearable Cameras
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-by-category.html">
                                          Wireless Earbuds
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                                    <p className="rbt-short-title h5">
                                      Smart Home &amp; Office
                                    </p>
                                    <ul className="mega-menu-item">
                                      <li>
                                        <a href="shop-by-category.html">
                                          Smart Speakers
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-by-category.html">
                                          Smart Plugs &amp; Lights
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-by-category.html">
                                          Home Security Systems
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-by-category.html">
                                          Streaming Devices
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-by-category.html">
                                          External Monitors
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-by-category.html">
                                          Portable Projectors
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                                    <div className="rbt-menu-offer-card rbt-bg-color-brand-50 rbt-rounded--12">
                                      <div className="mega-top-banner">
                                        <div className="rbt-banner-inner flex-column justify-content-center rbt-gap--8 align-items-center text-center">
                                          <div className="rbt-banner-content">
                                            <h2 className="title">
                                              Straps of Colors
                                            </h2>
                                            <p className="b3 desc">
                                              Send your idea, appear Unimart.
                                            </p>
                                          </div>
                                          <a
                                            className="rbt-btn rbt-btn-sm rbt-btn-black"
                                            href="product-single-default.html"
                                          >
                                            View Details
                                          </a>
                                          <a
                                            href="#"
                                            className="product-img position-bottom mt--24"
                                          >
                                            <img
                                              src="assets/images/splash/menu-banner/menu-prd-02-lg.webp"
                                              alt="Eccommerce Product"
                                            />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* End Card Area */}
                              </div>
                            </div>
                          </div>
                          {/* End Mega Menu  */}
                        </li>
                        <li>
                          <a href="shop-by-categories.html">
                            <span>
                              <i className="rbt-catagories-icon mr--8 fa-regular fa-shirt" />
                            </span>
                            Fashion Wear
                          </a>
                        </li>
                        <li>
                          <a href="shop-by-categories.html">
                            <span>
                              <i className="rbt-catagories-icon mr--8 fa-regular fa-camera" />
                            </span>
                            Cameras &amp; Photo
                          </a>
                        </li>
                        <li>
                          <a href="shop-by-categories.html">
                            <span>
                              <i className="rbt-catagories-icon mr--8 fa-regular fa-cauldron" />
                            </span>
                            Cooking Items
                          </a>
                        </li>
                        <li>
                          <a href="shop-by-categories.html">
                            <span>
                              <i className="rbt-catagories-icon mr--8 fa-regular fa-heart-pulse" />
                            </span>
                            Health &amp; Beauty
                          </a>
                        </li>
                        <li>
                          <a href="categories-list.html">
                            {" "}
                            View All Categories{" "}
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="mobile-menu-bottom">
              <div className="social-share-wrapper">
                <span className="rbt-short-title d-block">Find With Us</span>
                <ul className="rbt-social-icon-list mt--12">
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-x-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-youtube" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-whatsapp" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-telegram" />
                    </a>
                  </li>
                </ul>
              </div>
              <ul className="navbar-top-left rbt-information-list justify-content-center">
                <li>
                  <a href="/cdn-cgi/l/email-protection#d3bbb6bfbfbc93b6abb2bea3bfb6fdb0bcbe">
                    <i className="fa-light fa-envelope" />
                    <span
                      className="__cf_email__"
                      data-cfemail="9ffae7fef2eff3fadff8f2fef6f3b1fcf0f2"
                    >
                      [email&nbsp;protected]
                    </span>
                  </a>
                </li>
                <li>
                  <a href="tel:+302555-0107">
                    <i className="fa-regular fa-phone" />
                    (302) 555-0107
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Start Side Nav */}
        <div className="rbt-offcanvas-cat-side-menu rbt-category-sidemenu">
          <div className="inner-wrapper">
            <div className="rbt-categories-sidebar d-flex">
              <div className="rbt-sidebar-left-content">
                <div className="rbt-sidebar-left-inner">
                  {/* Start sidebar left header */}
                  <div className="rbt-sidebar-left-content-head">
                    <div className="rbt-categories-sidebar-top-content mb--24">
                      <div className="logo">
                        <a href="index.html">
                          <img
                            src="assets/images/logo/logo.webp"
                            alt="Unimart Logo"
                          />
                        </a>
                      </div>
                      <button className="rbt-sidebar-close-btn">
                        <i className="fa-sharp fa-solid fa-xmark" />
                      </button>
                    </div>
                    <div className="rbt-access-box rbt-scroll-trigger fade_in animation-order-1 rbt-access-box-has-bg-hover rbt-access-box-has-bg-hover-white d-inline-block">
                      <a
                        href="#!"
                        className="rbt-access-box-wrapper"
                        data-bs-toggle="modal"
                        data-bs-target="#signinModal"
                      >
                        <div className="rbt-round-btn rbt-bg-color-brand-300 rbt-text-color-primary has-rbt-sm-fsize">
                          <i className="fa-regular fa-user" />
                        </div>
                        <div className="content">
                          <p>Log in/Sign Up</p>
                          <span>Access Account</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  {/* End sidebar left header */}
                  <div className="rbt-sidebar-tabs-wrapper">
                    <div className="rbt-sidebar-tabs-inner">
                      {/* Start tabs */}
                      <ul
                        className="rbt-sidebar-sub-categories nav flex-column nav-pills"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                      >
                        <li>
                          <button
                            className="rbt-nav-link nav-link"
                            id="rbt-tab-cat-sidebar-1"
                            data-bs-toggle="pill"
                            data-bs-target="#rbt-nav-pill-1"
                            type="button"
                            role="tab"
                            aria-controls="rbt-nav-pill-1"
                            aria-selected="true"
                          >
                            <span className="rbt-round-btn">
                              <i className="fa-regular fa-camera" />
                            </span>
                            <span className="rbt-content">
                              <span className="rbt-sub-category-title">
                                <span>Camera &amp; Photo</span>
                              </span>
                              <span className="description">
                                Popular Camera &amp; Photo accessories
                              </span>
                            </span>
                            <span className="icon">
                              <i className="fa-regular fa-chevron-right" />
                            </span>
                          </button>
                        </li>
                        <li>
                          <button
                            className="rbt-nav-link nav-link"
                            id="rbt-tab-cat-sidebar-2"
                            data-bs-toggle="pill"
                            data-bs-target="#rbt-nav-pill-2"
                            type="button"
                            role="tab"
                            aria-controls="rbt-nav-pill-2"
                            aria-selected="false"
                          >
                            <span className="rbt-round-btn">
                              <i className="fa-regular fa-watch-apple" />
                            </span>
                            <span className="rbt-content">
                              <span className="rbt-sub-category-title">
                                <span>All Watches</span>
                                <span className="rbt-product-badge rbt-product-badge-bg-primary">
                                  EXCLUSIVE
                                </span>
                              </span>
                              <span className="description">
                                Pages with a demonstration of Smartwatches
                              </span>
                            </span>
                            <span className="icon">
                              <i className="fa-regular fa-chevron-right" />
                            </span>
                          </button>
                        </li>
                        <li>
                          <button
                            className="rbt-nav-link nav-link"
                            id="rbt-tab-cat-sidebar-3"
                            data-bs-toggle="pill"
                            data-bs-target="#rbt-nav-pill-3"
                            type="button"
                            role="tab"
                            aria-controls="rbt-nav-pill-3"
                            aria-selected="false"
                          >
                            <span className="rbt-round-btn">
                              <i className="fa-sharp fa-regular fa-camcorder" />
                            </span>
                            <span className="rbt-content">
                              <span className="rbt-sub-category-title">
                                <span>TVs, Audio-Video</span>
                              </span>
                              <span className="description">
                                Top TVs, Audio-Videothe most famous brands
                              </span>
                            </span>
                            <span className="icon">
                              <i className="fa-regular fa-chevron-right" />
                            </span>
                          </button>
                        </li>
                        <li>
                          <button
                            className="rbt-nav-link nav-link"
                            id="rbt-tab-cat-sidebar-4"
                            data-bs-toggle="pill"
                            data-bs-target="#rbt-nav-pill-4"
                            type="button"
                            role="tab"
                            aria-controls="rbt-nav-pill-4"
                            aria-selected="false"
                          >
                            <span className="rbt-round-btn">
                              <i className="fa-light fa-game-console-handheld" />
                            </span>
                            <span className="rbt-content">
                              <span className="rbt-sub-category-title">
                                <span>Gaming</span>
                                <span className="rbt-product-badge rbt-bg-color-green">
                                  TRENDING
                                </span>
                              </span>
                              <span className="description">
                                Accessories for Games from the best brands
                              </span>
                            </span>
                            <span className="icon">
                              <i className="fa-regular fa-chevron-right" />
                            </span>
                          </button>
                        </li>
                        <li>
                          <button
                            className="rbt-nav-link nav-link"
                            id="rbt-tab-cat-sidebar-5"
                            data-bs-toggle="pill"
                            data-bs-target="#rbt-nav-pill-5"
                            type="button"
                            role="tab"
                            aria-controls="rbt-nav-pill-5"
                            aria-selected="false"
                          >
                            <span className="rbt-round-btn">
                              <i className="fa-sharp fa-regular fa-headphones" />
                            </span>
                            <span className="rbt-content">
                              <span className="rbt-sub-category-title">
                                <span>Headphones &amp; Music</span>
                              </span>
                              <span className="description">
                                Catalog best Headphones &amp; Music here now
                              </span>
                            </span>
                            <span className="icon">
                              <i className="fa-regular fa-chevron-right" />
                            </span>
                          </button>
                        </li>
                        <li>
                          <button
                            className="rbt-nav-link nav-link"
                            id="rbt-tab-cat-sidebar-6"
                            data-bs-toggle="pill"
                            data-bs-target="#rbt-nav-pill-6"
                            type="button"
                            role="tab"
                            aria-controls="rbt-nav-pill-6"
                            aria-selected="false"
                          >
                            <span className="rbt-round-btn">
                              <i className="fa-sharp fa-regular fa-blender-phone" />
                            </span>
                            <span className="rbt-content">
                              <span className="rbt-sub-category-title">
                                <span>Appliances</span>
                                <span className="rbt-product-badge rbt-bg-color-danger">
                                  HOT
                                </span>
                              </span>
                              <span className="description">
                                Full list links of all House Appliances active
                              </span>
                            </span>
                            <span className="icon">
                              <i className="fa-regular fa-chevron-right" />
                            </span>
                          </button>
                        </li>
                      </ul>
                      {/* End tabs */}
                      {/* Start quick links */}
                      <div className="rbt-sidebar-quick-links-part">
                        <div className="rbt-sidebar-bottom-inner">
                          <hr className="rbt-separator rbt-separator-gray200 mb--24" />
                          <nav className="rbt-sidebar-nav">
                            <h2 className="rbt-sub-category-title h4">
                              <a
                                data-bs-toggle="collapse"
                                href="#collapseExample"
                                role="button"
                                aria-expanded="false"
                                aria-controls="collapseExample"
                              >
                                Quick Links
                                <span className="icon">
                                  <i className="fa-regular fa-chevron-down" />
                                </span>
                              </a>
                            </h2>
                            <div className="collapse" id="collapseExample">
                              <ul className="rbt-sidebar-quick-links">
                                <li>
                                  <a href="about.html">About us</a>
                                </li>
                                <li>
                                  <a href="#">Reviews</a>
                                </li>
                                <li>
                                  <a href="#">Delivery &amp; payment</a>
                                </li>
                                <li>
                                  <a href="blogs.html">Blog Articles</a>
                                </li>
                              </ul>
                            </div>
                          </nav>
                          <hr className="rbt-separator rbt-separator-gray200 mb--24 mt--24" />
                          <nav className="rbt-sidebar-nav">
                            <h2 className="rbt-sub-category-title h4">
                              <a
                                data-bs-toggle="collapse"
                                href="#collapseExample2"
                                role="button"
                                aria-expanded="false"
                                aria-controls="collapseExample2"
                              >
                                More Links
                                <span className="icon">
                                  <i className="fa-regular fa-chevron-down" />
                                </span>
                              </a>
                            </h2>
                            <div className="collapse" id="collapseExample2">
                              <ul className="rbt-sidebar-quick-links">
                                <li>
                                  <a href="contact.html">Contacts</a>
                                </li>
                                <li>
                                  <a href="#">Information</a>
                                </li>
                                <li>
                                  <a href="terms-policy.html">
                                    Terms &amp; Conditions
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </nav>
                        </div>
                      </div>
                      {/* End quick links */}
                    </div>
                  </div>
                  {/* Start sidebar footer */}
                  <div className="rbt-sidebar-left-content-footer">
                    <div className="rbt-sidebar-contact-area">
                      <div className="rbt-sidebar-contact-inner rbt-link-hover">
                        <p className="rbt-contact-text">
                          Boston, 44 Main street
                        </p>
                        <a
                          className="rbt-contact-links"
                          href="tel:+1(917)722-7425"
                        >
                          +1(917)722-7425 (the call is free)
                        </a>
                        <p className="rbt-contact-text mt--12">
                          Mon-Sun 9.00 - 18.00
                        </p>
                        <a
                          className="rbt-contact-links"
                          href="/cdn-cgi/l/email-protection#482c2d2527082d30292538242d662b2725"
                        >
                          <span
                            className="__cf_email__"
                            data-cfemail="2347464e4c63465b424e534f460d404c4e"
                          >
                            [email&nbsp;protected]
                          </span>
                        </a>
                        <a
                          className="rbt-contact-links d-block"
                          href="find-store.html"
                        >
                          View on map
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* End sidebar footer */}
                </div>
              </div>
              <div className="rbt-sidebar-right-content">
                <div className="rbt-sidebar-right-inner">
                  {/* Start tab content */}
                  <div className="tab-content" id="v-pills-tabContent">
                    {/* Start single Category Tab content */}
                    <div
                      className="rbt-tab-content tab-pane fade show active"
                      id="rbt-nav-pill-1"
                      role="tabpanel"
                      aria-labelledby="rbt-tab-cat-sidebar-1"
                      tabIndex={0}
                    >
                      <div className="rbt-sub-category-products">
                        <div className="rbt-category-products-inner">
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-7.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">
                                Action Camera
                              </a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">
                                  Sports Cameras
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  Underwater Cameras
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">360 Cameras</a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-8.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">
                                Camera lenses
                              </a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">VR Cameras</a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  Panoramic Cameras
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">3D Cameras</a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-9.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">
                                Digital Camera
                              </a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">
                                  Drone Cameras
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  Helmet Cameras
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  Dual-Lens Cameras
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-10.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">DSLR</a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">
                                  Compact 360 Cameras
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">DSLR Cameras</a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  Mirrorless Cameras
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-11.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">Handycam</a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">
                                  Point-and-Shoot Cameras
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  Bridge Cameras
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  Compact Cameras
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-12.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">
                                Mirrorless Camera
                              </a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">
                                  Full-Frame Mirrorless
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  APS-C Mirrorless
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  Micro Four Thirds Mirrorless
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-13.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">Dash Cam</a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">
                                  Compact Mirrorless
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  Medium Format Mirrorless
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">Panoramic</a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-14.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">Video Camera</a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">
                                  Digital Camcorders
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  Professional Camcorders
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  4K Camcorders
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-15.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">
                                Instant Camera
                              </a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">
                                  Compact Camcorders
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  High Definition (HD) Camcorders
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">Panoramic</a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-16.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">
                                Camera Accessories
                              </a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">
                                  SD Cards (High-Speed)
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  MicroSD Cards
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  External Hard Drives
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-17.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">
                                Camera Tripod
                              </a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">
                                  Travel Tripods
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  Tabletop Tripods
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">Monopods</a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                        </div>
                        {/* Start banner */}
                        <div className="rbt-sidebar-banner">
                          <div className="rbt-banner-img">
                            <img
                              src="assets/images/product-img/sidebar-category/product-banner.webp"
                              alt="Banner Image"
                            />
                          </div>
                          <div className="rbt-sidebar-banner-content">
                            <p className="rbt-sidebar-banner-text">
                              Camera Accessories
                              <span className="rbt-text-color-primary rbt-text-semi-bold ml--4">
                                11th December
                              </span>
                            </p>
                            <h2 className="rbt-sidebar-banner-titile h4">
                              Up to 40% Off
                              <span className="rbt-text-regular">
                                On All Brands
                              </span>
                            </h2>
                            <a href="#" className="rbt-btn rbt-btn-sm">
                              Know More
                            </a>
                          </div>
                        </div>
                        {/* End banner */}
                      </div>
                    </div>
                    {/* End single Category Tab content */}
                    {/* Start single Category Tab content */}
                    <div
                      className="rbt-tab-content tab-pane fade"
                      id="rbt-nav-pill-2"
                      role="tabpanel"
                      aria-labelledby="rbt-tab-cat-sidebar-2"
                      tabIndex={0}
                    >
                      <div className="rbt-sub-category-products">
                        <div className="rbt-category-products-inner">
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-1.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">
                                Fitness Tracker
                              </a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">Smart Bands</a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  Heart Rate Monitors
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  Sleep Trackers
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-2.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">Bluetooth</a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">
                                  Luxury Bluetooth Watches
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  Hybrid Smartwatches
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  Kids' Smartwatches
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-3.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">Hybrid</a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">
                                  Fitness Hybrid Watches
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  Smart Hybrid Watches
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  Classic Hybrid Watches
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-4.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">Regular</a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">
                                  Analog Watches
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  Digital Watches
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  Dress Watches
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-5.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">Touchscreen</a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">Smartwatches</a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  Fitness Trackers
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  Hybrid Smartwatches
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                        </div>
                        {/* Start banner */}
                        <div className="rbt-sidebar-banner">
                          <div className="rbt-banner-img">
                            <img
                              src="assets/images/product-img/sidebar-category/product-banner.webp"
                              alt="Banner Image"
                            />
                          </div>
                          <div className="rbt-sidebar-banner-content">
                            <p className="rbt-sidebar-banner-text">
                              Starting From
                              <span className="rbt-text-color-primary rbt-text-semi-bold ml--4">
                                11th December
                              </span>
                            </p>
                            <h2 className="rbt-sidebar-banner-titile h4">
                              Up to 40% Off
                              <span className="rbt-text-regular">
                                On All Brands
                              </span>
                            </h2>
                            <a href="#" className="rbt-btn rbt-btn-sm">
                              Know More
                            </a>
                          </div>
                        </div>
                        {/* End banner */}
                      </div>
                    </div>
                    {/* End single Category Tab content */}
                    {/* Start single Category Tab content */}
                    <div
                      className="rbt-tab-content tab-pane fade"
                      id="rbt-nav-pill-3"
                      role="tabpanel"
                      aria-labelledby="rbt-tab-cat-sidebar-3"
                      tabIndex={0}
                    >
                      <div className="rbt-sub-category-products">
                        <div className="rbt-category-products-inner">
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-18.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">QLED TV</a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a
                                  href="shop-by-categories.html"
                                  className="rbt-underline-btn btn-white"
                                >
                                  View All
                                  <i className="fa-regular fa-chevron-right" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-19.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">Smart TV</a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a
                                  href="shop-by-categories.html"
                                  className="rbt-underline-btn btn-white"
                                >
                                  View All
                                  <i className="fa-regular fa-chevron-right" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-20.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">UHD TV</a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a
                                  href="shop-by-categories.html"
                                  className="rbt-underline-btn btn-white"
                                >
                                  View All
                                  <i className="fa-regular fa-chevron-right" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-21.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">HD TV</a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a
                                  href="shop-by-categories.html"
                                  className="rbt-underline-btn btn-white"
                                >
                                  View All
                                  <i className="fa-regular fa-chevron-right" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-22.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">LED TV</a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a
                                  href="shop-by-categories.html"
                                  className="rbt-underline-btn btn-white"
                                >
                                  View All
                                  <i className="fa-regular fa-chevron-right" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-23.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">4K TV</a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a
                                  href="shop-by-categories.html"
                                  className="rbt-underline-btn btn-white"
                                >
                                  View All
                                  <i className="fa-regular fa-chevron-right" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                        </div>
                        {/* Start banner */}
                        <div className="rbt-sidebar-banner">
                          <div className="rbt-banner-img">
                            <img
                              src="assets/images/product-img/sidebar-category/product-banner.webp"
                              alt="Banner Image"
                            />
                          </div>
                          <div className="rbt-sidebar-banner-content">
                            <p className="rbt-sidebar-banner-text">
                              Starting From
                              <span className="rbt-text-color-primary rbt-text-semi-bold ml--4">
                                11th December
                              </span>
                            </p>
                            <h2 className="rbt-sidebar-banner-titile h4">
                              Up to 40% Off
                              <span className="rbt-text-regular">
                                On All Brands
                              </span>
                            </h2>
                            <a href="#" className="rbt-btn rbt-btn-sm">
                              Know More
                            </a>
                          </div>
                        </div>
                        {/* End banner */}
                      </div>
                    </div>
                    {/* End single Category Tab content */}
                    {/* Start single Category Tab content */}
                    <div
                      className="rbt-tab-content tab-pane fade"
                      id="rbt-nav-pill-4"
                      role="tabpanel"
                      aria-labelledby="rbt-tab-cat-sidebar-4"
                      tabIndex={0}
                    >
                      <div className="rbt-sub-category-products">
                        <div className="rbt-category-products-inner">
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-24.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">
                                Gaming Keyboard
                              </a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">
                                  Apex Gamer Pro
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  Stealth Strike Keyboard
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  Rapid Fire RGB
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-25.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">
                                Gaming Headset
                              </a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">
                                  SoundStorm Pro
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  EchoMaster Elite
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  BattleTune 360
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-26.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">Gaming Chair</a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">
                                  Elite Gamer Throne
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  Turbo Comfort Seat
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  Pro Series Gaming Chair
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-27.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">Mouse Pads</a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">
                                  GlidePro Mouse Pad
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  PixelPerfect Pad
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  EagleEye Mouse Mat
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-28.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">Joystick</a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">
                                  ProGamer Joystick
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  Precision Play Controller
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  TurboGrip Joystick
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-29.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">VR headset</a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">
                                  VisionSphere VR Headset
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  ImmersiveEye VR Goggles
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  RealityFusion Headset
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-30.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">
                                PlayStation Acce...
                              </a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">
                                  Crystal Clear Faceplate
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  ComfortFit Chair
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  Dynamic RGB LED
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-31.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">Gaming Desk</a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">
                                  ProGamer Desk
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  Titan Gaming Station
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  Arcade Pro Desk
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-32.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">Gaming Sofa</a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">
                                  Victory Lounge
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">Pixel Perch</a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  Gamer's Retreat
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                        </div>
                        {/* Start banner */}
                        <div className="rbt-sidebar-banner">
                          <div className="rbt-banner-img">
                            <img
                              src="assets/images/product-img/sidebar-category/product-banner.webp"
                              alt="Banner Image"
                            />
                          </div>
                          <div className="rbt-sidebar-banner-content">
                            <p className="rbt-sidebar-banner-text">
                              Starting From
                              <span className="rbt-text-color-primary rbt-text-semi-bold ml--4">
                                11th December
                              </span>
                            </p>
                            <h2 className="rbt-sidebar-banner-titile h4">
                              Up to 40% Off
                              <span className="rbt-text-regular">
                                On All Brands
                              </span>
                            </h2>
                            <a href="#" className="rbt-btn rbt-btn-sm">
                              Know More
                            </a>
                          </div>
                        </div>
                        {/* End banner */}
                      </div>
                    </div>
                    {/* End single Category Tab content */}
                    {/* Start single Category Tab content */}
                    <div
                      className="rbt-tab-content tab-pane fade"
                      id="rbt-nav-pill-5"
                      role="tabpanel"
                      aria-labelledby="rbt-tab-cat-sidebar-5"
                      tabIndex={0}
                    >
                      <div className="rbt-sub-category-products">
                        <div className="rbt-category-products-inner">
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-33.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">
                                Bluetooth Headphone
                              </a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">
                                  SoundWave Pro
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  AeroSound Bluetooth
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  PulseBeats Wireless
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-34.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">
                                Headphone Stand
                              </a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">Audio Aegis</a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  Harmonic Holder
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  Headset Haven
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-35.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">Home Theater</a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">
                                  Cinematic Sound Bar
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  Ultra HD Projector
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">4K Smart TV</a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-36.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">
                                Bluetooth Speaker
                              </a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">
                                  SoundWave Pro
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  BassBlaster 360
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  AeroSound Compact
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-37.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">Soundbar</a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">
                                  Versatile Soundbar
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  Signature Series Soundbar
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  ProSound Soundbar
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-38.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">Microphone</a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">
                                  SoundWave Pro
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  EchoSphere Mic
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  ClearCast 3000
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-39.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">
                                Voice Recorder
                              </a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">EchoNote Pro</a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  VoxCapture 3000
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">SoundScribe</a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-40.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">Sound Card</a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">
                                  AeroSound Pro
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  EchoMaster FX
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  Vortex SoundBlaster
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                        </div>
                        {/* Start banner */}
                        <div className="rbt-sidebar-banner">
                          <div className="rbt-banner-img">
                            <img
                              src="assets/images/product-img/sidebar-category/product-banner.webp"
                              alt="Banner Image"
                            />
                          </div>
                          <div className="rbt-sidebar-banner-content">
                            <p className="rbt-sidebar-banner-text">
                              Starting From
                              <span className="rbt-text-color-primary rbt-text-semi-bold ml--4">
                                11th December
                              </span>
                            </p>
                            <h2 className="rbt-sidebar-banner-titile h4">
                              Up to 40% Off
                              <span className="rbt-text-regular">
                                On All Brands
                              </span>
                            </h2>
                            <a href="#" className="rbt-btn rbt-btn-sm">
                              Know More
                            </a>
                          </div>
                        </div>
                        {/* End banner */}
                      </div>
                    </div>
                    {/* End single Category Tab content */}
                    {/* Start single Category Tab content */}
                    <div
                      className="rbt-tab-content tab-pane fade"
                      id="rbt-nav-pill-6"
                      role="tabpanel"
                      aria-labelledby="rbt-tab-cat-sidebar-6"
                      tabIndex={0}
                    >
                      <div className="rbt-sub-category-products">
                        <div className="rbt-category-products-inner">
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-41.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">
                                Air Conditioner
                              </a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">
                                  CoolBreeze Pro
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  ChillMaster Elite
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  AirFlow Genius
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-42.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">Geyser</a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">
                                  AquaFlow Geysers
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  TurboHeat Geysers
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  EcoHeat Geysers
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-43.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">Oven</a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">
                                  CrispBake Oven
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  QuickHeat Convection Oven
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  PerfectBake Electric Oven
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-44.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">Air Fryer</a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">
                                  CrispMaster Air Fryer
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  Healthy Fry Pro
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  QuickCrisp Air Fryer
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-45.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">
                                Washing Machine
                              </a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">EcoClean Pro</a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  UltraWash 360
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  QuickSpin Deluxe
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-46.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">
                                Sewing Machine
                              </a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">
                                  StitchPro 300
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  SewMaster Deluxe
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  QuiltCraft Elite
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-47.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">Air Purifier</a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">
                                  PureAir Breeze
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  FreshFlow Purifier
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  BreatheEasy Pro
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-48.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">
                                Vacuum Cleaner
                              </a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">
                                  PowerSweep Pro
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  UltraClean Cyclone
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  DustBuster Max
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-49.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">Blender</a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">
                                  Smoothie Master Pro
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  NutriBlend Ultra
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  EcoBlend Portable Blender
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-50.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">Cooker</a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">
                                  PowerMix 3000
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  Frozen Fusion Blender
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  UltraSmooth Blender
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-51.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">Iron</a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">
                                  Blender &amp; Chop Duo
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  TurboMix Professional
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  BlendSmart 2-in-1
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                          {/* Start product singel */}
                          <div className="rbt-sub-category-product">
                            <a href="#" className="rbt-sidebar-category-img">
                              <img
                                src="assets/images/product-img/sidebar-category/category-product-52.webp"
                                alt="Product Image"
                              />
                            </a>
                            <h2 className="rbt-category-offcanvas-header h5">
                              <a href="shop-by-categories.html">Mini Heater</a>
                            </h2>
                            <ul className="rbt-product-features has-link-underline-effect">
                              <li>
                                <a href="shop-by-category.html">
                                  HeatWave Blanket
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  ThermoCushion{" "}
                                </a>
                              </li>
                              <li>
                                <a href="shop-by-category.html">
                                  SootheHeat Massager
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End product singel */}
                        </div>
                        {/* Start banner */}
                        <div className="rbt-sidebar-banner">
                          <div className="rbt-banner-img">
                            <img
                              src="assets/images/product-img/sidebar-category/product-banner.webp"
                              alt="Banner Image"
                            />
                          </div>
                          <div className="rbt-sidebar-banner-content">
                            <p className="rbt-sidebar-banner-text">
                              Starting From
                              <span className="rbt-text-color-primary rbt-text-semi-bold ml--4">
                                11th December
                              </span>
                            </p>
                            <h2 className="rbt-sidebar-banner-titile h4">
                              Up to 40% Off
                              <span className="rbt-text-regular">
                                On All Brands
                              </span>
                            </h2>
                            <a href="#" className="rbt-btn rbt-btn-sm">
                              Know More
                            </a>
                          </div>
                        </div>
                        {/* End banner */}
                      </div>
                    </div>
                    {/* End single Category Tab content */}
                  </div>
                  {/* End tab content */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Side Nav */}
        {/* Start Side Nav */}
        <div className="rbt-cart-side-menu rbt-sidebar-cart">
          <div className="inner-wrapper">
            <div className="inner-top">
              <div className="rbt-cart-header">
                <div className="title-section">
                  <h2 className="title mb--0 h6">
                    <i className="fa-sharp fa-regular fa-cart-shopping mr--12" />{" "}
                    Your cart
                  </h2>
                </div>
                <div className="rbt-quick-info-tag d-flex mt--16 rbt-flash-animation">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.9706 14.9359C18.8148 18.8649 15.7493 22 11.9891 22C8.12909 22 5 18.5858 5 14.6221C5 14.0924 4.99101 13.0336 5.74352 11.2472C6.19387 10.1781 6.47633 9.50646 6.63574 8.89253C6.72333 8.55511 6.89367 8.01904 7.37926 8.89253C7.66559 9.40757 7.67666 10.1483 7.67666 10.1483C7.67666 10.1483 8.74197 9.28536 9.4611 7.63673C10.5153 5.21985 9.67419 3.77512 9.38675 2.77048C9.28727 2.42294 9.22481 1.79833 9.90721 2.06409C10.6025 2.33495 12.4408 3.69334 13.4017 5.12512C14.7732 7.16855 15.2605 9.128 15.2605 9.128C15.2605 9.128 15.6997 8.55268 15.8553 7.95068C16.0312 7.27089 16.0338 6.59763 16.5988 7.32285C17.1361 8.01253 17.9341 9.3086 18.3833 10.5408C19.1989 12.7784 18.9706 14.9359 18.9706 14.9359Z"
                      fill="url(#paint0_linear_47_2365484)"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.9999 22C9.23852 22 7 19.7944 7 17.0735C7 15.4318 7.67145 14.435 9.0689 13.0833C9.96366 12.2179 10.8011 11.1549 11.157 10.4311C11.2271 10.2886 11.3866 9.54605 12.0014 10.4155C12.3239 10.8714 12.8296 11.6823 13.1538 12.3744C13.7127 13.5676 13.8461 14.7239 13.8461 14.7239C13.8461 14.7239 14.3938 14.4059 14.7692 13.5871C14.8902 13.3232 15.1348 12.3241 15.8186 13.323C16.3204 14.0561 17.0097 15.3741 16.9999 17.0735C16.9999 19.7944 14.7613 22 11.9999 22Z"
                      fill="#FC9502"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.1019 16C12.8497 16 12.8497 17.4475 13.7996 19.3803C14.4321 20.6672 13.486 22 12.1019 22C10.7178 22 10 20.8271 10 19.3803C10 17.9335 11.3541 16 12.1019 16Z"
                      fill="#FCE202"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_47_2365484"
                        x1="11.9995"
                        y1="22.0148"
                        x2="11.9995"
                        y2="2.01511"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset={1} stopColor="#FF4C0D" />
                        <stop offset={1} stopColor="#FC9502" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <p>
                    Limited Item,
                    <strong>
                      checkout within
                      <span className="rbt-countdown-cart">10m 00s</span>
                    </strong>
                  </p>
                </div>
                <div className="rbt-btn-close" id="btn_sideNavClose">
                  <button className="minicart-close-button rbt-round-btn">
                    <i className="fa-solid fa-xmark" />
                  </button>
                </div>
              </div>
              <nav className="side-nav w-100">
                <ul className="rbt-minicart-wrapper">
                  <li className="minicart-item">
                    <div className="thumbnail">
                      <a href="product-single-default.html">
                        <img
                          src="assets/images/product-img/electronics/electronics-bg-trans-10-a-1-hover.webp"
                          alt="Product Image"
                        />
                      </a>
                    </div>
                    <div className="product-content">
                      <h3 className="title h6">
                        <a href="product-single-default.html">
                          JBL PartyBox 100W Speaker
                        </a>
                      </h3>
                      <span className="quantity">
                        1x <span className="price">$359.00</span>
                      </span>
                      <div className="bottom-part">
                        <div className="rbt-qty-area">
                          <button className="qty-item-btn qty-item-btn-decr">
                            <i className="fa-solid fa-minus" />
                          </button>
                          <input
                            type="number"
                            className="items-qty-input"
                            min={1}
                          />
                          <button className="qty-item-btn qty-item-btn-incr">
                            <i className="fa-solid fa-plus" />
                          </button>
                        </div>
                        <button
                          className="edit-btn"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#quickviewEditCartModal"
                        >
                          <i className="fa-regular fa-pen" /> Edit
                        </button>
                      </div>
                    </div>
                    <div className="close-btn">
                      <button className="rbt-round-btn">
                        <i className="fa-solid fa-xmark" />
                      </button>
                    </div>
                  </li>
                  <li className="minicart-item">
                    <div className="thumbnail">
                      <a href="product-single-default.html">
                        <img
                          src="assets/images/product-img/electronics/electronics-bg-trans-04-a-1-hover.webp"
                          alt="Product Image"
                        />
                      </a>
                    </div>
                    <div className="product-content">
                      <h3 className="title h6">
                        <a href="product-single-default.html">
                          Apple Watch Ultra 2
                        </a>
                      </h3>
                      <span className="quantity">
                        1x <span className="price">$359.00</span>
                      </span>
                      <div className="bottom-part">
                        <div className="rbt-qty-area">
                          <button className="qty-item-btn qty-item-btn-decr">
                            <i className="fa-solid fa-minus" />
                          </button>
                          <input
                            type="number"
                            className="items-qty-input"
                            min={1}
                          />
                          <button className="qty-item-btn qty-item-btn-incr">
                            <i className="fa-solid fa-plus" />
                          </button>
                        </div>
                        <button
                          className="edit-btn"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#quickviewEditCartModal"
                        >
                          <i className="fa-regular fa-pen" /> Edit
                        </button>
                      </div>
                    </div>
                    <div className="close-btn">
                      <button className="rbt-round-btn">
                        <i className="fa-solid fa-xmark" />
                      </button>
                    </div>
                  </li>
                  <li className="minicart-item">
                    <div className="thumbnail">
                      <a href="product-single-default.html">
                        <img
                          src="assets/images/product-img/electronics/electronics-bg-trans-01-a-1-hover.webp"
                          alt="Product Image"
                        />
                      </a>
                    </div>
                    <div className="product-content">
                      <h3 className="title h6">
                        <a href="product-single-default.html">
                          PlayStation Wireless Headphone
                        </a>
                      </h3>
                      <span className="quantity">
                        1x <span className="price">$759.00</span>
                      </span>
                      <div className="bottom-part">
                        <div className="rbt-qty-area">
                          <button className="qty-item-btn qty-item-btn-decr">
                            <i className="fa-solid fa-minus" />
                          </button>
                          <input
                            type="number"
                            className="items-qty-input"
                            min={1}
                          />
                          <button className="qty-item-btn qty-item-btn-incr">
                            <i className="fa-solid fa-plus" />
                          </button>
                        </div>
                        <button
                          className="edit-btn"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#quickviewEditCartModal"
                        >
                          <i className="fa-regular fa-pen" /> Edit
                        </button>
                      </div>
                    </div>
                    <div className="close-btn">
                      <button className="rbt-round-btn">
                        <i className="fa-solid fa-xmark" />
                      </button>
                    </div>
                  </li>
                  <li className="minicart-item">
                    <div className="thumbnail">
                      <a href="product-single-default.html">
                        <img
                          src="assets/images/product-img/electronics/electronics-bg-trans-02-a-1-hover.webp"
                          alt="Product Image"
                        />
                      </a>
                    </div>
                    <div className="product-content">
                      <h3 className="title h6">
                        <a href="product-single-default.html">
                          Awei CL-115M USB 2.4A Cable
                        </a>
                      </h3>
                      <span className="quantity">
                        1x <span className="price">$459.00</span>
                      </span>
                      <div className="bottom-part">
                        <div className="rbt-qty-area">
                          <button className="qty-item-btn qty-item-btn-decr">
                            <i className="fa-solid fa-minus" />
                          </button>
                          <input
                            type="number"
                            className="items-qty-input"
                            min={1}
                          />
                          <button className="qty-item-btn qty-item-btn-incr">
                            <i className="fa-solid fa-plus" />
                          </button>
                        </div>
                        <button
                          className="edit-btn"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#quickviewEditCartModal"
                        >
                          <i className="fa-regular fa-pen" /> Edit
                        </button>
                      </div>
                    </div>
                    <div className="close-btn">
                      <button className="rbt-round-btn">
                        <i className="fa-solid fa-xmark" />
                      </button>
                    </div>
                  </li>
                  <li className="minicart-item">
                    <div className="thumbnail">
                      <a href="product-single-default.html">
                        <img
                          src="assets/images/product-img/electronics/electronics-bg-trans-03-a-1-hover.webp"
                          alt="Product Image"
                        />
                      </a>
                    </div>
                    <div className="product-content">
                      <h3 className="title h6">
                        <a href="product-single-default.html">
                          MaxGreen 45W Power Adapter
                        </a>
                      </h3>
                      <span className="quantity">
                        1x <span className="price">$999.00</span>
                      </span>
                      <div className="bottom-part">
                        <div className="rbt-qty-area">
                          <button className="qty-item-btn qty-item-btn-decr">
                            <i className="fa-solid fa-minus" />
                          </button>
                          <input
                            type="number"
                            className="items-qty-input"
                            min={1}
                          />
                          <button className="qty-item-btn qty-item-btn-incr">
                            <i className="fa-solid fa-plus" />
                          </button>
                        </div>
                        <button
                          className="edit-btn"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#quickviewEditCartModal"
                        >
                          <i className="fa-regular fa-pen" /> Edit
                        </button>
                      </div>
                    </div>
                    <div className="close-btn">
                      <button className="rbt-round-btn">
                        <i className="fa-solid fa-xmark" />
                      </button>
                    </div>
                  </li>
                  <li className="minicart-item">
                    <div className="thumbnail">
                      <a href="product-single-default.html">
                        <img
                          src="assets/images/product-img/electronics/electronics-bg-trans-05-a-1-hover.webp"
                          alt="Product Image"
                        />
                      </a>
                    </div>
                    <div className="product-content">
                      <h3 className="title h6">
                        <a href="product-single-default.html">
                          Havit PB90 Power Bank
                        </a>
                      </h3>
                      <span className="quantity">
                        1x <span className="price">$288.00</span>
                      </span>
                      <div className="bottom-part">
                        <div className="rbt-qty-area">
                          <button className="qty-item-btn qty-item-btn-decr">
                            <i className="fa-solid fa-minus" />
                          </button>
                          <input
                            type="number"
                            className="items-qty-input"
                            min={1}
                          />
                          <button className="qty-item-btn qty-item-btn-incr">
                            <i className="fa-solid fa-plus" />
                          </button>
                        </div>
                        <button
                          className="edit-btn"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#quickviewEditCartModal"
                        >
                          <i className="fa-regular fa-pen" /> Edit
                        </button>
                      </div>
                    </div>
                    <div className="close-btn">
                      <button className="rbt-round-btn">
                        <i className="fa-solid fa-xmark" />
                      </button>
                    </div>
                  </li>
                </ul>
                <div className="minicart-quick-access-area mt--24">
                  <a href="#" className="single-quick-access rbt-note-btn">
                    <span className="icon">
                      <i className="fa-regular fa-pen" />
                    </span>
                    <span className="text">Note</span>
                  </a>
                  <span className="hr-sepator" />
                  <a href="#" className="single-quick-access rbt-shipping-btn">
                    <span className="icon">
                      <i className="fa-regular fa-truck-fast" />
                    </span>
                    <span className="text">Shipping</span>
                  </a>
                  <span className="hr-sepator" />
                  <a href="#" className="single-quick-access rbt-coupon-btn">
                    <span className="icon">
                      <i className="fa-regular fa-ticket" />
                    </span>
                    <span className="text">Coupon</span>
                  </a>
                </div>
                <div className="minicart-inc-items-area mt--12">
                  <h3 className="title h6 positin-top">You May Also Like</h3>
                  <div className="bottom-area">
                    <div className="swiper rbt-dot-top-right inc-item-swiper-activation rbt-minicart-wrapper overflow-hidden">
                      <div className="swiper-wrapper">
                        {/* single slide */}
                        <div className="swiper-slide">
                          <div className="minicart-item">
                            <div className="thumbnail">
                              <a href="product-single-default.html">
                                <img
                                  src="assets/images/product-img/electronics/electronics-bg-trans-08-a-1-hover.webp"
                                  alt="Product Image"
                                />
                              </a>
                            </div>
                            <div className="product-content">
                              <h3 className="title h6">
                                <a href="product-single-default.html">
                                  Keurig K-Duo 4K Waterproof Action Video Camera
                                </a>
                              </h3>
                              <span className="quantity">
                                <span className="price">$345.00</span>
                              </span>
                            </div>
                            <a
                              href="#!"
                              className="add-itembtn tooltips"
                              data-bs-toggle="modal"
                              data-bs-target="#addedcartModal"
                              data-tooltip="Add to Cart"
                            >
                              <i className="fa-regular fa-cart-plus" />
                            </a>
                          </div>
                        </div>
                        {/* single slide */}
                        <div className="swiper-slide">
                          <div className="minicart-item">
                            <div className="thumbnail">
                              <a href="product-single-default.html">
                                <img
                                  src="assets/images/product-img/electronics/electronics-bg-trans-06-a-1-hover.webp"
                                  alt="Product Image"
                                />
                              </a>
                            </div>
                            <div className="product-content">
                              <h3 className="title h6">
                                <a href="product-single-default.html">
                                  Full Amoled HD Streaming Webcam
                                </a>
                              </h3>
                              <span className="quantity">
                                <span className="price">$189.00</span>
                              </span>
                            </div>
                            <a
                              href="#!"
                              className="add-itembtn tooltips"
                              data-bs-toggle="modal"
                              data-bs-target="#addedcartModal"
                              data-tooltip="Add to Cart"
                            >
                              <i className="fa-regular fa-cart-plus" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="rbt-swiper-pagination" />
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            <div className="rbt-minicart-footer">
              <hr className="mb--0 mt--16" />
              <div className="rbt-cart-subttotal">
                <p>Subtotal (2 items)</p>
                <p className="price">$758.00</p>
              </div>
              <div className="rbt-cart-subttotal">
                <p>Shipping</p>
                <p className="price">$10.00</p>
              </div>
              <hr className="mb--0" />
              <div className="rbt-cart-subttotal">
                <p className="subtotal">
                  <strong>Total</strong>
                </p>
                <p className="price">$768.00</p>
              </div>
              <div className="offer-progress-area">
                <p className="offer-text">
                  Add <strong>$248.00</strong> More To Get
                  <strong>Free Shipping</strong>
                </p>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Shipping-progress"
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress-bar w-75" />
                </div>
              </div>
              <div className="rbt-minicart-bottom mt--24">
                <div className="checkout-btn mt--20">
                  <a className="rbt-btn w-100 text-center" href="#">
                    <span className="btn-text">Checkout</span>
                  </a>
                </div>
                <div className="share-btn-grp rbt-link-hover">
                  <a href="cart.html" className="share-btn">
                    <i className="fa-regular fa-pen mr--4" /> View Cart
                  </a>
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#socialShareModal"
                    type="button"
                    className="share-btn"
                  >
                    <i className="fa-sharp fa-solid fa-link mr--4" /> Share Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <a href="#!" className="rbt-close-inner-popup rbt-popup-close-btn" />
          <div className="rbt-offcanvas-inner-popup">
            <div className="rbt-offcanvas-inner-popup-card note-popup">
              <div className="rbt-offcanvas-card-inner">
                <h3 className="rbt-title rbt-text-bold h6">
                  <span className="mr--4">
                    <i className="fa-regular fa-pen" />
                  </span>
                  Add note for seller
                </h3>
                <form>
                  <div className="rbt-input-field-grp mb--12">
                    <textarea
                      className="rbt-text-field"
                      name="message"
                      placeholder="Notes about your order, e.g. special notes for delivery."
                      defaultValue={""}
                    />
                  </div>
                  <div className="rbt-btn-group mt--16">
                    <button className="rbt-btn rbt-btn-md rbt-btn-primary d-block w-100">
                      Apply
                    </button>
                    <button className="rbt-btn rbt-btn-md rbt-btn-naked d-block w-100 mt--8 mb--8 rbt-popup-close-btn">
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="rbt-offcanvas-inner-popup">
            <div className="rbt-offcanvas-inner-popup-card shipping-popup">
              <div className="rbt-offcanvas-card-inner">
                <h3 className="rbt-title rbt-text-bold h6">
                  <span className="mr--4">
                    <i className="fa-light fa-truck-fast" />
                  </span>
                  Estimate shipping rates
                </h3>
                <form>
                  <div className="rbt-input-field-grp mb--12">
                    <div className="rbt-dropdown-select filter-select rbt-modern-select search-by-category">
                      <select
                        className="w-100 rbt-select-activation"
                        data-live-search="true"
                        data-live-search-placeholder="Search City"
                      >
                        <option>Select your City</option>
                        <option>New York</option>
                        <option>London</option>
                        <option>Paris</option>
                        <option>Tokyo</option>
                        <option>Dubai</option>
                        <option>Singapore</option>
                        <option>Sydney</option>
                        <option>Berlin</option>
                        <option>Toronto</option>
                        <option>Los Angeles</option>
                      </select>
                    </div>
                  </div>
                  <div className="rbt-input-field-grp mb--12">
                    <input type="text" placeholder="State / County" />
                  </div>
                  <div className="rbt-input-field-grp mb--12">
                    <input type="text" placeholder="City" />
                  </div>
                  <div className="rbt-input-field-grp">
                    <input type="text" placeholder="Postcode / ZIP" />
                  </div>
                  <div className="rbt-btn-group mt--16">
                    <button className="rbt-btn rbt-btn-md rbt-btn-primary d-block w-100">
                      Calculate shipping rates
                    </button>
                    <button className="rbt-btn rbt-btn-md rbt-btn-naked d-block w-100 mt--8 mb--8 rbt-popup-close-btn">
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="rbt-offcanvas-inner-popup">
            <div className="rbt-offcanvas-inner-popup-card coupon-popup">
              <div className="rbt-offcanvas-card-inner">
                <h3 className="rbt-title rbt-text-bold h6">
                  <span className="mr--4">
                    <i className="fa-regular fa-ticket" />
                  </span>
                  Select or input Coupon
                </h3>
                <div className="rbt-coupon-wrapper rbt-bg-color-white">
                  <div className="rbt-coupon">
                    <div className="inner rbt-text-copy-activation">
                      <div className="left-part">
                        <input
                          type="text"
                          defaultValue="WELCOME100"
                          readOnly
                          className="rbt-coupon-code-text rbt-has-right-shepe-border rbt-copy-value-field"
                        />
                      </div>
                      <div className="coupon-details">
                        <h2 className="rbt-coupon-info-title b1">
                          UP TO 30% OFF
                        </h2>
                        <p className="rbt-coupon-info-sub-title b3 mt--4">
                          For orders over $9.90
                        </p>
                        <ul className="rbt-coupon-info-list mt--12">
                          <li>
                            <span>12/18/2023 14:00 ~ 12/25/2023 14:00</span>
                          </li>
                          <li>
                            <span>
                              The minimum spend for this coupon
                              <strong>$200.00</strong>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <button
                        className="copy-icon rbt-round-btn rbt-bg-primary rbt-copy-btn"
                        data-tooltip="Copy"
                      >
                        <i className="fa-sharp fa-regular fa-copy" />
                      </button>
                    </div>
                  </div>
                  <div className="rbt-coupon">
                    <div className="inner rbt-text-copy-activation">
                      <div className="left-part">
                        <input
                          type="text"
                          defaultValue="WELCOME100"
                          readOnly
                          className="rbt-coupon-code-text rbt-has-right-shepe-border rbt-copy-value-field"
                        />
                      </div>
                      <div className="coupon-details">
                        <h2 className="rbt-coupon-info-title b1">
                          UP TO 30% OFF
                        </h2>
                        <p className="rbt-coupon-info-sub-title b3 mt--4">
                          For orders over $9.90
                        </p>
                        <ul className="rbt-coupon-info-list mt--12">
                          <li>
                            <span>12/18/2023 14:00 ~ 12/25/2023 14:00</span>
                          </li>
                          <li>
                            <span>
                              The minimum spend for this coupon
                              <strong>$200.00</strong>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <button
                        className="copy-icon rbt-round-btn rbt-bg-primary rbt-copy-btn"
                        data-tooltip="Copy"
                      >
                        <i className="fa-sharp fa-regular fa-copy" />
                      </button>
                    </div>
                  </div>
                </div>
                <form>
                  <div className="rbt-input-field-grp mt--24">
                    <p className="b1 mb--12 rbt-text-color-gray-600">
                      If you have coupon code, please apply it below.
                    </p>
                    <input type="text" placeholder="Coupon code" />
                  </div>
                  <div className="rbt-btn-group mt--16">
                    <button className="rbt-btn rbt-btn-md rbt-btn-primary d-block w-100">
                      Apply
                    </button>
                    <button className="rbt-btn rbt-btn-md rbt-btn-naked d-block w-100 mt--8 mb--8 rbt-popup-close-btn">
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* End Side Nav */}
        {/* Start Side Nav */}
        <div className="rbt-special-offprds-side-menu rbt-special-offer-sidemenu">
          <div className="inner-wrapper p--0">
            <aside className="rbt-sidebar">
              <div className="rbt-sidebar-widget-wrapper rbt-sidebar-bg-one">
                <div className="rbt-sidebar-top sticky-top-0 rbt-bg-color-white">
                  <h3 className="rbt-sidebar-title mb--0 h-auto">
                    <i className="fa-sharp fa-regular fa-filter-list mr--4" />
                    Special Offers
                  </h3>
                  <button
                    className="rbt-sidebar-close-btn"
                    id="btn_filtersideNavClose"
                  >
                    <i className="fa-sharp fa-solid fa-xmark" />
                  </button>
                </div>
                <div className="rbt-sidebar-bottom border-0">
                  <div className="row row--12 mt_dec--24">
                    {/* Start Single Card  */}
                    <div className="col-12 mt--24">
                      <div className="rbt-card rbt-offer-card">
                        <div className="inner">
                          <div className="rbt-card-img">
                            <a href="shop-by-categories.html">
                              <img
                                src="assets/images/offer-list/offer-card-image-1.webp"
                                alt="Offer Thumbnail"
                              />
                            </a>
                          </div>
                          <div className="rbt-card-body">
                            <div className="ofr-meta-part">
                              <div className="single-meta">
                                <i className="fa-sharp fa-regular fa-calendar" />
                                26 Mar 2025 - 16 April 2025
                              </div>
                              <div className="single-meta">
                                <a href="find-store.html">
                                  <i className="fa-regular fa-shop" />
                                  All Outlet
                                </a>
                              </div>
                            </div>
                            <hr className="rbt-separator rbt-separator-gray200 mt--16 mb--12 rbt-bg-color-gray-100" />
                            <div className="rbt-ofr-card-content text-center mb--8">
                              <h3 className="rbt-ofr-card-title mb--8 rbt-text-semi-bold h6">
                                <a href="shop-by-categories.html">
                                  Smartphone Mega Fest
                                </a>
                              </h3>
                              <p className="rbt-ofr-card-text mb--12 b1 rbt-text-color-gray-500">
                                Grab top-brand smartphones at unbeatable prices.
                              </p>
                              <a className="rbt-btn rbt-btn-md active" href="#">
                                View Details
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Card  */}
                    {/* Start Single Card  */}
                    <div className="col-12 mt--24">
                      <div className="rbt-card rbt-offer-card">
                        <div className="inner">
                          <div className="rbt-card-img">
                            <a href="shop-by-categories.html">
                              <img
                                src="assets/images/offer-list/offer-card-image-2.webp"
                                alt="Offer Thumbnail"
                              />
                            </a>
                          </div>
                          <div className="rbt-card-body">
                            <div className="ofr-meta-part">
                              <div className="single-meta">
                                <i className="fa-sharp fa-regular fa-calendar" />
                                25 Feb 2025 - 16 Mar 2025
                              </div>
                              <div className="single-meta">
                                <a href="find-store.html">
                                  <i className="fa-regular fa-shop" />
                                  All Outlet
                                </a>
                              </div>
                            </div>
                            <hr className="rbt-separator rbt-separator-gray200 mt--16 mb--12 rbt-bg-color-gray-100" />
                            <div className="rbt-ofr-card-content text-center mb--8">
                              <h3 className="rbt-ofr-card-title mb--8 rbt-text-semi-bold h6">
                                <a href="shop-by-categories.html">
                                  Gadget Fiesta
                                </a>
                              </h3>
                              <p className="rbt-ofr-card-text mb--12 b1 rbt-text-color-gray-500">
                                Shop the latest gadgets at massive discounts.
                              </p>
                              <a className="rbt-btn rbt-btn-md active" href="#">
                                View Details
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Card  */}
                    {/* Start Single Card  */}
                    <div className="col-12 mt--24">
                      <div className="rbt-card rbt-offer-card">
                        <div className="inner">
                          <div className="rbt-card-img">
                            <a href="shop-by-categories.html">
                              <img
                                src="assets/images/offer-list/offer-card-image-3.webp"
                                alt="Offer Thumbnail"
                              />
                            </a>
                          </div>
                          <div className="rbt-card-body">
                            <div className="ofr-meta-part">
                              <div className="single-meta">
                                <i className="fa-sharp fa-regular fa-calendar" />
                                28 Feb 2025 - 16 Mar 2025
                              </div>
                              <div className="single-meta">
                                <a href="find-store.html">
                                  <i className="fa-regular fa-shop" />
                                  All Outlet
                                </a>
                              </div>
                            </div>
                            <hr className="rbt-separator rbt-separator-gray200 mt--16 mb--12 rbt-bg-color-gray-100" />
                            <div className="rbt-ofr-card-content text-center mb--8">
                              <h3 className="rbt-ofr-card-title mb--8 rbt-text-semi-bold h6">
                                <a href="shop-by-categories.html">
                                  Tech Gear Fest
                                </a>
                              </h3>
                              <p className="rbt-ofr-card-text mb--12 b1 rbt-text-color-gray-500">
                                Upgrade your tech with unbeatable deals on
                                gadgets!
                              </p>
                              <a className="rbt-btn rbt-btn-md active" href="#">
                                View Details
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Card  */}
                    {/* Start Single Card  */}
                    <div className="col-12 mt--24">
                      <div className="rbt-card rbt-offer-card">
                        <div className="inner">
                          <div className="rbt-card-img">
                            <a href="shop-by-categories.html">
                              <img
                                src="assets/images/offer-list/offer-card-image-4.webp"
                                alt="Offer Thumbnail"
                              />
                            </a>
                          </div>
                          <div className="rbt-card-body">
                            <div className="ofr-meta-part">
                              <div className="single-meta">
                                <i className="fa-sharp fa-regular fa-calendar" />
                                24 April 2025 - 16 May 2025
                              </div>
                              <div className="single-meta">
                                <a href="find-store.html">
                                  <i className="fa-regular fa-shop" />
                                  All Outlet
                                </a>
                              </div>
                            </div>
                            <hr className="rbt-separator rbt-separator-gray200 mt--16 mb--12 rbt-bg-color-gray-100" />
                            <div className="rbt-ofr-card-content text-center mb--8">
                              <h3 className="rbt-ofr-card-title mb--8 rbt-text-semi-bold h6">
                                <a href="shop-by-categories.html">
                                  Electro Deals Carnival
                                </a>
                              </h3>
                              <p className="rbt-ofr-card-text mb--12 b1 rbt-text-color-gray-500">
                                Grab top electronics at electrifying discounts.
                              </p>
                              <a className="rbt-btn rbt-btn-md active" href="#">
                                View Details
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Card  */}
                    {/* Start Single Card  */}
                    <div className="col-12 mt--24">
                      <div className="rbt-card rbt-offer-card">
                        <div className="inner">
                          <div className="rbt-card-img">
                            <a href="shop-by-categories.html">
                              <img
                                src="assets/images/offer-list/offer-card-image-5.webp"
                                alt="Offer Thumbnail"
                              />
                            </a>
                          </div>
                          <div className="rbt-card-body">
                            <div className="ofr-meta-part">
                              <div className="single-meta">
                                <i className="fa-sharp fa-regular fa-calendar" />
                                26 May 2025 - 16 Jun 2025
                              </div>
                              <div className="single-meta">
                                <a href="find-store.html">
                                  <i className="fa-regular fa-shop" />
                                  All Outlet
                                </a>
                              </div>
                            </div>
                            <hr className="rbt-separator rbt-separator-gray200 mt--16 mb--12 rbt-bg-color-gray-100" />
                            <div className="rbt-ofr-card-content text-center mb--8">
                              <h3 className="rbt-ofr-card-title mb--8 rbt-text-semi-bold h6">
                                <a href="shop-by-categories.html">
                                  Gadget Galaxy Fest
                                </a>
                              </h3>
                              <p className="rbt-ofr-card-text mb--12 b1 rbt-text-color-gray-500">
                                Explore the gadgets with out-of-this-world
                                discounts!
                              </p>
                              <a className="rbt-btn rbt-btn-md active" href="#">
                                View Details
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Card  */}
                    {/* Start Single Card  */}
                    <div className="col-12 mt--24">
                      <div className="rbt-card rbt-offer-card">
                        <div className="inner">
                          <div className="rbt-card-img">
                            <a href="shop-by-categories.html">
                              <img
                                src="assets/images/offer-list/offer-card-image-6.webp"
                                alt="Offer Thumbnail"
                              />
                            </a>
                          </div>
                          <div className="rbt-card-body">
                            <div className="ofr-meta-part">
                              <div className="single-meta">
                                <i className="fa-sharp fa-regular fa-calendar" />
                                26 April 2025 - 16 May 2025
                              </div>
                              <div className="single-meta">
                                <a href="find-store.html">
                                  <i className="fa-regular fa-shop" />
                                  All Outlet
                                </a>
                              </div>
                            </div>
                            <hr className="rbt-separator rbt-separator-gray200 mt--16 mb--12 rbt-bg-color-gray-100" />
                            <div className="rbt-ofr-card-content text-center mb--8">
                              <h3 className="rbt-ofr-card-title mb--8 rbt-text-semi-bold h6">
                                <a href="shop-by-categories.html">
                                  Digital Wonderland
                                </a>
                              </h3>
                              <p className="rbt-ofr-card-text mb--12 b1 rbt-text-color-gray-500">
                                Dive into a world of tech deals on must-have
                                gadgets!
                              </p>
                              <a className="rbt-btn rbt-btn-md active" href="#">
                                View Details
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Card  */}
                    {/* Start Single Card  */}
                    <div className="col-12 mt--24">
                      <div className="rbt-card rbt-offer-card">
                        <div className="inner">
                          <div className="rbt-card-img">
                            <a href="shop-by-categories.html">
                              <img
                                src="assets/images/offer-list/offer-card-image-7.webp"
                                alt="Offer Thumbnail"
                              />
                            </a>
                          </div>
                          <div className="rbt-card-body">
                            <div className="ofr-meta-part">
                              <div className="single-meta">
                                <i className="fa-sharp fa-regular fa-calendar" />
                                26 May 2025 - 16 Jun 2025
                              </div>
                              <div className="single-meta">
                                <a href="find-store.html">
                                  <i className="fa-regular fa-shop" />
                                  All Outlet
                                </a>
                              </div>
                            </div>
                            <hr className="rbt-separator rbt-separator-gray200 mt--16 mb--12 rbt-bg-color-gray-100" />
                            <div className="rbt-ofr-card-content text-center mb--8">
                              <h3 className="rbt-ofr-card-title mb--8 rbt-text-semi-bold h6">
                                <a href="shop-by-categories.html">
                                  Future Tech Expo
                                </a>
                              </h3>
                              <p className="rbt-ofr-card-text mb--12 b1 rbt-text-color-gray-500">
                                Discover cutting-edge gadgets and futuristic
                                tech!
                              </p>
                              <a className="rbt-btn rbt-btn-md active" href="#">
                                View Details
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Card  */}
                    {/* Start Single Card  */}
                    <div className="col-12 mt--24">
                      <div className="rbt-card rbt-offer-card">
                        <div className="inner">
                          <div className="rbt-card-img">
                            <a href="shop-by-categories.html">
                              <img
                                src="assets/images/offer-list/offer-card-image-8.webp"
                                alt="Offer Thumbnail"
                              />
                            </a>
                          </div>
                          <div className="rbt-card-body">
                            <div className="ofr-meta-part">
                              <div className="single-meta">
                                <i className="fa-sharp fa-regular fa-calendar" />
                                26 Feb 2025 - 15 April 2025
                              </div>
                              <div className="single-meta">
                                <a href="find-store.html">
                                  <i className="fa-regular fa-shop" />
                                  All Outlet
                                </a>
                              </div>
                            </div>
                            <hr className="rbt-separator rbt-separator-gray200 mt--16 mb--12 rbt-bg-color-gray-100" />
                            <div className="rbt-ofr-card-content text-center mb--8">
                              <h3 className="rbt-ofr-card-title mb--8 rbt-text-semi-bold h6">
                                <a href="shop-by-categories.html">
                                  Summer Mobile Fest
                                </a>
                              </h3>
                              <p className="rbt-ofr-card-text mb--12 b1 rbt-text-color-gray-500">
                                Hot deals on the latest smartphones for a
                                limited time!
                              </p>
                              <a className="rbt-btn rbt-btn-md active" href="#">
                                View Details
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Card  */}
                    {/* Start Single Card  */}
                    <div className="col-12 mt--24">
                      <div className="rbt-card rbt-offer-card">
                        <div className="inner">
                          <div className="rbt-card-img">
                            <a href="shop-by-categories.html">
                              <img
                                src="assets/images/offer-list/offer-card-image-9.webp"
                                alt="Offer Thumbnail"
                              />
                            </a>
                          </div>
                          <div className="rbt-card-body">
                            <div className="ofr-meta-part">
                              <div className="single-meta">
                                <i className="fa-sharp fa-regular fa-calendar" />
                                25 April 2025 - 16 Jun 2025
                              </div>
                              <div className="single-meta">
                                <a href="find-store.html">
                                  <i className="fa-regular fa-shop" />
                                  All Outlet
                                </a>
                              </div>
                            </div>
                            <hr className="rbt-separator rbt-separator-gray200 mt--16 mb--12 rbt-bg-color-gray-100" />
                            <div className="rbt-ofr-card-content text-center mb--8">
                              <h3 className="rbt-ofr-card-title mb--8 rbt-text-semi-bold h6">
                                <a href="shop-by-categories.html">
                                  Smartphone Mega Fest
                                </a>
                              </h3>
                              <p className="rbt-ofr-card-text mb--12 b1 rbt-text-color-gray-500">
                                Grab the hottest smartphones at unbeatable
                                prices!
                              </p>
                              <a className="rbt-btn rbt-btn-md active" href="#">
                                View Details
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Card  */}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
        {/* End Side Nav */}
        {/* <a class="close_side_menu" href="javascript:void(0);"></a> */}
        {/* Start Wishlist Modal Area  */}
        <div
          className="rbt-default-modal modal fade has-rbt-top-folder-shape"
          id="recent-viewModal"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered xs-size">
            <div className="modal-content">
              <div className="rbt-folder-shape-right-portion">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={85}
                  height={90}
                  viewBox="0 0 85 90"
                  fill="none"
                >
                  <path
                    d="M0 0H11.1844C14.5695 0 17.7971 1.42971 20.0716 3.93671L82.1927 72.4059C83.9992 74.397 84.9999 76.9893 84.9999 79.6778C84.9999 85.6547 85.0001 90 85.0001 90H0V0Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="modal-header">
                <button
                  type="button"
                  className="rbt-round-btn rbt-modal-dis-btn"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="fa-solid fa-xmark" />
                </button>
              </div>
              <div className="rbt-top-folder-shape-wrapper">
                <div className="rbt-recent-view-prd-area rbt-content-trs-portion rbt-scroll-vertical-wrapper">
                  <h3 className="rbt-title mb--16 rbt-text-bold h6">
                    Recently Viewed Items
                  </h3>
                  <div className="rbt-scroll-vertical">
                    <div className="row row--12 mt_dec--24 rbt-card-row-has-top-separator rbt-two-align-card-row">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt--24">
                        <div className="rbt-card rbt-product-card rbt-list-view-variation rbt-list-view-sm">
                          <div className="inner rbt-scroll-trigger fade_in animation-order-1">
                            <div className="rbt-card-body">
                              <div className="rbt-card-rating">
                                <ul className="rbt-rating-icon-list">
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star" />
                                  </li>
                                </ul>
                                <p className="rating-digit">(42)</p>
                              </div>
                              <h3 className="rbt-card-title h6">
                                <a href="product-single-default.html">
                                  Beats Studio Pro Wireless Earbuds – Black
                                </a>
                              </h3>
                              <div className="pricing-part">
                                <del className="price-text">$255.34</del>
                                <span className="price-text">$69.78</span>
                              </div>
                            </div>
                            <div className="rbt-card-img rbt-bg-color-default rbt-curved-style-box">
                              <a href="product-single-default.html">
                                <img
                                  src="assets/images/product-img/electronics/electronics-bg-trans-list-01.webp"
                                  alt="Card Image"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt--24">
                        <div className="rbt-card rbt-product-card rbt-list-view-variation rbt-list-view-sm">
                          <div className="inner rbt-scroll-trigger fade_in animation-order-2">
                            <div className="rbt-card-body">
                              <div className="rbt-card-rating">
                                <ul className="rbt-rating-icon-list">
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star" />
                                  </li>
                                </ul>
                                <p className="rating-digit">(42)</p>
                              </div>
                              <h3 className="rbt-card-title h6">
                                <a href="product-single-default.html">
                                  Apple 12.9-inch iPad Pro Wi-Fi 512GB Gray
                                  Space
                                </a>
                              </h3>
                              <div className="pricing-part">
                                <del className="price-text">$56.00</del>
                                <span className="price-text">$26.00</span>
                              </div>
                            </div>
                            <div className="rbt-card-img rbt-bg-color-default rbt-curved-style-box">
                              <a href="product-single-default.html">
                                <img
                                  src="assets/images/product-img/electronics/electronics-bg-trans-list-02.webp"
                                  alt="Card Image"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt--24">
                        <div className="rbt-card rbt-product-card rbt-list-view-variation rbt-list-view-sm">
                          <div className="inner rbt-scroll-trigger fade_in animation-order-3">
                            <div className="rbt-card-body">
                              <div className="rbt-card-rating">
                                <ul className="rbt-rating-icon-list">
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star" />
                                  </li>
                                </ul>
                                <p className="rating-digit">(42)</p>
                              </div>
                              <h3 className="rbt-card-title h6">
                                <a href="product-single-default.html">
                                  DJI OM 5 Handheld Smartphone Gimbal
                                </a>
                              </h3>
                              <div className="pricing-part">
                                <del className="price-text">$116.34</del>
                                <span className="price-text">$69.78</span>
                              </div>
                            </div>
                            <div className="rbt-card-img rbt-bg-color-default rbt-curved-style-box">
                              <a href="product-single-default.html">
                                <img
                                  src="assets/images/product-img/electronics/electronics-bg-trans-list-03.webp"
                                  alt="Card Image"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt--24">
                        <div className="rbt-card rbt-product-card rbt-list-view-variation rbt-list-view-sm">
                          <div className="inner rbt-scroll-trigger fade_in animation-order-4">
                            <div className="rbt-card-body">
                              <div className="rbt-card-rating">
                                <ul className="rbt-rating-icon-list">
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star" />
                                  </li>
                                </ul>
                                <p className="rating-digit">(42)</p>
                              </div>
                              <h3 className="rbt-card-title h6">
                                <a href="product-single-default.html">
                                  Apple Watch Ultra 2 – Titanium Case
                                </a>
                              </h3>
                              <div className="pricing-part">
                                <del className="price-text">$96.34</del>
                                <span className="price-text">$59.78</span>
                              </div>
                            </div>
                            <div className="rbt-card-img rbt-bg-color-default rbt-curved-style-box">
                              <a href="product-single-default.html">
                                <img
                                  src="assets/images/product-img/electronics/electronics-bg-trans-list-04.webp"
                                  alt="Card Image"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt--24">
                        <div className="rbt-card rbt-product-card rbt-list-view-variation rbt-list-view-sm">
                          <div className="inner rbt-scroll-trigger fade_in animation-order-5">
                            <div className="rbt-card-body">
                              <div className="rbt-card-rating">
                                <ul className="rbt-rating-icon-list">
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star" />
                                  </li>
                                </ul>
                                <p className="rating-digit">(42)</p>
                              </div>
                              <h3 className="rbt-card-title h6">
                                <a href="product-single-default.html">
                                  Apple MacBook Pro 16-inch – M2 Chip
                                </a>
                              </h3>
                              <div className="pricing-part">
                                <del className="price-text">$116.34</del>
                                <span className="price-text">$69.78</span>
                              </div>
                            </div>
                            <div className="rbt-card-img rbt-bg-color-default rbt-curved-style-box">
                              <a href="product-single-default.html">
                                <img
                                  src="assets/images/product-img/electronics/electronics-bg-trans-list-05.webp"
                                  alt="Card Image"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt--24">
                        <div className="rbt-card rbt-product-card rbt-list-view-variation rbt-list-view-sm">
                          <div className="inner rbt-scroll-trigger fade_in animation-order-6">
                            <div className="rbt-card-body">
                              <div className="rbt-card-rating">
                                <ul className="rbt-rating-icon-list">
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star" />
                                  </li>
                                </ul>
                                <p className="rating-digit">(42)</p>
                              </div>
                              <h3 className="rbt-card-title h6">
                                <a href="product-single-default.html">
                                  Apple iPad Air 10.9-inch – Wi-Fi 256GB
                                </a>
                              </h3>
                              <div className="pricing-part">
                                <del className="price-text">$219.34</del>
                                <span className="price-text">$99.78</span>
                              </div>
                            </div>
                            <div className="rbt-card-img rbt-bg-color-default rbt-curved-style-box">
                              <a href="product-single-default.html">
                                <img
                                  src="assets/images/product-img/electronics/electronics-bg-trans-list-06.webp"
                                  alt="Card Image"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt--24">
                        <div className="rbt-card rbt-product-card rbt-list-view-variation rbt-list-view-sm">
                          <div className="inner rbt-scroll-trigger fade_in animation-order-1">
                            <div className="rbt-card-body">
                              <div className="rbt-card-rating">
                                <ul className="rbt-rating-icon-list">
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star" />
                                  </li>
                                </ul>
                                <p className="rating-digit">(42)</p>
                              </div>
                              <h3 className="rbt-card-title h6">
                                <a href="product-single-default.html">
                                  Beats Studio Pro Wireless Earbuds – Black
                                </a>
                              </h3>
                              <div className="pricing-part">
                                <del className="price-text">$255.34</del>
                                <span className="price-text">$69.78</span>
                              </div>
                            </div>
                            <div className="rbt-card-img rbt-bg-color-default rbt-curved-style-box">
                              <a href="product-single-default.html">
                                <img
                                  src="assets/images/product-img/electronics/electronics-bg-trans-list-01.webp"
                                  alt="Card Image"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt--24">
                        <div className="rbt-card rbt-product-card rbt-list-view-variation rbt-list-view-sm">
                          <div className="inner rbt-scroll-trigger fade_in animation-order-2">
                            <div className="rbt-card-body">
                              <div className="rbt-card-rating">
                                <ul className="rbt-rating-icon-list">
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star" />
                                  </li>
                                </ul>
                                <p className="rating-digit">(42)</p>
                              </div>
                              <h3 className="rbt-card-title h6">
                                <a href="product-single-default.html">
                                  Apple 12.9-inch iPad Pro Wi-Fi 512GB Gray
                                  Space
                                </a>
                              </h3>
                              <div className="pricing-part">
                                <del className="price-text">$56.00</del>
                                <span className="price-text">$26.00</span>
                              </div>
                            </div>
                            <div className="rbt-card-img rbt-bg-color-default rbt-curved-style-box">
                              <a href="product-single-default.html">
                                <img
                                  src="assets/images/product-img/electronics/electronics-bg-trans-list-02.webp"
                                  alt="Card Image"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt--24">
                        <div className="rbt-card rbt-product-card rbt-list-view-variation rbt-list-view-sm">
                          <div className="inner rbt-scroll-trigger fade_in animation-order-3">
                            <div className="rbt-card-body">
                              <div className="rbt-card-rating">
                                <ul className="rbt-rating-icon-list">
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star" />
                                  </li>
                                </ul>
                                <p className="rating-digit">(42)</p>
                              </div>
                              <h3 className="rbt-card-title h6">
                                <a href="product-single-default.html">
                                  DJI OM 5 Handheld Smartphone Gimbal
                                </a>
                              </h3>
                              <div className="pricing-part">
                                <del className="price-text">$116.34</del>
                                <span className="price-text">$69.78</span>
                              </div>
                            </div>
                            <div className="rbt-card-img rbt-bg-color-default rbt-curved-style-box">
                              <a href="product-single-default.html">
                                <img
                                  src="assets/images/product-img/electronics/electronics-bg-trans-list-03.webp"
                                  alt="Card Image"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt--24">
                        <div className="rbt-card rbt-product-card rbt-list-view-variation rbt-list-view-sm">
                          <div className="inner rbt-scroll-trigger fade_in animation-order-4">
                            <div className="rbt-card-body">
                              <div className="rbt-card-rating">
                                <ul className="rbt-rating-icon-list">
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star" />
                                  </li>
                                </ul>
                                <p className="rating-digit">(42)</p>
                              </div>
                              <h3 className="rbt-card-title h6">
                                <a href="product-single-default.html">
                                  Apple Watch Ultra 2 – Titanium Case
                                </a>
                              </h3>
                              <div className="pricing-part">
                                <del className="price-text">$96.34</del>
                                <span className="price-text">$59.78</span>
                              </div>
                            </div>
                            <div className="rbt-card-img rbt-bg-color-default rbt-curved-style-box">
                              <a href="product-single-default.html">
                                <img
                                  src="assets/images/product-img/electronics/electronics-bg-trans-list-04.webp"
                                  alt="Card Image"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt--24">
                        <div className="rbt-card rbt-product-card rbt-list-view-variation rbt-list-view-sm">
                          <div className="inner rbt-scroll-trigger fade_in animation-order-5">
                            <div className="rbt-card-body">
                              <div className="rbt-card-rating">
                                <ul className="rbt-rating-icon-list">
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star" />
                                  </li>
                                </ul>
                                <p className="rating-digit">(42)</p>
                              </div>
                              <h3 className="rbt-card-title h6">
                                <a href="product-single-default.html">
                                  Apple MacBook Pro 16-inch – M2 Chip
                                </a>
                              </h3>
                              <div className="pricing-part">
                                <del className="price-text">$116.34</del>
                                <span className="price-text">$69.78</span>
                              </div>
                            </div>
                            <div className="rbt-card-img rbt-bg-color-default rbt-curved-style-box">
                              <a href="product-single-default.html">
                                <img
                                  src="assets/images/product-img/electronics/electronics-bg-trans-list-05.webp"
                                  alt="Card Image"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt--24">
                        <div className="rbt-card rbt-product-card rbt-list-view-variation rbt-list-view-sm">
                          <div className="inner rbt-scroll-trigger fade_in animation-order-6">
                            <div className="rbt-card-body">
                              <div className="rbt-card-rating">
                                <ul className="rbt-rating-icon-list">
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star" />
                                  </li>
                                </ul>
                                <p className="rating-digit">(42)</p>
                              </div>
                              <h3 className="rbt-card-title h6">
                                <a href="product-single-default.html">
                                  Apple iPad Air 10.9-inch – Wi-Fi 256GB
                                </a>
                              </h3>
                              <div className="pricing-part">
                                <del className="price-text">$219.34</del>
                                <span className="price-text">$99.78</span>
                              </div>
                            </div>
                            <div className="rbt-card-img rbt-bg-color-default rbt-curved-style-box">
                              <a href="product-single-default.html">
                                <img
                                  src="assets/images/product-img/electronics/electronics-bg-trans-list-06.webp"
                                  alt="Card Image"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Wishlist Modal Area  */}
        <h1 className="visually-hidden">Home Electronics</h1>
        {/* Start Component Area */}
        <div className="rbt-component-area rbt-product-banner-area rbt-section-gap2 rbt-bg-color-gray-light rbt-elctro-hero-banner">
          <div className="container">
            {/* Start Product Banner Area */}
            <div className="row row--12 mt_dec--24">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt--24 d-flex justify-content-center">
                <div className="rbt-swiper-container-one rbt-arrow-between">
                  <div className="swiper rbt-hero-banner-activation-1 rbt-dot-bottom-center rbt-slideshow-content-inner">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="rbt-product-banner rbt-product-banner-style-four rbt-banner-four-var-one rbt-curved-style-box rbt-scroll-trigger fade_in animation-order-1">
                          <div className="rbt-banner-inner">
                            <div className="rbt-product-banner-img rbt-full-width-img rbt-scroll-trigger zoom_in animation-order-1">
                              <img
                                src="assets/images/product-banner/product-banner-img-17.webp"
                                alt="Ecommerce Product Banner Image"
                              />
                            </div>
                            <div className="rbt-product-banner-content">
                              <div className="rbt-content-section">
                                <p className="rbt-banner-subtitle mb-0">
                                  Exclusive Offer Going
                                </p>
                                <h2 className="rbt-banner-title rbt-banner-title-lg mb-0">
                                  <span className="rbt-bold--text">GOPRO</span>{" "}
                                  HERO 10
                                </h2>
                                <div className="rbt-pricing-part">
                                  <del className="rbt-dis-price-text">
                                    $295.00
                                  </del>
                                  <span className="d-flex align-items-center rbt-gap--8">
                                    <span className="rbt-price-text offer-price">
                                      $189.00
                                    </span>
                                    <span className="rbt-offer-badge">
                                      Save 30%
                                    </span>
                                  </span>
                                </div>
                                <div className="rbt-banner-btn">
                                  <a
                                    className="rbt-btn rbt-btn-round rbt-magnetic-button"
                                    href="shop.html"
                                  >
                                    <i className="fa-solid fa-arrow-up-right" />{" "}
                                    SHOP
                                    <br />
                                    NOW
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="rbt-product-banner rbt-product-banner-style-four rbt-banner-four-var-one rbt-curved-style-box rbt-scroll-trigger fade_in animation-order-2 rbt-curved-style-box-2">
                          <div className="rbt-banner-inner">
                            <div className="rbt-product-banner-img rbt-full-width-img rbt-scroll-trigger zoom_in animation-order-2">
                              <img
                                src="assets/images/product-banner/product-banner-img-18.webp"
                                alt="Ecommerce Product Banner Image"
                              />
                            </div>
                            <div className="rbt-product-banner-content">
                              <div className="rbt-content-section">
                                <p className="rbt-banner-subtitle mb-0">
                                  Limited Weekend Deal
                                </p>
                                <h2 className="rbt-banner-title rbt-banner-title-lg mb-0">
                                  <span className="rbt-bold--text">
                                    OSMO MINI{" "}
                                  </span>
                                  PRO
                                </h2>
                                <div className="rbt-pricing-part">
                                  <del className="rbt-dis-price-text">
                                    $295.00
                                  </del>
                                  <span className="d-flex align-items-center rbt-gap--8">
                                    <span className="rbt-price-text offer-price">
                                      $249.00
                                    </span>
                                    <span className="rbt-offer-badge">
                                      Save 30%
                                    </span>
                                  </span>
                                </div>
                                <div className="rbt-banner-btn">
                                  <a
                                    className="rbt-btn rbt-btn-round rbt-magnetic-button"
                                    href="shop.html"
                                  >
                                    <i className="fa-solid fa-arrow-up-right" />{" "}
                                    SHOP
                                    <br />
                                    NOW
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="rbt-curved-portion rbt-right-corner-portion">
                            <div className="rbt-wrapper" />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="rbt-product-banner rbt-product-banner-style-four rbt-banner-four-var-one rbt-curved-style-box rbt-scroll-trigger fade_in animation-order-3">
                          <div className="rbt-banner-inner">
                            <div className="rbt-product-banner-img rbt-full-width-img rbt-scroll-trigger zoom_in animation-order-4">
                              <img
                                src="assets/images/product-banner/product-banner-img-20.webp"
                                alt="Ecommerce Product Banner Image"
                              />
                            </div>
                            <div className="rbt-product-banner-content">
                              <div className="rbt-content-section">
                                <p className="rbt-banner-subtitle mb-0">
                                  Limited Weekend Deal
                                </p>
                                <h2 className="rbt-banner-title rbt-banner-title-lg mb-0">
                                  <span className="rbt-bold--text">
                                    AIRPODS
                                  </span>{" "}
                                  PRO
                                </h2>
                                <div className="rbt-pricing-part">
                                  <del className="rbt-dis-price-text">
                                    $295.00
                                  </del>
                                  <span className="d-flex align-items-center rbt-gap--8">
                                    <span className="rbt-price-text offer-price">
                                      $179.98
                                    </span>
                                    <span className="rbt-offer-badge">
                                      Save 30%
                                    </span>
                                  </span>
                                </div>
                                <div className="rbt-banner-btn">
                                  <a
                                    className="rbt-btn rbt-btn-round rbt-magnetic-button"
                                    href="shop.html"
                                  >
                                    <i className="fa-solid fa-arrow-up-right" />{" "}
                                    SHOP
                                    <br />
                                    NOW
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="rbt-product-banner rbt-product-banner-style-four rbt-banner-four-var-one rbt-curved-style-box rbt-scroll-trigger fade_in animation-order-4 rbt-curved-style-box-2">
                          <div className="rbt-banner-inner">
                            <div className="rbt-product-banner-img rbt-full-width-img rbt-scroll-trigger zoom_in animation-order-3">
                              <img
                                src="assets/images/product-banner/product-banner-img-19.webp"
                                alt="Ecommerce Product Banner Image"
                              />
                            </div>
                            <div className="rbt-product-banner-content">
                              <div className="rbt-content-section">
                                <p className="rbt-banner-subtitle mb-0">
                                  Exclusive Offer Going
                                </p>
                                <h2 className="rbt-banner-title rbt-banner-title-lg mb-0">
                                  <span className="rbt-bold--text">DSLR</span>{" "}
                                  PERFORS
                                </h2>
                                <div className="rbt-pricing-part">
                                  <del className="rbt-dis-price-text">
                                    $295.00
                                  </del>
                                  <span className="d-flex align-items-center rbt-gap--8">
                                    <span className="rbt-price-text offer-price">
                                      $179.98
                                    </span>
                                    <span className="rbt-offer-badge">
                                      Save 30%
                                    </span>
                                  </span>
                                </div>
                                <div className="rbt-banner-btn">
                                  <a
                                    className="rbt-btn rbt-btn-round rbt-magnetic-button"
                                    href="shop.html"
                                  >
                                    <i className="fa-solid fa-arrow-up-right" />{" "}
                                    SHOP
                                    <br />
                                    NOW
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="rbt-curved-portion rbt-right-corner-portion">
                            <div className="rbt-wrapper" />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="rbt-product-banner rbt-product-banner-style-four rbt-banner-four-var-one rbt-curved-style-box rbt-scroll-trigger fade_in animation-order-3">
                          <div className="rbt-banner-inner">
                            <div className="rbt-product-banner-img rbt-full-width-img rbt-scroll-trigger zoom_in animation-order-3">
                              <img
                                src="assets/images/product-banner/product-banner-img-21.webp"
                                alt="Ecommerce Product Banner Image"
                              />
                            </div>
                            <div className="rbt-product-banner-content">
                              <div className="rbt-content-section">
                                <p className="rbt-banner-subtitle mb-0">
                                  Exclusive Offer Going
                                </p>
                                <h2 className="rbt-banner-title rbt-banner-title-lg mb-0">
                                  <span className="rbt-bold--text">IPAD</span>{" "}
                                  PRO M1
                                </h2>
                                <div className="rbt-pricing-part">
                                  <del className="rbt-dis-price-text">
                                    $295.00
                                  </del>
                                  <span className="d-flex align-items-center rbt-gap--8">
                                    <span className="rbt-price-text offer-price">
                                      $179.98
                                    </span>
                                    <span className="rbt-offer-badge">
                                      Save 30%
                                    </span>
                                  </span>
                                </div>
                                <div className="rbt-banner-btn">
                                  <a
                                    className="rbt-btn rbt-btn-round rbt-magnetic-button"
                                    href="shop.html"
                                  >
                                    <i className="fa-solid fa-arrow-up-right" />{" "}
                                    SHOP
                                    <br />
                                    NOW
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="rbt-product-banner rbt-product-banner-style-four rbt-banner-four-var-one rbt-curved-style-box rbt-scroll-trigger fade_in animation-order-4 rbt-curved-style-box-2">
                          <div className="rbt-banner-inner">
                            <div className="rbt-product-banner-img rbt-full-width-img rbt-scroll-trigger zoom_in animation-order-4">
                              <img
                                src="assets/images/product-banner/product-banner-img-22.webp"
                                alt="Ecommerce Product Banner Image"
                              />
                            </div>
                            <div className="rbt-product-banner-content">
                              <div className="rbt-content-section">
                                <p className="rbt-banner-subtitle mb-0">
                                  Limited Weekend Deal
                                </p>
                                <h2 className="rbt-banner-title rbt-banner-title-lg mb-0">
                                  <span className="rbt-bold--text">
                                    MACBOOK
                                  </span>{" "}
                                  PRO M1
                                </h2>
                                <div className="rbt-pricing-part">
                                  <del className="rbt-dis-price-text">
                                    $295.00
                                  </del>
                                  <span className="d-flex align-items-center rbt-gap--8">
                                    <span className="rbt-price-text offer-price">
                                      $179.98
                                    </span>
                                    <span className="rbt-offer-badge">
                                      Save 30%
                                    </span>
                                  </span>
                                </div>
                                <div className="rbt-banner-btn">
                                  <a
                                    className="rbt-btn rbt-btn-round rbt-magnetic-button"
                                    href="shop.html"
                                  >
                                    <i className="fa-solid fa-arrow-up-right" />{" "}
                                    SHOP
                                    <br />
                                    NOW
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="rbt-curved-portion rbt-right-corner-portion">
                            <div className="rbt-wrapper" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rbt-swiper-pagination rbt-swiper-pagination-var-one" />
                  </div>
                  <div className="rbt-swiper-arrow rbt-arrow-left rbt-arrow-gray rbt-arrow-lg">
                    <div className="custom-overflow">
                      <i className="rbt-icon fa-regular fa-arrow-left" />
                      <i className="rbt-icon-top fa-regular fa-arrow-left" />
                    </div>
                  </div>
                  <div className="rbt-swiper-arrow rbt-arrow-right rbt-arrow-gray rbt-arrow-lg">
                    <div className="custom-overflow">
                      <i className="rbt-icon fa-regular fa-arrow-right" />
                      <i className="rbt-icon-top fa-regular fa-arrow-right" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Product Banner Area */}
          </div>
        </div>
        {/* End Component Area */}
        {/* Start Component Area */}
        <div className="rbt-component-area rbt-catagories-area rbt-section-gap2 rbt-bg-color-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 pr--0">
                <div className="rbt-component-section-title d-flex justify-content-between flex-row align-items-center p-0 mb--32 mb_sm--16 border-0">
                  <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1 h4">
                    <span className="rbt-bold--text">
                      Popular By Categories
                    </span>
                  </h2>
                  <a
                    className="rbt-btn rbt-btn-secondary rbt-btn-sm-2 rbt-scroll-trigger fade_in animation-order-2 animated-icon-btn defalt-secondary-bg"
                    href="categories-list.html"
                  >
                    <span className="btn-text">View All Categories</span>
                    <span className="animated-icon ml--4">
                      <svg
                        className="icon_external"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 15.5 15.5"
                      >
                        <g className="icon-wrapper">
                          <path
                            className="icon-rectangle"
                            d="m7.75,0c.41,0,.75.34.75.75s-.34.75-.75.75H3.08c-.87,0-1.58.71-1.58,1.58v9.33c0,.87.71,1.58,1.58,1.58h9.33c.87,0,1.58-.71,1.58-1.58v-4.67c0-.41.34-.75.75-.75s.75.34.75.75v4.67c0,1.7-1.38,3.08-3.08,3.08H3.08c-1.7,0-3.08-1.38-3.08-3.08V3.08C0,1.38,1.38,0,3.08,0h4.67Z"
                            strokeWidth={0}
                          />
                          <path
                            className="icon-arrow-el-one"
                            d="m15.5,0v4.29c0,.41-.34.75-.75.75s-.75-.34-.75-.75V1.5h-2.75c-.38,0-.69-.28-.74-.65v-.1c0-.41.33-.75.74-.75h4.25Z"
                            strokeWidth={0}
                            style={{
                              translate: "none",
                              rotate: "none",
                              scale: "none",
                              transformOrigin: "0px 0px 0px",
                            }}
                            data-svg-origin="15.5 0"
                            transform="matrix(1,0,0,1,0,0)"
                          />
                          <path
                            className="icon-arrow-line-one"
                            d="m14.22.22c.29-.29.77-.29,1.06,0,.29.29.29.77,0,1.06L5.95,10.61c-.29.29-.77.29-1.06,0-.29-.29-.29-.77,0-1.06.4-.4.76-.76,1.09-1.09l.47-.47c.37-.37.7-.7,1-1l.34-.34.46-.46.41-.41c.74-.74,1.29-1.29,2.09-2.09l.61-.61c.17-.17.34-.34.53-.53.13-.13.25-.25.36-.36l.59-.59c.08-.08.16-.16.23-.23l.36-.36c.1-.1.19-.19.26-.26l.42-.42s.07-.07.11-.11Z"
                            strokeWidth={0}
                            style={{
                              translate: "none",
                              rotate: "none",
                              scale: "none",
                              transformOrigin: "0px 0px 0px",
                            }}
                            data-svg-origin="15.4975004196167 0.002499997615814209"
                            transform="matrix(1,0,0,1,0,0)"
                          />
                          <path
                            className="icon-arrow-el-two"
                            d="m15.5,0v4.29c0,.41-.34.75-.75.75s-.75-.34-.75-.75V1.5h-2.75c-.38,0-.69-.28-.74-.65v-.1c0-.41.33-.75.74-.75h4.25Z"
                            strokeWidth={0}
                            style={{
                              translate: "none",
                              rotate: "none",
                              scale: "none",
                              transformOrigin: "0px 0px 0px",
                            }}
                            data-svg-origin="15.5 0"
                            transform="matrix(1,0,0,1,0,0)"
                          />
                          <path
                            className="icon-arrow-line-two"
                            d="m14.22.22c.29-.29.77-.29,1.06,0,.29.29.29.77,0,1.06L5.95,10.61c-.29.29-.77.29-1.06,0-.29-.29-.29-.77,0-1.06.4-.4.76-.76,1.09-1.09l.47-.47c.37-.37.7-.7,1-1l.34-.34.46-.46.41-.41c.74-.74,1.29-1.29,2.09-2.09l.61-.61c.17-.17.34-.34.53-.53.13-.13.25-.25.36-.36l.59-.59c.08-.08.16-.16.23-.23l.36-.36c.1-.1.19-.19.26-.26l.42-.42s.07-.07.11-.11Z"
                            strokeWidth={0}
                            style={{
                              translate: "none",
                              rotate: "none",
                              scale: "none",
                              transformOrigin: "0px 0px 0px",
                            }}
                            data-svg-origin="15.4975004196167 0.002499997615814209"
                            transform="matrix(1,0,0,1,0,0)"
                          />
                        </g>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* Start Card Area */}
            <div className="rbt-catagories-section rbt-curved-style-box rbt-catagories-section-bg-one">
              <div className="row row--12 mt_dec--24">
                <div className="col-xl-8 col-lg-12 col-12 mt--24">
                  <div className="row row--12 mt_dec--24 rbt-mobile-row">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-6 mt--24">
                      <div className="rbt-cat-box rbt-cat-box-7 rbt-scroll-trigger fade_in animation-order-1">
                        <div className="inner">
                          <div className="content">
                            <h2 className="title h5">
                              <a href="shop-by-categories.html">
                                Camera &amp; Photo
                              </a>
                            </h2>
                            <ul className="quick-link-list rbt-link-hover">
                              <li>
                                <a
                                  href="shop-by-category.html"
                                  className="quick-link"
                                >
                                  Digital Cameras
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-by-category.html"
                                  className="quick-link"
                                >
                                  Camera Accessories
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-by-category.html"
                                  className="quick-link"
                                >
                                  Lenses
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="rbt-image-portion">
                            <a href="shop-by-categories.html">
                              <img
                                className="rbt-scroll-trigger"
                                src="assets/images/catagory-img/cat-transp-img-07.webp"
                                alt="Catagory Product Images"
                              />
                            </a>
                            <a
                              href="categories-list.html"
                              className="rbt-icon-overlay-link-btn"
                            >
                              <span className="rbt-btn-overlay">
                                <i className="rbt-icon fa-solid fa-arrow-up-right" />
                                <i className="rbt-icon-bottom fa-solid fa-arrow-up-right" />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-6 mt--24">
                      <div className="rbt-cat-box rbt-cat-box-7 rbt-scroll-trigger fade_in animation-order-2">
                        <div className="inner">
                          <div className="content">
                            <h2 className="title h5">
                              <a href="shop-by-categories.html">Smartwatches</a>
                            </h2>
                            <ul className="quick-link-list rbt-link-hover">
                              <li>
                                <a
                                  href="shop-by-category.html"
                                  className="quick-link"
                                >
                                  Fitness Trackers
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-by-category.html"
                                  className="quick-link"
                                >
                                  Smart Accessories
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-by-category.html"
                                  className="quick-link"
                                >
                                  Wearable Tech
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="rbt-image-portion">
                            <a href="shop-by-categories.html">
                              <img
                                className="rbt-scroll-trigger"
                                src="assets/images/catagory-img/cat-transp-img-08.webp"
                                alt="Catagory Product Images"
                              />
                            </a>
                            <a
                              href="categories-list.html"
                              className="rbt-icon-overlay-link-btn"
                            >
                              <span className="rbt-btn-overlay">
                                <i className="rbt-icon fa-solid fa-arrow-up-right" />
                                <i className="rbt-icon-bottom fa-solid fa-arrow-up-right" />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-6 mt--24">
                      <div className="rbt-cat-box rbt-cat-box-7 rbt-scroll-trigger fade_in animation-order-3">
                        <div className="inner">
                          <div className="content">
                            <h2 className="title h5">
                              <a href="shop-by-categories.html">
                                TVs, Audio-Video
                              </a>
                            </h2>
                            <ul className="quick-link-list rbt-link-hover">
                              <li>
                                <a
                                  href="shop-by-category.html"
                                  className="quick-link"
                                >
                                  Televisions
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-by-category.html"
                                  className="quick-link"
                                >
                                  Sound Systems
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-by-category.html"
                                  className="quick-link"
                                >
                                  Streaming Devices
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="rbt-image-portion">
                            <a href="shop-by-categories.html">
                              <img
                                className="rbt-scroll-trigger"
                                src="assets/images/catagory-img/cat-transp-img-09.webp"
                                alt="Catagory Product Images"
                              />
                            </a>
                            <a
                              href="categories-list.html"
                              className="rbt-icon-overlay-link-btn"
                            >
                              <span className="rbt-btn-overlay">
                                <i className="rbt-icon fa-solid fa-arrow-up-right" />
                                <i className="rbt-icon-bottom fa-solid fa-arrow-up-right" />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-6 mt--24">
                      <div className="rbt-cat-box rbt-cat-box-7 rbt-scroll-trigger fade_in animation-order-4">
                        <div className="inner">
                          <div className="content">
                            <h2 className="title h5">
                              <a href="shop-by-categories.html">
                                Goods for Games
                              </a>
                            </h2>
                            <ul className="quick-link-list rbt-link-hover">
                              <li>
                                <a
                                  href="shop-by-category.html"
                                  className="quick-link"
                                >
                                  Gaming Consoles
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-by-category.html"
                                  className="quick-link"
                                >
                                  Gaming Accessories
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-by-category.html"
                                  className="quick-link"
                                >
                                  Video Games
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="rbt-image-portion">
                            <a href="shop-by-categories.html">
                              <img
                                className="rbt-scroll-trigger"
                                src="assets/images/catagory-img/cat-transp-img-12.webp"
                                alt="Catagory Product Images"
                              />
                            </a>
                            <a
                              href="categories-list.html"
                              className="rbt-icon-overlay-link-btn"
                            >
                              <span className="rbt-btn-overlay">
                                <i className="rbt-icon fa-solid fa-arrow-up-right" />
                                <i className="rbt-icon-bottom fa-solid fa-arrow-up-right" />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-6 mt--24">
                      <div className="rbt-cat-box rbt-cat-box-7 rbt-scroll-trigger fade_in animation-order-5">
                        <div className="inner">
                          <div className="content">
                            <h2 className="title h5">
                              <a href="shop-by-categories.html">Headphones</a>
                            </h2>
                            <ul className="quick-link-list rbt-link-hover">
                              <li>
                                <a
                                  href="shop-by-category.html"
                                  className="quick-link"
                                >
                                  Headphones
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-by-category.html"
                                  className="quick-link"
                                >
                                  Speakers
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-by-category.html"
                                  className="quick-link"
                                >
                                  Music Accessories
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="rbt-image-portion">
                            <a href="shop-by-categories.html">
                              <img
                                className="rbt-scroll-trigger"
                                src="assets/images/catagory-img/cat-transp-img-10.webp"
                                alt="Catagory Product Images"
                              />
                            </a>
                            <a
                              href="categories-list.html"
                              className="rbt-icon-overlay-link-btn"
                            >
                              <span className="rbt-btn-overlay">
                                <i className="rbt-icon fa-solid fa-arrow-up-right" />
                                <i className="rbt-icon-bottom fa-solid fa-arrow-up-right" />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-6 mt--24">
                      <div className="rbt-cat-box rbt-cat-box-7 rbt-scroll-trigger fade_in animation-order-6">
                        <div className="inner">
                          <div className="content">
                            <h2 className="title h5">
                              <a href="shop-by-categories.html">
                                House Appliances
                              </a>
                            </h2>
                            <ul className="quick-link-list rbt-link-hover">
                              <li>
                                <a
                                  href="shop-by-category.html"
                                  className="quick-link"
                                >
                                  Kitchen Appliances
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-by-category.html"
                                  className="quick-link"
                                >
                                  Cleaning Appliances
                                </a>
                              </li>
                              <li>
                                <a
                                  href="shop-by-category.html"
                                  className="quick-link"
                                >
                                  Home Comfort
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="rbt-image-portion">
                            <a href="shop-by-categories.html">
                              <img
                                className="rbt-scroll-trigger"
                                src="assets/images/catagory-img/cat-transp-img-11.webp"
                                alt="Catagory Product Images"
                              />
                            </a>
                            <a
                              href="categories-list.html"
                              className="rbt-icon-overlay-link-btn"
                            >
                              <span className="rbt-btn-overlay">
                                <i className="rbt-icon fa-solid fa-arrow-up-right" />
                                <i className="rbt-icon-bottom fa-solid fa-arrow-up-right" />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-12 col-12 mt--24">
                  <div className="rbt-cat-box banner-card text-center rbt-curved-style-box rbt-catagories-img-bg rbt-scroll-trigger fade_in animation-order-5">
                    <div className="inner">
                      <div className="content">
                        <p className="subtitle rbt-scroll-trigger fade_in animation-order-1">
                          Weekend Deal
                        </p>
                        <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-2 h4">
                          <a href="#">
                            <span className="rbt-bold--text">DJI Ronin</span>{" "}
                            Action
                          </a>
                        </h2>
                        <h3 className="secondary-title rbt-scroll-trigger fade_in animation-order-3">
                          Super holiday
                        </h3>
                      </div>
                      <div className="rbt-image-portion">
                        <a href="#">
                          <img
                            className="rbt-scroll-trigger zoom_in animation-order-4"
                            src="assets/images/catagory-img/banner-cat-01.webp"
                            alt="Catagory Image"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Card Area */}
          </div>
        </div>
        {/* End Component Area */}
        {/* Start Component Area */}
        <div
          id="rbt-product-block-01"
          className="rbt-component-area rbt-catagories-area rbt-section-gap2 rbt-bg-color-gray-light"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rbt-component-section-title d-flex flex-row justify-content-between align-items-center p-0 mb--32 mb_sm--16 border-0">
                  <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1 h4">
                    <span className="rbt-bold--text">Deals of The Day</span>
                  </h2>
                  <div className="mobile-horizontal-scroll-section">
                    <div className="rbt-product-nav-section rbt-nav-effect-activation rbt-scroll-trigger fade_in animation-order-2">
                      <ul className="rbt-product-nav-grp">
                        <li>
                          <a href="#" className="rbt-product-nav active">
                            Best Sellers
                          </a>
                        </li>
                        <li>
                          <a href="#" className="rbt-product-nav">
                            New Arrivals
                          </a>
                        </li>
                        <li>
                          <a href="#" className="rbt-product-nav">
                            On Sale
                          </a>
                        </li>
                      </ul>
                      <ul className="rbt-product-nav-grp">
                        <li>
                          <a href="#" className="rbt-product-nav">
                            View All
                          </a>
                        </li>
                      </ul>
                      <span className="rbt-bg-highlight" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Start Card Area */}
            <div className="row row--12 mt_dec--24">
              {/* Start Single Card  */}
              <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6 mt--24">
                <div className="rbt-card rbt-product-card has-hover-box-shadow">
                  <div className="inner rbt-scroll-trigger fade_in animation-order-2">
                    <div className="rbt-card-img rbt-has-hover-img rbt-bg-color-default">
                      <a href="product-single-electronics.html">
                        <img
                          className="rbt-prd-img"
                          src="assets/images/product-img/electronics/electronics-bg-trans-10-a-1.webp"
                          alt="Card Image"
                        />
                        <img
                          className="rbt-hover-img"
                          src="assets/images/product-img/electronics/electronics-bg-trans-10-a-1-hover.webp"
                          alt="Card Image"
                        />
                      </a>
                      <div className="rbt-badge-wrapper rbt-content-top-left">
                        <div className="rbt-product-badge rbt-product-badge-bg-green border-rounded">
                          NEW
                        </div>
                        <div className="rbt-product-badge rbt-product-badge-bg-secondary-gradient border-rounded">
                          Best Seller
                        </div>
                      </div>
                      <div className="rbt-quick-btn-grp has-mixup-midlayer bottom-right--position">
                        <button
                          className="rbt-search-btn rbt-quick-btn tooltips"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#quickviewModal"
                          data-tooltip="Quick View"
                          data-tooltip-position="left"
                        >
                          <i className="fa-regular fa-magnifying-glass-plus" />
                        </button>
                        <button
                          className="rbt-wishlisted-btn rbt-quick-btn tooltips"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#wishlistModal"
                          data-tooltip="Add to wishlist"
                          data-tooltip-position="left"
                        >
                          <i className="fa-regular fa-heart" />
                        </button>
                      </div>
                    </div>
                    <div className="rbt-card-body">
                      <a
                        href="shop-by-categories.html"
                        className="rbt-card-subtitle rbt-card-catagories-text"
                      >
                        Electronics &amp; Gadgets
                      </a>
                      <h3 className="rbt-card-title h6">
                        <a href="product-single-electronics.html">
                          Ultra-Thin Modern Tech Quiet Noise Cancelling Laptop
                        </a>
                      </h3>
                      <div className="rbt-card-rating">
                        <ul className="rbt-rating-icon-list">
                          <li>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </li>
                          <li>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </li>
                          <li>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </li>
                          <li>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </li>
                          <li>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </li>
                        </ul>
                        <p className="rating-digit">(46)</p>
                        <div className="rbt-text-swiper-container rbt-arrow-vertical">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <div className="rbt-text-group">
                                <span className="icon mr--4">
                                  <i className="fa-solid fa-bag-shopping" />
                                </span>
                                90+ Sold Recently
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="rbt-text-group">
                                <span className="icon mr--4">
                                  <i className="fa-solid fa-truck" />
                                </span>
                                Free shipping
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="rbt-text-group">
                                <span className="icon mr--4">
                                  <i className="fa-solid fa-rotate-left" />
                                </span>
                                7 Days Return Plicy
                              </div>
                            </div>
                          </div>
                          <div className="rbt-verticle-arrow rbt-arrow-prev">
                            <i className="fa-regular fa-chevron-up" />
                          </div>
                          <div className="rbt-verticle-arrow rbt-arrow-next">
                            <i className="fa-regular fa-chevron-down" />
                          </div>
                        </div>
                      </div>
                      <div className="pricing-part">
                        <span className="price-text">$50.00 - $179.98</span>
                        <div className="rbt-badge rbt-badge-bg-green rbt-badge-border rbt-badge-small rbt-badge-rounded">
                          9 in Stock
                        </div>
                      </div>
                      <div className="prd-btn-grp">
                        <a
                          className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block has-left-icon rbt-cart-sidenav-activation"
                          href="#"
                        >
                          <i className="fa-regular fa-cart-shopping" /> Add To
                          Cart
                        </a>
                        <a
                          className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block rbt-btn-transparent has-left-icon rbt-compare-btn-activation rbt-compare-bottom-sidenav-activation"
                          href="#"
                        >
                          <i className="fa-regular fa-file-plus-minus" />
                          Add To Compare
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="prd-details-area rbt-has-show-more">
                    <div className="wrapper rbt-has-show-more-inner-content">
                      <ul className="product-details-list">
                        <li>
                          <span className="rbt-bold--text">Brand :</span>
                          <span className="text">Sony Corporation Ltd</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">Resolution :</span>
                          <span className="text">3840×2160</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">
                            Release years :
                          </span>
                          <span className="text"> Jan 2022</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">Motherboard :</span>
                          <span className="text"> Samsung</span>
                          <span className="text d-block">
                            ATX, ITX, microATX, Mini-ITX
                          </span>
                        </li>
                      </ul>
                      <ul className="product-details-list shipment-details-list">
                        <li>
                          <span className="icon">
                            <i className="fa-sharp fa-regular fa-truck" />
                          </span>
                          <div className="right-content">
                            <span className="rbt-bold--text">Ships :</span>
                            <span className="text">
                              2–3 weeks Free Shipping
                            </span>
                            <br />
                            <a
                              href="#"
                              className="shipment-quick-link rbt-btn-link"
                            >
                              Get delivery dates
                            </a>
                          </div>
                        </li>
                        <li>
                          <span className="icon">
                            <i className="fa-regular fa-bag-shopping" />
                          </span>
                          <div className="right-content">
                            <span className="rbt-bold--text">Pickup :</span>
                            <a
                              href="#"
                              className="shipment-quick-link rbt-btn-link"
                            >
                              Check Availability
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="rbt-show-more-btn-area">
                      <button className="rbt-show-more-btn">Show More</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Card  */}
              {/* Start Single Card  */}
              <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6 mt--24">
                <div className="rbt-card rbt-product-card has-hover-box-shadow">
                  <div className="inner rbt-scroll-trigger fade_in animation-order-1">
                    <div className="rbt-card-img rbt-has-hover-img rbt-bg-color-default">
                      <a href="product-single-electronics.html">
                        <img
                          className="rbt-prd-img"
                          src="assets/images/product-img/electronics/electronics-bg-trans-12-a-1.webp"
                          alt="Card Image"
                        />
                        <img
                          className="rbt-hover-img"
                          src="assets/images/product-img/electronics/electronics-bg-trans-12-a-1-hover.webp"
                          alt="Card Image"
                        />
                      </a>
                      <div className="rbt-badge-wrapper rbt-content-top-left">
                        <div className="rbt-product-badge rbt-product-badge-bg-secondary border-rounded">
                          Sale
                        </div>
                      </div>
                      <div
                        className="rbt-discount-badge right--corner-style tooltips"
                        data-tooltip="👁️ 16 People are Watching This Item"
                        data-tooltip-position="bottom"
                      >
                        <span>
                          <i className="fa-regular fa-eye" />
                          16
                        </span>
                      </div>
                      <div className="rbt-quick-btn-grp has-mixup-midlayer bottom-right--position">
                        <button
                          className="rbt-search-btn rbt-quick-btn tooltips rbt-quickview-sidenav-activation"
                          type="button"
                          data-tooltip="Quick View Sidenav"
                          data-tooltip-position="left"
                        >
                          <i className="fa-regular fa-magnifying-glass-plus" />
                        </button>
                        <button
                          className="rbt-wishlisted-btn rbt-quick-btn tooltips"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#wishlistModal"
                          data-tooltip="Add to wishlist"
                          data-tooltip-position="left"
                        >
                          <i className="fa-regular fa-heart" />
                        </button>
                      </div>
                    </div>
                    <div className="rbt-card-body">
                      <a
                        href="shop-by-categories.html"
                        className="rbt-card-subtitle rbt-card-catagories-text"
                      >
                        Photography &amp; Outdoor
                      </a>
                      <h3 className="rbt-card-title h6">
                        <a href="product-single-electronics.html">
                          Keurig Polaroid 4K Waterproof Smart Action Camera
                        </a>
                      </h3>
                      <div className="rbt-card-rating">
                        <ul className="rbt-rating-icon-list">
                          <li>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </li>
                          <li>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </li>
                          <li>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </li>
                          <li>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </li>
                          <li>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </li>
                        </ul>
                        <p className="rating-digit">(46)</p>
                        <div className="rbt-text-group">
                          <span className="icon mr--4">
                            <i className="fa-solid fa-truck" />
                          </span>
                          Free shipping
                        </div>
                      </div>
                      <div className="pricing-part">
                        <del className="price-text">$295.00</del>
                        <span className="price-text">$179.98</span>
                        <span className="rbt-offer-badge">-30%</span>
                        <div className="rbt-badge rbt-badge-bg-green rbt-badge-border rbt-badge-small rbt-badge-rounded">
                          12 in Stock
                        </div>
                      </div>
                      <div className="prd-btn-grp">
                        <a
                          className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block has-left-icon rbt-cart-sidenav-activation"
                          href="#"
                        >
                          <i className="fa-regular fa-cart-shopping" /> Add To
                          Cart
                        </a>
                        <a
                          className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block rbt-btn-transparent has-left-icon rbt-compare-btn-activation rbt-compare-bottom-sidenav-activation"
                          href="#"
                        >
                          <i className="fa-regular fa-file-plus-minus" />
                          Add To Compare
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="prd-details-area rbt-has-show-more">
                    <div className="wrapper rbt-has-show-more-inner-content">
                      <ul className="product-details-list">
                        <li>
                          <span className="rbt-bold--text">Brand :</span>
                          <span className="text">Sony Corporation Ltd</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">Resolution :</span>
                          <span className="text">3840×2160</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">
                            Release years :
                          </span>
                          <span className="text"> Jan 2022</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">Motherboard :</span>
                          <span className="text"> Samsung</span>
                          <span className="text d-block">
                            ATX, ITX, microATX, Mini-ITX
                          </span>
                        </li>
                      </ul>
                      <ul className="product-details-list shipment-details-list">
                        <li>
                          <span className="icon">
                            <i className="fa-sharp fa-regular fa-truck" />
                          </span>
                          <div className="right-content">
                            <span className="rbt-bold--text">Ships :</span>
                            <span className="text">
                              2–3 weeks Free Shipping
                            </span>
                            <br />
                            <a
                              href="#"
                              className="shipment-quick-link rbt-btn-link"
                            >
                              Get delivery dates
                            </a>
                          </div>
                        </li>
                        <li>
                          <span className="icon">
                            <i className="fa-regular fa-bag-shopping" />
                          </span>
                          <div className="right-content">
                            <span className="rbt-bold--text">Pickup :</span>
                            <a
                              href="#"
                              className="shipment-quick-link rbt-btn-link"
                            >
                              Check Availability
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="rbt-show-more-btn-area">
                      <button className="rbt-show-more-btn">Show More</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Card  */}
              {/* Start Single Card  */}
              <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6 mt--24">
                <div className="rbt-card rbt-product-card has-hover-box-shadow">
                  <div className="inner rbt-scroll-trigger fade_in animation-order-3">
                    <div className="rbt-card-img rbt-has-hover-img rbt-bg-color-default">
                      <a href="product-single-electronics.html">
                        <img
                          className="rbt-prd-img"
                          src="assets/images/product-img/electronics/electronics-bg-trans-03-a-1.webp"
                          alt="Card Image"
                        />
                        <img
                          className="rbt-hover-img"
                          src="assets/images/product-img/electronics/electronics-bg-trans-03-a-1-hover.webp"
                          alt="Card Image"
                        />
                      </a>
                      <div
                        className="rbt-discount-badge right--corner-style tooltips"
                        data-tooltip="👁️ 16 People are Watching This Item"
                        data-tooltip-position="bottom"
                      >
                        <span>
                          <i className="fa-regular fa-eye" />
                          16
                        </span>
                      </div>
                      <div className="rbt-quick-btn-grp has-mixup-midlayer bottom-right--position">
                        <button
                          className="rbt-search-btn rbt-quick-btn tooltips"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#quickviewModal"
                          data-tooltip="Quick View"
                          data-tooltip-position="left"
                        >
                          <i className="fa-regular fa-magnifying-glass-plus" />
                        </button>
                        <button
                          className="rbt-wishlisted-btn rbt-quick-btn tooltips"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#wishlistModal"
                          data-tooltip="Add to wishlist"
                          data-tooltip-position="left"
                        >
                          <i className="fa-regular fa-heart" />
                        </button>
                      </div>
                    </div>
                    <div className="rbt-card-body">
                      <a
                        href="shop-by-categories.html"
                        className="rbt-card-subtitle rbt-card-catagories-text"
                      >
                        Watch &amp; Music
                      </a>
                      <h3 className="rbt-card-title h6">
                        <a href="product-single-electronics.html">
                          Cubitt Smart Watch CTS Waterproof Fitness Tracker
                          Watch PRO
                        </a>
                      </h3>
                      <div className="rbt-card-rating">
                        <ul className="rbt-rating-icon-list">
                          <li>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </li>
                          <li>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </li>
                          <li>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </li>
                          <li>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </li>
                          <li>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </li>
                        </ul>
                        <p className="rating-digit">(46)</p>
                        <div className="rbt-text-group">
                          <span className="icon mr--4">
                            <i className="fa-solid fa-truck" />
                          </span>
                          Free shipping
                        </div>
                      </div>
                      <div className="pricing-part">
                        <span className="price-text">$99.98</span>
                        <div className="rbt-badge rbt-badge-bg-green rbt-badge-border rbt-badge-small rbt-badge-rounded">
                          4 in Stock
                        </div>
                      </div>
                      <div className="prd-btn-grp">
                        <button
                          className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block has-left-icon"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#popup-cartModal"
                        >
                          <i className="fa-regular fa-cart-shopping" /> Add To
                          Cart
                        </button>
                        <a
                          className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block rbt-btn-transparent has-left-icon rbt-compare-btn-activation rbt-compare-bottom-sidenav-activation"
                          href="#"
                        >
                          <i className="fa-regular fa-file-plus-minus" />
                          Add To Compare
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="prd-details-area rbt-has-show-more">
                    <div className="wrapper rbt-has-show-more-inner-content">
                      <ul className="product-details-list">
                        <li>
                          <span className="rbt-bold--text">Brand :</span>
                          <span className="text">Sony Corporation Ltd</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">Resolution :</span>
                          <span className="text">3840×2160</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">
                            Release years :
                          </span>
                          <span className="text"> Jan 2022</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">Motherboard :</span>
                          <span className="text"> Samsung</span>
                          <span className="text d-block">
                            ATX, ITX, microATX, Mini-ITX
                          </span>
                        </li>
                      </ul>
                      <ul className="product-details-list shipment-details-list">
                        <li>
                          <span className="icon">
                            <i className="fa-sharp fa-regular fa-truck" />
                          </span>
                          <div className="right-content">
                            <span className="rbt-bold--text">Ships :</span>
                            <span className="text">
                              2–3 weeks Free Shipping
                            </span>
                            <br />
                            <a
                              href="#"
                              className="shipment-quick-link rbt-btn-link"
                            >
                              Get delivery dates
                            </a>
                          </div>
                        </li>
                        <li>
                          <span className="icon">
                            <i className="fa-regular fa-bag-shopping" />
                          </span>
                          <div className="right-content">
                            <span className="rbt-bold--text">Pickup :</span>
                            <a
                              href="#"
                              className="shipment-quick-link rbt-btn-link"
                            >
                              Check Availability
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="rbt-show-more-btn-area">
                      <button className="rbt-show-more-btn">Show More</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Card  */}
              {/* Start Single Card  */}
              <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6 mt--24">
                <div className="rbt-card rbt-product-card has-hover-box-shadow">
                  <div className="inner rbt-scroll-trigger fade_in animation-order-4">
                    <div className="rbt-card-img rbt-has-hover-img rbt-bg-color-default">
                      <a href="product-single-electronics.html">
                        <img
                          className="rbt-prd-img"
                          src="assets/images/product-img/electronics/electronics-bg-trans-11-a-1.webp"
                          alt="Card Image"
                        />
                        <img
                          className="rbt-hover-img"
                          src="assets/images/product-img/electronics/electronics-bg-trans-11-a-1-hover.webp"
                          alt="Card Image"
                        />
                      </a>
                      <div className="rbt-badge-wrapper rbt-content-top-left">
                        <div className="rbt-product-badge rbt-bg-color-secondary border-rounded">
                          Sale
                        </div>
                      </div>
                      <div className="rbt-quick-btn-grp has-mixup-midlayer bottom-right--position">
                        <button
                          className="rbt-search-btn rbt-quick-btn tooltips"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#quickviewModal"
                          data-tooltip="Quick View"
                          data-tooltip-position="left"
                        >
                          <i className="fa-regular fa-magnifying-glass-plus" />
                        </button>
                        <button
                          className="rbt-wishlisted-btn rbt-quick-btn tooltips"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#wishlistModal"
                          data-tooltip="Add to wishlist"
                          data-tooltip-position="left"
                        >
                          <i className="fa-regular fa-heart" />
                        </button>
                      </div>
                      <div className="rbt-countdown-wrap rbt-content-bottom-center rbt-countdown-one bg-variation-black cd-border-style">
                        <div className="countdown" data-date="2025-01-01">
                          <div className="countdown-container days">
                            <span className="countdown-value">87</span>
                            <span className="countdown-heading">Days</span>
                          </div>
                          <div className="countdown-container hours">
                            <span className="countdown-value">23</span>
                            <span className="countdown-heading">Hours</span>
                          </div>
                          <div className="countdown-container minutes">
                            <span className="countdown-value">38</span>
                            <span className="countdown-heading">Minutes</span>
                          </div>
                          <div className="countdown-container seconds">
                            <span className="countdown-value">27</span>
                            <span className="countdown-heading">Seconds</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rbt-card-body">
                      <a
                        href="shop-by-categories.html"
                        className="rbt-card-subtitle rbt-card-catagories-text"
                      >
                        Camera &amp; Photo
                      </a>
                      <h3 className="rbt-card-title h6">
                        <a href="product-single-electronics.html">
                          Apple IPhone 16 PRO max 6200U with 12GB RAM Phone
                        </a>
                      </h3>
                      <div className="rbt-card-rating">
                        <ul className="rbt-rating-icon-list">
                          <li>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </li>
                          <li>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </li>
                          <li>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </li>
                          <li>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </li>
                          <li>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </li>
                        </ul>
                        <p className="rating-digit">(46)</p>
                        <div className="rbt-text-swiper-container rbt-arrow-vertical">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <div className="rbt-text-group">
                                <span className="icon mr--4">
                                  <i className="fa-solid fa-bag-shopping" />
                                </span>
                                90+ Sold Recently
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="rbt-text-group">
                                <span className="icon mr--4">
                                  <i className="fa-solid fa-truck" />
                                </span>
                                Free shipping
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="rbt-text-group">
                                <span className="icon mr--4">
                                  <i className="fa-solid fa-rotate-left" />
                                </span>
                                7 Days Return Plicy
                              </div>
                            </div>
                          </div>
                          <div className="rbt-verticle-arrow rbt-arrow-prev">
                            <i className="fa-regular fa-chevron-up" />
                          </div>
                          <div className="rbt-verticle-arrow rbt-arrow-next">
                            <i className="fa-regular fa-chevron-down" />
                          </div>
                        </div>
                      </div>
                      <div className="pricing-part">
                        <del className="price-text">$295.00</del>
                        <span className="price-text">$179.98</span>
                        <div className="rbt-badge rbt-badge-bg-danger rbt-badge-border rbt-badge-small rbt-badge-rounded rbt-shiny">
                          🔥 Limited Stock
                        </div>
                      </div>
                      <div className="prd-btn-grp">
                        <a
                          className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block has-left-icon rbt-cart-sidenav-activation"
                          href="#"
                        >
                          <i className="fa-regular fa-cart-shopping" /> Add To
                          Cart
                        </a>
                        <a
                          className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block rbt-btn-transparent has-left-icon rbt-compare-btn-activation rbt-compare-bottom-sidenav-activation"
                          href="#"
                        >
                          <i className="fa-regular fa-file-plus-minus" />
                          Add To Compare
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="prd-details-area rbt-has-show-more">
                    <div className="wrapper rbt-has-show-more-inner-content">
                      <ul className="product-details-list">
                        <li>
                          <span className="rbt-bold--text">Brand :</span>
                          <span className="text">Sony Corporation Ltd</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">Resolution :</span>
                          <span className="text">3840×2160</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">
                            Release years :
                          </span>
                          <span className="text"> Jan 2022</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">Motherboard :</span>
                          <span className="text"> Samsung</span>
                          <span className="text d-block">
                            ATX, ITX, microATX, Mini-ITX
                          </span>
                        </li>
                      </ul>
                      <ul className="product-details-list shipment-details-list">
                        <li>
                          <span className="icon">
                            <i className="fa-sharp fa-regular fa-truck" />
                          </span>
                          <div className="right-content">
                            <span className="rbt-bold--text">Ships :</span>
                            <span className="text">
                              2–3 weeks Free Shipping
                            </span>
                            <br />
                            <a
                              href="#"
                              className="shipment-quick-link rbt-btn-link"
                            >
                              Get delivery dates
                            </a>
                          </div>
                        </li>
                        <li>
                          <span className="icon">
                            <i className="fa-regular fa-bag-shopping" />
                          </span>
                          <div className="right-content">
                            <span className="rbt-bold--text">Pickup :</span>
                            <a
                              href="#"
                              className="shipment-quick-link rbt-btn-link"
                            >
                              Check Availability
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="rbt-show-more-btn-area">
                      <button className="rbt-show-more-btn">Show More</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Card  */}
              {/* Start Single Card  */}
              <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6 mt--24">
                <div className="rbt-card rbt-product-card rbt-stock-out-product-card has-hover-box-shadow">
                  <div className="inner rbt-scroll-trigger fade_in animation-order-6">
                    <div className="rbt-card-img rbt-has-hover-img rbt-bg-color-default">
                      <a href="product-single-electronics.html">
                        <img
                          className="rbt-prd-img"
                          src="assets/images/product-img/electronics/electronics-bg-trans-05-a-2.webp"
                          alt="Card Image"
                        />
                        <img
                          className="rbt-hover-img"
                          src="assets/images/product-img/electronics/electronics-bg-trans-05-a-1-hover.webp"
                          alt="Card Image"
                        />
                      </a>
                      <div className="rbt-badge-wrapper rbt-content-top-left">
                        <div className="rbt-product-badge rbt-product-badge-bg-disabled border-rounded">
                          Sold Out
                        </div>
                      </div>
                      <div className="rbt-quick-btn-grp has-mixup-midlayer bottom-right--position">
                        <button
                          className="rbt-search-btn rbt-quick-btn tooltips"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#quickviewModal"
                          data-tooltip="Quick View"
                          data-tooltip-position="left"
                        >
                          <i className="fa-regular fa-magnifying-glass-plus" />
                        </button>
                        <button
                          className="rbt-wishlisted-btn rbt-quick-btn tooltips"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#wishlistModal"
                          data-tooltip="Add to wishlist"
                          data-tooltip-position="left"
                        >
                          <i className="fa-regular fa-heart" />
                        </button>
                      </div>
                    </div>
                    <div className="rbt-card-body">
                      <a
                        href="shop-by-categories.html"
                        className="rbt-card-subtitle rbt-card-catagories-text"
                      >
                        Computer Accessories
                      </a>
                      <h3 className="rbt-card-title h6">
                        <a href="product-single-electronics.html">
                          Logitech Precision 9 Button Ergonomic Diital Wireless
                          Mouse
                        </a>
                      </h3>
                      <div className="rbt-card-rating">
                        <ul className="rbt-rating-icon-list">
                          <li>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </li>
                          <li>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </li>
                          <li>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </li>
                          <li>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </li>
                          <li>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </li>
                        </ul>
                        <p className="rating-digit">(46)</p>
                        <div className="rbt-text-group">
                          <span className="icon mr--4">
                            <i className="fa-solid fa-bag-shopping" />
                          </span>
                          90+ Sold Recently
                        </div>
                      </div>
                      <div className="pricing-part">
                        <del className="price-text">$295.00</del>
                        <span className="price-text">$179.98</span>
                        <span className="rbt-offer-badge">-30%</span>
                      </div>
                      <div className="prd-btn-grp">
                        <a
                          className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block has-left-icon"
                          href="#!"
                          data-bs-toggle="modal"
                          data-bs-target="#notifyModal"
                        >
                          <i className="fa-regular fa-bell" /> Notify Me
                        </a>
                        <a
                          className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block rbt-btn-transparent has-left-icon rbt-compare-btn-activation rbt-compare-bottom-sidenav-activation"
                          href="#"
                        >
                          <i className="fa-regular fa-file-plus-minus" />
                          Add To Compare
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="prd-details-area rbt-has-show-more">
                    <div className="wrapper rbt-has-show-more-inner-content">
                      <ul className="product-details-list">
                        <li>
                          <span className="rbt-bold--text">Brand :</span>
                          <span className="text">Sony Corporation Ltd</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">Resolution :</span>
                          <span className="text">3840×2160</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">
                            Release years :
                          </span>
                          <span className="text"> Jan 2022</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">Motherboard :</span>
                          <span className="text"> Samsung</span>
                          <span className="text d-block">
                            ATX, ITX, microATX, Mini-ITX
                          </span>
                        </li>
                      </ul>
                      <ul className="product-details-list shipment-details-list">
                        <li>
                          <span className="icon">
                            <i className="fa-sharp fa-regular fa-truck" />
                          </span>
                          <div className="right-content">
                            <span className="rbt-bold--text">Ships :</span>
                            <span className="text">
                              2–3 weeks Free Shipping
                            </span>
                            <br />
                            <a
                              href="#"
                              className="shipment-quick-link rbt-btn-link"
                            >
                              Get delivery dates
                            </a>
                          </div>
                        </li>
                        <li>
                          <span className="icon">
                            <i className="fa-regular fa-bag-shopping" />
                          </span>
                          <div className="right-content">
                            <span className="rbt-bold--text">Pickup :</span>
                            <a
                              href="#"
                              className="shipment-quick-link rbt-btn-link"
                            >
                              Check Availability
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="rbt-show-more-btn-area">
                      <button className="rbt-show-more-btn">Show More</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Card  */}
              {/* Start Single Card  */}
              <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6 mt--24">
                <div className="rbt-card rbt-product-card has-hover-box-shadow">
                  <div className="inner rbt-scroll-trigger fade_in animation-order-5">
                    <div className="rbt-card-img rbt-has-hover-img rbt-bg-color-default">
                      <a href="product-single-electronics.html">
                        <img
                          className="rbt-prd-img"
                          src="assets/images/product-img/electronics/electronics-bg-trans-08-a-1.webp"
                          alt="Card Image"
                        />
                        <img
                          className="rbt-hover-img"
                          src="assets/images/product-img/electronics/electronics-bg-trans-08-a-1-hover.webp"
                          alt="Card Image"
                        />
                      </a>
                      <div className="rbt-badge-wrapper rbt-content-top-left">
                        <div className="rbt-product-badge rbt-product-badge-bg-green border-rounded">
                          New
                        </div>
                      </div>
                      <div
                        className="rbt-discount-badge right--corner-style tooltips"
                        data-tooltip="👁️ 16 People are Watching This Item"
                        data-tooltip-position="bottom"
                      >
                        <span>
                          <i className="fa-regular fa-eye" />
                          16
                        </span>
                      </div>
                      <div className="rbt-quick-btn-grp has-mixup-midlayer bottom-right--position">
                        <button
                          className="rbt-search-btn rbt-quick-btn tooltips"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#quickviewModal"
                          data-tooltip="Quick View"
                          data-tooltip-position="left"
                        >
                          <i className="fa-regular fa-magnifying-glass-plus" />
                        </button>
                        <button
                          className="rbt-wishlisted-btn rbt-quick-btn tooltips"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#wishlistModal"
                          data-tooltip="Add to wishlist"
                          data-tooltip-position="left"
                        >
                          <i className="fa-regular fa-heart" />
                        </button>
                      </div>
                    </div>
                    <div className="rbt-card-body">
                      <a
                        href="shop-by-categories.html"
                        className="rbt-card-subtitle rbt-card-catagories-text"
                      >
                        Home Appliances
                      </a>
                      <h3 className="rbt-card-title h6">
                        <a href="product-single-electronics.html">
                          Keurig K-Duo 4K Waterproof Action Video Camera
                        </a>
                      </h3>
                      <div className="rbt-card-rating">
                        <ul className="rbt-rating-icon-list">
                          <li>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </li>
                          <li>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </li>
                          <li>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </li>
                          <li>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </li>
                          <li>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </li>
                        </ul>
                        <p className="rating-digit">(46)</p>
                        <div className="rbt-text-group">
                          <span className="icon mr--4">
                            <i className="fa-solid fa-bag-shopping" />
                          </span>
                          90+ Sold Recently
                        </div>
                      </div>
                      <div className="pricing-part">
                        <del className="price-text">$295.00</del>
                        <span className="price-text">$179.98</span>
                        <span className="rbt-offer-badge">-30%</span>
                        <div className="rbt-badge rbt-badge-bg-green rbt-badge-border rbt-badge-small rbt-badge-rounded">
                          5 in Stock
                        </div>
                      </div>
                      <div className="prd-btn-grp">
                        <a
                          className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block has-left-icon rbt-cart-sidenav-activation"
                          href="#"
                        >
                          <i className="fa-regular fa-cart-shopping" /> Add To
                          Cart
                        </a>
                        <a
                          className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block rbt-btn-transparent has-left-icon rbt-compare-btn-activation rbt-compare-bottom-sidenav-activation"
                          href="#"
                        >
                          <i className="fa-regular fa-file-plus-minus" />
                          Add To Compare
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="prd-details-area rbt-has-show-more">
                    <div className="wrapper rbt-has-show-more-inner-content">
                      <ul className="product-details-list">
                        <li>
                          <span className="rbt-bold--text">Brand :</span>
                          <span className="text">Sony Corporation Ltd</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">Resolution :</span>
                          <span className="text">3840×2160</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">
                            Release years :
                          </span>
                          <span className="text"> Jan 2022</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">Motherboard :</span>
                          <span className="text"> Samsung</span>
                          <span className="text d-block">
                            ATX, ITX, microATX, Mini-ITX
                          </span>
                        </li>
                      </ul>
                      <ul className="product-details-list shipment-details-list">
                        <li>
                          <span className="icon">
                            <i className="fa-sharp fa-regular fa-truck" />
                          </span>
                          <div className="right-content">
                            <span className="rbt-bold--text">Ships :</span>
                            <span className="text">
                              2–3 weeks Free Shipping
                            </span>
                            <br />
                            <a
                              href="#"
                              className="shipment-quick-link rbt-btn-link"
                            >
                              Get delivery dates
                            </a>
                          </div>
                        </li>
                        <li>
                          <span className="icon">
                            <i className="fa-regular fa-bag-shopping" />
                          </span>
                          <div className="right-content">
                            <span className="rbt-bold--text">Pickup :</span>
                            <a
                              href="#"
                              className="shipment-quick-link rbt-btn-link"
                            >
                              Check Availability
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="rbt-show-more-btn-area">
                      <button className="rbt-show-more-btn">Show More</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Card  */}
              {/* Start Single Card  */}
              <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6 mt--24">
                <div className="rbt-card rbt-product-card has-hover-box-shadow">
                  <div className="inner rbt-scroll-trigger fade_in animation-order-8">
                    <div className="rbt-card-img rbt-has-hover-img rbt-bg-color-default">
                      <a href="product-single-electronics.html">
                        <img
                          className="rbt-prd-img"
                          src="assets/images/product-img/electronics/electronics-bg-trans-13-a-1.webp"
                          alt="Card Image"
                        />
                        <img
                          className="rbt-hover-img"
                          src="assets/images/product-img/electronics/electronics-bg-trans-13-a-1-hover.webp"
                          alt="Card Image"
                        />
                      </a>
                      <div className="rbt-badge-wrapper rbt-content-top-left">
                        <div className="rbt-product-badge rbt-product-badge-bg-danger border-rounded">
                          Hot
                        </div>
                        <div className="rbt-product-badge rbt-product-badge-bg-yellow border-rounded">
                          Trending
                        </div>
                      </div>
                      <div
                        className="rbt-discount-badge right--corner-style tooltips"
                        data-tooltip="👁️ 16 People are Watching This Item"
                        data-tooltip-position="bottom"
                      >
                        <span>
                          <i className="fa-regular fa-eye" />
                          16
                        </span>
                      </div>
                      <div className="rbt-quick-btn-grp has-mixup-midlayer bottom-right--position">
                        <button
                          className="rbt-search-btn rbt-quick-btn tooltips"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#quickviewModal"
                          data-tooltip="Quick View"
                          data-tooltip-position="left"
                        >
                          <i className="fa-regular fa-magnifying-glass-plus" />
                        </button>
                        <button
                          className="rbt-wishlisted-btn rbt-quick-btn tooltips"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#wishlistModal"
                          data-tooltip="Add to wishlist"
                          data-tooltip-position="left"
                        >
                          <i className="fa-regular fa-heart" />
                        </button>
                      </div>
                    </div>
                    <div className="rbt-card-body">
                      <a
                        href="shop-by-categories.html"
                        className="rbt-card-subtitle rbt-card-catagories-text"
                      >
                        Mobile Accessories
                      </a>
                      <h3 className="rbt-card-title h6">
                        <a href="product-single-electronics.html">
                          Cubitt Smart Wireless Apple 16 PRO Charging Case Set
                        </a>
                      </h3>
                      <div className="rbt-card-rating">
                        <ul className="rbt-rating-icon-list">
                          <li>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </li>
                          <li>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </li>
                          <li>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </li>
                          <li>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </li>
                          <li>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </li>
                        </ul>
                        <p className="rating-digit">(46)</p>
                        <div className="rbt-text-swiper-container rbt-arrow-vertical">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <div className="rbt-text-group">
                                <span className="icon mr--4">
                                  <i className="fa-solid fa-bag-shopping" />
                                </span>
                                90+ Sold Recently
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="rbt-text-group">
                                <span className="icon mr--4">
                                  <i className="fa-solid fa-truck" />
                                </span>
                                Free shipping
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="rbt-text-group">
                                <span className="icon mr--4">
                                  <i className="fa-solid fa-rotate-left" />
                                </span>
                                7 Days Return Plicy
                              </div>
                            </div>
                          </div>
                          <div className="rbt-verticle-arrow rbt-arrow-prev">
                            <i className="fa-regular fa-chevron-up" />
                          </div>
                          <div className="rbt-verticle-arrow rbt-arrow-next">
                            <i className="fa-regular fa-chevron-down" />
                          </div>
                        </div>
                      </div>
                      <div className="pricing-part">
                        <del className="price-text">$295.00</del>
                        <span className="price-text">$179.98</span>
                        <span className="rbt-offer-badge">-30%</span>
                        <div className="rbt-badge rbt-badge-bg-green rbt-badge-border rbt-badge-small rbt-badge-rounded">
                          16 in Stock
                        </div>
                      </div>
                      <div className="prd-btn-grp">
                        <a
                          className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block has-left-icon rbt-cart-sidenav-activation"
                          href="#"
                        >
                          <i className="fa-regular fa-cart-shopping" /> Add To
                          Cart
                        </a>
                        <a
                          className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block rbt-btn-transparent has-left-icon rbt-compare-btn-activation rbt-compare-bottom-sidenav-activation"
                          href="#"
                        >
                          <i className="fa-regular fa-file-plus-minus" />
                          Add To Compare
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="prd-details-area rbt-has-show-more">
                    <div className="wrapper rbt-has-show-more-inner-content">
                      <ul className="product-details-list">
                        <li>
                          <span className="rbt-bold--text">Brand :</span>
                          <span className="text">Sony Corporation Ltd</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">Resolution :</span>
                          <span className="text">3840×2160</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">
                            Release years :
                          </span>
                          <span className="text"> Jan 2022</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">Motherboard :</span>
                          <span className="text"> Samsung</span>
                          <span className="text d-block">
                            ATX, ITX, microATX, Mini-ITX
                          </span>
                        </li>
                      </ul>
                      <ul className="product-details-list shipment-details-list">
                        <li>
                          <span className="icon">
                            <i className="fa-sharp fa-regular fa-truck" />
                          </span>
                          <div className="right-content">
                            <span className="rbt-bold--text">Ships :</span>
                            <span className="text">
                              2–3 weeks Free Shipping
                            </span>
                            <br />
                            <a
                              href="#"
                              className="shipment-quick-link rbt-btn-link"
                            >
                              Get delivery dates
                            </a>
                          </div>
                        </li>
                        <li>
                          <span className="icon">
                            <i className="fa-regular fa-bag-shopping" />
                          </span>
                          <div className="right-content">
                            <span className="rbt-bold--text">Pickup :</span>
                            <a
                              href="#"
                              className="shipment-quick-link rbt-btn-link"
                            >
                              Check Availability
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="rbt-show-more-btn-area">
                      <button className="rbt-show-more-btn">Show More</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Card  */}
              {/* Start Single Card  */}
              <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6 mt--24">
                <div className="rbt-card rbt-product-card has-hover-box-shadow">
                  <div className="inner rbt-scroll-trigger fade_in animation-order-7">
                    <div className="rbt-card-img rbt-has-hover-img rbt-bg-color-default">
                      <a href="product-single-electronics.html">
                        <img
                          className="rbt-prd-img"
                          src="assets/images/product-img/electronics/electronics-bg-trans-06-a-3.webp"
                          alt="Card Image"
                        />
                        <img
                          className="rbt-hover-img"
                          src="assets/images/product-img/electronics/electronics-bg-trans-06-a-1-hover.webp"
                          alt="Card Image"
                        />
                      </a>
                      <div className="rbt-badge-wrapper rbt-content-top-left">
                        <div className="rbt-product-badge rbt-product-badge-bg-yellow border-rounded">
                          Trending
                        </div>
                      </div>
                      <div
                        className="rbt-discount-badge right--corner-style tooltips"
                        data-tooltip="👁️ 16 People are Watching This Item"
                        data-tooltip-position="bottom"
                      >
                        <span>
                          <i className="fa-regular fa-eye" />
                          16
                        </span>
                      </div>
                      <div className="rbt-quick-btn-grp has-mixup-midlayer bottom-right--position">
                        <button
                          className="rbt-search-btn rbt-quick-btn tooltips"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#quickviewModal"
                          data-tooltip="Quick View"
                          data-tooltip-position="left"
                        >
                          <i className="fa-regular fa-magnifying-glass-plus" />
                        </button>
                        <button
                          className="rbt-wishlisted-btn rbt-quick-btn tooltips"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#wishlistModal"
                          data-tooltip="Add to wishlist"
                          data-tooltip-position="left"
                        >
                          <i className="fa-regular fa-heart" />
                        </button>
                      </div>
                    </div>
                    <div className="rbt-card-body">
                      <a
                        href="shop-by-categories.html"
                        className="rbt-card-subtitle rbt-card-catagories-text"
                      >
                        Office &amp; Streaming Equipment
                      </a>
                      <h3 className="rbt-card-title h6">
                        <a href="product-single-electronics.html">
                          Full Amoled HD Streaming Webcam with Mic Pink webcam
                        </a>
                      </h3>
                      <div className="rbt-card-rating">
                        <ul className="rbt-rating-icon-list">
                          <li>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </li>
                          <li>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </li>
                          <li>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </li>
                          <li>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </li>
                          <li>
                            <i className="fa-solid fa-star rbt-rated-icon" />
                          </li>
                        </ul>
                        <p className="rating-digit">(46)</p>
                        <div className="rbt-text-group">
                          <span className="icon mr--4">
                            <i className="fa-solid fa-bag-shopping" />
                          </span>
                          90+ Sold Recently
                        </div>
                      </div>
                      <div className="pricing-part">
                        <del className="price-text">$295.00</del>
                        <span className="price-text">$179.98</span>
                        <span className="rbt-offer-badge">-30%</span>
                        <div className="rbt-badge rbt-badge-bg-green rbt-badge-border rbt-badge-small rbt-badge-rounded">
                          9 in Stock
                        </div>
                      </div>
                      <div className="prd-btn-grp">
                        <a
                          className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block has-left-icon rbt-cart-sidenav-activation"
                          href="#"
                        >
                          <i className="fa-regular fa-cart-shopping" /> Add To
                          Cart
                        </a>
                        <a
                          className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block rbt-btn-transparent has-left-icon rbt-compare-btn-activation rbt-compare-bottom-sidenav-activation"
                          href="#"
                        >
                          <i className="fa-regular fa-file-plus-minus" />
                          Add To Compare
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="prd-details-area rbt-has-show-more">
                    <div className="wrapper rbt-has-show-more-inner-content">
                      <ul className="product-details-list">
                        <li>
                          <span className="rbt-bold--text">Brand :</span>
                          <span className="text">Sony Corporation Ltd</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">Resolution :</span>
                          <span className="text">3840×2160</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">
                            Release years :
                          </span>
                          <span className="text"> Jan 2022</span>
                        </li>
                        <li>
                          <span className="rbt-bold--text">Motherboard :</span>
                          <span className="text"> Samsung</span>
                          <span className="text d-block">
                            ATX, ITX, microATX, Mini-ITX
                          </span>
                        </li>
                      </ul>
                      <ul className="product-details-list shipment-details-list">
                        <li>
                          <span className="icon">
                            <i className="fa-sharp fa-regular fa-truck" />
                          </span>
                          <div className="right-content">
                            <span className="rbt-bold--text">Ships :</span>
                            <span className="text">
                              2–3 weeks Free Shipping
                            </span>
                            <br />
                            <a
                              href="#"
                              className="shipment-quick-link rbt-btn-link"
                            >
                              Get delivery dates
                            </a>
                          </div>
                        </li>
                        <li>
                          <span className="icon">
                            <i className="fa-regular fa-bag-shopping" />
                          </span>
                          <div className="right-content">
                            <span className="rbt-bold--text">Pickup :</span>
                            <a
                              href="#"
                              className="shipment-quick-link rbt-btn-link"
                            >
                              Check Availability
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="rbt-show-more-btn-area">
                      <button className="rbt-show-more-btn">Show More</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Card  */}
            </div>
            {/* End Card Area */}
          </div>
        </div>
        {/* End Component Area */}
        {/* Start Component Area */}
        <div
          id="rbt-product-block-02"
          className="rbt-component-area rbt-catagories-area pt_lg--100 rbt-section-gap2 rbt-bg-color-white"
        >
          <div className="container">
            {/* Start Product Banner Area */}
            <div className="row row--12">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt--32 mt_sm--0">
                <div className="rbt-product-banner rbt-product-banner-style-one">
                  <div className="rbt-product-banner-img rbt-scroll-trigger zoom_in animation-order-1">
                    <img
                      src="assets/images/product-banner/product-banner-img-01.webp"
                      alt="Ecommerce Product Banner Image"
                    />
                  </div>
                  <div className="rbt-banner-inner rbt-curved-style-box">
                    <div className="rbt-product-banner-content">
                      <div className="rbt-content-section rbt-scroll-trigger fade_in animation-order-1">
                        <p className="rbt-banner-subtitle mb-0">
                          Power Up Deals
                        </p>
                        <h2 className="rbt-banner-title title-capitalize-text mb-0">
                          <span className="rbt-bold--text">New Device</span>{" "}
                          coming Soon
                        </h2>
                        <h3 className="rbt-secondery-subtitle mb-0">
                          Land major deals
                        </h3>
                      </div>
                      <div className="rbt-banner-btn rbt-magnet-area rbt-banner-btn rbt-scroll-trigger fade_in animation-order-2">
                        <a
                          className="rbt-btn rbt-btn-round rbt-magnetic-button"
                          href="shop.html"
                        >
                          <i className="fa-solid fa-arrow-up-right" /> SHOP{" "}
                          <br />
                          NOW
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Product Banner Area */}
            <div className="rbt-fshape-box-outline-style rbt-fshape-box-outline-style-extend-width rbt-product-fshape-box-outline-style">
              <div className="row rbt-section-gap2Top pt_sm--0 pt_md--80 mt--16">
                <div className="col-lg-12">
                  <div className="rbt-component-section-title rbt-border-color-primary rbt-bg-color-gray-light">
                    <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1 h4">
                      <span className="rbt-bold--text">Today’s best deals</span>
                    </h2>
                    <span className="rbt-fshape-right-portion">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={52}
                        height={50}
                        viewBox="0 0 52 50"
                        fill="none"
                      >
                        <path
                          d="M51.5337 49.984C-64.8544 49.9977 116.427 49.9764 0.0390625 49.9901C0.0390625 31.262 0.0390625 20.7619 0.0390625 2.03378C11.2391 1.63419 16.5034 4.56468 19.5034 10.5602L30.0034 38.5311C34.0374 47.934 45.4209 49.4481 51.5337 49.984Z"
                          fill="var(--color-gray-light)"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.246 1.97519C16.582 3.50685 18.8114 5.90944 20.3979 9.07997L20.4213 9.12681L30.9315 37.1248C33.053 42.053 36.807 44.7979 40.7367 46.3047C44.6934 47.8219 48.798 48.068 51.4731 47.987C51.4731 47.987 51.51 49.2041 51.5337 49.984C48.7087 50.0695 44.3134 49.8162 40.02 48.17C35.7052 46.5155 31.4643 43.4388 29.0842 37.891L29.0751 37.8698C29.0751 37.8698 19.997 12.7279 18.5857 9.92689C17.1743 7.12591 15.2591 5.09828 12.4108 3.79055C8.49554 1.49902 0.0390625 2.03378 0.0390625 2.03378C0.0390625 20.7619 0.0390625 31.262 0.0390625 49.9901L0.0408325 0.0348727C5.70805 -0.16568 9.9493 0.461575 13.246 1.97519Z"
                          fill="var(--color-primary)"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="rbt-offer-countdown-section rbt-offer-countdown-section-primary">
                    <h2 className="rbt-sm-title h6">Hurry up! Offer ends in</h2>
                    <div className="rbt-countdown-section d-flex justify-content-center align-items-center">
                      <div className="rbt-countdown-one bg-variation-black">
                        <div className="countdown" data-date="2026-12-30">
                          <div className="countdown-container days">
                            <span className="countdown-value">87</span>
                            <span className="countdown-heading">Days</span>
                          </div>
                          <div className="countdown-container hours">
                            <span className="countdown-value">23</span>
                            <span className="countdown-heading">Hours</span>
                          </div>
                          <div className="countdown-container minutes">
                            <span className="countdown-value">38</span>
                            <span className="countdown-heading">Minutes</span>
                          </div>
                          <div className="countdown-container seconds">
                            <span className="countdown-value">27</span>
                            <span className="countdown-heading">Seconds</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rbt-fshape-box rbt-bg-color-gray-light rbt-border-color-primary">
                {/* Start Card Area */}
                <div className="row row--12 mt_dec--24 rbt-mobile-row">
                  {/* Start Single Card  */}
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6 mt--24">
                    <div className="rbt-card rbt-product-card">
                      <div className="inner rbt-scroll-trigger fade_in animation-order-1">
                        <div className="rbt-card-img rbt-has-hover-video rbt-bg-color-default">
                          <a href="product-single-electronics.html">
                            <img
                              className="rbt-prd-img"
                              src="assets/images/product-img/electronics/electronics-bg-trans-01-a-1.webp"
                              alt="Card Image"
                            />
                            <video
                              className="rbt-hover-video"
                              src="assets/videos/vedio-review-1.mp4"
                              muted
                              loop
                              autoPlay
                            />
                          </a>
                          <div className="rbt-badge-wrapper rbt-content-top-left">
                            <div className="rbt-product-badge rbt-product-badge-bg-danger border-rounded">
                              Hot
                            </div>
                            <div className="rbt-product-badge rbt-product-badge-bg-secondary-gradient border-rounded">
                              Best Seller
                            </div>
                          </div>
                          <div className="rbt-quick-btn-grp has-mixup-midlayer bottom-right--position">
                            <button
                              className="rbt-search-btn rbt-quick-btn tooltips"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#quickviewModal"
                              data-tooltip="Quick View"
                              data-tooltip-position="left"
                            >
                              <i className="fa-regular fa-magnifying-glass-plus" />
                            </button>
                            <button
                              className="rbt-wishlisted-btn rbt-quick-btn tooltips"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#wishlistModal"
                              data-tooltip="Add to wishlist"
                              data-tooltip-position="left"
                            >
                              <i className="fa-regular fa-heart" />
                            </button>
                          </div>
                        </div>
                        <div className="rbt-card-body">
                          <div className="rbt-color-select-area">
                            <ul className="rbt-switcher-color-list product-switcher-activation">
                              <li className="active">
                                <a
                                  className="rbt-switcher--color tooltips"
                                  data-switcher-color="#2B2B2B"
                                  data-src="assets/images/product-img/electronics/electronics-bg-trans-01-a-1.webp"
                                  data-tooltip="Black"
                                  data-tooltip-position="top"
                                  href="#"
                                >
                                  <div className="rbt-color-circle" />
                                </a>
                              </li>
                              <li>
                                <a
                                  className="rbt-switcher--color tooltips"
                                  data-switcher-color="#a09fa4"
                                  data-src="assets/images/product-img/electronics/electronics-bg-trans-01-a-2.webp"
                                  data-tooltip="Red"
                                  data-tooltip-position="top"
                                  href="#"
                                >
                                  <div className="rbt-color-circle" />
                                </a>
                              </li>
                              <li>
                                <a
                                  className="rbt-switcher--color tooltips"
                                  data-switcher-color="#cc999d"
                                  data-src="assets/images/product-img/electronics/electronics-bg-trans-01-a-3.webp"
                                  data-tooltip="Pink"
                                  data-tooltip-position="top"
                                  href="#"
                                >
                                  <div className="rbt-color-circle" />
                                </a>
                              </li>
                            </ul>
                            <a
                              className="prd-link-text"
                              href="product-single-electronics.html"
                            >
                              +12 More Items
                            </a>
                          </div>
                          <a
                            href="shop-by-categories.html"
                            className="rbt-card-subtitle rbt-card-catagories-text"
                          >
                            Headphones &amp; Music
                          </a>
                          <h2 className="rbt-card-title h6">
                            <a href="product-single-electronics.html">
                              Samsung Quiet Comfort Noise Cancelling Earbuds -
                              Black
                            </a>
                          </h2>
                          <div className="rbt-card-rating">
                            <ul className="rbt-rating-icon-list">
                              <li>
                                <i className="fa-solid fa-star rbt-rated-icon" />
                              </li>
                              <li>
                                <i className="fa-solid fa-star rbt-rated-icon" />
                              </li>
                              <li>
                                <i className="fa-solid fa-star rbt-rated-icon" />
                              </li>
                              <li>
                                <i className="fa-solid fa-star rbt-rated-icon" />
                              </li>
                              <li>
                                <i className="fa-solid fa-star rbt-rated-icon" />
                              </li>
                            </ul>
                            <p className="rating-digit">(30)</p>
                            <div className="rbt-text-swiper-container rbt-arrow-vertical">
                              <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                  <div className="rbt-text-group">
                                    <span className="icon mr--4">
                                      <i className="fa-solid fa-bag-shopping" />
                                    </span>
                                    90+ Sold Recently
                                  </div>
                                </div>
                                <div className="swiper-slide">
                                  <div className="rbt-text-group">
                                    <span className="icon mr--4">
                                      <i className="fa-solid fa-truck" />
                                    </span>
                                    Free shipping
                                  </div>
                                </div>
                                <div className="swiper-slide">
                                  <div className="rbt-text-group">
                                    <span className="icon mr--4">
                                      <i className="fa-solid fa-rotate-left" />
                                    </span>
                                    7 Days Return Plicy
                                  </div>
                                </div>
                              </div>
                              <div className="rbt-verticle-arrow rbt-arrow-prev">
                                <i className="fa-regular fa-chevron-up" />
                              </div>
                              <div className="rbt-verticle-arrow rbt-arrow-next">
                                <i className="fa-regular fa-chevron-down" />
                              </div>
                            </div>
                          </div>
                          <div className="pricing-part">
                            <del className="price-text">$295.00</del>
                            <span className="price-text">$179.98</span>
                            <span className="rbt-offer-badge">-30%</span>
                            <div className="rbt-badge rbt-badge-bg-green rbt-badge-border rbt-badge-small rbt-badge-rounded">
                              12 in Stock
                            </div>
                          </div>
                          <div className="rbt-prd-qty-area">
                            <p className="prd-qty-txt">
                              Only <strong>97</strong> pc left
                            </p>
                            <div
                              className="progress"
                              role="progressbar"
                              aria-label="Shipping-progress"
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <div className="progress-bar w-50" />
                            </div>
                          </div>
                          <div className="prd-btn-grp">
                            <a
                              className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block has-left-icon rbt-cart-sidenav-activation"
                              href="#"
                            >
                              <i className="fa-regular fa-cart-shopping" /> Add
                              To Cart
                            </a>
                            <a
                              className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block rbt-btn-transparent has-left-icon rbt-compare-btn-activation rbt-compare-bottom-sidenav-activation"
                              href="#"
                            >
                              <i className="fa-regular fa-file-plus-minus" />
                              Add To Compare
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Single Card  */}
                  {/* Start Single Card  */}
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6 mt--24">
                    <div className="rbt-card rbt-product-card">
                      <div className="inner rbt-scroll-trigger fade_in animation-order-2">
                        <div className="rbt-card-img rbt-has-hover-img rbt-bg-color-default">
                          <a href="product-single-electronics.html">
                            <img
                              className="rbt-prd-img"
                              src="assets/images/product-img/electronics/electronics-bg-trans-04-a-1.webp"
                              alt="Card Image"
                            />
                            <img
                              className="rbt-hover-img"
                              src="assets/images/product-img/electronics/electronics-bg-trans-04-a-1-hover.webp"
                              alt="Card Image"
                            />
                          </a>
                          <div className="rbt-badge-wrapper rbt-content-top-left">
                            <div className="rbt-product-badge rbt-product-badge-bg-secondary-gradient border-rounded">
                              Best Seller
                            </div>
                          </div>
                          <div className="rbt-quick-btn-grp has-mixup-midlayer bottom-right--position">
                            <button
                              className="rbt-search-btn rbt-quick-btn tooltips"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#quickviewModal"
                              data-tooltip="Quick View"
                              data-tooltip-position="left"
                            >
                              <i className="fa-regular fa-magnifying-glass-plus" />
                            </button>
                            <button
                              className="rbt-wishlisted-btn rbt-quick-btn tooltips"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#wishlistModal"
                              data-tooltip="Add to wishlist"
                              data-tooltip-position="left"
                            >
                              <i className="fa-regular fa-heart" />
                            </button>
                          </div>
                        </div>
                        <div className="rbt-card-body">
                          <div className="rbt-color-select-area">
                            <ul className="rbt-switcher-color-list product-switcher-activation">
                              <li className="active">
                                <a
                                  className="rbt-switcher--color tooltips"
                                  data-switcher-color="#bdb6d6"
                                  data-src="assets/images/product-img/electronics/electronics-bg-trans-04-a-1.webp"
                                  data-tooltip="Purple"
                                  data-tooltip-position="top"
                                  href="#"
                                >
                                  <div className="rbt-color-circle" />
                                </a>
                              </li>
                              <li>
                                <a
                                  className="rbt-switcher--color tooltips"
                                  data-switcher-color="#486788"
                                  data-src="assets/images/product-img/electronics/electronics-bg-trans-04-a-2.webp"
                                  data-tooltip="Blue"
                                  data-tooltip-position="top"
                                  href="#"
                                >
                                  <div className="rbt-color-circle" />
                                </a>
                              </li>
                              <li>
                                <a
                                  className="rbt-switcher--color tooltips"
                                  data-switcher-color="#1a1a1a"
                                  data-src="assets/images/product-img/electronics/electronics-bg-trans-04-a-3.webp"
                                  data-tooltip="Black"
                                  data-tooltip-position="top"
                                  href="#"
                                >
                                  <div className="rbt-color-circle" />
                                </a>
                              </li>
                            </ul>
                            <a
                              className="prd-link-text"
                              href="product-single-electronics.html"
                            >
                              +12 More Items
                            </a>
                          </div>
                          <a
                            href="shop-by-categories.html"
                            className="rbt-card-subtitle rbt-card-catagories-text"
                          >
                            Headphones &amp; Music
                          </a>
                          <h2 className="rbt-card-title h6">
                            <a href="product-single-electronics.html">
                              Keurig K-Duo Bose Noise Cancelling Headphones 700
                            </a>
                          </h2>
                          <div className="rbt-card-rating">
                            <ul className="rbt-rating-icon-list">
                              <li>
                                <i className="fa-solid fa-star rbt-rated-icon" />
                              </li>
                              <li>
                                <i className="fa-solid fa-star rbt-rated-icon" />
                              </li>
                              <li>
                                <i className="fa-solid fa-star rbt-rated-icon" />
                              </li>
                              <li>
                                <i className="fa-solid fa-star rbt-rated-icon" />
                              </li>
                              <li>
                                <i className="fa-solid fa-star rbt-rated-icon" />
                              </li>
                            </ul>
                            <p className="rating-digit">(10)</p>
                            <div className="rbt-text-group">
                              <span className="icon mr--4">
                                <i className="fa-solid fa-bag-shopping" />
                              </span>
                              90+ Sold Recently
                            </div>
                          </div>
                          <div className="pricing-part">
                            <del className="price-text">$295.00</del>
                            <span className="price-text">$179.98</span>
                          </div>
                          <div className="rbt-prd-qty-area">
                            <p className="prd-qty-txt">
                              Only <strong>97</strong> pc left
                            </p>
                            <div
                              className="progress"
                              role="progressbar"
                              aria-label="Shipping-progress"
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <div className="progress-bar w-50" />
                            </div>
                          </div>
                          <div className="prd-btn-grp">
                            <button className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block has-left-icon rbt-cart-sidenav-activation">
                              <i className="fa-regular fa-cart-shopping" /> Add
                              To Cart
                            </button>
                            <button
                              className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block rbt-btn-transparent has-left-icon rbt-compare-btn-activation rbt-compare-bottom-sidenav-activation"
                              type="button"
                            >
                              <i className="fa-regular fa-file-plus-minus" />
                              Add To Compare
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Single Card  */}
                  {/* Start Single Card  */}
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6 mt--24">
                    <div className="rbt-card rbt-product-card">
                      <div className="inner rbt-scroll-trigger fade_in animation-order-4">
                        <div className="rbt-card-img rbt-has-hover-img rbt-bg-color-default">
                          <a href="product-single-electronics.html">
                            <img
                              className="rbt-prd-img"
                              src="assets/images/product-img/electronics/electronics-bg-trans-08-a-1.webp"
                              alt="Card Image"
                            />
                            <img
                              className="rbt-hover-img"
                              src="assets/images/product-img/electronics/electronics-bg-trans-08-a-1-hover.webp"
                              alt="Card Image"
                            />
                          </a>
                          <div className="rbt-badge-wrapper rbt-content-top-left">
                            <div className="rbt-product-badge rbt-product-badge-bg-green border-rounded">
                              New
                            </div>
                          </div>
                          <div className="rbt-quick-btn-grp has-mixup-midlayer bottom-right--position">
                            <button
                              className="rbt-search-btn rbt-quick-btn tooltips"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#quickviewModal"
                              data-tooltip="Quick View"
                              data-tooltip-position="left"
                            >
                              <i className="fa-regular fa-magnifying-glass-plus" />
                            </button>
                            <button
                              className="rbt-wishlisted-btn rbt-quick-btn tooltips"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#wishlistModal"
                              data-tooltip="Add to wishlist"
                              data-tooltip-position="left"
                            >
                              <i className="fa-regular fa-heart" />
                            </button>
                          </div>
                        </div>
                        <div className="rbt-card-body">
                          <div className="rbt-color-select-area">
                            <ul className="rbt-switcher-color-list product-switcher-activation">
                              <li className="active">
                                <a
                                  className="rbt-switcher--color tooltips"
                                  data-switcher-color="#202020"
                                  data-src="assets/images/product-img/electronics/electronics-bg-trans-08-a-1.webp"
                                  data-tooltip="Black"
                                  data-tooltip-position="top"
                                  href="#"
                                >
                                  <div className="rbt-color-circle" />
                                </a>
                              </li>
                              <li>
                                <a
                                  className="rbt-switcher--color tooltips"
                                  data-switcher-color="#9e9e9e"
                                  data-src="assets/images/product-img/electronics/electronics-bg-trans-08-a-2.webp"
                                  data-tooltip="Gray"
                                  data-tooltip-position="top"
                                  href="#"
                                >
                                  <div className="rbt-color-circle" />
                                </a>
                              </li>
                              <li>
                                <a
                                  className="rbt-switcher--color tooltips"
                                  data-switcher-color="#171717"
                                  data-src="assets/images/product-img/electronics/electronics-bg-trans-08-a-3.webp"
                                  data-tooltip="Light Black"
                                  data-tooltip-position="top"
                                  href="#"
                                >
                                  <div className="rbt-color-circle" />
                                </a>
                              </li>
                            </ul>
                            <a
                              className="prd-link-text"
                              href="product-single-electronics.html"
                            >
                              +12 More Items
                            </a>
                          </div>
                          <a
                            href="shop-by-categories.html"
                            className="rbt-card-subtitle rbt-card-catagories-text"
                          >
                            Electronics &amp; Camera
                          </a>
                          <h2 className="rbt-card-title h6">
                            <a href="product-single-electronics.html">
                              GoPro HERO 11 4K Action Camera with SD Card
                            </a>
                          </h2>
                          <div className="rbt-card-rating">
                            <ul className="rbt-rating-icon-list">
                              <li>
                                <i className="fa-solid fa-star rbt-rated-icon" />
                              </li>
                              <li>
                                <i className="fa-solid fa-star rbt-rated-icon" />
                              </li>
                              <li>
                                <i className="fa-solid fa-star rbt-rated-icon" />
                              </li>
                              <li>
                                <i className="fa-solid fa-star rbt-rated-icon" />
                              </li>
                              <li>
                                <i className="fa-solid fa-star rbt-rated-icon" />
                              </li>
                            </ul>
                            <p className="rating-digit">(16)</p>
                            <div className="rbt-text-swiper-container rbt-arrow-vertical">
                              <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                  <div className="rbt-text-group">
                                    <span className="icon mr--4">
                                      <i className="fa-solid fa-bag-shopping" />
                                    </span>
                                    90+ Sold Recently
                                  </div>
                                </div>
                                <div className="swiper-slide">
                                  <div className="rbt-text-group">
                                    <span className="icon mr--4">
                                      <i className="fa-solid fa-truck" />
                                    </span>
                                    Free shipping
                                  </div>
                                </div>
                                <div className="swiper-slide">
                                  <div className="rbt-text-group">
                                    <span className="icon mr--4">
                                      <i className="fa-solid fa-rotate-left" />
                                    </span>
                                    7 Days Return Plicy
                                  </div>
                                </div>
                              </div>
                              <div className="rbt-verticle-arrow rbt-arrow-prev">
                                <i className="fa-regular fa-chevron-up" />
                              </div>
                              <div className="rbt-verticle-arrow rbt-arrow-next">
                                <i className="fa-regular fa-chevron-down" />
                              </div>
                            </div>
                          </div>
                          <div className="pricing-part">
                            <del className="price-text">$295.00</del>
                            <span className="price-text">$179.98</span>
                            <span className="rbt-offer-badge">-30%</span>
                            <div className="rbt-badge rbt-badge-bg-green rbt-badge-border rbt-badge-small rbt-badge-rounded">
                              12 in Stock
                            </div>
                          </div>
                          <div className="rbt-prd-qty-area">
                            <p className="prd-qty-txt">
                              Only <strong>97</strong> pc left
                            </p>
                            <div
                              className="progress"
                              role="progressbar"
                              aria-label="Shipping-progress"
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <div className="progress-bar w-50" />
                            </div>
                          </div>
                          <div className="prd-btn-grp">
                            <a
                              className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block has-left-icon rbt-cart-sidenav-activation"
                              href="#"
                            >
                              <i className="fa-regular fa-cart-shopping" /> Add
                              To Cart
                            </a>
                            <a
                              className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block rbt-btn-transparent has-left-icon rbt-compare-btn-activation rbt-compare-bottom-sidenav-activation"
                              href="#"
                            >
                              <i className="fa-regular fa-file-plus-minus" />
                              Add To Compare
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Single Card  */}
                  {/* Start Single Card  */}
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6 mt--24">
                    <div className="rbt-card rbt-product-card">
                      <div className="inner rbt-scroll-trigger fade_in animation-order-4">
                        <div className="rbt-card-img rbt-has-hover-img rbt-bg-color-default">
                          <a href="product-single-electronics.html">
                            <img
                              className="rbt-prd-img"
                              src="assets/images/product-img/electronics/electronics-bg-trans-07-a-1.webp"
                              alt="Card Image"
                            />
                            <img
                              className="rbt-hover-img"
                              src="assets/images/product-img/electronics/electronics-bg-trans-07-a-1-hover.webp"
                              alt="Card Image"
                            />
                          </a>
                          <div className="rbt-badge-wrapper rbt-content-top-left">
                            <div className="rbt-product-badge rbt-product-badge-bg-yellow border-rounded">
                              Trending
                            </div>
                          </div>
                          <div className="rbt-quick-btn-grp has-mixup-midlayer bottom-right--position">
                            <button
                              className="rbt-search-btn rbt-quick-btn tooltips"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#quickviewModal"
                              data-tooltip="Quick View"
                              data-tooltip-position="left"
                            >
                              <i className="fa-regular fa-magnifying-glass-plus" />
                            </button>
                            <button
                              className="rbt-wishlisted-btn rbt-quick-btn tooltips"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#wishlistModal"
                              data-tooltip="Add to wishlist"
                              data-tooltip-position="left"
                            >
                              <i className="fa-regular fa-heart" />
                            </button>
                          </div>
                        </div>
                        <div className="rbt-card-body">
                          <div className="rbt-color-select-area">
                            <ul className="rbt-switcher-color-list product-switcher-activation">
                              <li className="active">
                                <a
                                  className="rbt-switcher--color tooltips"
                                  data-switcher-color="#afb1b3"
                                  data-src="assets/images/product-img/electronics/electronics-bg-trans-07-a-1.webp"
                                  data-tooltip="Gray"
                                  data-tooltip-position="top"
                                  href="#"
                                >
                                  <div className="rbt-color-circle" />
                                </a>
                              </li>
                              <li>
                                <a
                                  className="rbt-switcher--color tooltips"
                                  data-switcher-color="#7796b9"
                                  data-src="assets/images/product-img/electronics/electronics-bg-trans-07-a-2.webp"
                                  data-tooltip="Sky Blue"
                                  data-tooltip-position="top"
                                  href="#"
                                >
                                  <div className="rbt-color-circle" />
                                </a>
                              </li>
                              <li>
                                <a
                                  className="rbt-switcher--color tooltips"
                                  data-switcher-color="#b84a5f"
                                  data-src="assets/images/product-img/electronics/electronics-bg-trans-07-a-3.webp"
                                  data-tooltip="Pink Red"
                                  data-tooltip-position="top"
                                  href="#"
                                >
                                  <div className="rbt-color-circle" />
                                </a>
                              </li>
                            </ul>
                            <a
                              className="prd-link-text"
                              href="product-single-electronics.html"
                            >
                              +12 More Items
                            </a>
                          </div>
                          <a
                            href="shop-by-categories.html"
                            className="rbt-card-subtitle rbt-card-catagories-text"
                          >
                            Tablets &amp; Accessories
                          </a>
                          <h2 className="rbt-card-title h6">
                            <a href="product-single-electronics.html">
                              Samsung Galaxy N-569 Tab S7 with Stylish –
                              8GB/128GB
                            </a>
                          </h2>
                          <div className="rbt-card-rating">
                            <ul className="rbt-rating-icon-list">
                              <li>
                                <i className="fa-solid fa-star rbt-rated-icon" />
                              </li>
                              <li>
                                <i className="fa-solid fa-star rbt-rated-icon" />
                              </li>
                              <li>
                                <i className="fa-solid fa-star rbt-rated-icon" />
                              </li>
                              <li>
                                <i className="fa-solid fa-star rbt-rated-icon" />
                              </li>
                              <li>
                                <i className="fa-solid fa-star rbt-rated-icon" />
                              </li>
                            </ul>
                            <p className="rating-digit">(25)</p>
                            <div className="rbt-text-group">
                              <span className="icon mr--4">
                                <i className="fa-solid fa-bag-shopping" />
                              </span>
                              90+ Sold Recently
                            </div>
                          </div>
                          <div className="pricing-part">
                            <del className="price-text">$295.00</del>
                            <span className="price-text">$179.98</span>
                          </div>
                          <div className="rbt-prd-qty-area">
                            <p className="prd-qty-txt">
                              Only <strong>97</strong> pc left
                            </p>
                            <div
                              className="progress"
                              role="progressbar"
                              aria-label="Shipping-progress"
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <div className="progress-bar w-50" />
                            </div>
                          </div>
                          <div className="prd-btn-grp">
                            <a
                              className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block has-left-icon rbt-cart-sidenav-activation"
                              href="#"
                            >
                              <i className="fa-regular fa-cart-shopping" /> Add
                              To Cart
                            </a>
                            <a
                              className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block rbt-btn-transparent has-left-icon rbt-compare-btn-activation rbt-compare-bottom-sidenav-activation"
                              href="#"
                            >
                              <i className="fa-regular fa-file-plus-minus" />
                              Add To Compare
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Single Card  */}
                </div>
                {/* End Card Area */}
              </div>
            </div>
          </div>
        </div>
        {/* End Component Area */}
        {/* Start Component Area */}
        <div
          id="rbt-product-block-03"
          className="rbt-component-area rbt-catagories-area rbt-section-gap2 rbt-bg-color-gray-light"
        >
          <div className="container">
            <div className="row row--12 mt_dec--24">
              <div className="col-xl-6 col-lg-12 col-md-12 col-12 mt--24">
                <div className="rbt-fshape-box-outline-style rbt-fshape-box-outline-style-bg-white rbt-fshape-box-outline-style-sm-size">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="rbt-component-section-title">
                        <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                          <span className="rbt-bold--text">
                            This Week’s Highlights
                          </span>
                        </h2>
                        <span className="rbt-fshape-right-portion rbt-fshape-right-portion-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={52}
                            height={50}
                            viewBox="0 0 52 50"
                            fill="none"
                          >
                            <path
                              d="M51.5337 49.984C-64.8544 49.9977 116.427 49.9764 0.0390625 49.9901C0.0390625 31.262 0.0390625 20.7619 0.0390625 2.03378C11.2391 1.63419 16.5034 4.56468 19.5034 10.5602L30.0034 38.5311C34.0374 47.934 45.4209 49.4481 51.5337 49.984Z"
                              fill="var(--color-white)"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M13.246 1.97519C16.582 3.50685 18.8114 5.90944 20.3979 9.07997L20.4213 9.12681L30.9315 37.1248C33.053 42.053 36.807 44.7979 40.7367 46.3047C44.6934 47.8219 48.798 48.068 51.4731 47.987C51.4731 47.987 51.51 49.2041 51.5337 49.984C48.7087 50.0695 44.3134 49.8162 40.02 48.17C35.7052 46.5155 31.4643 43.4388 29.0842 37.891L29.0751 37.8698C29.0751 37.8698 19.997 12.7279 18.5857 9.92689C17.1743 7.12591 15.2591 5.09828 12.4108 3.79055C8.49554 1.49902 0.0390625 2.03378 0.0390625 2.03378C0.0390625 20.7619 0.0390625 31.262 0.0390625 49.9901L0.0408325 0.0348727C5.70805 -0.16568 9.9493 0.461575 13.246 1.97519Z"
                              fill="var(--color-brand-100)"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="rbt-fshape-box">
                    <div className="row row--12 mt_dec--24 rbt-card-row-has-top-separator rbt-two-align-card-row">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt--24">
                        <div className="rbt-card rbt-product-card rbt-list-view-variation rbt-list-view-sm">
                          <div className="inner rbt-scroll-trigger fade_in animation-order-1">
                            <div className="rbt-card-body">
                              <div className="rbt-card-rating">
                                <ul className="rbt-rating-icon-list">
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star" />
                                  </li>
                                </ul>
                                <p className="rating-digit">(42)</p>
                              </div>
                              <h2 className="rbt-card-title h6">
                                <a href="product-single-electronics.html">
                                  Beats Studio Pro Wireless Earbuds – Black
                                </a>
                              </h2>
                              <div className="pricing-part">
                                <del className="price-text">$255.34</del>
                                <span className="price-text">$69.78</span>
                              </div>
                            </div>
                            <div className="rbt-card-img rbt-bg-color-default rbt-curved-style-box">
                              <a href="product-single-electronics.html">
                                <img
                                  src="assets/images/product-img/electronics/electronics-bg-trans-list-01.webp"
                                  alt="Card Image"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt--24">
                        <div className="rbt-card rbt-product-card rbt-list-view-variation rbt-list-view-sm">
                          <div className="inner rbt-scroll-trigger fade_in animation-order-2">
                            <div className="rbt-card-body">
                              <div className="rbt-card-rating">
                                <ul className="rbt-rating-icon-list">
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star" />
                                  </li>
                                </ul>
                                <p className="rating-digit">(42)</p>
                              </div>
                              <h2 className="rbt-card-title h6">
                                <a href="product-single-electronics.html">
                                  Apple 12.9-inch iPad Pro Wi-Fi 512GB Gray
                                  Space
                                </a>
                              </h2>
                              <div className="pricing-part">
                                <del className="price-text">$56.00</del>
                                <span className="price-text">$26.00</span>
                              </div>
                            </div>
                            <div className="rbt-card-img rbt-bg-color-default rbt-curved-style-box">
                              <a href="product-single-electronics.html">
                                <img
                                  src="assets/images/product-img/electronics/electronics-bg-trans-list-02.webp"
                                  alt="Card Image"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt--24">
                        <div className="rbt-card rbt-product-card rbt-list-view-variation rbt-list-view-sm">
                          <div className="inner rbt-scroll-trigger fade_in animation-order-3">
                            <div className="rbt-card-body">
                              <div className="rbt-card-rating">
                                <ul className="rbt-rating-icon-list">
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star" />
                                  </li>
                                </ul>
                                <p className="rating-digit">(42)</p>
                              </div>
                              <h2 className="rbt-card-title h6">
                                <a href="product-single-electronics.html">
                                  DJI OM 5 Handheld Smartphone Gimbal
                                </a>
                              </h2>
                              <div className="pricing-part">
                                <del className="price-text">$116.34</del>
                                <span className="price-text">$69.78</span>
                              </div>
                            </div>
                            <div className="rbt-card-img rbt-bg-color-default rbt-curved-style-box">
                              <a href="product-single-electronics.html">
                                <img
                                  src="assets/images/product-img/electronics/electronics-bg-trans-list-03.webp"
                                  alt="Card Image"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt--24">
                        <div className="rbt-card rbt-product-card rbt-list-view-variation rbt-list-view-sm">
                          <div className="inner rbt-scroll-trigger fade_in animation-order-4">
                            <div className="rbt-card-body">
                              <div className="rbt-card-rating">
                                <ul className="rbt-rating-icon-list">
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star" />
                                  </li>
                                </ul>
                                <p className="rating-digit">(42)</p>
                              </div>
                              <h2 className="rbt-card-title h6">
                                <a href="product-single-electronics.html">
                                  Apple Watch Ultra 2 – Titanium Case
                                </a>
                              </h2>
                              <div className="pricing-part">
                                <del className="price-text">$96.34</del>
                                <span className="price-text">$59.78</span>
                              </div>
                            </div>
                            <div className="rbt-card-img rbt-bg-color-default rbt-curved-style-box">
                              <a href="product-single-electronics.html">
                                <img
                                  src="assets/images/product-img/electronics/electronics-bg-trans-list-04.webp"
                                  alt="Card Image"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt--24">
                        <div className="rbt-card rbt-product-card rbt-list-view-variation rbt-list-view-sm">
                          <div className="inner rbt-scroll-trigger fade_in animation-order-5">
                            <div className="rbt-card-body">
                              <div className="rbt-card-rating">
                                <ul className="rbt-rating-icon-list">
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star" />
                                  </li>
                                </ul>
                                <p className="rating-digit">(42)</p>
                              </div>
                              <h2 className="rbt-card-title h6">
                                <a href="product-single-electronics.html">
                                  Apple MacBook Pro 16-inch – M2 Chip
                                </a>
                              </h2>
                              <div className="pricing-part">
                                <del className="price-text">$116.34</del>
                                <span className="price-text">$69.78</span>
                              </div>
                            </div>
                            <div className="rbt-card-img rbt-bg-color-default rbt-curved-style-box">
                              <a href="product-single-electronics.html">
                                <img
                                  src="assets/images/product-img/electronics/electronics-bg-trans-list-05.webp"
                                  alt="Card Image"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt--24">
                        <div className="rbt-card rbt-product-card rbt-list-view-variation rbt-list-view-sm">
                          <div className="inner rbt-scroll-trigger fade_in animation-order-6">
                            <div className="rbt-card-body">
                              <div className="rbt-card-rating">
                                <ul className="rbt-rating-icon-list">
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star rbt-rated-icon" />
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star" />
                                  </li>
                                </ul>
                                <p className="rating-digit">(42)</p>
                              </div>
                              <h2 className="rbt-card-title h6">
                                <a href="product-single-electronics.html">
                                  Apple iPad Air 10.9-inch – Wi-Fi 256GB
                                </a>
                              </h2>
                              <div className="pricing-part">
                                <del className="price-text">$219.34</del>
                                <span className="price-text">$99.78</span>
                              </div>
                            </div>
                            <div className="rbt-card-img rbt-bg-color-default rbt-curved-style-box">
                              <a href="product-single-electronics.html">
                                <img
                                  src="assets/images/product-img/electronics/electronics-bg-trans-list-06.webp"
                                  alt="Card Image"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12 col-md-12 col-12 mt--24 pt--44 pt_sm--0 pt_lg--0 pt_md--0">
                {/* Start Product Banner Area */}
                <div className="rbt-product-banner rbt-product-banner-style-two rbt-curved-style-box h-100">
                  <div className="rbt-banner-inner h-100">
                    <div className="rbt-product-banner-img rbt-full-width-img rbt-scroll-trigger zoom_in animation-order-1">
                      <img
                        src="assets/images/product-banner/product-banner-img-02.webp"
                        alt="Ecommerce Product Banner Image"
                      />
                    </div>
                    <div className="rbt-product-banner-content">
                      <div className="rbt-content-section rbt-scroll-trigger fade_in animation-order-1">
                        <p className="rbt-banner-subtitle mb-0">
                          Power Up Deals
                        </p>
                        <h2 className="rbt-banner-title title-capitalize-text mb-0">
                          <span className="rbt-bold--text">Red Camera </span>
                          Plus
                        </h2>
                        <h3 className="rbt-secondery-subtitle mb-0">
                          Holiday Cheers
                        </h3>
                      </div>
                      <div className="rbt-banner-btn rbt-scroll-trigger fade_in animation-order-2">
                        <a
                          className="rbt-btn rbt-btn-round rbt-magnetic-button"
                          href="shop.html"
                        >
                          <i className="fa-solid fa-arrow-up-right" /> SHOP{" "}
                          <br />
                          NOW
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Product Banner Area */}
              </div>
            </div>
          </div>
        </div>
        {/* End Component Area */}
        {/* Start Component Area */}
        <div
          id="rbt-product-block-04"
          className="rbt-component-area rbt-catagories-area rbt-section-gap2 rbt-bg-color-white"
        >
          <div className="container">
            <div className="rbt-fshape-box-outline-style rbt-fshape-box-outline-style-extend-width">
              <div className="row">
                <div className="col-lg-12">
                  <div className="rbt-component-section-title">
                    <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1 h4">
                      <span className="rbt-bold--text">Featured Products</span>
                    </h2>
                    <span className="rbt-fshape-right-portion">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={52}
                        height={50}
                        viewBox="0 0 52 50"
                        fill="none"
                      >
                        <path
                          d="M51.5337 49.984C-64.8544 49.9977 116.427 49.9764 0.0390625 49.9901C0.0390625 31.262 0.0390625 20.7619 0.0390625 2.03378C11.2391 1.63419 16.5034 4.56468 19.5034 10.5602L30.0034 38.5311C34.0374 47.934 45.4209 49.4481 51.5337 49.984Z"
                          fill="var(--color-gray-light)"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.246 1.97519C16.582 3.50685 18.8114 5.90944 20.3979 9.07997L20.4213 9.12681L30.9315 37.1248C33.053 42.053 36.807 44.7979 40.7367 46.3047C44.6934 47.8219 48.798 48.068 51.4731 47.987C51.4731 47.987 51.51 49.2041 51.5337 49.984C48.7087 50.0695 44.3134 49.8162 40.02 48.17C35.7052 46.5155 31.4643 43.4388 29.0842 37.891L29.0751 37.8698C29.0751 37.8698 19.997 12.7279 18.5857 9.92689C17.1743 7.12591 15.2591 5.09828 12.4108 3.79055C8.49554 1.49902 0.0390625 2.03378 0.0390625 2.03378C0.0390625 20.7619 0.0390625 31.262 0.0390625 49.9901L0.0408325 0.0348727C5.70805 -0.16568 9.9493 0.461575 13.246 1.97519Z"
                          fill="var(--color-brand-100)"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="rbt-fshape-box rbt-bg-color-gray-light">
                <div className="row row--12 mt_dec--24">
                  <div className="col-xxl-8 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 mt--24">
                    <div className="rbt-card rbt-product-card rbt-list-view-variation rbt-list-view-lg">
                      <div className="inner rbt-scroll-trigger fade_in animation-order-1">
                        <div className="rbt-card-img rbt-bg-color-default order-2">
                          <a href="product-single-electronics.html">
                            <img
                              className="rbt-prd-img"
                              src="assets/images/product-img/electronics/electronics-bg-trans-list-lg-01.webp"
                              alt="Card Image"
                            />
                          </a>
                          <div className="rbt-badge-wrapper rbt-content-top-left">
                            <div className="rbt-product-badge rbt-product-badge-bg-green border-rounded">
                              New
                            </div>
                          </div>
                          <div
                            className="rbt-discount-badge right--corner-style tooltips"
                            data-tooltip="👁️ 16 People are Watching This Item"
                            data-tooltip-position="bottom"
                          >
                            <span>
                              <i className="fa-regular fa-eye" />
                              16
                            </span>
                          </div>
                          <div className="rbt-quick-btn-grp has-mixup-midlayer bottom-right--position">
                            <button
                              className="rbt-search-btn rbt-quick-btn tooltips"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#quickviewModal"
                              data-tooltip="Quick View"
                              data-tooltip-position="left"
                            >
                              <i className="fa-regular fa-magnifying-glass-plus" />
                            </button>
                            <button
                              className="rbt-wishlisted-btn rbt-quick-btn tooltips"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#wishlistModal"
                              data-tooltip="Add to wishlist"
                              data-tooltip-position="left"
                            >
                              <i className="fa-regular fa-heart" />
                            </button>
                          </div>
                          <div className="rbt-countdown-wrap rbt-content-bottom-center rbt-countdown-one bg-variation-black cd-border-style">
                            <div className="countdown" data-date="2025-06-30">
                              <div className="countdown-container days">
                                <span className="countdown-value">87</span>
                                <span className="countdown-heading">Days</span>
                              </div>
                              <div className="countdown-container hours">
                                <span className="countdown-value">23</span>
                                <span className="countdown-heading">Hours</span>
                              </div>
                              <div className="countdown-container minutes">
                                <span className="countdown-value">38</span>
                                <span className="countdown-heading">
                                  Minutes
                                </span>
                              </div>
                              <div className="countdown-container seconds">
                                <span className="countdown-value">27</span>
                                <span className="countdown-heading">Sec</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="rbt-card-body order-1">
                          <div className="rbt-color-select-area">
                            <ul className="rbt-switcher-color-list product-switcher-activation">
                              <li className="active">
                                <a
                                  className="rbt-switcher--color tooltips"
                                  data-switcher-color="#ed9951"
                                  data-src="assets/images/product-img/electronics/electronics-bg-trans-list-lg-01.webp"
                                  data-tooltip="Orange"
                                  data-tooltip-position="top"
                                  href="#"
                                >
                                  <div className="rbt-color-circle" />
                                </a>
                              </li>
                              <li>
                                <a
                                  className="rbt-switcher--color tooltips"
                                  data-switcher-color="#fffdfc"
                                  data-src="assets/images/product-img/electronics/electronics-bg-trans-list-lg-03.webp"
                                  data-tooltip="White"
                                  data-tooltip-position="top"
                                  href="#"
                                >
                                  <div className="rbt-color-circle" />
                                </a>
                              </li>
                              <li>
                                <a
                                  className="rbt-switcher--color tooltips"
                                  data-switcher-color="#4c5f7b"
                                  data-src="assets/images/product-img/electronics/electronics-bg-trans-list-lg-04.webp"
                                  data-tooltip="Blue"
                                  data-tooltip-position="top"
                                  href="#"
                                >
                                  <div className="rbt-color-circle" />
                                </a>
                              </li>
                              <li>
                                <a
                                  className="rbt-switcher--color tooltips"
                                  data-switcher-color="#f0f0f0"
                                  data-src="assets/images/product-img/electronics/electronics-bg-trans-list-lg-02.webp"
                                  data-tooltip="light White"
                                  data-tooltip-position="top"
                                  href="#"
                                >
                                  <div className="rbt-color-circle" />
                                </a>
                              </li>
                            </ul>
                            <a
                              className="prd-link-text"
                              href="product-single-electronics.html"
                            >
                              +12 More Items
                            </a>
                          </div>
                          <a
                            href="shop-by-categories.html"
                            className="rbt-card-subtitle rbt-card-catagories-text"
                          >
                            Camera &amp; Photo
                          </a>
                          <h2 className="rbt-card-title h4">
                            <a href="product-single-electronics.html">
                              Samsung Galaxy Watch 4 Aluminum Smartwatch 44MM
                              Bluetooth
                            </a>
                          </h2>
                          <div className="rbt-card-rating">
                            <ul className="rbt-rating-icon-list">
                              <li>
                                <i className="fa-solid fa-star rbt-rated-icon" />
                              </li>
                              <li>
                                <i className="fa-solid fa-star rbt-rated-icon" />
                              </li>
                              <li>
                                <i className="fa-solid fa-star rbt-rated-icon" />
                              </li>
                              <li>
                                <i className="fa-solid fa-star rbt-rated-icon" />
                              </li>
                              <li>
                                <i className="fa-solid fa-star rbt-rated-icon" />
                              </li>
                            </ul>
                            <p className="rating-digit">(25)</p>
                          </div>
                          <div className="pricing-part">
                            <del className="price-text">$295.00</del>
                            <span className="price-text">$179.98</span>
                            <span className="rbt-offer-badge">-30%</span>
                          </div>
                          <div className="rbt-prd-qty-area d-flex flex-row-reverse align-items-center rbt-gap--12">
                            <p className="prd-qty-txt text-nowrap">
                              Only <strong>97</strong> pc left
                            </p>
                            <div
                              className="progress mt--0"
                              role="progressbar"
                              aria-label="Shipping-progress"
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <div className="progress-bar w-50" />
                            </div>
                          </div>
                          <div className="prd-btn-grp">
                            <a
                              className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block has-left-icon rbt-cart-sidenav-activation"
                              href="#"
                            >
                              <i className="fa-regular fa-cart-shopping" /> Add
                              To Cart
                            </a>
                            <a
                              className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block rbt-btn-transparent has-left-icon rbt-compare-btn-activation rbt-compare-bottom-sidenav-activation"
                              href="#"
                            >
                              <i className="fa-regular fa-file-plus-minus" />
                              Add To Compare
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Start Single Box  */}
                  <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 mt--24">
                    <div className="rbt-list-card-box variation-lg">
                      <div className="row row--12 mt_dec--24 mt_dec--24 rbt-card-row-has-top-separator rbt-one-align-card-row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt--24">
                          <div className="rbt-card rbt-product-card rbt-list-view-variation list-view-md">
                            <div className="inner rbt-scroll-trigger fade_in animation-order-2">
                              <div className="rbt-card-body">
                                <div className="rbt-card-rating">
                                  <ul className="rbt-rating-icon-list">
                                    <li>
                                      <i className="fa-solid fa-star rbt-rated-icon" />
                                    </li>
                                    <li>
                                      <i className="fa-solid fa-star rbt-rated-icon" />
                                    </li>
                                    <li>
                                      <i className="fa-solid fa-star rbt-rated-icon" />
                                    </li>
                                    <li>
                                      <i className="fa-solid fa-star rbt-rated-icon" />
                                    </li>
                                    <li>
                                      <i className="fa-solid fa-star rbt-rated-icon" />
                                    </li>
                                  </ul>
                                  <p className="rating-digit">(46)</p>
                                </div>
                                <h2 className="rbt-card-title h6">
                                  <a href="product-single-electronics.html">
                                    2021 Apple 12.9-inch iPad 512GB Gray Space
                                  </a>
                                </h2>
                                <div className="pricing-part">
                                  <del className="price-text">$295.00</del>
                                  <span className="price-text">$179.98</span>
                                </div>
                              </div>
                              <div className="rbt-card-img rbt-bg-color-default rbt-curved-style-box">
                                <a href="product-single-electronics.html">
                                  <img
                                    src="assets/images/product-img/electronics/electronics-bg-trans-list-02.webp"
                                    alt="Card Image"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt--24">
                          <div className="rbt-card rbt-product-card rbt-list-view-variation list-view-md">
                            <div className="inner rbt-scroll-trigger fade_in animation-order-3">
                              <div className="rbt-card-body">
                                <div className="rbt-card-rating">
                                  <ul className="rbt-rating-icon-list">
                                    <li>
                                      <i className="fa-solid fa-star rbt-rated-icon" />
                                    </li>
                                    <li>
                                      <i className="fa-solid fa-star rbt-rated-icon" />
                                    </li>
                                    <li>
                                      <i className="fa-solid fa-star rbt-rated-icon" />
                                    </li>
                                    <li>
                                      <i className="fa-solid fa-star rbt-rated-icon" />
                                    </li>
                                    <li>
                                      <i className="fa-solid fa-star rbt-rated-icon" />
                                    </li>
                                  </ul>
                                  <p className="rating-digit">(46)</p>
                                </div>
                                <h2 className="rbt-card-title h6">
                                  <a href="product-single-electronics.html">
                                    Nespresso Vertuo Plus Coffee Maker – Black
                                  </a>
                                </h2>
                                <div className="pricing-part">
                                  <del className="price-text">$295.00</del>
                                  <span className="price-text">$179.98</span>
                                </div>
                              </div>
                              <div className="rbt-card-img rbt-bg-color-default rbt-curved-style-box">
                                <a href="product-single-electronics.html">
                                  <img
                                    src="assets/images/product-img/electronics/electronics-bg-trans-02.webp"
                                    alt="Card Image"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Single Box  */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Component Area */}
        {/* Start Component Area */}
        <div className="rbt-component-area rbt-catagories-area rbt-section-gap2 rbt-bg-color-gray-light">
          <div className="container">
            {/* Start Brands Area */}
            <div className="rbt-brand-style-one rbt-fshape-box-outline-style rbt-fshape-box-outline-style-extend-width">
              <div className="row">
                <div className="col-lg-12">
                  <div className="rbt-component-section-title text-left">
                    <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1 h4">
                      <span className="rbt-bold--text">Favorite Brands</span>
                    </h2>
                    <span className="rbt-fshape-right-portion">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={52}
                        height={50}
                        viewBox="0 0 52 50"
                        fill="none"
                      >
                        <path
                          d="M51.5337 49.984C-64.8544 49.9977 116.427 49.9764 0.0390625 49.9901C0.0390625 31.262 0.0390625 20.7619 0.0390625 2.03378C11.2391 1.63419 16.5034 4.56468 19.5034 10.5602L30.0034 38.5311C34.0374 47.934 45.4209 49.4481 51.5337 49.984Z"
                          fill="var(--color-gray-light)"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.246 1.97519C16.582 3.50685 18.8114 5.90944 20.3979 9.07997L20.4213 9.12681L30.9315 37.1248C33.053 42.053 36.807 44.7979 40.7367 46.3047C44.6934 47.8219 48.798 48.068 51.4731 47.987C51.4731 47.987 51.51 49.2041 51.5337 49.984C48.7087 50.0695 44.3134 49.8162 40.02 48.17C35.7052 46.5155 31.4643 43.4388 29.0842 37.891L29.0751 37.8698C29.0751 37.8698 19.997 12.7279 18.5857 9.92689C17.1743 7.12591 15.2591 5.09828 12.4108 3.79055C8.49554 1.49902 0.0390625 2.03378 0.0390625 2.03378C0.0390625 20.7619 0.0390625 31.262 0.0390625 49.9901L0.0408325 0.0348727C5.70805 -0.16568 9.9493 0.461575 13.246 1.97519Z"
                          fill="var(--color-brand-100)"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="rbt-fshape-box rbt-fshape-box-py-inc">
                <div className="row row--12 mt_dec--24">
                  <div className="col-lg-1-5 col-lg-4 col-md-4 col-sm-6 col-6 mt--24">
                    <div className="rbt-brand text-center style-one rbt-content-transform-style rbt-scroll-trigger fade_in animation-order-1">
                      <a href="shop-by-brands.html">
                        <div className="rbt-brand-inner">
                          <div className="brand-image">
                            <img
                              src="assets/images/brands/brand-a-01.webp"
                              alt="Ecommerce Brand Images"
                            />
                            <span className="rbt-divider-arrow has-right-angel-animation" />
                          </div>
                          <div className="rbt-content">
                            <span className="discount-text">Upto 20% off</span>
                            <span className="prd-text">
                              Total
                              <span className="prd-number">100</span> Products
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-1-5 col-lg-4 col-md-4 col-sm-6 col-6 mt--24">
                    <div className="rbt-brand text-center style-one rbt-content-transform-style rbt-scroll-trigger fade_in animation-order-2">
                      <a href="shop-by-brands.html">
                        <div className="rbt-brand-inner">
                          <div className="brand-image">
                            <img
                              src="assets/images/brands/brand-a-02.webp"
                              alt="Ecommerce Brand Images"
                            />
                            <span className="rbt-divider-arrow has-right-angel-animation" />
                          </div>
                          <div className="rbt-content">
                            <span className="discount-text">Upto 10% off</span>
                            <span className="prd-text">
                              Total
                              <span className="prd-number">80</span> Products
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-1-5 col-lg-4 col-md-4 col-sm-6 col-6 mt--24">
                    <div className="rbt-brand text-center style-one rbt-content-transform-style rbt-scroll-trigger fade_in animation-order-3">
                      <a href="shop-by-brands.html">
                        <div className="rbt-brand-inner">
                          <div className="brand-image">
                            <img
                              src="assets/images/brands/brand-a-03.webp"
                              alt="Ecommerce Brand Images"
                            />
                            <span className="rbt-divider-arrow has-right-angel-animation" />
                          </div>
                          <div className="rbt-content">
                            <span className="discount-text">Upto 15% off</span>
                            <span className="prd-text">
                              Total
                              <span className="prd-number">70</span> Products
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-1-5 col-lg-4 col-md-4 col-sm-6 col-6 mt--24">
                    <div className="rbt-brand text-center style-one rbt-content-transform-style rbt-scroll-trigger fade_in animation-order-4">
                      <a href="shop-by-brands.html">
                        <div className="rbt-brand-inner">
                          <div className="brand-image">
                            <img
                              src="assets/images/brands/brand-a-04.webp"
                              alt="Ecommerce Brand Images"
                            />
                            <span className="rbt-divider-arrow has-right-angel-animation" />
                          </div>
                          <div className="rbt-content">
                            <span className="discount-text">Upto 25% off</span>
                            <span className="prd-text">
                              Total
                              <span className="prd-number">200</span> Products
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-1-5 col-lg-4 col-md-4 col-sm-6 col-6 mt--24">
                    <div className="rbt-brand text-center style-one rbt-content-transform-style rbt-scroll-trigger fade_in animation-order-5">
                      <a href="shop-by-brands.html">
                        <div className="rbt-brand-inner">
                          <div className="brand-image">
                            <img
                              src="assets/images/brands/brand-a-05.webp"
                              alt="Ecommerce Brand Images"
                            />
                            <span className="rbt-divider-arrow has-right-angel-animation" />
                          </div>
                          <div className="rbt-content">
                            <span className="discount-text">Upto 20% off</span>
                            <span className="prd-text">
                              Total
                              <span className="prd-number">60</span> Products
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-1-5 col-lg-4 col-md-4 col-sm-6 col-6 mt--24">
                    <div className="rbt-brand text-center style-one rbt-content-transform-style rbt-scroll-trigger fade_in animation-order-6">
                      <a href="shop-by-brands.html">
                        <div className="rbt-brand-inner">
                          <div className="brand-image">
                            <img
                              src="assets/images/brands/brand-a-06.webp"
                              alt="Ecommerce Brand Images"
                            />
                            <span className="rbt-divider-arrow has-right-angel-animation" />
                          </div>
                          <div className="rbt-content">
                            <span className="discount-text">Upto 15% off</span>
                            <span className="prd-text">
                              Total
                              <span className="prd-number">70</span> Products
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-1-5 col-lg-4 col-md-4 col-sm-6 col-6 mt--24">
                    <div className="rbt-brand text-center style-one rbt-content-transform-style rbt-scroll-trigger fade_in animation-order-7">
                      <a href="shop-by-brands.html">
                        <div className="rbt-brand-inner">
                          <div className="brand-image">
                            <img
                              src="assets/images/brands/brand-a-07.webp"
                              alt="Ecommerce Brand Images"
                            />
                            <span className="rbt-divider-arrow has-right-angel-animation" />
                          </div>
                          <div className="rbt-content">
                            <span className="discount-text">Upto 12% off</span>
                            <span className="prd-text">
                              Total
                              <span className="prd-number">250</span> Products
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-1-5 col-lg-4 col-md-4 col-sm-6 col-6 mt--24">
                    <div className="rbt-brand text-center style-one rbt-content-transform-style rbt-scroll-trigger fade_in animation-order-8">
                      <a href="shop-by-brands.html">
                        <div className="rbt-brand-inner">
                          <div className="brand-image">
                            <img
                              src="assets/images/brands/brand-a-08.webp"
                              alt="Ecommerce Brand Images"
                            />
                            <span className="rbt-divider-arrow has-right-angel-animation" />
                          </div>
                          <div className="rbt-content">
                            <span className="discount-text">Upto 16% off</span>
                            <span className="prd-text">
                              Total
                              <span className="prd-number">100</span> Products
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-1-5 col-lg-4 col-md-4 col-sm-6 col-6 mt--24">
                    <div className="rbt-brand text-center style-one rbt-content-transform-style rbt-scroll-trigger fade_in animation-order-9">
                      <a href="shop-by-brands.html">
                        <div className="rbt-brand-inner">
                          <div className="brand-image">
                            <img
                              src="assets/images/brands/brand-a-09.webp"
                              alt="Ecommerce Brand Images"
                            />
                            <span className="rbt-divider-arrow has-right-angel-animation" />
                          </div>
                          <div className="rbt-content">
                            <span className="discount-text">Upto 10% off</span>
                            <span className="prd-text">
                              Total
                              <span className="prd-number">390</span> Products
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-1-5 col-lg-4 col-md-4 col-sm-6 col-6 mt--24">
                    <div className="rbt-brand text-center style-one rbt-content-transform-style rbt-scroll-trigger fade_in animation-order-10">
                      <a href="shop-by-brands.html">
                        <div className="rbt-brand-inner">
                          <div className="brand-image">
                            <img
                              src="assets/images/brands/brand-a-10.webp"
                              alt="Ecommerce Brand Images"
                            />
                            <span className="rbt-divider-arrow has-right-angel-animation" />
                          </div>
                          <div className="rbt-content">
                            <span className="discount-text">Upto 14% off</span>
                            <span className="prd-text">
                              Total
                              <span className="prd-number">290</span> Products
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Brands Area */}
          </div>
        </div>
        {/* End Component Area */}
        {/* Start Component Area */}
        <div className="rbt-component-area rbt-catagories-area rbt-section-gap2 rbt-bg-color-white">
          <div className="container">
            {/* Start Product Banner Area */}
            <div className="row row--12 mt_dec--24">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt--24">
                <div className="rbt-product-banner rbt-product-banner-style-three rbt-curved-style-box">
                  <div className="rbt-banner-inner">
                    <div className="rbt-product-banner-content">
                      <div className="rbt-content-section">
                        <p className="rbt-banner-subtitle mb-0 rbt-scroll-trigger fade_in animation-order-0">
                          Exclusive Weekend Discount
                        </p>
                        <h2 className="rbt-banner-title title-capitalize-text mb-0 text-fsize-38 rbt-scroll-trigger fade_in animation-order-2">
                          Feel-The good
                          <span className="rbt-bold--text">
                            shopping Up to 50% Discount
                          </span>
                        </h2>
                        <h3 className="rbt-secondery-subtitle mb-0 rbt-scroll-trigger fade_in animation-order-3">
                          Incredibly slim designs.....
                        </h3>
                        <div className="rbt-pricing-part rbt-scroll-trigger fade_in animation-order-4">
                          <del className="rbt-dis-price-text">$295.00</del>
                          <span className="rbt-price-text offer-price">
                            $179.98
                          </span>
                        </div>
                      </div>
                      <div className="rbt-banner-btn rbt-scroll-trigger fade_in animation-order-5">
                        <a
                          className="rbt-btn rbt-btn-round rbt-magnetic-button"
                          href="shop.html"
                        >
                          <i className="fa-solid fa-arrow-up-right" /> SHOP{" "}
                          <br />
                          NOW
                        </a>
                      </div>
                    </div>
                    <div className="rbt-product-banner-img rbt-scroll-trigger zoom_in animation-order-1">
                      <img
                        src="assets/images/product-banner/product-banner-img-03.webp"
                        alt="Ecommerce Product Banner Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Product Banner Area */}
          </div>
        </div>
        {/* End Component Area */}
      </div>
    </Layout>
  );
}

export default Home;
