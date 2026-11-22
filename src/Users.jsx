// Axios: makes the HTTP request to the API
import axios from 'axios'
// TanStack Query: runs the request, caches the result and gives loading/error states
import { useQuery } from '@tanstack/react-query'
// Zustand: global store shared with the form page
import { useStore } from './store.js'
// Our own reusable component
import UserCard from './UserCard.jsx'

const getUsers = () =>
  axios.get('https://jsonplaceholder.typicode.com/users').then((res) => res.data)

export default function Users() {
  const { data, isLoading, isError } = useQuery({ queryKey: ['users'], queryFn: getUsers })
  const names = useStore((state) => state.names)

  if (isLoading) return <span className="loading loading-spinner" />
  if (isError) return <p className="text-red-600">Error loading users</p>

  return (
    // daisyUI "card" component
    <div className="card bg-base-100 shadow w-96">
      <div className="card-body">
        <h2 className="card-title">Users</h2>
        <ul className="list-disc pl-6">
          {names.map((name) => <li key={name} className="text-green-600">{name}</li>)}
        </ul>
        {/* The same UserCard component is reused once per user */}
        <div className="flex flex-col gap-2">
          {data.map((user) => (
            <UserCard key={user.id} name={user.name} email={user.email} />
          ))}
        </div>
      </div>
    </div>
  )
}
