import { useCallback, useState } from "react";

//useMemo --> React.memo() --> Funciones Creacionales de componentes que deben memorizar algo
//useCallback --> React.useCallback() --> Memorizar valores listados en la dependencia. Funciones en línea
const MiComponente = () => {
    const [name, setName] = useState('')
    const names = ['Martín', 'Eric']

    const getName = useCallback(() => {
        //Obtenemos un nombre aleatorio
        const random = Math.floor(Math.random() * (names.length - 1))
        setName(names[random])
    }, [name],)

    const clearName = useCallback(() => setName(''), [],)

    return (
        <h1>Mi Componente</h1>
    )
}