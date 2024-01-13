import React , {useEffect,useState} from 'react'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'
import axios from 'axios'
import {useNavigate,useParams} from 'react-router-dom'

const UpdateTask = () => {
  const [content,setContent] = useState('');
  const [isCompleted,setIsCompleted] = useState('')
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate();
  const {id} = useParams()
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
      alert('An error happened. please check console')
      console.log(error);
    })
  },[])
  const handleEditTask = () => {
    const task = {content,isCompleted,};
    setLoading(true);
    axios
         .put(`http://localhost:5000/todos/${id}`,task)
         .then((response) =>{
            setLoading(false)
            navigate("/")    
         })
         .catch((error) => {
            setLoading(false)
            alert("An error happened. please check the console")
            console.log(error)
         })
  }
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Edit Task</h1>
      {loading ? <Spinner/> : ''}
      <div className='flex flex-col border-2 border-sky-4000 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className="text-xl mr-4 text-gray-500">Content</label>
          <input type="text" value={content} onChange={(e) => setContent(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'/>
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">IsCompleted</label>
          <input type="text" value={isCompleted} onChange={(e) => setIsCompleted(e.target.value)} className="border-2 border-gray-500 px-4 py-2 w-full"/>
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleEditTask}>Edit</button>
      </div>
    </div>
  )
}

export default UpdateTask