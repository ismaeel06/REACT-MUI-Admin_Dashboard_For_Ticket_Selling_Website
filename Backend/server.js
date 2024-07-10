import express from 'express';
import dotenv from 'dotenv';
import usersDataRoutes from './Routes/usersDataRoutes.js';
import colors from 'colors';
import connectDB from './Config/db.js';
import cors from 'cors';


dotenv.config();
connectDB();

const port = process.env.PORT || 5000;

const app = express();

app.use(cors(
    {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true
    }

));

app.use(express.json());

app.use('/api/users', usersDataRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});