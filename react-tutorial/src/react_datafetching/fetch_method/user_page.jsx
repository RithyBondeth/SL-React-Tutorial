import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function UserPage() {

    const usersApi = "https://jsonplaceholder.typicode.com/users"
    const [users, setUsers] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchUserData = async () => {
        try {
            const response = await fetch(usersApi, { method: "GET" })
            
            if(!response.ok) throw new Error(`HTTP error: Status ${response.status}`)

            const usersData = await response.json()
            setUsers(usersData)

            setError(null)
        } catch(err) {
            setError(err.message)
            setUsers(null)
        } finally {
            setIsLoading(false)
        }
    } 

    const [userID, setUserID] = useState(1)
    const [singleUser, setSingleUser] = useState(null)
    const [isSingleLoading, setIsSingleLoading] = useState(true)
    const [singleError, setSingleError] = useState(null)
    const singleUserApi = `https://jsonplaceholder.typicode.com/users/${userID}`

    const fetchSingleUserData = async () => {
        try {
            const response = await fetch(singleUserApi)

            if(!response.ok) throw new Error(`HTTP error: Status ${response.status}`);

            const singleUserData = await response.json()
            setSingleUser(singleUserData)

            setSingleError(null)
        } catch(err) {
            setSingleError(err.message)
            setSingleUser(null)
        } finally {
            setIsSingleLoading(false)
        }
    }

    useEffect(() => {
        fetchUserData()
        fetchSingleUserData()
    }, [userID])

    return (
        <div className="h-screen w-full flex justify-center items-start">
            <Link to="/datafetching/fetch_method/todo_page" className="absolute z-10 top-24 p-2 cursor-pointer rounded-md bg-blue-300">Todo Page</Link>
            <div className="relative h-full w-1/4 px-5">
                {isLoading && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 text-sm">Loading Users...</div>}
                {error && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 text-sm">{error}</div>}
                {users && users.map((user) => (
                    <div className="text-sm p-2 cursor-pointer border-b-2 border-gray-100 hover:bg-gray-100 duration-300" onClick={() => setUserID(user.id)}>
                        <p>ID: {user.id}</p>
                        <p>Name: {user.name}</p>
                    </div>
                ))}
            </div>
            <div className="relative h-full w-3/4 bg-gray-100">
                {isSingleLoading && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 text-sm">Loading Users...</div>}
                {singleError && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 text-sm">{singleError}</div>}
                {singleUser && 
                    <div className="p-5 text-sm [&>p]:my-1">
                        <p>Name: {singleUser.name}</p>
                        <p>Username: {singleUser.username}</p>
                        <p>Email: {singleUser.email}</p>
                        <p>Company: {singleUser.company.name}</p>
                        <p>Phone: {singleUser.phone}</p>
                        <p>Website: {singleUser.website}</p>
                        <p>Address</p>
                        <div className="ml-2 [&>p]:text-xs [&>p]:my-1">
                            <p>+ Street: {singleUser.address.street}</p>
                            <p>+ Suite: {singleUser.address.suite}</p>
                            <p>+ City: {singleUser.address.city}</p>
                        </div>
                    </div>
                }
            </div>
        </div> 
    )
}