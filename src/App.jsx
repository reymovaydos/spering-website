import './App.css'
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
        </Routes>
      </Router>
    </div>
  )
}

export default App
