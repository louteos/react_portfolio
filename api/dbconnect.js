const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const dbconfig = require('../db/dbconfig');
const conn = mysql.createPool(dbconfig);

router.use(express.urlencoded({extended: false}));


// var mybatisMapper = require('mybatis-mapper');
// mybatisMapper.createMapper(['./mapper/reactSQL.xml']);

var format = { language : 'sql', indent : '  '}


router.post('/', (req, res) => {
   
    var params = req.body;

    var listQuery = ` insert into
                        lout_contact_table ( nm, company, mail, msg )
                      values ( nm, company, mail, msg )
                    `

     console.log(params)


    // conn.getConnection( ( err, connection ) => {
    //   if(err) throw console.log(" 이 에러가 보인다면 dB정보 틀린거임  : " + err);

    //   connection.query(listQuery, (error, result) => {
       
    //     if(error) throw "여기 에러는 sql문 오류"+ error + result; // result를 받지 못하는 상황
    //     res.send('성공' -> insert 된것); 

    //   })
    //   connection.release(); // 위의 연결 끝내기 그래야 다음 서버 접속자 대기에서 사용으로

    // })

    
    
        
})


// router.get('/', (req, res)=>{
//     var params = req.body;
    
//     var query = (
//                 params.mapper,
//                 params.mapperid,
//                 params,
//                 format
//     );

//     conn.getConnection ( (err, connection) => {
//         if(err) throw

//         connection.query(query, (error, result) => {
//             if(error) throw
            
//             if(params.crud == ''){
//                 res.send(result);
//             }else(
//                 res.send("succ")
//             )
//         })

//         connection.release();
//     })
// })