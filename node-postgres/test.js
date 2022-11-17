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
        // pool.connect();
        // const result = pool.query('SELECT * FROM product;')
        // console.log(result);
        // console.log("got Product");
        pool.query('SELECT * FROM product', (error, results) => {
        if (error) {
            console.log("bad");
            reject(error)
        }
        
        resolve(results.rows);
        console.log(results.rows);
        
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
