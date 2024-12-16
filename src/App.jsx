
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import { AddEmp } from './pages/add_emp/AddEmp'
import { NotFound } from './pages/not_found/NotFound'
import { Home } from './pages/home/Home'
import './styles/NavBar.css'
import './styles/App.css'
import { Read } from './pages/read/Read'
import { ReadList } from './pages/read/ReadList'

function App() {
  return (
    <>
      <NavBar />
      <div className='body-container'>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Home />} />
          <Route path='add-emp' element={<AddEmp />} />
          <Route path='/read' element={<Read />} />
          <Route path='/read-list' element={<ReadList />} />
        </Routes>
      </div>
    </>
  )
}

export default App
