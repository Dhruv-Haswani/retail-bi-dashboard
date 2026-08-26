
function Login({ onLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    onLogin()
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">

      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-md">

        <h1 className="text-2xl font-bold text-gray-900">
          Login
        </h1>

        <p className="mt-2 text-gray-600">
          Login to access your Retail Dashboard.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Login
          </button>

        </form>
      </div>

    </div>
  )
}

export default Login