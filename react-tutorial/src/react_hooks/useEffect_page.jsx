import { useEffect, useState } from "react"

/* useEffect() Hook allow you to perform side effects in your component:

   Some examples of side effect: 
    1. Fetchig data from api
    2. Directly updating the DOM elments
    3. Timers like SetTimeOut and SetInterval
*/

export default function UseEffectPage() {

    const [count, setCount] = useState(0)

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            setCount(count => count + 1)
        }, 2000)

        const fetchUserData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                if(!response.ok) {
                    throw new Error(`HTTP error: Status ${response.status}`)
                }
                let usersData = await response.json()
                setData(usersData)
            } catch(error) {
                setIsError(error.message)
                setData(null)
            } finally {
                setIsLoading(false)
            }
        }

        fetchUserData()
        console.log(data)

    }, [count, data])

    /*
        - use empty dependency [] => callback function will execute only 1 time 
        - use dependency [count] => callback function will execute when the component get loaded 
          and after that whenever "count" is changing callback funcution will execute again.
    */

    return (
        <div className="absolute top-20 left-0 bottom-0 right-0 flex flex-col justify-center items-center">
            <div>
                <p>I've rendered {count} times!</p>
            </div>
            <div>
                {isLoading ? 
                <div className="mt-10">Data is loading...</div> 
                : <div className="p-5 mt-10">
                   <p>Users Data From API</p>
                   {data.map((e) => (
                    <div className="text-xs my-2">
                        <p>Username: {e.username}</p>
                        <p>Email: {e.email}</p>
                    </div>
                   ))}
                </div>}
            </div>
        </div>
    )
}