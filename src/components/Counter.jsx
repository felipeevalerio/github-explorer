import { useState } from "react"

// use =>  hook

export function Counter(){
    const [counter,setCounter] = useState(0) // set => Usado como padrão para estados
    function increment(){
        setCounter(counter + 1)
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>Increment</button>
        </div>
    )
}