import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export function useUser(id="") {
    const user = useSWR(`https://jsonplaceholder.typicode.com/users/${id}`, fetcher, { 
        refreshInterval: 1000, 
        revalidateOnMount: true, 
        revalidateOnReconnect: true 
    }) 
   
    return {
        data: user.data,
        isLoading: user.isLoading,
        isError: user.error
    }
}  