import { Route, Routes } from 'react-router-dom'
import Desk from './pages/Desk.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Portfolio from './pages/Portfolio.jsx'
import WorkWithMe from './pages/WorkWithMe.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Desk />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/work-with-me" element={<WorkWithMe />} />
    </Routes>
  )
}

export default App
