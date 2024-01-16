import React , {useEffect,useState} from 'react';
import BackButton from '../components/BackButton';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';

const ShowTask = (props) => {
  const [todo,setTodo] = useState({});
  const [loading,setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5000/todos/${id}`)
    .then((response) => {
      setTodo(response.data)
      setLoading(false)
    }) 
    .catch((error) => {
      console.log(error)
      setLoading(false)
    })
  }, [])

  return (
    <div className='p-4 bg-gray-900 text-white shadow-lg h-screen'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Show task</h1>
      { loading ? (<Spinner/>) : (
        <div className='flex flex-col border-2 border-sky-700 rounded-xl w-fit p-4'>
          <div className='my-4'><span className='text-xl mr-4 text-gray-500'>ID</span> <span>{todo._id}</span></div>
          <div className='my-4'><span className='text-xl mr-4 text-gray-500'>Content</span><span>{todo.content}</span></div>
          <div className='my-4'><span className='text-xl mr-4 text-gray-500'>isCompleted</span><span>{todo.isCompleted}</span></div>
          <div className='my-4'><span className='text-xl mr-4 text-gray-500'>Create Time</span><span>{new Date(todo.createdAt).toString()}</span></div>
          <div className='my-4'><span className='text-xl mr-4 text-gray-500'>Last Update Time</span><span>{new Date(todo.updatedAt).toString()}</span></div>
        </div>
      )}
      </div>
  )
}

export default ShowTask