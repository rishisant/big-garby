function test () {
    const {Client, Pool} = require('pg');
    const pool = new Pool({
        user: process.env.PSQL_USER,
        host: process.env.PSQL_HOST,
        database: process.env.PSQL_DATABASE,
        password: process.env.PSQL_PASSWORD,
        port: process.env.PSQL_PORT,
        ssl: {rejectUnauthorized: false}
    });
}
const getProduct = () => {
    return new Promise(function(resolve, reject) {
        // console.log("getProduct");
        const {Client, Pool} = require('pg');
        const pool = new Pool({
        user: 'csce315_903_juntunen',
        host: 'csce-315-db.engr.tamu.edu',
        database: 'csce315_903_13',
        password: '630007600',
        port: 5432,
        ssl: {rejectUnauthorized: false}
        });
        pool.connect();
        // const result = pool.query('SELECT * FROM product;')
        // console.log(result);
        // console.log("got Product");
<<<<<<< HEAD
        pool.query('SELECT * FROM product;', (error, results) => {
=======
        pool.query('SELECT * FROM product limit 2', (error, results) => {
>>>>>>> aece0cd76e818ea7a6496ea1d3d48a96381658d2
        if (error) {
            console.log("bad");
            reject(error)
        }
        
        resolve(results.rows);
        console.log(results.rows[0]['description']);
        
        })
        console.log("here");
    }) 
}

module.exports = {
    getProduct
}
// app.listen(process.env.PSQL_PORT, () => {
//     console.log(`App server now listening to port ${process.env.PSQL_PORT}`);
// });

// app.get('/api/users', (req, res) => {
//     pool.query(`select * from product`, (err, rows) => {
//         if (err) {
//             res.send(err);
//         } else {
//             res.send(rows);
//         }
//     });
// });
