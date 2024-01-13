import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import BackButton from '../components/BackButton'
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner'
const CreateTask = () => {
  const [content, setContent] = useState('');
  const [isCompleted, setIsCompleted] = useState('');
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const handleSaveTask = () => {
    const task = {content,isCompleted}
    setLoading(true)
    axios.post("http://localhost:5000/todos", task)
         .then(() => {
          setLoading(false)
          navigate('/')
        })
        .catch((error) => {
          setLoading(false)
          alert('an error happened. please check the console')
          console.log(error)
        })
  }
  return (
    <div className='p-4'>
    <BackButton />
    <h1 className='text-3xl my-4'>Create Book</h1>
    {loading ? <Spinner /> : ''}
    <div className='flex flex-col border-2 border-sky-4000 rounded-xl w-[600px] p-4 mx-auto'>
      <div className='my-4'>
        <label className="text-xl mr-4 text-gray-500">Content</label>
        <input type="text" value={content} onChange={(e) => setContent(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full' />
      </div>
      <div className='my-4'>
        <label className="text-xl mr-4 text-gray-500">Iscompleted</label>
        <input type="text" value={isCompleted} onChange={(e) => setIsCompleted(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full' />
      </div>
      <button className='p-2 bg-sky-300 m-8' onClick={handleSaveTask}>Save</button>
    </div>
  </div>
  )
}

export default CreateTask