import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <main className="p-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <p className="text-sm text-gray-500">Total Revenue</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-900">
                ₹12.45L
              </h2>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <p className="text-sm text-gray-500">Total Orders</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-900">
                8,426
              </h2>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <p className="text-sm text-gray-500">Customers</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-900">
                3,284
              </h2>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <p className="text-sm text-gray-500">Total Profit</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-900">
                ₹3.18L
              </h2>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App