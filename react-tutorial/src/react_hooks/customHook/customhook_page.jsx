import { useEffect, useState } from "react"
import useLocalStorage from "./useLocalStorage"

export default function CustomHookPage() {
    /*
    const [name, setName] = useState(localStorage.getItem("username") ? localStorage.getItem("username") : "")

    useEffect(() => {
        localStorage.setItem("username", name)
    },[name])
    */

    const [name, setName] = useLocalStorage("username", "")
    const [id, setID] = useLocalStorage("userID", "")
    
    return (
        <div className="absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center">
            <div className="flex flex-col items-center">
                <input 
                    type="text" 
                    placeholder="Enter your name..." 
                    className="p-2 outline-none bg-gray-300"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <p className="mt-5">Hello, {name}</p>
            </div>
            <div className="flex flex-col items-center mt-5">
                <input 
                    type="text" 
                    placeholder="Enter your name..." 
                    className="p-2 outline-none bg-gray-300"
                    value={id}
                    onChange={(e) => setID(e.target.value)}
                />
                <p className="mt-5">ID: {id}</p>
            </div>
        </div>
    )
}