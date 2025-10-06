import { useFoodStore } from "../../stores/food-store"
import SmallCatComponent from "../cat/smallcat"

export default function FoodPage() {
    const fish = useFoodStore((state) => state.fish) //Reactive: UI will be updated
    //const fish = useFoodStore.getState().fish //Non-Reactive: UI won't be updated

    const addOneFish = useFoodStore((state) => state.addOneFish)
    const removeOneFish = useFoodStore((state) => state.removeOneFish)
    const removeAllFish = useFoodStore((state) => state.removeAllFish)

    //setState() allow us to seperate action(function) from the state
    const add5Fish = () => {
        useFoodStore.setState((state) => ({
            fish: state.fish + 5,
        }))
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center gap-5">
            <div className= "w-fit p-5 flex flex-col items-center justify-center bg-amber-400">
                <p className="text-white">Fish: {fish}</p>
                <div className="mt-5 [&>button]:my-2 flex flex-col justify-center items-center">
                    <button onClick={addOneFish} className="text-sm p-1 mx-1 cursor-pointer text-amber-400 bg-white">Add One Fish</button>
                    <button onClick={add5Fish} className="text-sm p-1 mx-1 cursor-pointer text-amber-400 bg-white">Add 5 Fish</button>
                    <button onClick={removeOneFish} className="text-sm p-1 mx-1 cursor-pointer text-amber-400 bg-white">Remove One Fish</button>
                    <button onClick={removeAllFish} className="text-sm p-1 mx-1 cursor-pointer text-amber-400 bg-white">Remove All Fish</button>
                </div>
            </div>
            <SmallCatComponent/>
        </div>
    )
}