import { Link } from "react-router-dom"
import {PiBookOpenTextLight} from 'react-icons/pi'
import {BiUserCircle} from 'react-icons/bi'
import {AiOutlineEdit} from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineDelete} from 'react-icons/md'

const TaskSingleCard = ({task}) => {
    return (
        <div key={task._id} className="border-2 border-gray-600 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl">

            <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">{task.isCompleted === 'true' ? 'isCompleted' : 'Not Completed'}</h2>
            <h4 className="my-2 text-gray-500">{new Date(task.updatedAt).getFullYear()}-{new Date(task.updatedAt).getMonth() + 1}-{new Date(task.updatedAt).getDate()}</h4>

            <div className="flex justify-start items-center gap-x-2">
                <PiBookOpenTextLight className="text-red-300 text-2xl" />
                <h2 className="my-1">{task.content}</h2>
            </div>

            <div className="flex justify-start items-center gap-x-2">
                <BiUserCircle className="text-red-300 text-2xl" />
                <h2 className="my-1">{task.isCompleted}</h2>
            </div>

            <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
                <Link to={`/todos/details/${task._id}`}>
                    <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
                </Link>
                <Link to={`/todos/update/${task._id}`}>
                    <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
                </Link>
                <Link to={`/todos/delete/${task._id}`}>
                    <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
                </Link>
            </div>
        </div>
    )
}

export default TaskSingleCard