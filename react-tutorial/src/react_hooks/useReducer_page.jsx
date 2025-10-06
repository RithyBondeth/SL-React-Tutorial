import { useReducer, useState } from "react"

/*
  - useReducer() Hook is similar to useState(), But instead of providing state & setter function.
    It provides state and dispatch function. 
  - useReducer() Hook accepts 2 arguments: 
    1. Reducer function - specifies how the state get updated
    2. Initil State
    And returns: Current State and Dispatch Method 
*/

const initialState = { counter: 0 }

const reducer = (state, action) => {
    switch (action.type) {
        case "increment": 
            return { ...state, counter: state.counter + 1 }
        case "decrement": 
            return { ...state, counter: state.counter - 1 }
        case "input":
            return { ...state, counter: action.playload }
            return {

            }
        default:
            return "Unrecognized command"
    }
}

export default function UseReducerPage() {

    const [state, dispatch] = useReducer(reducer, initialState)

    
    return (
        <div className="absolute top-20 left-0 bottom-0 right-0 flex flex-col justify-center items-center">
            <div className="flex flex-col items-center">
                <p>Counter: {state.counter}</p>
                <div className="flex justify-center items-center mt-5">
                    <button className="p-2 mr-1 text-xs cursor-pointer bg-blue-300" onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
                    <button className="p-2 ml-1 text-xs cursor-pointer bg-blue-300" onClick={() => dispatch({ type: "increment" })}>Increment</button>
                </div>
                <div className="mt-5">
                    <input 
                        type="number" 
                        value={state.counter}
                        className="p-2 outline-none rounded-md bg-gray-300" 
                        onChange={(e) => dispatch({ type: "input", playload: Number(e.target.value) })}
                    /> 
                </div>
            </div>
        </div>
    )
}