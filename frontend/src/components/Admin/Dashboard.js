import Layout from "./LayoutAdmin";

function Dashboard() {
  return (
    <>
      <Layout>
        <main className="px-4 py-6 lg:px-6 min-h-[calc(100vh-140px)]">
          <div className="mb-6 flex flex-wrap items-center justify-center lg:justify-between gap-3 text-center lg:text-left">
            <div>
              <h1 className="lg:text-[24px] text-[20px] font-semibold text-ink-900">
                Welcome back, Emay 👋
              </h1>
              <p className="mt-1 text-[14px] text-ink-500">
                Here's what's happening in your store today.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="inline-flex h-11 items-center gap-2 rounded-base border border-surface-line px-4 text-[14px] font-semibold text-ink-700 transition-colors hover:bg-surface-muted"
              >
                <i data-lucide="download" className="h-4 w-4" />
                Export
              </button>
              <a
                href="add-product.html"
                className="inline-flex h-11 items-center gap-2 rounded-base bg-brand-600 px-4 text-[14px] font-semibold text-white transition-colors hover:bg-brand-700"
              >
                <i data-lucide="plus" className="h-4 w-4" />
                Add Product
              </a>
            </div>
          </div>
          <div className="mb-6">
            <a
              href="../index.htm"
              className="inline-flex w-full items-center gap-2 overflow-hidden rounded-base"
            >
              <img
                src="assets/images/banner/main-banner-01-1280.webp"
                srcSet="assets/images/banner/main-banner-01-640.webp 640w, assets/images/banner/main-banner-01-1280.webp 1280w, assets/images/banner/main-banner-01.webp 1856w"
                sizes="(min-width: 1024px) calc(100vw - 326px), calc(100vw - 32px)"
                alt="Unimart product promotion"
                width={1856}
                height={288}
                fetchpriority="high"
                decoding="async"
                className="h-auto w-full object-cover"
              />
            </a>
          </div>
          <section
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
            aria-label="Dashboard metrics"
          >
            <article className="rounded-card border border-surface-line bg-surface-card p-6 shadow-card">
              <div className="flex items-center justify-between gap-4">
                <div className="border-l-2 border-admin-teal pl-3">
                  <p className="text-[15px] text-ink-400">Total Revenue</p>
                  <div className="mt-1 flex flex-wrap items-center gap-2">
                    <strong className="text-[28px] font-semibold leading-none text-ink-700">
                      $6659
                    </strong>
                    <span className="rounded-base px-2 py-1 text-[12px] font-semibold bg-success-50 text-success-600">
                      + 8.5%
                    </span>
                  </div>
                </div>
                <div
                  className="grid h-11 w-11 place-items-center rounded-base bg-success-50
    text-admin-teal"
                >
                  <i data-lucide="database" className="h-5 w-5" />
                </div>
              </div>
            </article>
            <article className="rounded-card border border-surface-line bg-surface-card p-6 shadow-card">
              <div className="flex items-center justify-between gap-4">
                <div className="border-l-2 border-brand-500 pl-3">
                  <p className="text-[15px] text-ink-400">Total Orders</p>
                  <div className="mt-1 flex flex-wrap items-center gap-2">
                    <strong className="text-[28px] font-semibold leading-none text-ink-700">
                      9856
                    </strong>
                    <span className="rounded-base px-2 py-1 text-[12px] font-semibold bg-brand-50 text-brand-600">
                      + 8.5%
                    </span>
                  </div>
                </div>
                <div
                  className="grid h-11 w-11 place-items-center rounded-base bg-brand-50
    text-brand-600"
                >
                  <i data-lucide="archive" className="h-5 w-5" />
                </div>
              </div>
            </article>
            <article className="rounded-card border border-surface-line bg-surface-card p-6 shadow-card">
              <div className="flex items-center justify-between gap-4">
                <div className="border-l-2 border-danger-500 pl-3">
                  <p className="text-[15px] text-ink-400">Total Products</p>
                  <div className="mt-1 flex flex-wrap items-center gap-2">
                    <strong className="text-[28px] font-semibold leading-none text-ink-700">
                      893
                    </strong>
                    <span
                      className="rounded-base px-2 py-1 text-[12px] font-semibold bg-danger-50 text-danger-500 uppercase
    tracking-normal"
                    >
                      Add new
                    </span>
                  </div>
                </div>
                <div className="grid h-11 w-11 place-items-center rounded-base bg-danger-50 text-danger-500">
                  <i data-lucide="message-circle" className="h-5 w-5" />
                </div>
              </div>
            </article>
            <article className="rounded-card border border-surface-line bg-surface-card p-6 shadow-card">
              <div className="flex items-center justify-between gap-4">
                <div className="border-l-2 border-purple-500 pl-3">
                  <p className="text-[15px] text-ink-400">Total Customers</p>
                  <div className="mt-1 flex flex-wrap items-center gap-2">
                    <strong className="text-[28px] font-semibold leading-none text-ink-700">
                      4.6k
                    </strong>
                    <span
                      className="rounded-base px-2 py-1 text-[12px] font-semibold bg-purple-50
    text-purple-600"
                    >
                      + 8.5%
                    </span>
                  </div>
                </div>
                <div className="grid h-11 w-11 place-items-center rounded-base bg-purple-50 text-purple-600">
                  <i data-lucide="user-plus" className="h-5 w-5" />
                </div>
              </div>
            </article>
          </section>
          <section className="mt-6 rounded-card border border-surface-line bg-surface-card p-6 shadow-card">
            <div className="flex items-center justify-between gap-3">
              <h1 className="text-[20px] font-medium text-ink-900">Category</h1>
              <div className="flex items-center gap-3">
                <a
                  href="categories.html"
                  className="text-[14px] font-semibold text-brand-600 hover:text-brand-700"
                >
                  View all
                </a>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    data-cat-prev
                    aria-label="Previous categories"
                    className="grid h-8 w-8 place-items-center rounded-full border border-surface-line text-ink-500 transition-colors hover:bg-surface-muted hover:text-ink-900 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-ink-500"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    data-cat-next
                    aria-label="Next categories"
                    className="grid h-8 w-8 place-items-center rounded-full border border-surface-line text-ink-500 transition-colors hover:bg-surface-muted hover:text-ink-900 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-ink-500"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div
              data-cat-scroll
              className="no-scrollbar mt-5 flex flex-nowrap gap-5 overflow-x-auto pb-2"
            >
              <a
                href="products.html"
                className="group min-w-[110px] text-center"
              >
                <span className="mx-auto block h-[104px] w-[104px] transition duration-300">
                  <img
                    src="assets/images/catagory-img/cat-bg-headphones-01.webp"
                    alt
                    width={104}
                    height={104}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </span>
                <span className="mt-3 block truncate text-[14px] tracking-normal text-ink-600 transition-colors group-hover:text-brand-600">
                  Headphones
                </span>
              </a>
              <a
                href="products.html"
                className="group min-w-[110px] text-center"
              >
                <span className="mx-auto block h-[104px] w-[104px] transition duration-300">
                  <img
                    src="assets/images/catagory-img/cat-transp-img-01.webp"
                    alt
                    width={104}
                    height={104}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </span>
                <span className="mt-3 block truncate text-[14px] tracking-normal text-ink-600 transition-colors group-hover:text-brand-600">
                  Charging Cable
                </span>
              </a>
              <a
                href="products.html"
                className="group min-w-[110px] text-center"
              >
                <span className="mx-auto block h-[104px] w-[104px] transition duration-300">
                  <img
                    src="assets/images/catagory-img/cat-transp-img-02.webp"
                    alt
                    width={104}
                    height={104}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </span>
                <span className="mt-3 block truncate text-[14px] tracking-normal text-ink-600 transition-colors group-hover:text-brand-600">
                  Power Adapter
                </span>
              </a>
              <a
                href="products.html"
                className="group min-w-[110px] text-center"
              >
                <span className="mx-auto block h-[104px] w-[104px] transition duration-300">
                  <img
                    src="assets/images/catagory-img/cat-transp-img-03.webp"
                    alt
                    width={104}
                    height={104}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </span>
                <span className="mt-3 block truncate text-[14px] tracking-normal text-ink-600 transition-colors group-hover:text-brand-600">
                  Power Bank
                </span>
              </a>
              <a
                href="products.html"
                className="group min-w-[110px] text-center"
              >
                <span className="mx-auto block h-[104px] w-[104px] transition duration-300">
                  <img
                    src="assets/images/catagory-img/cat-bg-headphones-02.webp"
                    alt
                    width={104}
                    height={104}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </span>
                <span className="mt-3 block truncate text-[14px] tracking-normal text-ink-600 transition-colors group-hover:text-brand-600">
                  Bluetooth Speaker
                </span>
              </a>
              <a
                href="products.html"
                className="group min-w-[110px] text-center"
              >
                <span className="mx-auto block h-[104px] w-[104px] transition duration-300">
                  <img
                    src="assets/images/catagory-img/cat-bg-headphones-03.webp"
                    alt
                    width={104}
                    height={104}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </span>
                <span className="mt-3 block truncate text-[14px] tracking-normal text-ink-600 transition-colors group-hover:text-brand-600">
                  Mini Speaker
                </span>
              </a>
              <a
                href="products.html"
                className="group min-w-[110px] text-center"
              >
                <span className="mx-auto block h-[104px] w-[104px] transition duration-300">
                  <img
                    src="assets/images/catagory-img/cat-transp-img-08.webp"
                    alt
                    width={104}
                    height={104}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </span>
                <span className="mt-3 block truncate text-[14px] tracking-normal text-ink-600 transition-colors group-hover:text-brand-600">
                  Smart Watch
                </span>
              </a>
              <a
                href="products.html"
                className="group min-w-[110px] text-center"
              >
                <span className="mx-auto block h-[104px] w-[104px] transition duration-300">
                  <img
                    src="assets/images/catagory-img/cat-transp-img-09.webp"
                    alt
                    width={104}
                    height={104}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </span>
                <span className="mt-3 block truncate text-[14px] tracking-normal text-ink-600 transition-colors group-hover:text-brand-600">
                  Smart TV
                </span>
              </a>
              <a
                href="products.html"
                className="group min-w-[110px] text-center"
              >
                <span className="mx-auto block h-[104px] w-[104px] transition duration-300">
                  <img
                    src="assets/images/catagory-img/cat-transp-img-10.webp"
                    alt
                    width={104}
                    height={104}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </span>
                <span className="mt-3 block truncate text-[14px] tracking-normal text-ink-600 transition-colors group-hover:text-brand-600">
                  Wireless Headphones
                </span>
              </a>
              <a
                href="products.html"
                className="group min-w-[110px] text-center"
              >
                <span className="mx-auto block h-[104px] w-[104px] transition duration-300">
                  <img
                    src="assets/images/catagory-img/cat-bg-headphones-04.webp"
                    alt
                    width={104}
                    height={104}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </span>
                <span className="mt-3 block truncate text-[14px] tracking-normal text-ink-600 transition-colors group-hover:text-brand-600">
                  Portable Speaker
                </span>
              </a>
              <a
                href="products.html"
                className="group min-w-[110px] text-center"
              >
                <span className="mx-auto block h-[104px] w-[104px] transition duration-300">
                  <img
                    src="assets/images/catagory-img/cat-bg-headphones-05.webp"
                    alt
                    width={104}
                    height={104}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </span>
                <span className="mt-3 block truncate text-[14px] tracking-normal text-ink-600 transition-colors group-hover:text-brand-600">
                  Microphone
                </span>
              </a>
              <a
                href="products.html"
                className="group min-w-[110px] text-center"
              >
                <span className="mx-auto block h-[104px] w-[104px] transition duration-300">
                  <img
                    src="assets/images/catagory-img/cat-transp-img-06.webp"
                    alt
                    width={104}
                    height={104}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </span>
                <span className="mt-3 block truncate text-[14px] tracking-normal text-ink-600 transition-colors group-hover:text-brand-600">
                  Over-Ear Headphones
                </span>
              </a>
              <a
                href="products.html"
                className="group min-w-[110px] text-center"
              >
                <span className="mx-auto block h-[104px] w-[104px] transition duration-300">
                  <img
                    src="assets/images/catagory-img/cat-transp-img-07.webp"
                    alt
                    width={104}
                    height={104}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </span>
                <span className="mt-3 block truncate text-[14px] tracking-normal text-ink-600 transition-colors group-hover:text-brand-600">
                  Camera
                </span>
              </a>
              <a
                href="products.html"
                className="group min-w-[110px] text-center"
              >
                <span className="mx-auto block h-[104px] w-[104px] transition duration-300">
                  <img
                    src="assets/images/catagory-img/cat-transp-img-11.webp"
                    alt
                    width={104}
                    height={104}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </span>
                <span className="mt-3 block truncate text-[14px] tracking-normal text-ink-600 transition-colors group-hover:text-brand-600">
                  Tablet
                </span>
              </a>
              <a
                href="products.html"
                className="group min-w-[110px] text-center"
              >
                <span className="mx-auto block h-[104px] w-[104px] transition duration-300">
                  <img
                    src="assets/images/catagory-img/cat-transp-img-12.webp"
                    alt
                    width={104}
                    height={104}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </span>
                <span className="mt-3 block truncate text-[14px] tracking-normal text-ink-600 transition-colors group-hover:text-brand-600">
                  Gaming Mouse
                </span>
              </a>
            </div>
          </section>
          <section className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(520px,0.95fr)]">
            <article className="rounded-card border border-surface-line bg-surface-card p-6 shadow-card">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-[20px] font-medium text-ink-900">
                  Revenue Report
                </h2>
                <div
                  data-revenue-toggle
                  className="flex rounded-base border border-surface-line bg-surface-body p-1 text-[13px] font-semibold text-ink-500"
                >
                  <button
                    type="button"
                    data-range="year"
                    className="rounded-base bg-surface-card px-3 py-1 text-brand-600 shadow-card"
                  >
                    Year
                  </button>
                  <button
                    type="button"
                    data-range="month"
                    className="rounded-base px-3 py-1 hover:text-ink-900"
                  >
                    Month
                  </button>
                </div>
              </div>
              <div
                id="revenueChart"
                className="mt-7 min-h-[312px]"
                role="img"
                aria-label="Revenue report chart"
              />
            </article>
            <article className="rounded-card border border-surface-line bg-surface-card p-6 shadow-card">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-surface-line pb-4">
                <h2 className="text-[20px] font-medium text-ink-900">
                  Best Selling Product
                </h2>
                <label className="flex items-center gap-2 text-[14px] text-ink-700">
                  <span className="font-semibold text-ink-900">Short By:</span>
                  <select className="rounded-base border-0 bg-transparent py-1 pr-7 text-ink-700 focus:ring-2 focus:ring-brand-600">
                    <option>Today</option>
                    <option>This Week</option>
                    <option>This Month</option>
                  </select>
                </label>
              </div>
              <div className="dashboard-scrollbar overflow-x-auto">
                <table className="w-full min-w-[650px] text-left">
                  <thead className="sr-only">
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col">Price</th>
                      <th scope="col">Orders</th>
                      <th scope="col">Stock</th>
                      <th scope="col">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-surface-line last:border-0 hover:bg-surface-body/70">
                      <td className="py-4 pr-4">
                        <div className="flex min-w-[210px] items-center gap-3">
                          <img
                            src="assets/images/products/organic-food-a-01.webp"
                            alt="Organic Food
            Pack"
                            width={68}
                            height={68}
                            loading="lazy"
                            decoding="async"
                            className="h-[68px] w-[68px] rounded-base bg-surface-body object-cover"
                          />
                          <div>
                            <a
                              href="products.html"
                              className="font-semibold text-ink-900 hover:text-brand-600"
                            >
                              Organic Food Pack
                            </a>
                            <p className="mt-1 text-[13px] text-ink-500">
                              26-08-2026
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 pr-4">
                        <span className="block text-[13px] font-semibold text-ink-900">
                          Price
                        </span>
                        <span className="text-ink-700">$29.00</span>
                      </td>
                      <td className="py-4 pr-4">
                        <span className="block text-[13px] font-semibold text-ink-900">
                          Orders
                        </span>
                        <span className="text-ink-700">62</span>
                      </td>
                      <td className="py-4 pr-4">
                        <span className="block text-[13px] font-semibold text-ink-900">
                          Stock
                        </span>
                        <span className="text-ink-700">510</span>
                      </td>
                      <td className="py-4">
                        <span className="block text-[13px] font-semibold text-ink-900">
                          Amount
                        </span>
                        <span className="text-ink-700">$1,798</span>
                      </td>
                    </tr>
                    <tr className="border-b border-surface-line last:border-0 hover:bg-surface-body/70">
                      <td className="py-4 pr-4">
                        <div className="flex min-w-[210px] items-center gap-3">
                          <img
                            src="assets/images/products/bakery-product-img-02.webp"
                            alt="Bakery
            Breakfast Box"
                            width={68}
                            height={68}
                            loading="lazy"
                            decoding="async"
                            className="h-[68px] w-[68px] rounded-base bg-surface-body object-cover"
                          />
                          <div>
                            <a
                              href="products.html"
                              className="font-semibold text-ink-900 hover:text-brand-600"
                            >
                              Bakery Breakfast Box
                            </a>
                            <p className="mt-1 text-[13px] text-ink-500">
                              26-08-2026
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 pr-4">
                        <span className="block text-[13px] font-semibold text-ink-900">
                          Price
                        </span>
                        <span className="text-ink-700">$24.00</span>
                      </td>
                      <td className="py-4 pr-4">
                        <span className="block text-[13px] font-semibold text-ink-900">
                          Orders
                        </span>
                        <span className="text-ink-700">48</span>
                      </td>
                      <td className="py-4 pr-4">
                        <span className="block text-[13px] font-semibold text-ink-900">
                          Stock
                        </span>
                        <span className="text-ink-700">320</span>
                      </td>
                      <td className="py-4">
                        <span className="block text-[13px] font-semibold text-ink-900">
                          Amount
                        </span>
                        <span className="text-ink-700">$1,152</span>
                      </td>
                    </tr>
                    <tr className="border-b border-surface-line last:border-0 hover:bg-surface-body/70">
                      <td className="py-4 pr-4">
                        <div className="flex min-w-[210px] items-center gap-3">
                          <img
                            src="assets/images/products/coffee-b-01.webp"
                            alt="Premium Coffee Pack"
                            width={68}
                            height={68}
                            loading="lazy"
                            decoding="async"
                            className="h-[68px] w-[68px] rounded-base bg-surface-body object-cover"
                          />
                          <div>
                            <a
                              href="products.html"
                              className="font-semibold text-ink-900 hover:text-brand-600"
                            >
                              Premium Coffee Pack
                            </a>
                            <p className="mt-1 text-[13px] text-ink-500">
                              26-08-2026
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 pr-4">
                        <span className="block text-[13px] font-semibold text-ink-900">
                          Price
                        </span>
                        <span className="text-ink-700">$36.00</span>
                      </td>
                      <td className="py-4 pr-4">
                        <span className="block text-[13px] font-semibold text-ink-900">
                          Orders
                        </span>
                        <span className="text-ink-700">39</span>
                      </td>
                      <td className="py-4 pr-4">
                        <span className="block text-[13px] font-semibold text-ink-900">
                          Stock
                        </span>
                        <span className="text-ink-700">188</span>
                      </td>
                      <td className="py-4">
                        <span className="block text-[13px] font-semibold text-ink-900">
                          Amount
                        </span>
                        <span className="text-ink-700">$1,404</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>
          </section>
          {/* Sales Analytics (interactive 3D) + Top Categories */}
          <section className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
            <article className="rounded-card border border-surface-line bg-surface-card p-6 shadow-card">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-[20px] font-medium text-ink-900">
                    Sales Analytics
                  </h2>
                  <p className="mt-1 text-[13px] text-ink-400" data-sales-hint>
                    Revenue by category across quarters — drag to rotate.
                  </p>
                </div>
                <label className="flex items-center gap-2 text-[14px] text-ink-700">
                  <span className="sr-only">Sales chart view</span>
                  <select
                    id="salesViewSelect"
                    className="rounded-base border border-surface-line bg-surface-card py-1.5 pl-3 pr-8 text-[13px] font-semibold text-ink-700 focus:ring-2 focus:ring-brand-600"
                  >
                    <option value="3d">3D View</option>
                    <option value="2d">2D View</option>
                  </select>
                </label>
              </div>
              <div
                id="sales3DChart"
                className="h-[360px] w-full bg-brand-50/50"
                role="img"
                aria-label="Sales analytics chart"
              />
            </article>
            <article className="rounded-card border border-surface-line bg-surface-card p-6 shadow-card">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-[20px] font-medium text-ink-900">
                    Top Categories
                  </h2>
                  <p className="mt-1 text-[13px] text-ink-400">
                    Share of revenue this month.
                  </p>
                </div>
                <a
                  href="categories.html"
                  className="text-[14px] font-semibold text-brand-600 hover:text-brand-700"
                >
                  View all
                </a>
              </div>
              <ul className="space-y-5">
                <li>
                  <div className="mb-1.5 flex items-center justify-between text-[14px]">
                    <span className="flex items-center gap-2 font-medium text-ink-900">
                      <span className="h-2.5 w-2.5 rounded-full bg-brand-600" />{" "}
                      Grocery
                    </span>
                    <span className="text-ink-500">$24.5k · 38%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-surface-muted">
                    <span
                      className="block h-full rounded-full bg-brand-600"
                      style={{ width: "38%" }}
                    />
                  </div>
                </li>
                <li>
                  <div className="mb-1.5 flex items-center justify-between text-[14px]">
                    <span className="flex items-center gap-2 font-medium text-ink-900">
                      <span className="h-2.5 w-2.5 rounded-full bg-admin-teal" />{" "}
                      Bakery
                    </span>
                    <span className="text-ink-500">$16.2k · 25%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-surface-muted">
                    <span
                      className="block h-full rounded-full bg-admin-teal"
                      style={{ width: "25%" }}
                    />
                  </div>
                </li>
                <li>
                  <div className="mb-1.5 flex items-center justify-between text-[14px]">
                    <span className="flex items-center gap-2 font-medium text-ink-900">
                      <span className="h-2.5 w-2.5 rounded-full bg-accent-500" />{" "}
                      Drinks
                    </span>
                    <span className="text-ink-500">$11.8k · 18%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-surface-muted">
                    <span
                      className="block h-full rounded-full bg-accent-500"
                      style={{ width: "18%" }}
                    />
                  </div>
                </li>
                <li>
                  <div className="mb-1.5 flex items-center justify-between text-[14px]">
                    <span className="flex items-center gap-2 font-medium text-ink-900">
                      <span className="h-2.5 w-2.5 rounded-full bg-purple-500" />{" "}
                      Snacks
                    </span>
                    <span className="text-ink-500">$8.1k · 12%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-surface-muted">
                    <span
                      className="block h-full rounded-full bg-purple-500"
                      style={{ width: "12%" }}
                    />
                  </div>
                </li>
                <li>
                  <div className="mb-1.5 flex items-center justify-between text-[14px]">
                    <span className="flex items-center gap-2 font-medium text-ink-900">
                      <span className="h-2.5 w-2.5 rounded-full bg-warning-500" />{" "}
                      Dairy
                    </span>
                    <span className="text-ink-500">$4.6k · 7%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-surface-muted">
                    <span
                      className="block h-full rounded-full bg-warning-500"
                      style={{ width: "7%" }}
                    />
                  </div>
                </li>
              </ul>
              <div className="mt-6 flex items-center justify-between border-t border-surface-line pt-4 text-[14px]">
                <span className="text-ink-500">Total revenue</span>
                <span className="text-[18px] font-semibold text-ink-900">
                  $65.2k
                </span>
              </div>
            </article>
          </section>
          {/* Recent Orders + Earning */}
          <section className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(480px,0.9fr)]">
            <article className="rounded-card border border-surface-line bg-surface-card p-6 shadow-card">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-surface-line pb-4">
                <h2 className="text-[20px] font-medium text-ink-900">
                  Recent Orders
                </h2>
                <label className="flex items-center gap-2 text-[14px] text-ink-700">
                  <span className="font-semibold text-ink-900">Sort By:</span>
                  <select className="rounded-base border-0 bg-transparent py-1 pr-7 text-ink-700 focus:ring-2 focus:ring-brand-600">
                    <option>Today</option>
                    <option>This Week</option>
                    <option>This Month</option>
                  </select>
                </label>
              </div>
              <div className="dashboard-scrollbar overflow-x-auto">
                <table className="w-full min-w-[640px] text-left text-[14px]">
                  <thead>
                    <tr className="text-[13px] uppercase text-ink-400">
                      <th scope="col" className="py-3 pr-4 font-semibold">
                        Product
                      </th>
                      <th scope="col" className="py-3 pr-4 font-semibold">
                        Date
                      </th>
                      <th scope="col" className="py-3 pr-4 font-semibold">
                        Price
                      </th>
                      <th scope="col" className="py-3 pr-4 font-semibold">
                        Status
                      </th>
                      <th scope="col" className="py-3 font-semibold">
                        Payment
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-surface-line">
                      <td className="py-3 pr-4">
                        <p className="font-semibold text-ink-900">
                          Almond Milk
                        </p>
                        <p className="text-[13px] text-ink-400">#64548</p>
                      </td>
                      <td className="py-3 pr-4 text-ink-700">5/1/22</td>
                      <td className="py-3 pr-4 text-ink-700">$250.00</td>
                      <td className="py-3 pr-4 text-success-600">Completed</td>
                      <td className="py-3 font-semibold text-danger-500">
                        Unpaid
                      </td>
                    </tr>
                    <tr className="border-t border-surface-line">
                      <td className="py-3 pr-4">
                        <p className="font-semibold text-ink-900">
                          Potato Chips
                        </p>
                        <p className="text-[13px] text-ink-400">#64549</p>
                      </td>
                      <td className="py-3 pr-4 text-ink-700">5/1/22</td>
                      <td className="py-3 pr-4 text-ink-700">$250.00</td>
                      <td className="py-3 pr-4 text-success-600">Completed</td>
                      <td className="py-3 font-semibold text-success-600">
                        Paid
                      </td>
                    </tr>
                    <tr className="border-t border-surface-line">
                      <td className="py-3 pr-4">
                        <p className="font-semibold text-ink-900">Fresh Meat</p>
                        <p className="text-[13px] text-ink-400">#64550</p>
                      </td>
                      <td className="py-3 pr-4 text-ink-700">5/1/22</td>
                      <td className="py-3 pr-4 text-ink-700">$250.00</td>
                      <td className="py-3 pr-4 text-success-600">Completed</td>
                      <td className="py-3 font-semibold text-success-600">
                        Paid
                      </td>
                    </tr>
                    <tr className="border-t border-surface-line">
                      <td className="py-3 pr-4">
                        <p className="font-semibold text-ink-900">
                          Classic Coffee
                        </p>
                        <p className="text-[13px] text-ink-400">#64551</p>
                      </td>
                      <td className="py-3 pr-4 text-ink-700">5/1/22</td>
                      <td className="py-3 pr-4 text-ink-700">$250.00</td>
                      <td className="py-3 pr-4 text-warning-600">Pending</td>
                      <td className="py-3 font-semibold text-success-600">
                        Paid
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>
            <article className="rounded-card border border-surface-line bg-surface-card p-6 shadow-card">
              <h2 className="text-[20px] font-medium text-ink-900">Earning</h2>
              <div
                id="earningChart"
                className="mt-4 min-h-[300px]"
                role="img"
                aria-label="Earning chart"
              />
            </article>
          </section>
          {/* Transactions + Visitors + To Do */}
          <section className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
            {/* Transactions */}
            <article className="rounded-card border border-surface-line bg-surface-card p-6 shadow-card">
              <h2 className="mb-4 text-[20px] font-medium text-ink-900">
                Transactions
              </h2>
              <ul className="space-y-4 text-[14px]">
                <li className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-danger-50 text-danger-500">
                    <i data-lucide="shield" className="h-5 w-5" />
                  </span>
                  <span className="flex-1">
                    <span className="block font-semibold text-ink-900">
                      Wallets
                    </span>
                    <span className="text-[13px] text-ink-400">Starbucks</span>
                  </span>
                  <span className="font-semibold text-danger-500">-$74</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-success-50 text-success-600">
                    <i data-lucide="check" className="h-5 w-5" />
                  </span>
                  <span className="flex-1">
                    <span className="block font-semibold text-ink-900">
                      Bank Transfer
                    </span>
                    <span className="text-[13px] text-ink-400">Add Money</span>
                  </span>
                  <span className="font-semibold text-success-600">+$125</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-50 text-brand-600">
                    <i data-lucide="dollar-sign" className="h-5 w-5" />
                  </span>
                  <span className="flex-1">
                    <span className="block font-semibold text-ink-900">
                      Paypal
                    </span>
                    <span className="text-[13px] text-ink-400">Add Money</span>
                  </span>
                  <span className="font-semibold text-danger-500">-$50</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-warning-50 text-warning-600">
                    <i data-lucide="credit-card" className="h-5 w-5" />
                  </span>
                  <span className="flex-1">
                    <span className="block font-semibold text-ink-900">
                      Mastercard
                    </span>
                    <span className="text-[13px] text-ink-400">
                      Ordered Food
                    </span>
                  </span>
                  <span className="font-semibold text-danger-500">-$40</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-purple-50 text-purple-600">
                    <i data-lucide="bar-chart-3" className="h-5 w-5" />
                  </span>
                  <span className="flex-1">
                    <span className="block font-semibold text-ink-900">
                      Transfer
                    </span>
                    <span className="text-[13px] text-ink-400">Refund</span>
                  </span>
                  <span className="font-semibold text-success-600">+$90</span>
                </li>
              </ul>
            </article>
            {/* Visitors */}
            <article className="rounded-card border border-surface-line bg-surface-card p-6 shadow-card">
              <h2 className="mb-2 text-[20px] font-medium text-ink-900">
                Visitors
              </h2>
              <div
                id="visitorsChart"
                className="min-h-[260px]"
                role="img"
                aria-label="Visitors chart"
              />
            </article>
            {/* To Do List */}
            <article className="rounded-card border border-surface-line bg-surface-card p-6 shadow-card">
              <h2 className="mb-4 text-[20px] font-medium text-ink-900">
                To Do List
              </h2>
              <ul data-todo-list className="space-y-3 text-[14px]">
                <li className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    aria-label="Mark task as complete"
                    className="mt-1 h-4 w-4 rounded border-surface-line text-brand-600 focus:ring-brand-600"
                  />
                  <span>
                    <span className="block font-semibold text-ink-900">
                      Pick up kids from school
                    </span>
                    <span className="text-[13px] text-ink-400">8 Hours</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    aria-label="Mark task as complete"
                    className="mt-1 h-4 w-4 rounded border-surface-line text-brand-600 focus:ring-brand-600"
                  />
                  <span>
                    <span className="block font-semibold text-ink-900">
                      Prepare for presentation
                    </span>
                    <span className="text-[13px] text-ink-400">8 Hours</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    aria-label="Mark task as complete"
                    className="mt-1 h-4 w-4 rounded border-surface-line text-brand-600 focus:ring-brand-600"
                  />
                  <span>
                    <span className="block font-semibold text-ink-900">
                      Create invoice
                    </span>
                    <span className="text-[13px] text-ink-400">8 Hours</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    aria-label="Mark task as complete"
                    className="mt-1 h-4 w-4 rounded border-surface-line text-brand-600 focus:ring-brand-600"
                  />
                  <span>
                    <span className="block font-semibold text-ink-900">
                      Meeting with Alisa
                    </span>
                    <span className="text-[13px] text-ink-400">8 Hours</span>
                  </span>
                </li>
              </ul>
              <form data-todo-form className="mt-5 flex gap-2">
                <input
                  data-todo-input
                  type="text"
                  placeholder="Enter Task Name"
                  className="h-11 flex-1 rounded-base border border-surface-line bg-surface-body px-3 text-[14px] focus:border-brand-600"
                />
                <button
                  type="submit"
                  className="h-11 rounded-base bg-brand-600 px-4 text-[14px] font-semibold text-white hover:bg-brand-700"
                >
                  Add task
                </button>
              </form>
            </article>
          </section>
        </main>
      </Layout>
    </>
  );
}

export default Dashboard;
