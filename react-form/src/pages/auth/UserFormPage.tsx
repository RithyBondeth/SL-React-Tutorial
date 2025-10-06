import { SubmitHandler, useForm } from "react-hook-form"

interface FormFields {
    name: string
    email: string
    password: string   
}

export default function UserFormPage() {
    const { register, handleSubmit, formState: {errors, isSubmitting, isSubmitSuccessful, isSubmitted}, reset } = useForm<FormFields>()

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1500))
        console.log(data)
       
        //Clear Form Value
        reset()
    }

    return ( 
    <>
        <form className="form text-white bg-gray-700" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center">
                <span className="material-icons">account_circle</span>
                <p className="text-xl underline">Create New User</p>
            </div>
            <div className="w-full flex flex-col items-start mt-4">
                <label htmlFor="name">Name</label>
                <input 
                    type="text" id="name" 
                    placeholder="Enter Name..." 
                    className="my-input"
                    {...register("name", { required: "Name cannot be empty!" })}
                />
                {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
            </div>
            <div className="w-full flex flex-col items-start mt-4">
                <label htmlFor="email">Email</label>
                <input 
                    type="text" id="email" 
                    placeholder="Enter Email..." 
                    className="my-input"
                    {...register("email", {
                        required: "Email cannot be empty!",
                        pattern: {
                            value:  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ ,
                            message: "Invalid email address"
                        } ,
                    })}
                />
                {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
            </div>
            <div className="w-full flex flex-col items-start mt-4">
                <label htmlFor="password">Password</label>
                <input 
                    type="password" id="password"
                    placeholder="Enter Password..." 
                    className="my-input"
                    {...register("password", {
                        required: "Password cannot be empty!" ,
                        minLength: {
                            value: 8,
                            message: "Password must be at least 8 character(s)"
                        },
                        pattern: {
                            value: /\d/,
                            message: "Password must be contain at least one number"
                        }
                    })}
                />
                {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}
            </div>
            <div className="w-full flex justify-end mt-8">
                <button disabled={isSubmitting} type="submit" value="Login" className="text-gray-700 bg-white rounded-md px-4 py-2">
                    {isSubmitting ? "Loading..." : "Create"}
                </button>
            </div>
        </form>
        {isSubmitSuccessful && <p>Successful</p>} {/* Only true when the submit form has no error */}
        {isSubmitted && <p>Submitted</p>} {/* /Always true whenever we click submit button even if the submit form has error */}
    </>
    )
}