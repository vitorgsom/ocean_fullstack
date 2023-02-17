import ReadAll from './components/ReadAll'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      Hello, world JSX!
      <ReadAll/>
    </div>
  )
}

export default App
