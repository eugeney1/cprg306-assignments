"use client"; 

import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json"; 

export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");
    const [groupByCategory, setGroupByCategory] = useState(false);

    const sortedItems = [...itemsData].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    const groupedItems = groupByCategory
        ? sortedItems.reduce((acc, item) => {
            acc[item.category] = acc[item.category] || [];
            acc[item.category].push(item);
            return acc;
        }, {})
        : { All: sortedItems };

    return (
        <div>
            <div className="flex space-x-4 mb-4">
                <button
                    onClick={() => setSortBy("name")}
                    className={`px-4 py-2 rounded ${sortBy === "name" ? "bg-blue-500" : "bg-gray-300"}`}
                >
                    Sort by Name
                </button>
                <button
                    onClick={() => setSortBy("category")}
                    className={`px-4 py-2 rounded ${sortBy === "category" ? "bg-blue-500" : "bg-gray-300"}`}
                >
                    Sort by Category
                </button>
                <button
                    onClick={() => setGroupByCategory(!groupByCategory)}
                    className={`px-4 py-2 rounded ${groupByCategory ? "bg-blue-500" : "bg-gray-300"}`}
                >
                    {groupByCategory ? "Ungroup by Category" : "Group by Category"}
                </button>
            </div>

            <ul className="list-none p-0">
                {Object.entries(groupedItems).map(([category, items]) => (
                    <li key={category}>
                        <h3 className="text-lg font-semibold capitalize">{category}</h3>
                        {items.map(item => (
                            <Item
                                key={item.id} // Use item's id as a unique key
                                name={item.name}
                                quantity={item.quantity}
                                category={item.category}
                            />
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    );
}
