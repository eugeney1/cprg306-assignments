"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json"; // Import the JSON data

export default function Page() {
    const [items, setItems] = useState(itemsData); // Initialize state with itemsData

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [
            ...prevItems,
            { id: Date.now().toString(), ...newItem } // Create a new item with a unique ID
        ]);
    };

    return (
        <main className="bg-gray-400 justify-center flex flex-col">
            <h4 className="text-black text-2xl font-bold">Shopping List</h4>
            <ItemList items={items} /> {/* Pass items to ItemList */}
            <NewItem onAddItem={handleAddItem} /> {/* Pass the handler to NewItem */}
        </main>
    );
}
