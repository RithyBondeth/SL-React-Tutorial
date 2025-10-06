import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from 'zod'

type FormFieldType = {
    brand: string,
    model: string,
    description: string,
    instock: boolean,
    shippingDate: string,
    image: FileList
}

const ACCEPTED_IMAGE_MIME_TYPES = [ "jpeg", "jpg", "png", "webp"] 
const MAX_FILE_SIZE = 1024 * 1024 * 5

const brandOptions = ["Apple", "Xiaomi", "Samsung", "Oppo", "Vivo"] as const 

const productSchema = z.object({
    brand: z.enum(brandOptions, { message: "Brand is required" }),
    model: z.string().min(1, { message: "Model is required" }),
    description: z.string().min(1, { message: "Description is required" }),
    instock: z.boolean().optional(),
    shippingDate: z.string().min(1, { message: "shippingDate is required" })
            .transform((date) => new Date(date))
            .refine((date) => date > new Date(), { message: "shippingDate must be in the future" }),
    image: z.instanceof(FileList)
            .refine((image) => image.length > 0, { message: "At least 1 image required" })
            .refine((image) => image[0] && image[0].size <= MAX_FILE_SIZE, { message: "Image must be smaller than 5MB" })
            .refine((image) => image[0] && ACCEPTED_IMAGE_MIME_TYPES.some(type => image[0].type.includes(type)), { message: "Only 'jpeg', 'jpg', 'png', 'webp' formats are supported" })

})

export default function CreateProductPage() {
    const { register, handleSubmit, formState: { isSubmitting, errors }, reset } = useForm<FormFieldType>({
        defaultValues: {
            model: "",
            description: "",
            instock: false,
            shippingDate: "",
        },
        resolver: zodResolver(productSchema)
    })

    const onSubmit: SubmitHandler<FormFieldType> =  async (data) => {  
        await new Promise((resolve) => setTimeout((resolve), 1500))

        console.log(data)
        reset()
    }
    return (
        <>
            <form className="absolute left-1/2 -translate-x-1/2 p-5 px-10 rounded-lg w-fit text-black bg-gray-200" onSubmit={handleSubmit(onSubmit)}>
                <p className="text-xl text-center font-bold underline mb-5">Add New Product</p>
                <div className="w-full flex flex-col items-start mb-4">
                    <label htmlFor="brand">Product Brand</label>
                    <select 
                        id="brand"
                        className="select select-bordered select-sm w-full mt-1"
                        {...register("brand")}
                    >
                        <option disabled selected>Product Brand</option>
                        <option value={brandOptions[0]}>Apple</option>
                        <option value={brandOptions[1]}>Xiaomi</option>
                        <option value={brandOptions[2]}>Samsung</option>
                        <option value={brandOptions[3]}>Oppo</option>
                        <option value={brandOptions[4]}>Vivo</option>
                    </select>
                    {errors.brand && <p className="text-xs text-red-500">{errors.brand.message}</p>}
                </div>
                <div className="w-full flex flex-col items-start mb-4">
                    <label htmlFor="model">Product Model</label>
                    <input 
                        type="text" id="model" 
                        placeholder="Enter Model..." 
                        {...register("model")}
                        className="my-input mt-1"
                    />
                    {errors.model && <p className="text-xs text-red-500">{errors.model.message}</p>}
                </div>
                <div className="w-full flex flex-col items-star mb-4">
                    <label htmlFor="description">Product Description</label>
                    <textarea 
                        id="description" 
                        placeholder="Product Description..." 
                        {...register("description")}
                        className="textarea textarea-bordered textarea-md w-full mt-1"
                    />
                    {errors.description && <p className="text-xs text-red-500">{errors.description.message}</p>}
                </div>
                <div className="w-full flex flex-col items-start mb-4">
                    <label>Product Status</label>
                    <div className="flex items-center my-2">
                        <input 
                            type="checkbox" id="instock"
                            className="checkbox checkbox-sm mr-1"
                            {...register("instock")}
                        />
                        <label htmlFor="instock">Instock</label>
                    </div>
                </div>
                <div className="w-full flex justify-between items-center gap-5 mb-5">
                    <div className="w-1/3 flex flex-col items-start">
                        <label htmlFor="shippingSate">Shipping Date</label>
                        <input 
                            type="date" id="shippingDate" 
                            className="p-2 mt-1 rounded-md outline-none w-full"
                            {...register("shippingDate")}
                        />
                        {errors.shippingDate && <p className="text-xs text-red-500">{errors.shippingDate.message}</p>}
                    </div>
                    <div className="w-2/3 flex flex-col items-start">
                        <label htmlFor="image">Upload Image</label>
                        <input 
                            type="file" id="image"
                            className="file-input file-input-bordered file-input-md w-full mt-1"
                            {...register("image")}
                            onChange={(e) => console.log(e.target.value)}
                        />
                        {errors.image && <p className="text-xs text-red-500">{errors.image.message}</p>}
                    </div>
                </div>
                <div className="w-full flex justify-end">
                    <button type="submit" disabled={isSubmitting} className="py-2 px-4 text-sm rounded-md text-white bg-gray-800">
                        {isSubmitting ? "Loading..." : "Submit"}
                    </button>
                </div>
            </form>
        </>
    )
}