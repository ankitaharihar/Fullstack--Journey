function LoginStatus({ isLoggedIn }) {
  return (
    <div>
      <h1 className='text-3xl font-bold'>Task 7</h1>

      <p className="text-2xl font-bold border-2">
        {isLoggedIn ? "Welcome back!" : "Please login."}
      </p>

    </div>
  );
}

export default LoginStatus;