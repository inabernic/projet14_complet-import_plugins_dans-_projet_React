import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import CreateEmployee from './pages/CreateEmployee/CreateEmployee'
import ListOfEmployee from './pages/ListOfEmployee/ListOfEmployee'
import Error from './pages/Error'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createEmployee" element={<CreateEmployee />} />
        <Route path="/listEmployees" element={<ListOfEmployee />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App