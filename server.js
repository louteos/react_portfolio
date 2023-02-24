const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8002;
const apiurl = require('./api/dbconnect')

app.use('/api',apiurl )

app.use(express.static( path.join(__dirname, 'public')))

app.get('/', (req,res) =>
  res.sendFile( path.join(__dirname, 'public/index.html'))
);

app.use((req, res) =>{
  res.status(404).sendFile( path.join(__dirname, 'public/nopage.html'))
})

app.listen(PORT, () => {
  console.log( `${PORT} 노드서버구동정상` )
})