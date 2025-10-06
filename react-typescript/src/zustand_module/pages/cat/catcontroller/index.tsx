import { useCatStore } from "../../../stores/cat-store"

export default function CatController() {
    const increaseBigCat = useCatStore.use.increaseBigCat()
    const increaseSmallCat = useCatStore.use.increaseSmallCat()
    const increaseBoth = useCatStore.use.increaseBoth()

    return (
        <div className= "w-fit p-5 flex flex-col items-center text-white bg-blue-500">
            <div className="mt-5">
                <button onClick={increaseBigCat} className="text-sm p-1 mx-1 cursor-pointer text-blue-500 bg-white">Increase Big Cat</button>
                <button onClick={increaseSmallCat} className="text-sm p-1 mx-1 cursor-pointer text-blue-500 bg-white">Increase Small Cat</button>
                <button onClick={increaseBoth} className="text-sm p-1 mx-1 cursor-pointer text-blue-500 bg-white">Increase Both Cat</button>
            </div>
            <div className="mt-5">
                <div className="text-sm p-1 mx-1 text-blue-500 bg-white">Random Number: {Math.random()}t</div>
            </div>
        </div>
    )
}