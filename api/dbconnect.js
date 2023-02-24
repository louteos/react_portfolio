const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const dbconfig = require('../db/dbconfig');
const conn = mysql.createPool(dbconfig);

router.use(express.urlencoded({extended: false}));



router.post('/', (req, res) => {
   
    var params = req.body;

    var contactQuery = ` insert into
                        lout_contact_table ( nm, company, mail, msg )
                        values ( ?, ?, ?, ? )
                    `

     console.log(params);


    conn.getConnection( ( err, connection ) => {
      if(err) throw console.log(" 이 에러가 보인다면 dB정보 틀린거임  : " + err);

      connection.query(contactQuery, (error, result) => {
        if(error) throw "여기 에러는 sql문 오류"+ error + result;
        res.send('성공'); 

      })
      connection.release();

    })
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