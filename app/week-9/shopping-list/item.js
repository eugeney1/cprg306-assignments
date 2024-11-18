const Item = ({ name, quantity, category, onSelect }) => {
    return (
        <li
            className="flex justify-between items-center p-4 bg-gray-800 rounded-lg shadow-md mb-2 transition-transform transform hover:scale-105 cursor-pointer"
            onClick={() => onSelect(name)}
        >
            <div className="text-lg font-semibold text-white">{name}</div>
            <div className="text-sm text-gray-400">Category: {category}</div>
            <div className="text-sm text-gray-400">Quantity: {quantity}</div>
        </li>
    );
};

export default Item;
