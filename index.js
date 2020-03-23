const express = require('express')
const app = express()

app.get('/', function (req, res) {
	res.send('Hello World');
})


// 포트설정
const PORT = 3000;

// console.log 로 현재 포트를 출력
function handleListening() {
	console.log(`Listening on: http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);