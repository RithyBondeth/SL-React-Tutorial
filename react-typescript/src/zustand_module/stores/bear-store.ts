import { create } from "zustand"
import { persist } from "zustand/middleware"

const initialBearVaue = {
    bear: 0
}

export const useBearStore = create<typeof initialBearVaue>()(
    persist(() => initialBearVaue, { name: "bear store" })
)

//Seperate Action from State
export const addOneBear = () => {
    useBearStore.setState((state) => ({ bear: state.bear + 1 }))   
}

export const removeOneBear = () => {
    useBearStore.setState((state) => ({ bear: state.bear -1 })) 
}