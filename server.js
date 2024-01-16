import express from 'express'
import mongoose from 'mongoose';
import router from './routes/todoRoute.js';
import cors from 'cors';
import { PORT, mongoDBURL } from './config.js';

const app = express();

app.use(express.json());
app.use(cors())
app.use('/todos', router);

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send("Welcome to TodoApp");
})

app.listen(PORT, () => { console.log(`App is listening on port ${PORT}`) })
console.log("Connecting to MongoDB:", mongoDBURL);
mongoose.connect(mongoDBURL)
    .then(() => {
        console.log("app successfully connected to database")
    })
    .catch((error) => {console.log(error)})

