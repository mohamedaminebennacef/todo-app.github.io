import React, { useEffect, useState } from 'react' 
import axios from 'axios'
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import TodosCard from '../components/home/TodosCard';
import TodosTable from '../components/home/TodosTable';
import { VscAdd } from "react-icons/vsc";
import { RiAddCircleFill } from "react-icons/ri";

const Home = () => {

  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType,setShowType] = useState('table');

  useEffect(() => {
      setLoading(true);
      axios
        .get('http://localhost:5000/todos')
        .then((response) => {
          setTodos(response.data.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
  }, []);

  return (
    <div className='p-4 bg-gray-900 text-white shadow-lg h-screen'>
      <div className='flex justify-center items-center gap-x-4'>
        <button className='bg-sky-700 hover:bg-sky-600 px-4 py-1 rounded-lg' onClick={() => setShowType('table')}>Table</button>
        <button className='bg-sky-700 hover:bg-sky-600 px-4 py-1 rounded-lg' onClick={() => setShowType('card')}>Card</button>
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Task List</h1>
        <Link to='/todos/create'>
        <RiAddCircleFill size = "40" />

        </Link>
      </div>
      { loading ? (<Spinner />) : showType === 'table' ? ( <TodosTable todos = {todos} /> ) :  (<TodosCard todos = {todos}/>) }
    </div>
  )
}
export default Home