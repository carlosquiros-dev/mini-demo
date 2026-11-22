// React Router: navigation between two pages without reloading the browser
import { Routes, Route, Link } from 'react-router-dom'
import Users from './Users.jsx'
import AddName from './AddName.jsx'

export default function App() {
  return (
    <div className="p-6">
      {/* daisyUI "navbar" component + Tailwind spacing */}
      <nav className="navbar bg-base-200 rounded-box mb-6 gap-4 px-4">
        <Link to="/" className="btn btn-ghost">Users</Link>
        <Link to="/add" className="btn btn-ghost">Add name</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/add" element={<AddName />} />
      </Routes>
    </div>
  )
}
