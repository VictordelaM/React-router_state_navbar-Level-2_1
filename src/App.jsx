
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/landing/Landing'
import Kontakt from './pages/kontakt/Kontakt'
import Galerie from './pages/galerie/Galerie'
import Speisekarte from './pages/speisekarte/speisekarte'
import Open from './pages/open/Open'

function App() {
  return (
    <>
      <Routes>
        <Route path='/'element={<Landing />} />
        <Route path='/speisekarte' element = {<Speisekarte/>}/>
        <Route path='/contact' element = {<Kontakt/>}/>
        <Route path='/galerie' element = {<Galerie/>}/>
        <Route path='/open' element = {<Open/>}/>
      </Routes>
    </>
  )
}

export default App