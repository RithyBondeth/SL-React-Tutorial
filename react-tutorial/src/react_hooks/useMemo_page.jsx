import { useMemo, useState } from "react"

/*
    useMemo() Hook returns a memoized value. (It's like caching a value so that it doesn't need to be recalculated).
    - The useMemo() Hook can only runs when one of its dependencies gets updated.
    - This can improve the performance of the application. There is one more hook in react to improve performance,
      that's useCallback() hook.
    - The useMemo() and useCallback() Hooks are similar. The main difference is:
      1. useMemo*() return a memoized value.
      2. useCallback() return a memoized function.

*/

export default function UseMemoPage() {

    const [number, setNumber] = useState(0)
    const [counter, setCounter] = useState(0)

    // Whenever we click counter++ => counter change => UI update (component render) => function cubeNumber() recalculate whenever number is changing.
    // To prevent this render again and again => We use useMemo() 
    function cubeNumber(num) {
        console.log("Calculate Done!")
        return Math.pow(num, 3)
    }

    // const result = cubeNumber(number)
    const result = useMemo(() => {
        return cubeNumber(number)
    }, [number])
    // After use useMemo no matter how many times we click counter++ => function cubeNumber() will not execute everytime we click counter++


    return (
        <div className="absolute top-20 left-0 bottom-0 right-0 flex flex-col justify-center items-center">
            <div className="flex flex-col items-center">
                <input type="number" value={number} onChange={(e) => {setNumber(e.target.value)}} className="p-2 my-2 outline-none bg-gray-300"/>
                <p>Cube of the number: {result}</p>
            </div>
            <div className="mt-10 flex flex-col items-center">
                <p>Counter: {counter}</p>
                <button onClick={() => setCounter(counter + 1)} className="text-xs p-2 cursor-pointer bg-gray-300">Counter++</button>
            </div>
        </div>
    )
}