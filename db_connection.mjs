import { createConnection } from 'mysql';

var conn= createConnection({
  host:"localhost", 
  user:"root", 
  password:"password",
  database: "hifit",
  port:3306, 
});




conn.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err.message);
      return;
    }
  
    console.log('Connected to database!');
  });

conn.query('INSERT INTO users (userID, username, password, email) VALUES (?, ?, ?, ?)', [2, 'Jane Snow', '67891', 'janesnow@example.com'], (err) => {
  if (err) {
    console.error('Error inserting user:', err.message);
    return;
  }

  console.log('User inserted successfully!');
});



conn.query('SELECT * FROM users', (err, results) =>{
  if (err) {
    console.error('Error fetching users:', err.message);
    return;
  }
  console.log('Retrieved users:', results);
});