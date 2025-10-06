import { useUser } from "./hooks/useUser"
import useSWRMutation from 'swr/mutation'
import updateUser from "./utils/updateUser"

export default function UsersPage() {
    const users = useUser()
    const user = useUser(1)

    const { trigger } = useSWRMutation("api/user", updateUser)


    if(user.isLoading || users.isLoading) return <p>Data is loading....</p>

    if(user.isError || users.isError) return <p>Erorr Data</p>
    
    return (
    <div>
        <h1 className="p-5 text-xl underline">Users Page</h1>
        <div className="p-5">
            <p className="underline">Single User</p>
            <p>{user.data.id} - {user.data.name}</p>
        </div>
        <div className="p-5">
        <p className="underline">All Users</p>
        {users.data.map((user) => (
            <p className="mt-2" key={user.id}>{user.id} - {user.name}</p>
        ))}    
        </div>
        <button onClick={() => { 
            trigger("my_token")
        }}>Update User</button>
    </div>
   )
}