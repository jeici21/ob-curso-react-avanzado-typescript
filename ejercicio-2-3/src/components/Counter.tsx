import { useCounter } from "../hooks/useCounter"

const Counter = () => {
    const [counter, setCounter] = useCounter(5)

    return (
        <div>
            <h1>useCounter Hook</h1>
            <p>{counter}</p>
            <button onClick={() => setCounter.sumar()}>Incrementar</button>
            <button onClick={() => setCounter.restar()}>Decrementar</button>
            <button onClick={() => setCounter.reiniciar()}>Reiniciar</button>
        </div>
    )
}

export default Counter