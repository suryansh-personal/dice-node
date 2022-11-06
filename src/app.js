const app = require('express')();
const http = require('http').Server(app);
const port = 8888;

app.get('/', (req, res) => {
  res.json({"name": "Deployed Successfully"});
});

app.get('/dice', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});

