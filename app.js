import express from "express";
import morgan from 'morgan';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { userRouter } from './router';

const app = express()

app.use(cookieParser());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan('dev'));

const handleHome = (req, res) => {
	res.send('HOME');
}

// route
app.get('/', handleHome);

app.use('/user', userRouter);




export default app;