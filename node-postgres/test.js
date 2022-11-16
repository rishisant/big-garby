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
    console.log("test");
}
const getProduct = () => {
    return new Promise(function(resolve, reject) {
        console.log("getProduct");
        pool.query('SELECT * FROM prodcut', (error, results) => {
        if (error) {
            reject(error)
        }
        resolve(results.rows);
        })
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
