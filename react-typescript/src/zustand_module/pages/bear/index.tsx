import { addOneBear, removeOneBear, useBearStore } from "../../stores/bear-store"

export default function BearPage() {
    const bear = useBearStore((state) => state.bear)
    const removeAllBear = () => useBearStore.setState(() => ({ bear: 0 }))

    return (
        <div className="w-screen h-screen flex justify-center items-center gap-5">
            <div className= "w-fit p-5 flex flex-col items-center justify-center bg-pink-400">
                <p className="text-white">Bear: {bear}</p>
                <div className="mt-5 [&>button]:my-2 flex flex-col justify-center items-center">
                    <button onClick={addOneBear} className="text-sm p-1 mx-1 cursor-pointer text-pink-400 bg-white">Add One Bear</button>
                    <button onClick={removeOneBear} className="text-sm p-1 mx-1 cursor-pointer text-pink-400 bg-white">Remove One Bear</button>
                    <button onClick={removeAllBear} className="text-sm p-1 mx-1 cursor-pointer text-pink-400 bg-white">Remove All Bear</button>
                </div>
            </div>
        </div>
    )
}