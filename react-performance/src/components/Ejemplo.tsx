import { memo, useState } from "react"

export default function Ejemplo() {
    const names = ['Martín', 'Eric']
    const [name, setName] = useState('')

    const getName = () => {
        const random = Math.floor(Math.random() * (names.length - 1))
        return names[random]
    }

    const clearName = () => setName('')
    const obtainName = () => setName(getName())

    return (
        <div>
            <h1>Ejemplo de uso de React Memo</h1>
            <NombresAleatorios name={name} clearName={clearName} />
            <button onClick={() => obtainName()}>Generar Nombre</button>
        </div>
    )
}

type Props = { 
    name: string, clearName(): void 
}

export const NameComponent = (props: Props) => {
    console.log("Renderizando de nuevo");

    return (
        <div>
            <h2>{props.name}</h2>
            <button onClick={() => props.clearName()}>Borrar Nombre</button>
        </div>
    )
}

function namesAreEqual(prevProps: Props, nextProps: Props) {
    return prevProps.name !== nextProps.name
}

export const NombresAleatorios = memo(NameComponent, namesAreEqual)