export default function Item({ name, quantity, category }) {
    return(
        <div className="w-80 p-4-white border border-gray-200 rounded-lg shadow-md mb-4 bg-slate-600 text-center">
            <h1>{name}</h1>
            <h1>buy {quantity} in {category}</h1>
            <h1></h1>
        </div>
    )
}