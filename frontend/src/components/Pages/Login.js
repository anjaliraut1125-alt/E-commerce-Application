    function PageNotFound(){
    return(
        <div>
            
           <div className="container">
  <div className="row justify-content-center align-items-center min-vh-100">
    <div className="col-md-5 col-lg-4">
      <div className="card shadow border-0">
        <div className="card-body p-4">
          <h2 className="text-center mb-4">Login</h2>
          <form action="login.php" method="POST" >
            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" required />
            </div>
            {/* Password */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password" required />
            </div>
            {/* Remember Me */}
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="remember" name="remember" />
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
            <a href="forgot-password.html" className="text-decoration-none">
              Forgot Password?
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>



        </div>
    );
}

export default  PageNotFound;




