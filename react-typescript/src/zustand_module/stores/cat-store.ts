import { create } from "zustand"
import { immer } from "zustand/middleware/immer"
import { createSelectors } from "../utils/create-selector"

type CatType = {
    cats: {
        bigCat: number
        smallCat: number
    }
    increaseBigCat: () => void
    increaseSmallCat: () => void
    increaseBoth: () => void
    summary: () => string
}

export const useCatStore = createSelectors(create<CatType>()(immer((set, get) => ({
    cats: {
        bigCat: 0,
        smallCat: 0
   },
   //With Immer: easy to update nested state
   increaseBigCat: () => set((state) => { state.cats.bigCat++ }), 
   increaseSmallCat: () => set((state) => { state.cats.smallCat ++ }),
   increaseBoth: () => set((state) => {
    state.cats.bigCat++,
    state.cats.smallCat++
   }),
   summary: () => {
    const total = get().cats.bigCat + get().cats.smallCat
    return  `Total Cat: ${total}`
   }
}))))