const mysql = require('mysql2');
  const config = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '9811459187',
    database: 'luxelien'
  });

  const poolPromise = config.promise();
  poolPromise.getConnection()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
  });

  

module.exports= poolPromise