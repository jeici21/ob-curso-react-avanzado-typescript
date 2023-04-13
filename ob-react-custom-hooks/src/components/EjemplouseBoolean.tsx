import { useEffect, useRef, useState } from "react"

type UpdateValue = {
    toggle: () => void, on: () => void, off: () => void
}

//useBoolean Hook
const useBoolean = (initialValue: boolean) => {
    const [value, setValue] = useState(initialValue)
    const updateValue = useRef({
        toggle: () => setValue(oldValue => !oldValue), on: () => setValue(true), off: () => setValue(false)
    })
    return [value, updateValue.current] as [boolean, UpdateValue]
}

const EjemplouseBoolean = () => {
    const [lista, setLista] = useState([])

    //Uso de Hook useBoolean
    const [cargando, setCargando] = useBoolean(false)
    const [error, setError] = useBoolean(false)

    //Al iniciar el componente, cargamos la lista
    useEffect(() => {
        setCargando.on()//cargando = true
        fetch('https://reqres.in/users').then(response => response.json()).then(setLista)
        .catch((error: Error) => {
            alert(`Ha ocurrido un error: ${error}`)
            setError.on()
        }).finally(() => setCargando.off())
    }, [lista, setCargando, setError])

    return (
        <div>
            {cargando ? 'Cargando...' : null}
            {error ? 'Ha ocurrido un error' : null}
        </div>
    )
}

export default EjemplouseBoolean