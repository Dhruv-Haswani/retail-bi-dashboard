function Home({ onLogin })  {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">

        <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
          Retail Dashboard
        </h1>

        <p className="mt-4 max-w-xl text-lg text-gray-600">
          Manage your sales, orders, customers and business data
          from one simple dashboard.
        </p>

        <div className="mt-6 flex gap-4">
          <button
            onClick={onLogin}
            className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
          >
            Get Started
          </button>

          <button
            onClick={onLogin}
            className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-gray-700 hover:bg-gray-50"
          >
            Login
          </button>
        </div>

      </div>
    </div>
  )
}

export default Home