import { useRef, useState } from "react"

type UpdateValue = {
    sumar: () => void, restar: () => void, reiniciar: () => void
}

export const useCounter = (initialValue: number) => {
    const [value, setValue] = useState(initialValue)
    const updateValue = useRef({
        sumar: () => setValue(oldValue => oldValue < 10 ? ++oldValue : oldValue),
        restar: () => setValue(oldValue => oldValue > 2 ? --oldValue : oldValue),
        reiniciar: () => setValue(initialValue)
    })
    return [value, updateValue.current] as [number, UpdateValue]
}