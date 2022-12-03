const client = require('./client');

async function getAllUsers() {
  try {
    const {rows} = await client.query(`
      SELECT * FROM users;
    `)
    
    return rows;
  } catch(ex) {
    console.log('error getting all users at DB adapter getAllUsers')
  }
}

module.exports = {
  getAllUsers
}
