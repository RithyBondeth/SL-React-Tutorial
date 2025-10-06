import React, { useState } from "react"

interface ErrorTyoe {
    name: string
    email: string
    password: string
}

export default function LoginPage() {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("") 
    const [errors, setErros] = useState<ErrorTyoe>({ name: "", email: "", password: ""})

    const handleSubmit = (e: React.FormEvent) => {
        //Prevent Browser Page Reload
        e.preventDefault()
        
        //First there's no error
        setErros({ name: "", email: "", password: "" })

        //Manual Validation      
        if(!name && !email && !password) {
            setErros({ 
                name: "Name cannot be empty",
                email: "Email cannot be empty",
                password: "Password cannot be empty"
             })
        } else {
            if(email.includes("@") === false) {
                setErros({...errors, email: "Email must include @"})
                return
            }
            if(password.length < 8 ) {
                setErros({...errors, password: "Password must be at least 8 chars"})
                return
            }
        }
        console.log(name, email, password)

        //Clear Form
        setName("")
        setEmail("")
        setPassword("") 
    }

    return (
        <form onSubmit={handleSubmit} className="form text-white bg-gray-700">
            <div className="flex items-center">
                <span className="material-icons">account_circle</span>
                <p className="text-xl underline">Please, Login</p>
            </div>
            <div className="w-full flex flex-col items-start mt-4">
                <label htmlFor="name">Name</label>
                <input 
                    type="text" name="name" id="name" 
                    placeholder="Enter Name..." 
                    className="my-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {errors.name &&  <p className="text-xs mt-1 text-red-500">{errors.name}</p>}
            </div>
            <div className="w-full flex flex-col items-start mt-4">
                <label htmlFor="email">Email</label>
                <input 
                    type="text" name="email" id="email" 
                    placeholder="Enter Email..." 
                    className="my-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email &&  <p className="text-xs mt-1 text-red-500">{errors.email}</p>}
            </div>
            <div className="w-full flex flex-col items-start mt-4">
                <label htmlFor="password">Password</label>
                <input 
                    type="password" name="password" id="password"
                    placeholder="Enter Password..." 
                    className="my-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password &&  <p className="text-xs mt-1 text-red-500">{errors.password}</p> }
            </div>
            <div className="w-full flex justify-end mt-8">
                <button type="submit" value="Login" className="text-gray-700 bg-white rounded-md px-4 py-2">Login</button>
            </div>
        </form>
    )
}