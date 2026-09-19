import { useState } from "react";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "../Layout/Layout";

function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // form function

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/auth/register`,
        { username, email, password, phone, address },
      );

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  return (
    <Layout>
      <>
        <div className="container">
          <div className="row justify-content-center align-items-center min-vh-100">
            <div className="col-md-6 col-lg-5">
              <div className="card shadow border-2 border border-dark">
                <div className="card-body p-4">
                  <h2 className="text-center mb-4">Create Account</h2>

                  <form onSubmit={handleSubmit}>
                    {/* usernamer */}
                    <div className="mb-3">
                      <label className="form-label">Username</label>

                      <input
                        type="text"
                        name="username"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                        required
                      />
                    </div>

                    {/* email */}
                    <div className="mb-3">
                      <label className="form-label">Email</label>

                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    {/* password */}
                    <div className="mb-3">
                      <label className="form-label">Password</label>

                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        required
                      />
                    </div>

                    {/* address */}
                    <div className="mb-3">
                      <label className="form-label">Address</label>

                      <textarea
                        name="address"
                        className="form-control"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Enter your Address"
                        rows="3"
                        required
                      ></textarea>
                    </div>

                    {/* phone */}
                    <div className="mb-3">
                      <label className="form-label">PhoneNo</label>

                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter 10-digit PhoneNo"
                        maxLength="10"
                        required
                      />
                    </div>

                    <div className="d-grid">
                      <button type="submit" className="btn btn-success">
                        Register
                      </button>
                    </div>
                  </form>
                  <p className="text-center mt-3">
                    Already have an account?
                    <a href="login.html">Login</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
}

export default Register;
