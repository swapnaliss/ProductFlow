import React from 'react';

function Dashboard() {
  // Sample Data
  const products = [
    { id: 1, name: 'laptop', price: 85000 },
    { id: 2, name: 'smart phone', price: 16999 },
    { id: 3, name: 'headphone', price: 1600 },
    { id: 4, name: 'tablet', price: 28000 },
    { id: 5, name: 'camera', price: 156500 },
  ];

  const customerPreference = [
    { preferenceId: 'p1', productId: 1 },
    { preferenceId: 'p1', productId: 2 },
  ];

  const orders = [
    { customerId: 'user1', preference: 'p1', date: '15/04/2023' },
    { customerId: 'user2', preference: 'p3', date: '16/04/2023' },
  ];

  return (
    <div className="p-6 md:p-12">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Products Table */}
        <div className="bg-white p-4 rounded-lg shadow-md overflow-x-auto">
          <h2 className="text-lg font-semibold mb-4">Products</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2">Product ID</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="px-4 py-2">{product.id}</td>
                  <td className="px-4 py-2">{product.name}</td>
                  <td className="px-4 py-2">{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Customer Preference Table */}
        <div className="bg-white p-4 rounded-lg shadow-md overflow-x-auto">
          <h2 className="text-lg font-semibold mb-4">Customer Preference</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2">Preference ID</th>
                <th className="px-4 py-2">Product ID</th>
              </tr>
            </thead>
            <tbody>
              {customerPreference.map((pref, index) => (
                <tr key={index}>
                  <td className="px-4 py-2">{pref.preferenceId}</td>
                  <td className="px-4 py-2">{pref.productId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Orders Table */}
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
                  <td className="px-4 py-2">{order.customerId}</td>
                  <td className="px-4 py-2">{order.preference}</td>
                  <td className="px-4 py-2">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
