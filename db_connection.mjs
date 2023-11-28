import { createConnection } from 'mysql2';

var conn= createConnection({
  host:"localhost", 
  user:"root", 
  password:"password"
});


conn.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err.message);
      return;
    }
  
    console.log('Connected to database!');
  });