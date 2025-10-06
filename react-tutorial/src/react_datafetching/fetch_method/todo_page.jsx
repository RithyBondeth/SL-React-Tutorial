import { useEffect, useState } from "react"

export const getRequestWithNativeFetch = async (url, signal = null) => {
    const response = await fetch(url, {signal})

    if(!response.ok) throw new Error(`HTTP error: Status ${response.status}`)

    return response.json()
}

export default function TodoPage() {

    const [todos, setTodos] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(null)
    const todoApi = "https://jsonplaceholder.typicode.com/todos?_limit=15"
    
    useEffect(() => {
        const controller = new AbortController()

        const fetchTodoData = async () => {
            try {
                const data = await getRequestWithNativeFetch(todoApi, controller.signal)
                setTodos(data)
                setIsError(null)
            } catch(err) {
                if(err.name === "AbortError") {
                    console.log('Aborted')
                    return
                }
                setIsError(err.massage)
                setTodos(null)
            } finally {
                setIsLoading(false)
            }
        }
        fetchTodoData()

        return () => controller.abort();
    },[])

    return (
        <div className="h-screen w-full flex justify-center items-start">
            {isLoading &&  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 text-sm">Loading Todos...</div>}
            {isError &&  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 text-sm">{isError}</div>}
            {todos && 
            <div className="w-full">
              {todos.map((todo) => (
                <div className="p-4 m-4 rounded-md bg-gray-100" key={todo.id}>
                    <p>ID: {todo.id}</p>
                    <p>Title: {todo.title}</p>
                    <p>Completed: {todo.completed.toString()}</p>
                </div>
              ))}  
            </div>}
        </div>
    )
}