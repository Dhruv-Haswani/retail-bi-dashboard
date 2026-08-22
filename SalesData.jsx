import useSalesData from '../hooks/useSalesData'

function SalesData() {
  const data = useSalesData()

  return (
    <div className="mt-6 rounded-xl bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900">
        Sales Data
      </h2>

      {data ? (
        <div className="mt-2 text-gray-600">
          <p>Title: {data.title}</p>
          <p className="mt-1">Data fetched successfully</p>
        </div>
      ) : (
        <p className="mt-2 text-gray-600">
          Loading sales data...
        </p>
      )}
    </div>
  )
}

export default SalesData