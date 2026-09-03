function Register(){
    return(
        <>
            <div className="container">
  <div className="row justify-content-center align-items-center min-vh-100">
    <div className="col-md-6 col-lg-5">
      <div className="card shadow border-0">
        <div className="card-body p-4">
          <h2 className="text-center mb-4">
            Create Account
          </h2>
          <form action="register.php" method="POST">
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" name="name" className="form-control" placeholder="Enter your name" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" name="email" className="form-control" placeholder="Enter your email" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" name="password" className="form-control" placeholder="Enter password" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input type="password" name="confirmPassword" className="form-control" placeholder="Confirm password" required />
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


    );
    }

export default Register;