import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import IdCard from './components/IdCard.jsx'
import Work from './components/Work.jsx'
import Wrapped from './components/Wrapped.jsx'
import Scrapbook from './components/Scrapbook.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <IdCard />
        <Work />
        <Wrapped />
        <Scrapbook />
      </main>
      <Footer />
    </>
  )
}

export default App
