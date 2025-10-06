import { useState, useEffect } from "react"

export default function useLocalStorage(key, initialValue) {

    const [name, setName] = useState(localStorage.getItem(key) ? localStorage.getItem(key) : initialValue)

    useEffect(() => {
        localStorage.setItem(key, name)
    },[name, key])

    return [name, setName]
}