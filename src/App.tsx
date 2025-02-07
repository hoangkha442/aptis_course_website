
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './page/Home.tsx'
import NavBar from './components/NavBar.tsx'
import Footer from './components/Footer.tsx'
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Home />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
