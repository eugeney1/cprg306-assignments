"use client"
import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

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

    let buttonIncrement = "bg-blue-400 text-black text-center mx-5 px-5 hover:blue-400 rounded";
    let buttonDecrement = "bg-blue-400 text-black text-center mx-5 px-5 hover:blue-400 rounded";

    if (quantity === 20) {
        buttonIncrement = "bg-gray-400 text-black text-center mx-5 px-5 hover:blue-400 rounded";
    }
    if (quantity === 1) {
        buttonDecrement = "bg-gray-400 text-black text-center mx-5 px-5 hover:blue-400 rounded";
    }

    return (
        <div className="bg-gray-300 flex items-center justify-center my-80 mx-10 py-10">
            <button onClick={decrement} className={buttonDecrement}>-</button>
            <p className=" rounded bg-white border border-white text-black">Count: {quantity}</p>
            <button onClick={increment} className={buttonIncrement}>+</button>
        </div>
    );
}
