import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "../Layout/Layout";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // login form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/auth/login`,
        {
          email,
          password,
        },
      );

      if (res.data.success) {
        toast.success(res.data.message);

        // Redirect
        navigate("/");
        // Reloads the current page
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  return (
    <Layout>
      <div>
        <div className="container">
          <div className="row justify-content-center align-items-center min-vh-100">
            <div className="col-md-5 col-lg-4">
              <div className="card shadow border-2 border border-dark">
                <div className="card-body p-4">
                  <h2 className="text-center mb-4">Login</h2>
                  <form
                    action="login.php"
                    method="POST"
                    onSubmit={handleSubmit}
                  >
                    {/* Email */}
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email Address
                      </label>

                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    {/* Password */}
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>

                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                      />
                    </div>

                    {/* Remember Me */}
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="remember"
                        name="remember"
                      />
                      <label className="form-check-label" htmlFor="remember">
                        Remember me
                      </label>
                    </div>
                    {/* Login Button */}
                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary">
                        Login
                      </button>
                    </div>
                  </form>
                  {/* Register Link */}
                  <p className="text-center mt-3 mb-0">
                    Don't have an account?
                    <a href="register.html" className="text-decoration-none">
                      Register
                    </a>
                  </p>
                  {/* Forgot Password */}
                  <p className="text-center mt-2">
                    <a
                      href="forgot-password.html"
                      className="text-decoration-none"
                    >
                      Forgot Password?
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
