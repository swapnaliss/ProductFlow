import React, { useState, useEffect } from 'react'

const InExpensiveItemsCard = () => {

    const [customers, setCustomers] = useState();
    const [error, setError] = useState(null);

    const fetchCustomersBoughtInExpensiveItems = async () => {
        try {
            const response = await fetch('http://localhost:4000/customers-bought-inexpensive-items');
            if (!response.ok) {
                throw new Error('Failed to fetch customers who bought inexpensive items');
            }
            const data = await response.json();
            console.log(data);
            setCustomers(data);
        } catch (err) {
            setError(err.message);
        }
    };

    useEffect(() => {
        fetchCustomersBoughtInExpensiveItems();
    }, []);

    return (
        <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:bg-gray-100 hover:scale-105">
            <h2 className="text-xl font-semibold mb-4">Customers bought inexpensive items</h2>
            {error && <p className="text-red-500">Error: {error}</p>}
            {customers && (
                <div>
                    {customers.map(customer => (
                        <div key={customer}>
                            <li>
                                {customer}
                            </li>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default InExpensiveItemsCard