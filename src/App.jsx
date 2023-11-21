import './App.css'
import { NotFound } from './components/pages/NotFound';
import { HomePage, AboutPage, CatergoryPage, WorkPage, Navbar } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/category' element={<CatergoryPage />} />
          <Route path='/work' element={<WorkPage/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
