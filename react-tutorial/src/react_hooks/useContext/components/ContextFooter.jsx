import { useContext } from "react"
import { AppContext } from "../AppContext"

export default function ContextFooter() {
    const {phone, name} = useContext(AppContext)

    return (
        <div className="mt-2 p-5 bg-gray-300">
            <p>Footer</p>
            <p className="text-xs">Phone: {phone}</p>
            <p className="text-xs">Name: {name}</p>
        </div>
    )
}