import { About } from './pages/About'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Project } from './pages/Project'
import { Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<About/>} path='/'></Route>
      <Route element={<Project/>} path='/projects'></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
