import './App.css'
import Counter from './components/Counter'
import Tasklist from './components/lists/TaskList'

function App() {
  return (
    <div className="App">
      <Counter />
      <Tasklist />
    </div>
  )
}

export default App