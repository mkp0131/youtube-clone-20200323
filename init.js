import app from './app';


// 포트설정
const PORT = 3000;

// console.log 로 현재 포트를 출력
const handleListening = () => {
	console.log(`😈 Listening on: http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);