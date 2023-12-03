const express = require('express');
const request = require('request');
const cors = require('cors');

const app = express();

app.get('/proxy-image', cors(),(req, res) => {
  const imageUrl = req.query.url;
  if(imageUrl.startsWith('https://via.placeholder.com')) {
    request.get(imageUrl).pipe(res);
  } else {
    res.send('Invalid URL')
  }
  
});

app.listen(3000, () => {
  console.log('Proxy server listening on port 3000');
});