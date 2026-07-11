import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import EntranceHall from './museum/EntranceHall.jsx'
import Wing from './museum/Wing.jsx'
import FutureWing from './museum/FutureWing.jsx'
import SpecialExhibition from './museum/SpecialExhibition.jsx'
import Ambience from './museum/Ambience.jsx'
import { WINGS } from './museum/wings.js'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function App() {
  const location = useLocation()
  return (
    <>
      <ScrollToTop />
      {/* keying by pathname replays the slow room-entry fade on every door */}
      <div className="room" key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<EntranceHall />} />
          {WINGS.map((wing) => (
            <Route
              key={wing.slug}
              path={`/${wing.slug}`}
              element={wing.slug === 'future-wing' ? <FutureWing /> : <Wing wing={wing} />}
            />
          ))}
          <Route path="/special-exhibition" element={<SpecialExhibition />} />
          <Route path="*" element={<EntranceHall />} />
        </Routes>
      </div>
      <Ambience />
    </>
  )
}

export default App
