import { useState } from 'react'

function Dropdown() {
  const [open, setOpen] = useState(false)
  const [selectedYear, setSelectedYear] = useState('2026')

  const years = ['2024', '2025', '2026']

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Year: {selectedYear} ▼
      </button>

      {open && (
        <div className="absolute right-0 z-10 mt-2 w-32 rounded-lg bg-white shadow-lg">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => {
                setSelectedYear(year)
                setOpen(false)
              }}
              className="block w-full px-4 py-2 text-left hover:bg-gray-100"
            >
              {year}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown