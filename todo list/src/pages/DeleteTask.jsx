import { React, useState } from 'react';
import axios from 'axios'
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useParams, useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack';

const DeleteTask = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const {enqueueSnackbar} = useSnackbar()

  const handleDeleteTask = () => {
    setLoading(true);
    axios.delete(`http://localhost:5000/todos/${id}`)
      .then(() => {
        setLoading(false)
        enqueueSnackbar('Task deleted successfully',{variant : 'success'})
        navigate('/');
      })
      .catch((error) => {
        setLoading(false)
        enqueueSnackbar('Error',{variant : 'error'})
        console.log(error)

      })
  }
  return (
    <div className='p-4 bg-gray-900 text-white shadow-lg h-screen'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Delete Task</h1>
      {loading ? <Spinner/> : '' }
      <div className='flex flex-col items-center border-2 border-sky-700 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are you sure you want to delete this book?</h3>
        <button className='p-4 bg-red-600 text-white m-8 w-full' onClick = {handleDeleteTask}>Yes, Deleted it</button>
      </div>
      
    </div>
  )
}

export default DeleteTask