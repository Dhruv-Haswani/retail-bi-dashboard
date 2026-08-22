import { useState } from 'react';
function SalesForm() {
    const[sales,setSales]= useState(0)
    function addSale() {
        setSales(sales + 1);
    }
    return (
        <div className = 'mt-6 rounded-xl bg-white p-6 shadow-sm'>
            <h2 className="text-lg font-bold text-gray-900">
                Sales Counter
                </h2>
                <p className = 'mt-2 text-gray-600'>
                    Total Sales: {sales}

                </p>
                <button onClick={addSale} className = 'mt-4 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700'>
                    Add Sale
                </button>
        </div>
    )
}
export default SalesForm;