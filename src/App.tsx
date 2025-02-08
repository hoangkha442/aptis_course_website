
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './page/HomePage/Home.tsx'
import NavBar from './components/NavBar.tsx'
import Footer from './components/Footer.tsx'
import Introduction from './page/Introduction/index.tsx'
import BackToTop from './components/BackToTop/index.tsx'
function App() {
  return (
    <>
      <NavBar />
      <BackToTop scrollThreshold={200} />
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/gioi-thieu' element={<Introduction />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
