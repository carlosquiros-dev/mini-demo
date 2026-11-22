// React Hook Form: handles the input, validation and submit
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useStore } from './store.js'

export default function AddName() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const addName = useStore((state) => state.addName) // Zustand action
  const navigate = useNavigate() // React Router: go to another page from code

  const onSubmit = (data) => {
    addName(data.name)
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 w-72">
      {/* daisyUI "input" and "btn" components */}
      <input
        {...register('name', { required: 'Name is required' })}
        placeholder="Your name"
        className="input input-bordered"
      />
      {errors.name && <p className="text-red-600">{errors.name.message}</p>}
      <button className="btn btn-primary">Save</button>
    </form>
  )
}
