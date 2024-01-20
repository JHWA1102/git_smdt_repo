import './App.css'
import Header from './components/header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/loginCredential/Login'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Login />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
