import { useEffect, useRef, useState } from "react"

/*
    useRef() Hook is a react hook that allow us to create mutable variales, which will not re-render thet component.
    useRef() also used for accessing DOM elements and modify DOM elements.
*/

export default function UseRefPage() {

    const [value, setValue] = useState(0)
    const count = useRef(0)

    useEffect(() => {
        count.current  = count.current + 1
    })

    const inputElement = useRef()

    const changeStyleInput = () => {
        inputElement.current.style.background = "blue"
        inputElement.current.focus()
    }

    const changeValueInput = () => {
        inputElement.current.value = "Rithy Bondeth"
    }

    return (
        <div className="absolute top-20 left-0 bottom-0 right-0 flex flex-col justify-center items-center">
            <div className="flex justify-center items-center">
                <button className="text-sm p-2 mx-2 bg-blue-300" onClick={() => setValue(prev => prev - 1)}>-1</button>
                <p>Value: {value}</p>
                <button className="text-sm p-2 mx-2 bg-blue-300" onClick={() => setValue(prev => prev + 1)}>+1</button>
            </div>
            <div className="my-5">
                <p>Render Count: {count.current}</p>
            </div>
            <div className="flex flex-col items-center">
                <input type="text" className="p-2 outline-none bg-gray-300" ref={inputElement} />
                <button 
                    className="text-xs p-2 mt-2 bg-blue-300" 
                    onClick={() => {
                        changeStyleInput()
                        changeValueInput() 
                    }}
                >
                    Click Here
                </button>
            </div>
        </div>
    )
}