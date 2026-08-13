function Navbar() {
  return (
    <header className="flex items-center justify-between border-b bg-white px-6 py-4">
      <div>
        <h1 className="text-xl font-bold text-gray-900">
          Retail BI Dashboard
        </h1>
        <p className="text-sm text-gray-500">
          Business Intelligence & Sales Analytics
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="rounded-lg border px-3 py-2 text-sm text-gray-600 hover:bg-gray-50">
          🔔
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
            D
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-medium text-gray-900">Admin</p>
            <p className="text-xs text-gray-500">BI Analyst</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar