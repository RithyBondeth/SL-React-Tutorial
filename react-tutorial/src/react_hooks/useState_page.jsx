import { useState } from "react"

/*
    Hooks are special functions, that allows us to use state and other React features in functional component.
*/
/*
    useState() Hook is create an "state variable". which help us to track state in component & update the UI when the state changes.
*/

export default function UseStatePage() {

    const [counter, setCounter] = useState(0)

    const [car, setCar] = useState({
        brand: "Toyota",
        model: "Pirus",
        year: "2010",
        color: "White",
    })

    const changeCar = (car) => {
        setCar({
            brand: car.brand,
            model: car.model,
            year: car.year,
            color: car.color
        })
    }

    const changeColor = () => {
        setCar((prevCar) => {
            return {
                ...prevCar,
                color: "Red",
            }
        })
    }

    const [isDarkMode, setIsDarkMode] = useState(false)

    const bgThemeMode = isDarkMode ? "bg-gray-900" : "bg-white"
    const textThemeMode = isDarkMode ? "text-white" : "text-black"

    return (
        <div className={`absolute top-20 left-0 bottom-0 right-0 flex justify-center items-center ${bgThemeMode}`}>
            <div className={`flex flex-col items-center ${textThemeMode}`}>
                <div className="flex flex-col items-center">
                    <p className="mb-2 text-xl">Counter: {counter}</p>
                    <div>
                        <button onClick={() => setCounter(counter + 1)} className="text-sm p-2 mr-1 bg-blue-300">Increment</button>
                        <button onClick={() => setCounter(counter - 1)} className="text-sm p-2 ml-1 bg-blue-300">Decrement</button>
                    </div>
                </div>
                <div className="flex flex-col items-center my-10">
                    <p className="text-xl">Car Information</p>
                    <div className="text-sm my-2">
                        <p>Brand: {car.brand}</p>
                        <p>Model: {car.model}</p>
                        <p>Year: {car.year}</p>
                        <p>Color: {car.color}</p>
                    </div>
                    <div>
                        <button 
                            onClick={() => changeCar({ brand: "Lexus", model: "GS 200T", year: "2021", color: "Black" })} 
                            className="text-sm p-2 mr-1 bg-blue-300"
                        >
                            Change Car
                        </button>
                        <button onClick={() => changeColor()} className="text-sm p-2 ml-1 bg-blue-300">Change Color</button>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col items-center"> 
                        <p className="text-xl">Theme Mode</p>
                        <button onClick={() => setIsDarkMode(!isDarkMode)} className="text-sm p-2 ml-1 bg-blue-300">{isDarkMode ? "Light Mode" : "Dark Mode"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}