import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Planner from './pages/Planner.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/planner" element={<Planner />} />
    </Routes>
  )
}

export default App
