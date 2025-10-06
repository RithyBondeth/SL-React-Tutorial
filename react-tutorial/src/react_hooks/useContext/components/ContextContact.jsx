import { useContext } from "react"
import { AppContext } from "../AppContext"

export default function ContextContact() {
    const {phone, name} = useContext(AppContext)

    return (
        <div className="p-5 bg-gray-400">
            <p>Contact</p>
            <p className="text-xs">Phone: {phone}</p>
            <p className="text-xs">Name: {name}</p>
        </div>
    )
}