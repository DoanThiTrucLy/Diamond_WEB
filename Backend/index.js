import express, { urlencoded } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {connectDB} from './src/config/db.js'

import diamondRouter from './src/routes/diamond.route.js';
import productRouter from './src/routes/product.route.js';
import authRouter from './src/routes/auth.route.js';
import router from './src/routes/diamond.route.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: false }));

const port = process.env.PORT;

app.use('/diamond', diamondRouter);
app.use('/product',productRouter)
app.use('/auth',authRouter)

app.get('/', (req, res) => {
    res.send('Chuc Li xinh dep')
})
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})