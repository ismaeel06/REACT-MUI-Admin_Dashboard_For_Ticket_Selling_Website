import express from 'express';
import dotenv from 'dotenv';
import usersDataRoutes from './Routes/usersDataRoutes.js';

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.use('/api/users', usersDataRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});