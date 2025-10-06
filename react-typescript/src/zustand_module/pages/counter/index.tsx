import { useCounter, useNestedCounter } from "../../stores/counter-store"

export default function CounterPage() {
    const { counter, increment, decrement } = useCounter()
    const nestedCounter = useNestedCounter()
    
    return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-5">
        <div className= "w-fit p-5 flex flex-col items-center text-white bg-blue-500">
            <p>Counter: {counter}</p>
            <div className="mt-5">
                <button onClick={increment} className="text-sm p-1 mx-1 cursor-pointer text-blue-500 bg-white">Increment</button>
                <button onClick={decrement} className="text-sm p-1 mx-1 cursor-pointer text-blue-500 bg-white">Decrement</button>
            </div>
        </div>
        <div className= "w-fit p-5 flex flex-col items-center text-white bg-red-500">
            <div>
                <p>Nested Counter: {nestedCounter.nested.counter}</p>
                <p>Nested Time: {nestedCounter.nested.time}</p>
            </div>
            <div className="mt-5 flex flex-col [&>button]:my-2">
                <button onClick={nestedCounter.incrementCounter} className="text-sm p-1 mx-1 cursor-pointer text-red-500 bg-white">Increment Counter</button>
                <button onClick={nestedCounter.incrementTime} className="text-sm p-1 mx-1 cursor-pointer text-red-500 bg-white">Increment Time</button>
                <button onClick={nestedCounter.incrementBoth} className="text-sm p-1 mx-1 cursor-pointer text-red-500 bg-white">Increment Both</button>
                <button onClick={useNestedCounter.persist.clearStorage} className="text-sm p-1 mx-1 cursor-pointer text-red-500 bg-white">Clear Storage</button>
            </div>
        </div>
    </div>
  )
}