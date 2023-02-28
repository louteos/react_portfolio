const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const dbconfig = require('../db/dbconfig');
const conn = mysql.createPool(dbconfig);

const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.post('/', (req, res) => {

  var param = req.body;

  var nm = param.body.nm;
  var company = param.body.company;
  var mail = param.body.mail;
  var msg = param.body.msg;

  var contactQuery = ` 
                      INSERT INTO
                      lout_contact_table ( id, nm, company, mail, msg )
                      VALUES ( null , '${nm}', '${company}', '${mail}', '${msg}')
                     `

  console.log(param)

  conn.getConnection((err, connection) => {
    if (err) throw console.log(" 이 에러가 보인다면 dB정보 틀린거임  : " + err);

    connection.query(contactQuery, [nm, company, mail, msg], (error, result) => {
      if (error) throw "여기 에러는 sql문 오류" + error + result;
      res.send(result);

    })
    connection.release();

  })

})

module.exports = router;