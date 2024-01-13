import express from 'express'
import mongoose from 'mongoose';
const mongoDBURL = 'mongodb+srv://root:root@movie-store.z5ido0a.mongodb.net/todos-collection?retryWrites=true&w=majority'
import router from './routes/todoRoute.js';
import cors from 'cors'

const app = express();

// middleware for parsing our request body
app.use(express.json()); // allow express to use json body
app.use(cors())
app.use('/todos',router);

app.get('/',(request,response) => {
    console.log(request)
    return response.status(234).send("Welcome to TodoApp");
})

mongoose.connect(mongoDBURL)
        .then(() => {
            console.log("app successfully connected to database")
            app.listen(5000,() => { console.log(`App is listening on port 5000`) } )
        })
        .catch((error) => {console.log(error)})