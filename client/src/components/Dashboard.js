import React, { useState, useEffect } from 'react';
import ProductsTable from './ProductsTable';
import CustomerPreferenceTable from './CustomerPreferenceTable';
import OrdersTable from './OrdersTable';

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [customerPreferences, setCustomerPreferences] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/allData')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProducts(data.products);
        setCustomerPreferences(data.customerPreferences);
        setOrders(data.orders);
      });
  }, []);

  return (
    <div className="p-6 md:p-12">

      {/* Rendering tables */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Products Table */}
        <ProductsTable products={products} />

        {/* Customer Preference Table */}
        <CustomerPreferenceTable customerPreferences={customerPreferences} />

        {/* Orders Table */}
        <OrdersTable orders={orders} />
      </div>
    </div>
  );
}

export default Dashboard;
