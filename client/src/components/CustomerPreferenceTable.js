import React from 'react'

const CustomerPreferenceTable = ({customerPreferences}) => {
    return (
        <div>
            <div className="bg-white p-4 rounded-lg shadow-md overflow-x-auto border border-gray-700">
                <h2 className="text-lg font-semibold mb-4">Customer Preference</h2>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Preference ID</th>
                            <th className="px-4 py-2">Product ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customerPreferences.map((pref, index) => (
                            <tr key={index}>
                                <td className="px-4 py-2">{pref.preference_id}</td>
                                <td className="px-4 py-2">{pref.product_id}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CustomerPreferenceTable