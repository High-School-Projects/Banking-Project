// // filepath: /c:/Users/HUH/Desktop/Project/poop/my-website-project/server.js
// const express = require('express');
// const mysql = require('mysql');
// const bodyParser = require('body-parser');
// const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Rahidman123@',
//     database: 'userinfo'
// });

// db.connect((err) => {
//     if (err) {
//         console.error('Error connecting to database:', err);
//         return;
//     }
//     const query = 'SELECT * FROM userlogins';
//     console.log(query);

//     console.log('Connected to database');
//     db.query(query, (err, results) => {
//         if (err) throw err;
//         alert(results); // Output the results of the query
//       });
// });

// const { username, password } = req.body;
// console.log('Received login request:', username, password); // Log received data

    

// app.listen(3000, () => {
//     console.log('Server running on port 3000');
// });