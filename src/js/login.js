// filepath: /c:/Users/HUH/Desktop/Project/poop/my-website-project/src/js/login.js
const mysql = require('mysql');
function validateForm(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    const db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Rahidman123@',
        database: 'userinfo'
    });

    db.connect((err) => {
        if (err) {
            console.error('Error connecting to database:', err);
            return;
        }
        const query = 'SELECT * FROM userlogins';
        console.log(query);

        console.log('Connected to database');
        db.query(query, (err, results) => {
            if (err) throw err;
            alert(results); // Output the results of the query
        });
    });
}

document.getElementById('login-form').addEventListener('submit', validateForm);