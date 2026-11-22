// Reusable React component: written once, used for every user.
// It receives the data it shows through "props" (name and email).
export default function UserCard({ name, email }) {
  return (
    <div className="flex items-center gap-3 rounded-box bg-base-200 p-3">
      {/* Circle with the first letter of the name */}
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-primary-content">
        {name[0]}
      </div>
      <div>
        <p className="font-bold">{name}</p>
        <p className="text-sm text-gray-500">{email}</p>
      </div>
    </div>
  )
}
