const express = require('express');
const client = require('./db/client');
const { getAllUsers } = require('./db/users');

const server = express();
client.connect;

server.use((req, res, next) => {
  console.log('HITTING SERVER')
  next();
})

server.get('/users', async (req, res, next) => {
  try {
    const results = await getAllUsers();
    res.send(results)
  } catch(ex) {
    console.log('error getting users at user api route')
  }
})

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
});
