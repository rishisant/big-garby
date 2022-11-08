// const {Client} = require('pg');
// const client = new Client({
//     user: 'csce315_903_juntunen',
//     password: '630007600',
//     host: 'csce-315-db.engr.tamu.edu',
//     database: 'csce315_903_13',
//     port: 5432,
// });
// console.log('Connecting to database...')
// client.connect()
// .then(() => console.log('Connected successfully'))
// .catch(e => console.log('Connection failed'))
// .finally(() => client.end());
//---------------------------------

// const Pool = require('pg').Pool
// const pool = new Pool({
//     user: 'csce315_903_juntunen',
//     password: '630007600',
//     host: 'csce-315-db.engr.tamu.edu',
//     database: 'csce315_903_13',
//     port: 5432,
// });

// pool.query('SELECT * from product', (err, res) => {
//     if (err) {
//         console.log("Failed")
//     }
//     else {
//         console.log("Success")
//     }
    
//     pool.end()
// })





//-----------------------------

// const {Client} = require('pg');

// const client = new Client({
//     user: 'csce315_903_juntunen',
//     password: '630007600',
//     host: 'csce-315-db.engr.tamu.edu',
//     database: 'csce315_903_13',
//     port: 5432,
// });

// client.connect();

// client.query('SELECT * FROM product;', (err, res) => {
//     if (!err) {
//         console.log(res.rows);
//     } else {  
//         console.log(err);
//     }
//     client.end();
// });






//-----------------------------



// const { Pool, Client } = require("pg");

// const credentials = {
//     user: 'csce315_903_juntunen',
//     password: '630007600',
//     host: 'csce-315-db.engr.tamu.edu',
//     database: 'csce315_903_13',
//     port: 5432,
// };

// // Connect with a connection pool.

// async function poolDemo() {
//   const pool = new Pool(credentials);
//   const now = await pool.query("SELECT NOW()");
//   await pool.end();

//   return now;
// }

// // Connect with a client.

// async function clientDemo() {
//   const client = new Client(credentials);
//   await client.connect();
//   const now = await client.query("SELECT NOW()");
//   await client.end();

//   return now;
// }

// // Use a self-calling function so we can use async / await.

// (async () => {
//   const poolResult = await poolDemo();
//   console.log("Time with pool: " + poolResult.rows[0]["now"]);

//   const clientResult = await clientDemo();
//   console.log("Time with client: " + clientResult.rows[0]["now"]);
// })();


//-----------------------------

// const express = require('express')
// const Pool = require('pg').Pool
// // // // const app = express()
// // // // const port = 3001

// // // // app.get('/', (req, res) => {
// // // //   res.status(200).send('Hello World!');
// // // // })

// // // // app.listen(port, () => {
// // // //   console.log(`App running on port ${port}.`)
// // // // })



// // Create express app
// const app = express();
// const port = 3000;
// // Create pool
// const pool = new Pool({
//     user: 'csce315_903_juntunen',
//     password: '630007600',
//     host: 'csce-315-db.engr.tamu.edu',
//     database: 'csce315_903_13',
//     port: 5432,
//     //user: process.env.PSQL_USER,
//     //host: process.env.PSQL_HOST,
//     //database: process.env.PSQL_DATABASE,
//     //password: process.env.PSQL_PASSWORD,
//     //port: process.env.PSQL_PORT,
//     ssl: {rejectUnauthorized: false}
// });
// // Add process hook to shutdown pool
// process.on('SIGINT', function() {
//     pool.end();
//     console.log('Application successfully shutdown');
//     process.exit(0);
// });
     
// app.set("view engine", "QueryTest.js");
// app.get('/', (req, res) => {
//     const data = {name: 'Mario'};
//     res.render('index', data);
// });
// app.get('/user', (req, res) => {
//     teammembers = []
//     pool
//         .query('SELECT * FROM teammembers;')
//         .then(query_res => {
//             for (let i = 0; i < query_res.rowCount; i++){
//                 teammembers.push(query_res.rows[i]);
//             }
//             const data = {teammembers: teammembers};
//             console.log(teammembers);
//             res.render('user', data);
//         });
// });
// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`);
// });



