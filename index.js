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
	if (req.cookies.co) {
		res.send(homeCookies);
	} else {
		res.send(homeTemplate);
	}
}

const homeTemplate = `
	<h1>입력폼</h1>
	<form method="POST">
		<input name="title" type="text" />
		<input name="desc" type="text" />
		<button type="submit">submit</button>
	</form>
`;

const homeCookies = `
	<h1>쿠키있음</h1>
	<a href="/forget">쿠키지우기</a>
`;

const handleForm = (req, res) => {
	if (req.body.title) {
		res.cookie(req.body.title, 1, {maxAge: 1000 * 60 * 60 });
	}
	res.redirect('back');
}


const handleProfile = (req, res) => {
	res.send('Profile');
}

const handleForget = (req, res) => {
	res.clearCookie('co');
	res.redirect('back');
}

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(cookieParser());
app.use(helmet());
app.use(morgan('dev'));



// route
app.get('/', handleHome);

app.post('/', handleForm);

app.get('/forget', handleForget);

app.get('/profile', handleProfile);

app.listen(PORT, handleListening);