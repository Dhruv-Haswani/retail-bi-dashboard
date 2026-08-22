import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import SalesOverview from './components/SalesOverview'
import KpiCard from './components/KpiCard'
import Modal from './components/Modal'
import { useState } from 'react'
import Dropdown from './components/Dropdown'
import SalesForm from './components/SalesForm'
import SalesData from './components/SalesData'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <main className="p-6">
          <div className="mb-6 flex justify-end">
            <Dropdown />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <KpiCard title="Total Revenue" value="₹12.45L" />
            <KpiCard title="Total Orders" value="8,426" />
            <KpiCard title="Customers" value="3,284" />
            <KpiCard title="Total Profit" value="₹3.18L" />
          </div>

          <SalesOverview />

          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-6 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            View Sales Details
          </button>

          <SalesForm />

          <SalesData />
        </main>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default App
