import { useState } from "react"

export const CustomProductHook = (initialState: number) => {
    const [counter, setCounter] = useState(initialState)

    const increaseBy = (value: number) => {
        setCounter(prev => Math.max(prev + value, 0))
    }
    return {
        counter,
        setCounter,
        increaseBy
    }
}
