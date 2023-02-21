const express = require('express'); // 서버기능 구현을 위한 코어모듈 express 호출
const path = require('path'); // 경로기능 제어하기 위해 모듈 호출
const cors = require('cors'); // node 서버 이외 다른 서버가 존재함을 알 수 있음
const app = express(); // express 실행

app.use(cors()); // 다른 도메인의 명령 수용

app.get('/', (req,res) => { // get, post, use(서버 자체에서 라우터 만들 때)
  res.send({message:'hello'});
});

app.listen(8000, ()=>{ // listen: 실제 실행문
  console.log('server is running on 8000')
})