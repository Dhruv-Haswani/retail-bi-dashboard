function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-64 bg-gray-900 text-white md:block">
      <div className="border-b border-gray-700 px-6 py-5">
        <h2 className="text-xl font-bold">Retail BI</h2>
        <p className="text-sm text-gray-400">Analytics Platform</p>
      </div>

      <nav className="px-4 py-6">
        <p className="px-3 pb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
          Main Menu
        </p>

        <div className="space-y-2">
          <button className="w-full rounded-lg bg-blue-600 px-3 py-2 text-left text-sm font-medium">
            Dashboard
          </button>

          <button className="w-full rounded-lg px-3 py-2 text-left text-sm text-gray-300 hover:bg-gray-800">
            Sales Analytics
          </button>

          <button className="w-full rounded-lg px-3 py-2 text-left text-sm text-gray-300 hover:bg-gray-800">
            Customer Analytics
          </button>

          <button className="w-full rounded-lg px-3 py-2 text-left text-sm text-gray-300 hover:bg-gray-800">
            Product Analytics
          </button>

          <button className="w-full rounded-lg px-3 py-2 text-left text-sm text-gray-300 hover:bg-gray-800">
            Reports
          </button>
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar