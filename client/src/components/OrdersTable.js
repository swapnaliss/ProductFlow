import React from 'react'

const OrdersTable = ({orders}) => {
    return (
        <div>
            <div className="bg-white p-4 rounded-lg shadow-md overflow-x-auto">
                <h2 className="text-lg font-semibold mb-4">Orders</h2>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Customer ID</th>
                            <th className="px-4 py-2">Preference</th>
                            <th className="px-4 py-2">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={index}>
                                <td className="px-4 py-2">{order.customer_id}</td>
                                <td className="px-4 py-2">{order.preference}</td>
                                <td className="px-4 py-2">{order.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default OrdersTable