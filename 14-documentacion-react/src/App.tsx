import './App.css'
import { ChangeEvent, useState } from "react"

//const str = 'Hola Mundo'
//const num = 8
type AppProps = { saludo: string, numero?: number }

/**
 * Aplicación principal sobre la que trabajamos
 * @param props 
 * @returns 
 */
function App(props: AppProps) {
  const [darkMode, setDarkMode] = useState(false)
  const [taskList, setTaskList] = useState<string[]>([])
  const [newTask, setNewTask] = useState('')

  /**
   * 
   * @returns Cambia el modo de light -> dark y viceversa
   */
  const toggleDark = () => setDarkMode(!darkMode)
  /**
   * Esta función cambia el estado newTask a través del input
   * @param e - Evento de change proveniente de react
   * @returns 
   */
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setNewTask(e.target.value)

  /**
   * 
   * @returns Añade una nueva tarea a la lista  de tareas
   */
  const addNewTask = () => setTaskList([...taskList, newTask])

  /**
   * 
   * @returns true si la lista está vacía
   */
  const taskListEmpty = () => taskList.length === 0;

  return (
    <div className={`App ${darkMode && 'dark'}`}>
      <h1>{props.saludo}</h1>
      <button className='toggleDark' onClick={toggleDark}>Cambiar modo</button>
      <h2>Task List</h2>
      <div>
        <input style={{ marginRight: 5 }} type="text" value={newTask} onChange={handleChange} />
        <button className='toggleDark' onClick={addNewTask}>Añadir Task</button>
        <div>
          {taskListEmpty() ? <h3>La lista de tareas está vacía</h3> : taskList.map((t, i) => <p key={i}>{t}</p>)}
        </div>
      </div>
    </div>
  )
}

export default App