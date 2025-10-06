import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from "zod"

// interface FormFields {
//     name: string
//     email: string
//     password: string
// }

const schema = z.object({
    name: z.string().min(1, {message: "Name is required"}).max(10, {message: "Name must be less than 10 characters"}),
    email: z.string().email({message: "Email is required"}),
    password: z.string().min(8, {message: "Password must be at least 8 characters "}).refine((password) => password.match(/\d/), {
        message: "Password must include at least 1 password"
    })
})

type FormFields = z.infer<typeof schema>

export default function SignupPage() {
    const { register, handleSubmit, formState: { errors, isSubmitting }, setError } = useForm<FormFields>({
        defaultValues: { 
            name: "test",
            email: "test999@gmail.com",
            password: "test9999"
        },
        resolver: zodResolver(schema) //Connect schema into react hook form using zodresolver
    })
 
    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1500))
            console.log(data) 
        } catch(error) {
            //setError("email", { message: "This email is already taken" })
            setError("root", {
                message: "This email is already taken"
            })    
        }  
    }

    return (
        <form className="form text-white bg-gray-700" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center">
                <span className="material-icons">account_circle</span>
                <p className="text-xl underline">Please, Signup</p>
            </div>
            <div className="w-full flex flex-col items-start mt-4">
                <label htmlFor="name">Name</label>
                <input 
                    type="text" id="name" 
                    placeholder="Enter Name..." 
                    className="my-input"
                    {...register("name")} //After use zod we don't have to use our custom validaiton anymore
                    //{...register("name", { required: "Name is required" })}
                />
                {errors.name && <p className='text-xs text-red-500'>{errors.name.message}</p>}
            </div>
            <div className="w-full flex flex-col items-start mt-4">
                <label htmlFor="email">Email</label>
                <input 
                    type="text" id="email" 
                    placeholder="Enter Email..." 
                    className="my-input"
                    {...register("email")} 
                    // {...register("email", { 
                    //     required: "Email is required", 
                    //     // pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ 
                    //     validate: (value) => {
                    //         if(!value.includes("@")) {
                    //             return "Invalid Email"
                    //         }
                    //         return true
                    //     }
                    // })}
                />
                {errors.email && <p className='text-xs text-red-500'>{errors.email.message}</p>}
            </div>
            <div className="w-full flex flex-col items-start mt-4">
                <label htmlFor="password">Password</label>
                <input 
                    type="password" id="password"
                    placeholder="Enter Password..." 
                    className="my-input"
                    {...register("password")}
                    // {...register("password", { 
                    //     required: "Password is required", 
                    //     minLength: {
                    //         value: 8,
                    //         message: "Password must be at least 8 characters"
                    //     }
                    // })}
                />
                {errors.password && <p className='text-xs text-red-500'>{errors.password.message}</p>}
            </div>
            {errors.root && <p className='w-full text-start text-xs text-red-500 mt-2'>{errors.root.message}</p>}
            <div className="w-full flex justify-end mt-8">
                <button disabled={isSubmitting} type="submit" value="Signup" className="text-gray-700 bg-white rounded-md px-4 py-2">
                    {isSubmitting ? "Loading" : "Signup"}
                </button>
            </div>
        </form>
    )
}