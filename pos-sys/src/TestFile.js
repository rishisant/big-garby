// // linkFTB : links front end to back end
// // test_text -> string to be displayed in the tinybox (part of querytest.js)
// const {Client, Pool} = require('pg');
// //const dotenv = require('dotenv').config();

// // Connect to the database
// const pool = new Pool({
//     user: "csce315_903_juntunen",
//     host: "csce-315-db.engr.tamu.edu",
//     database: "csce315_903_13",
//     password: "630007600",
//     port: process.env.PSQL_PORT,
//     ssl: {rejectUnauthorized: false}
// });

// // Now connect to the database
// console.log('Connecting to database...')
// pool.connect();
// // Run a query
// pool.query('SELECT * FROM product where product_id = 113')
// .then(res => console.log(res.rows))
// .finally(() => pool.end());
import res from './dbConnect.js';
export function linkFTB() {
    console.log("text has been linked\n");
    const test_text = "This is a test text";
    console.log(res.rows[0]['total_price'])
    var btn = document.getElementsByClassName("tinybox")[0];
    btn.innerHTML = test_text;
} 