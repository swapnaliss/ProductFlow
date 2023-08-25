import React, { useState, useEffect } from 'react'

const MostPopularProductCard = () => {
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    const fetchMostPopularProduct = async () => {
        try {
            const response = await fetch('http://localhost:4000/most-popular-product');
            if (!response.ok) {
                throw new Error('Failed to fetch most popular product');
            }

            const data = await response.json();
            setProduct(data);
        } catch (err) {
            setError(err.message);
        }
    };

    useEffect(() => {
        fetchMostPopularProduct();
    }, []);

    return (
        <div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Most Popular Product</h2>
                {error && <p className="text-red-500">Error: {error}</p>}
                {product && (
                    <div>
                        <h2>{product.name}</h2>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MostPopularProductCard