import useSWR from "swr"

export default function PostPage() {
    //API Endpoint
    const postApi = "https://jsonplaceholder.typicode.com/posts?_limit=10"
    //Fetch Function
    const fetcher = (url) => fetch(url).then(response => response.json())

    const { data, error, isLoading, mutate } = useSWR(postApi, fetcher)

    if(error) return <div className="absolute top-1/2 left-1/2 -translate-x-1/2 text-sm">{error}.</div>
    if(isLoading) return <div className="absolute top-1/2 left-1/2 -translate-x-1/2 text-sm">Loading Post...</div>
    
    return (
        <div className="m-5">
        {data.map((e) => <p key={e.id}>{e.title}</p>)}
        </div>
    )
}