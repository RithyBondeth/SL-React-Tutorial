
import { useCallback, useState } from "react"
import Loaded from "./loaded_component"

/*
    useCallback() Hook is a react hook that lets you cache a function definition between re-renders.
    - It means, when we use the useCallback() hook, It doesn't create multiple instance of same function 
      when re-render happens.
    - Instead of creating new instance of the function, It provided the cached function on re-render of the component.
*/

export default function UseCallbackPage() {

    const [count, setCount] = useState(0)

    //When we updating count value => Loaded Component load everytime 
    const increment = () => {
        setCount(prev => prev + 1)
    }

    //const newFn = () => {}
    const newFn = useCallback(() => {}, [])

    //With [count] dependency Loaded Component still render everytime count is changing
    //const newFn = useCallback(() => {}, [count]) 

    return (
        <div className="absolute top-20 left-0 bottom-0 right-0 flex flex-col justify-center items-center">
            <Loaded newFn={newFn}/>
            <div>
                <p className="text-xl">Count: {count}</p>
                <button onClick={increment} className="text-xs p-2 mt-2 bg-blue-300">Increment</button>
            </div>
        </div>
    )
}