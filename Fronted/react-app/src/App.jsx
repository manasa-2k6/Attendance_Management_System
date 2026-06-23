import './App.css'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import { Navigate, Routes, Route } from 'react-router-dom'
import Students from './pages/Students'
import Attendance from './pages/Attendance'
import Reports from './pages/Reports'
import UserContext from './components/UserContext'

function App() {
  const value = 'GLOBAL INFORMATION'

  return (
    <UserContext.Provider value={value}>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <main className="col-md-9">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/students" element={<Students />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </UserContext.Provider>
  )
}

export default App
