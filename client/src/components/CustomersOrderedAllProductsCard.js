import React, { useState, useEffect } from 'react'


const CustomersOrderedAllProductsCard = () => {
    const [customers, setCustomers] = useState();
    const [error, setError] = useState(null);

    const fetchCustomersOrderedAllProducts = async () => {
        try {
            const response = await fetch('http://localhost:4000/customers-ordered-all-products');
            if (!response.ok) {
                throw new Error('Failed to fetch customers ordered all products');
            }
            const data = await response.json();
            console.log(data);
            setCustomers(data);
        } catch (err) {
            setError(err.message);
        }
    };

    useEffect(() => {
        fetchCustomersOrderedAllProducts();
    }, []);

    return (
        <div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Who have ordered all products</h2>
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
        </div>
    )
}

export default CustomersOrderedAllProductsCard