import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const todosTable = ({todos}) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
    <thead>
      <tr>
        <th className='border border-slate-600 rounded-md'>id</th>
        <th className='border border-slate-600 rounded-md'>Content</th>
        <th className='border border-slate-600 rounded-md'>isCompleted</th>
        <th className='border border-slate-600 rounded-md'>Operations</th>
      </tr>
    </thead>
    <tbody>
      {
        todos.map((todo, index) => (
          <tr key={todo._id} className='h-8'>
            <td className='border border-slate-700 rounded-md text-center'>{index + 1}</td>
            <td className='border border-slate-700 rounded-md text-center'>{todo.content}</td>
            <td className='border border-slate-700 rounded-md text-center'>{todo.isCompleted === 'true' ? "Completed" : "Not Completed"}</td>
            <td className='border border-slate-700 rounded-md text-center'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/todos/details/${todo._id}`}> <BsInfoCircle className='text-2xl text-green-400' />   </Link>
                <Link to={`/todos/update/${todo._id}`}>  <AiOutlineEdit className='text-2xl text-yellow-400' /> </Link>
                <Link to={`/todos/delete/${todo._id}`}>  <MdOutlineDelete className='text-2xl text-red-600' />  </Link>
              </div>
            </td>
          </tr>
        ))
      }
    </tbody>
  </table>
  )
}
export default todosTable