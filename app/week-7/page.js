"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json"; 

export default function Page() {
    const [items, setItems] = useState(itemsData); 
    const handleAddItem = (newItem) => {
        setItems((prevItems) => [
            ...prevItems,
            { id: Date.now().toString(), ...newItem } 
        ]);
    };

    return (
        <main className="bg-gray-400 justify-center flex flex-col">
            <h4 className="text-black text-2xl font-bold">Shopping List</h4>
            <ItemList items={items} /> 
            <NewItem onAddItem={handleAddItem} /> 
        </main>
    );
}
