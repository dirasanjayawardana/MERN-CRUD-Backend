import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

mongoose.connect('mongodb+srv://dirasanjayawardana:dira123@cluster0.13giys5.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));

app.use(express.json());
app.use(UserRoute);

app.listen(5000, ()=> console.log('Server up and running...'));