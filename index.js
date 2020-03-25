import express from "express";
import morgan from 'morgan';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const app = express()


// 포트설정
const PORT = 3000;

// console.log 로 현재 포트를 출력
const handleListening = () => {
	console.log(`Listening on: http://localhost:${PORT}`);
}

const handleHome = (req, res) => {
	res.send('Yahoooooo@@@@@@');
}

const handleProfile = (req, res) => {
	res.send('Profile');
}


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan('combined'));



// route
app.get('/', handleHome);

app.get('/profile', handleProfile);

app.listen(PORT, handleListening);