import { useEffect, useLayoutEffect } from "react"

/*
    useLayoutEffect() works similarly to useEffect(). But it's called before UI gets mounted.
    
    - useEffect() gets called after printing the DOM elements.
    - useLayoutEffect() gets called before printing the DOM elements.

    useLayoutEffect()usaully used to: 
    - Adding Smooth Scroll
    - Animating Elements
    - Auto Focus Input Field 
*/

export default function UseLayoutEffectPage() {

    useEffect(() => {
        console.log("Message from useEffect")
    },[])

    useLayoutEffect(() => {
        console.log("Message from useLayoutEffect")
    },[])

    //When the component render: 
    //First: Message from useLayoueEffect
    //Second: Loaded the Content
    //Third: Message fromc useEffect

    return (
        <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center">
            <div>
            {Array(5).fill('').map((item, index) => (
                <li key={index}>{Math.pow(Math.random(), 10)}</li>
            ))}
            </div>
        </div>
    )
}