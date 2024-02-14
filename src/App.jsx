import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'


function App() {

  return (
    <>
      <h1 className="text-3xl font-bold my-8 text-white">A Todo app with redux toolkit</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
