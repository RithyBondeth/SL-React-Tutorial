import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

type CounterType = {
    counter: number
    increment: () => void
    decrement: () => void
}

export const useCounter = create<CounterType>()(devtools((set) => ({
    counter: 0,
    increment: () => set((state) => ({ counter: state.counter + 1 })),
    decrement: () => set((state) => ({ counter: state.counter - 1 })),
})))

type NestedCounterType = {
    nested: { 
        counter: number,
        time: number
    },
    incrementCounter: () => void
    incrementTime: () => void
    incrementBoth: () => void
}

//Persist wil be save data in localstorage
export const useNestedCounter = create<NestedCounterType>()(persist((set) => ({
    nested: {
        counter: 0,
        time: 0,
    },
    incrementCounter: () => set((state) => ({
        nested: { ...state.nested, counter: state.nested.counter + 1 },
    })),
    incrementTime: () => set((state) => ({
        nested: { ...state.nested, time: state.nested.time + 1 }
    })),
    incrementBoth: () => set((state) => ({
        nested: { time: state.nested.time + 1, counter: state.nested.counter + 1 }
    }))
}), { name: "nested counter store", storage: createJSONStorage(() => sessionStorage) })) //Data will be save in ssession storage

export type EmployeeType = {
    name: {
        first: string,
        last: string,
    },
    job: {
        company: {
            name: string,
            position: string
        }   
    }
}

export const useEmployeeStore = create(() => ({}))