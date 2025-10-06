import { useCatStore } from "../../stores/cat-store"
import CatController from "./catcontroller"
import SmallCatComponent from "./smallcat"

export default function CatPage() {
    // const cats = useCatStore((state) => state.cats)
    // const increaseBigCat = useCatStore((state) => state.increaseBigCat)
    // const increaseSmallCat = useCatStore((state) => state.increaseSmallCat)
    // const increaseBoth = useCatStore((state) => state.increaseBoth)
    // const summary = useCatStore((state) => state.summary)

    const { 
        cats: { bigCat, smallCat }, 
        increaseBigCat, 
        increaseSmallCat, 
        increaseBoth, 
        summary 
    } = useCatStore()

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center gap-5">
            <div className= "w-fit p-5 flex flex-col items-center text-white bg-blue-500">
                <p>Big Cat: {bigCat}</p>
                <p>Small Cat: {smallCat}</p>
                <p>{summary().toString()}</p>
                <div className="mt-5">
                    <button onClick={increaseBigCat} className="text-sm p-1 mx-1 cursor-pointer text-blue-500 bg-white">Increase Big Cat</button>
                    <button onClick={increaseSmallCat} className="text-sm p-1 mx-1 cursor-pointer text-blue-500 bg-white">Increase Small Cat</button>
                    <button onClick={increaseBoth} className="text-sm p-1 mx-1 cursor-pointer text-blue-500 bg-white">Increase Both Cat</button>
                </div>
                <div className="mt-5">
                    <div className="text-sm p-1 mx-1 text-blue-500 bg-white">Random Number: {Math.random()}t</div>
                </div>
            </div>
            <SmallCatComponent/>
            <CatController/>
        </div>
    )
}