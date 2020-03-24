// const express = require('express')
import express from "express";
const app = express()


// 포트설정
const PORT = 3000;

// console.log 로 현재 포트를 출력
function handleListening() {
	console.log(`Listening on: http://localhost:${PORT}`);
}

function handleHome(req, res) {
	res.send('Yahoooooo')
}

app.get('/', handleHome);

app.listen(PORT, handleListening);