import { useEffect } from "react"
import { useCatStore } from "../../../stores/cat-store"
import { useFoodStore } from "../../../stores/food-store"

export default function SmallCatComponent() {
    const smallCat = useCatStore((state) => state.cats.smallCat)
    const { fish } = useFoodStore()
    
    useEffect(() => {
        const unsub = useFoodStore.subscribe((state, prevState) => {
            console.log(state, prevState)
        })

        return unsub
    }, [])

    return (
        <div className= {`w-fit p-5 flex flex-col items-center text-white ${fish > 5 ? "bg-amber-400" : "bg-blue-500"}`}>
            <p>Small Cat: {smallCat}</p>
            <div className="mt-5">
                <div className="text-sm p-1 mx-1 text-blue-500 bg-white">Random Number: {Math.random()}t</div>
            </div>
        </div>
    )
}