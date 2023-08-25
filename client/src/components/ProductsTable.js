import React from 'react';

const ProductsTable = ({ products }) => {

    return (
        <div>
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
                            <tr key={product.product_id}>
                                <td className="px-4 py-2">{product.product_id}</td>
                                <td className="px-4 py-2">{product.name}</td>
                                <td className="px-4 py-2">{product.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductsTable