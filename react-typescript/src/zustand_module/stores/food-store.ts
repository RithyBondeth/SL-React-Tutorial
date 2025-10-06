import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

export type FoodStoreType = {
    fish: number
    addOneFish: () => void
    removeOneFish: () => void
    removeAllFish: () => void
}

export const useFoodStore = create<FoodStoreType>()(devtools(persist((set) => ({
    fish: 0,
    addOneFish: () => set((state) => ({ fish: state.fish + 1 })),
    removeOneFish: () => set((state) => ({ fish: state.fish - 1})),
    removeAllFish: () => set(() => ({ fish: 0 })) 
}), { name: "food store" })))
