import Layout from "../Layout/Layout";

function Contact(){
    return (
      <Layout>
        <div>
          {/* <!-- Start Component Area --> */}
          <div class="rbt-component-area rbt-section-gap2Bottom rbt-bg-color-gray-light">
            <div class="container">
              <div class="row">
                <div class="col-10 mx-auto">
                  <div class="row row--12">
                    <div class="col-12 col-lg-8">
                      <form class="rbt-contact-form">
                        <div class="rbt-fshape-box-outline-style">
                          <div class="row">
                            <div class="col-lg-12">
                              <div class="rbt-component-section-title rbt-contact-form-title rbt-bg-color-white rbt-border-color-gray-100">
                                <h2 class="rbt-title h6">
                                  <span class="rbt-bold--text">
                                    Get in Touch
                                  </span>
                                </h2>
                                <span class="rbt-fshape-right-portion">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="52"
                                    height="50"
                                    viewbox="0 0 52 50"
                                    fill="none"
                                  >
                                    <path
                                      d="M51.5337 49.984C-64.8544 49.9977 116.427 49.9764 0.0390625 49.9901C0.0390625 31.262 0.0390625 20.7619 0.0390625 2.03378C11.2391 1.63419 16.5034 4.56468 19.5034 10.5602L30.0034 38.5311C34.0374 47.934 45.4209 49.4481 51.5337 49.984Z"
                                      fill="var(--color-white)"
                                    ></path>
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M13.246 1.97519C16.582 3.50685 18.8114 5.90944 20.3979 9.07997L20.4213 9.12681L30.9315 37.1248C33.053 42.053 36.807 44.7979 40.7367 46.3047C44.6934 47.8219 48.798 48.068 51.4731 47.987C51.4731 47.987 51.51 49.2041 51.5337 49.984C48.7087 50.0695 44.3134 49.8162 40.02 48.17C35.7052 46.5155 31.4643 43.4388 29.0842 37.891L29.0751 37.8698C29.0751 37.8698 19.997 12.7279 18.5857 9.92689C17.1743 7.12591 15.2591 5.09828 12.4108 3.79055C8.49554 1.49902 0.0390625 2.03378 0.0390625 2.03378C0.0390625 20.7619 0.0390625 31.262 0.0390625 49.9901L0.0408325 0.0348727C5.70805 -0.16568 9.9493 0.461575 13.246 1.97519Z"
                                      fill="var(--color-gray-100)"
                                    ></path>
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </div>

                          <div class="rbt-fshape-box rbt-bg-color-white rbt-contact-form-fshape rbt-border-color-gray-100">
                            <div class="row">
                              <div class="col-md-6 col-12 mb--16">
                                <div class="rbt-input-field-grp">
                                  <label for="f_name">First Name</label>
                                  <input
                                    class="rbt-contact-input-field"
                                    type="text"
                                    id="f_name"
                                  />
                                </div>
                              </div>

                              <div class="col-md-6 col-12 mb--16">
                                <div class="rbt-input-field-grp">
                                  <label for="l_name">Last Name</label>
                                  <input
                                    class="rbt-contact-input-field"
                                    type="text"
                                    id="l_name"
                                  />
                                </div>
                              </div>

                              <div class="col-12 mb--16">
                                <div class="rbt-input-field-grp">
                                  <label for="email">Email Address</label>
                                  <input
                                    class="rbt-contact-input-field"
                                    type="email"
                                    id="email"
                                  />
                                </div>
                              </div>

                              <div class="col-12 mb--16">
                                <div class="rbt-input-field-grp">
                                  <label for="message">Your Message</label>
                                  <textarea
                                    class="rbt-contact-input-field"
                                    name="message"
                                    id="message"
                                  ></textarea>
                                </div>
                              </div>

                              <div class="d-flex justify-content-md-end mt--8">
                                <a class="rbt-btn rbt-btn-md" href="#">
                                  Send Message
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div class="col-12 col-lg-4">
                      <div class="rbt-sidebar rbt-contact-form-sidebar">
                        <div class="inner rbt-border-color-gray-100">
                          <div class="rbt-title">
                            <h3 class="h6 rbt-bold--text rbt-text-color-gray-700 mb--8">
                              Need a Help?
                            </h3>
                            <p class="rbt-contact-form-sidebar-text rbt-text-color-gray-500 mb--24">
                              we are available 20/7 day 365 always
                            </p>
                          </div>
                          <ul class="rbt-contact-sidebar-social-list">
                            <li>
                              <a href="tel:+2085550112">
                                <span class="icon phone">
                                  <i class="fa-sharp fa-solid fa-phone"></i>
                                </span>
                                <span>(208) 555-0112</span>
                              </a>
                            </li>
                            <li>
                              <a href="/cdn-cgi/l/email-protection#95e0fbfcf8f4e7e1f4f7f6d5f8f4fcf9bbf6faf8">
                                <span class="icon email">
                                  <i class="fa-sharp fa-solid fa-envelope"></i>
                                </span>
                                <span>
                                  <span
                                    class="__cf_email__"
                                    data-cfemail="bbced5d2d6dac9cfdad9d8fbd6dad2d795d8d4d6"
                                  >
                                    [email&#160;protected]
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span class="icon whatsapp">
                                  <i class="fa-brands fa-whatsapp"></i>
                                </span>
                                <span>Whatsapp</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span class="icon pinterest">
                                  <i class="fa-brands fa-pinterest-p"></i>
                                </span>
                                <span>Pinterest</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="thumbnail mt--24">
                        <img
                          class="rbt-rounded--12"
                          src="assets/images/about/about-10.webp"
                          alt="Contact Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Component Area --> */}

          {/* <!-- Start Component Area --> */}
          <div class="rbt-component-area pt--40 pb--32 rbt-bg-color-gray-light">
            <div class="container">
              <div class="row">
                <div class="col-10 mx-auto">
                  <div class="row row--12 mt_dec--24">
                    {/* <!-- Start single location card --> */}
                    <div class="col-12 col-md-6 col-lg-4 mt--24">
                      <div class="rbt-location-card rbt-curved-style-box">
                        <div class="inner">
                          <span class="rbt-location-icon">
                            <i class="fa-sharp fa-solid fa-location-dot"></i>
                          </span>
                          <h4 class="rbt-location-card-title h6">
                            Broadway Store
                          </h4>
                          <p class="rbt-location-card-text">
                            1260 Broadway, San Franci, CA 94109
                          </p>
                          <ul class="rbt-contact-info-list">
                            <li>
                              <span>Phone : </span>
                              <a
                                href="tel:+2285550112"
                                class="rbt-contact-info-single color-primary"
                              >
                                (228) 555-0112
                              </a>
                            </li>
                            <li>
                              <span>Email : </span>
                              <a
                                href="/cdn-cgi/l/email-protection#03667b626e736f662d6174627a43646e626a6f2d606c6e"
                                class="rbt-contact-info-single color-primary"
                              >
                                <span
                                  class="__cf_email__"
                                  data-cfemail="ec89948d819c8089c28e9b8d95ac8b818d8580c28f8381"
                                >
                                  [email&#160;protected]
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* <!-- End single location card --> */}

                    {/* <!-- Start single location card --> */}
                    <div class="col-12 col-md-6 col-lg-4 mt--24">
                      <div class="rbt-location-card rbt-curved-style-box">
                        <div class="inner">
                          <span class="rbt-location-icon">
                            <i class="fa-sharp fa-solid fa-location-dot"></i>
                          </span>
                          <h4 class="rbt-location-card-title h6">
                            Valencia Store
                          </h4>
                          <p class="rbt-location-card-text">
                            1260 Valencia, Los Angeles, CA 94109
                          </p>
                          <ul class="rbt-contact-info-list">
                            <li>
                              <span>Phone : </span>
                              <a
                                href="tel:+2385550113"
                                class="rbt-contact-info-single color-primary"
                              >
                                (238) 555-0113
                              </a>
                            </li>
                            <li>
                              <span>Email : </span>
                              <a
                                href="/cdn-cgi/l/email-protection#55302d34382539307b233439153238343c397b363a38"
                                class="rbt-contact-info-single color-primary"
                              >
                                <span
                                  class="__cf_email__"
                                  data-cfemail="fd98859c908d9198d38b9c91bd9a909c9491d39e9290"
                                >
                                  [email&#160;protected]
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* <!-- End single location card --> */}

                    {/* <!-- Start single location card --> */}
                    <div class="col-12 col-md-6 col-lg-4 mt--24">
                      <div class="rbt-location-card rbt-curved-style-box">
                        <div class="inner">
                          <span class="rbt-location-icon">
                            <i class="fa-sharp fa-solid fa-location-dot"></i>
                          </span>
                          <h4 class="rbt-location-card-title h6">
                            Emeryville Store
                          </h4>
                          <p class="rbt-location-card-text">
                            1260 Broadway, San Franci, CA 94109
                          </p>
                          <ul class="rbt-contact-info-list">
                            <li>
                              <span>Phone : </span>
                              <a
                                href="tel:+2485550112"
                                class="rbt-contact-info-single color-primary"
                              >
                                (248) 555-0114
                              </a>
                            </li>
                            <li>
                              <span>Email : </span>
                              <a
                                href="/cdn-cgi/l/email-protection#6b0e130a061b070e2b0c060a020745080406"
                                class="rbt-contact-info-single color-primary"
                              >
                                <span
                                  class="__cf_email__"
                                  data-cfemail="b3d6cbd2dec3dfd6f3d4ded2dadf9dd0dcde"
                                >
                                  [email&#160;protected]
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* <!-- End single location card --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Component Area --></div> */}
        </div>
      </Layout>
    );
}

export default  Contact;