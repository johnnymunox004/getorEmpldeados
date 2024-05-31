import { useState } from 'react'
import './App.css'
import AppRoutes from './routes/routes';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <AppRoutes />
    </Router>
    </>
  )
}

export default App
