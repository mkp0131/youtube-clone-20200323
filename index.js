import express from "express";
const app = express()


// 포트설정
const PORT = 3000;

// console.log 로 현재 포트를 출력
const handleListening = () => {
	console.log(`Listening on: http://localhost:${PORT}`);
}

const handleHome = (req, res) => {
	res.send('Yahoooooo');
}

app.get('/', handleHome);

app.listen(PORT, handleListening);