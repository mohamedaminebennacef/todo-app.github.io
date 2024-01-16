import React , {useEffect,useState} from 'react'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'
import axios from 'axios'
import {useNavigate,useParams} from 'react-router-dom'
import { useSnackbar } from 'notistack'

const UpdateTask = () => {
  const [content,setContent] = useState('');
  const [isCompleted,setIsCompleted] = useState('')
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate();
  const {id} = useParams();
  const {enqueueSnackbar} = useSnackbar()

  useEffect(() => {
    setLoading(true)
    axios.get(`http://localhost:5000/todos/${id}`)
    .then((response)=>{
      setContent(response.data.content)
      setIsCompleted(response.data.isCompleted)
      setLoading(false)
    })
    .catch((error) => {
      setLoading(false)
      console.log(error);
    })
  },[])
  const handleEditTask = () => {
    const task = {content,isCompleted};
    setLoading(true);
    axios
    .put(`http://localhost:5000/todos/${id}`,task)
    .then(() => {
      setLoading(false)
      enqueueSnackbar('Task updated successfully',{variant : 'success'})
      navigate("/")    
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
      <h1 className='text-3xl my-4'>Edit Task</h1>
      {loading ? <Spinner/> : ''}
      <div className='flex flex-col border-2 border-sky-700 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className="text-xl mr-4 text-gray-400">Content</label>
          <input type="text" value={content} onChange={(e) => setContent(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full text-black'/>
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-400">IsCompleted</label>
          <input type="text" value={isCompleted} onChange={(e) => setIsCompleted(e.target.value)} className="border-2 border-gray-500 px-4 py-2 w-full text-black"/>
        </div>
        <button className='p-2 bg-sky-700 m-8' onClick={handleEditTask}>Edit</button>
      </div>
    </div>
  )
}

export default UpdateTask