import Button from './Button'
function SalesOverview() {
  const salesData = [
    { month: 'Jan', value: 42000 },
    { month: 'Feb', value: 48000 },
    { month: 'Mar', value: 45000 },
    { month: 'Apr', value: 62000 },
    { month: 'May', value: 58000 },
    { month: 'Jun', value: 72000 },
    { month: 'Jul', value: 68000 },
    { month: 'Aug', value: 84000 },
    { month: 'Sep', value: 79000 },
    { month: 'Oct', value: 92000 },
    { month: 'Nov', value: 88000 },
    { month: 'Dec', value: 105000 },
  ]

  const maxValue = Math.max(...salesData.map((item) => item.value))

  return (
    <section className="mt-6 rounded-xl bg-white p-6 shadow-sm">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-bold text-gray-900">
            Sales Overview
          </h2>

          <p className="text-sm text-gray-500">
            Monthly sales performance
          </p>
        </div>

       <Button>2026</Button>
      </div>

      <div className="flex h-72 items-end gap-2 sm:gap-4">
        {salesData.map((item) => {
          const height = (item.value / maxValue) * 100

          return (
            <div
              key={item.month}
              className="flex h-full flex-1 flex-col items-center justify-end"
            >
              <div className="mb-2 text-xs font-medium text-gray-500">
                ₹{Math.round(item.value / 1000)}K
              </div>

              <div
                className="w-full max-w-10 rounded-t-md bg-blue-600 transition-all hover:bg-blue-700"
                style={{ height: `${height}%` }}
                title={`${item.month}: ₹${item.value.toLocaleString('en-IN')}`}
              />

              <span className="mt-3 text-xs text-gray-500">
                {item.month}
              </span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default SalesOverview