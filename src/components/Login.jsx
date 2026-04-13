function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login to Workshop Portal</h2>

        <input
          type="email"
          placeholder="Enter your email"
          className="login-input"
        />

        <input
          type="password"
          placeholder="Enter your password"
          className="login-input"
        />

        <button className="login-btn">
          Login
        </button>

        <p className="login-footer">
          Don't have an account? <span>Register</span>
        </p>
      </div>
    </div>
  )
}

export default Login