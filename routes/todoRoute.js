import express from 'express';
import {Todo} from '../models/todoModel.js';

const router = express.Router();

// route to add new todo
router.post('/' , async (request,response) => {
    try {
        if ( !request.body.content || !request.body.isCompleted ) {
            return response.status(400).send({message : 'send all required fields : title,isCompleted',})
        }
        const newTodo = {
            content : request.body.content,
            isCompleted : request.body.isCompleted,
        };
        const myTodo = await Todo.create(newTodo);
        return response.status(201).send({myTodo})

    } catch(error) {
        console.log(error.message)
        response.status(500).send({message : error.message})
    }
});

//route to get todos
router.get('/',async (request,response) => {
    try {
        const todos = await Todo.find({});
        return response.status(200).json({count : todos.length , data : todos})
    } catch (error) {
        console.log(error)
        response.status(500).send({message : error.message})
    }
});

// route to get todo by id
router.get('/:id',async (request,response) => {
    try {
        const {id} = request.params;
        const todo = await Todo.findById(id);
        return response.status(200).json(todo)
    } catch (error) {
        console.log(error)
        response.status(500).send({message : error.message})
    }
});

// route to update todo
router.put('/:id', async (request,response) => {
    try {
        if (!request.body.content || !request.body.isCompleted) {
            return response.status(400).send({message : "send all required fields : content , iscompleted"})
        }
        const {id} = request.params;
        const result = await Todo.findByIdAndUpdate(id,request.body)
        if (!result) {
            return response.status(404).send({message : "todo not found"})
        }
        return response.status(200).send({message : "todo updated successfully"})
    } catch (error) {
        console.log(error)
        response.status(500).send({message : error.message})
    }
});

// route to delete todo
router.delete('/:id', async (request,reponse) => {
    try {
        const {id} = request.params;
        const result = await Todo.findByIdAndDelete(id)
        if (!result) {
            return reponse.status(404).send({message : "todo not found"})
        }
        return reponse.status(201).send({message : "todo deleted successfully"})
    } catch (error) {
        console.log(error.message)
        reponse.status(500).send({message : error.message})
    }
});

export default router;
