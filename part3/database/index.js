const Pool = require('pg').Pool
const pool = new Pool({
  user: 'myuser',
  host: 'localhost',
  database: 'instadeep',
  password: 'mypassword',
  port: 5432,
})

module.exports = pool;