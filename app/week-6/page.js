import ItemList from "./item-list"


export default function Page(){
    return(
        <main className="bg-gray-400  justify-center flex flex-col">
            <h4 className="text-black text-2xl font-bold">Shopping List</h4>
            <ItemList></ItemList>
        </main>
    )
}