// // linkFTB : links front end to back end
// // test_text -> string to be displayed in the tinybox (part of querytest.js)
// const {Client, Pool} = require('pg');
// //const dotenv = require('dotenv').config();

// // Connect to the database

// import pg from 'pg'
const {Client, Pool} = require('pg');
// const Pool = require('pg').Pool
//const dotenv = require('dotenv').config();

// Connect to the database
const pool = new Pool({
    user: "csce315_903_rehmat",
    host: "csce-315-db.engr.tamu.edu",
    database: "csce315_903_13",
    password: "528000730",
    port: 5432,
    ssl: {rejectUnauthorized: false}
});
// // Now connect to the database

export function linkFTB() {
    console.log("text has been linked\n");
    
    var test_text = "";
    var btn = document.getElementsByClassName("tinybox")[0];
    pool.connect()
    .then (pool.query('SELECT * FROM orders LIMIT 5')
    .then(res => {
        console.log(res.rows);
        test_text = res.rows;
        btn.innerHTML = test_text;
        })
    .finally(() => pool.end()))
    .catch(e => console.error(e.stack))
    // Run a query 
    // pool.connect()
    // pool.connect();
    // pool.query('SELECT * FROM product where product_id = 113')
    // .then(
    //     res => {
    //         console.log(res.rows);
    //         test_text = res.rows;
    //         btn.innerHTML = test_text;
    //     }
    // )
    // .finally(() => pool.end());
    
    
} 