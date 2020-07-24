import express from 'express';
import cors from 'cors';

//Routes
import routes from './routes';
import path, { dirname } from 'path';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);