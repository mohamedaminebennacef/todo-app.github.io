import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import CreateTask from './pages/CreateTask';
import ShowTask from './pages/ShowTask';
import ShowTasks from './pages/ShowTasks';
import UpdateTask from './pages/UpdateTask';
import DeleteTask from './pages/DeleteTask';

const App = () => {
  return (
    <Routes>
      <Route path = '/' element = {<Home/>}/>
      <Route path = '/todos/create' element = {<CreateTask/>}/>
      <Route path = '/todos/details/:id' element = {<ShowTask/>}/>
      <Route path = '/todos/update/:id' element = {<UpdateTask/>}/>
      <Route path = '/todos/delete/:id' element = {<DeleteTask/>}/>
    </Routes>
  )
}
export default App
