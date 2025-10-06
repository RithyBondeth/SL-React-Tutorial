import React from "react"

function Loaded({ newFn }) {
    console.log("Loaded Rendered!")
    return <h1 className="m-5 p-5 bg-blue-300">Loaded Component</h1>
}

export default React.memo(Loaded)
// React.memo(Loaded) => Even if UseCallbackPage render so many times => Loaded Component render only 1 time
// Problem: But if we pass newFn() function as a prop from useCallbackPage to this component => Loaded Compoent still render whenever UseCallbackPage render
// Solution: So we can solve this by using useCallback() Hook: use newFn function as useCallback() hook