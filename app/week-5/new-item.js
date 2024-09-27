"use client";
import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const item = { name, quantity, category };
        
        console.log(item);
        alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);

        setName('');
        setQuantity(1);
        setCategory('produce');

    };


    const buttonIncrement = quantity === 20 ? "bg-gray-400 text-black text-center mx-2 px-3 rounded" : "bg-blue-400 text-black text-center mx-2 px-3 rounded";
    const buttonDecrement = quantity === 1 ? "bg-gray-400 text-black text-center mx-2 px-3 rounded" : "bg-blue-400 text-black text-center mx-2 px-3 rounded";



    return (
        <div className="flex flex-col items-center justify-center my-10 mx-5 p-5 bg-gray-300 rounded shadow-lg">
            <form onSubmit={handleSubmit} className="w-full max-w-sm">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-bold mb-2">Item Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="border rounded w-full py-2 px-3 text-black"
                    />
                </div>
                
                <div className="flex items-center mb-4">
                    <button type="button" onClick={decrement} className={`bg-blue-400 text-black mx-2 px-3 rounded ${buttonDecrement} `}>-</button>
                    <p className="rounded bg-white border border-gray-400 text-black text-center w-12">{quantity}</p>
                    <button type="button" onClick={increment} className={`bg-blue-400 text-black mx-2 px-3 rounded ${buttonIncrement} `}>+</button>
                    
                </div>

                <div className="mb-4">
                    <label htmlFor="category" className="block text-sm font-bold mb-2">Category:</label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="border rounded w-full py-2 px-3 text-black"
                    >
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen-foods">Frozen Foods</option>
                        <option value="canned-goods">Canned Goods</option>
                        <option value="dry-goods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <button type="submit" className="bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-700">Submit</button>
            </form>
        </div>
    );
}
