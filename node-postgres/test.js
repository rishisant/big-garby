
const {Client, Pool} = require('pg');
const pool = new Pool({
    user: 'csce315_903_juntunen',
    host: 'csce-315-db.engr.tamu.edu',
    database: 'csce315_903_13',
    password: '630007600',
    port: 5432,
    ssl: {rejectUnauthorized: false}
});
//get orders function with a query

const getOrders = async () => {
    //test addorder
    return new Promise(function(resolve, reject) {
        pool.query('SELECT * FROM orders', async (error, results) => {
        if (error) {
            console.log("bad");
            reject(error)
        }
        console.log("here1");
        //console.log(results.rows[0]['product_id']);
        //get the description of the product in each order and replace the product id with the description
        pool.query('SELECT * FROM product', (error, results2) => {
            if (error) {
                console.log("bad");
                reject(error)
            }
            console.log("here");
            //console.log(results.rows[0]['product_id']);
            for (var i = 0; i < results.rows.length; i++){
                var temp = results.rows[i]['product_ids'];  
                var temp2 = [];
                for (var j = 0; j < temp.length; j++){
                    for (var k = 0; k < results2.rows.length; k++){
                        if (temp[j] == results2.rows[k]['product_id']){
                            temp2.push(results2.rows[k]['description']);
                            //console.log(results2.rows[k]['description']);
                        }
                    }
                }
                results.rows[i]['product_ids'] = temp2;
            }

        })




        //wait 2 seconds
        await new Promise(r => setTimeout(r, 1500));


        resolve(results.rows);
        //console.log(results.rows[0]['description']);
        })
        
        //console.log("here");
    }) 
}
const addOrder = async (order) => { 
    id_list = "{";
    quant_list = "{";
    total_price = 0;
    async function get_ids(){
        return new Promise((resolve, reject) => {
            for (var i = 0; i < order.length; i++){
                pool.query("SELECT * from product where description='" + String(order[i].name) + "';", (error, get_id) => {
                    id_list += String(get_id.rows[0]['product_id']) + ",";
                    console.log(get_id.rows[0]['product_id']);
                    console.log("in loop", id_list);
                });
                //add quantity to string list
                quant_list += String(order[i].quantity) + ",";
                //add price to total price
                total_price += order[i].price * order[i].quantity;

            }
            resolve();
        });
           
    }
    //wait for 2 seconds
    get_ids()
    // await new Promise(resolve => get_ids());
    //wait until above loop is done using await promise
    await new Promise(resolve => setTimeout(resolve, 2000));
    id_list = id_list.slice(0, -1);
    id_list += "}";
    quant_list = quant_list.slice(0, -1);
    quant_list += "}";
    //get the date and time 
    var date = new Date();
    var date_string = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    //put 0 in front of time if less than 10
    if (date.getMinutes() < 10){
        date_string = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":0" + date.getMinutes() + ":" + date.getSeconds();
    }
    if (date.getSeconds() < 10){
        date_string = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":0" + date.getSeconds();
    }
    if (date.getMinutes() < 10 && date.getSeconds() < 10){
        date_string = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":0" + date.getMinutes() + ":0" + date.getSeconds();
    }
    //get max id from order table
    var max_id = 0;
    function get_max_id(){
        return new Promise((resolve, reject) => {
            pool.query("SELECT MAX(id) from orders;", (error, get_id) => {
                max_id = String(get_id.rows[0]['max']+1);
                console.log(max_id);
            });
            resolve();
        });
    }
    get_max_id();
    await new Promise(resolve => setTimeout(resolve, 1500));
    //max_id = String(max_id + 1);
    total_price = String(total_price);
    console.log(date_string);
    console.log(id_list);
    console.log(quant_list);
    console.log(total_price);
    console.log("max_id", max_id);
        //     //"INSERT INTO orders(id, order_num, product_ids, in_progress, is_completed, total_price, date) VALUES(" + Main.order_id + ", " + Main.order_num + ", '" + id_list + "', FALSE, TRUE, " + total_price + ", '" + date + " " + time + "');"

    //make query string
    var query_string = "INSERT INTO orders(id, order_num, product_ids, in_progress, is_completed, total_price, date, quantity) VALUES(" + max_id + ", " + max_id + ", '" + id_list + "', FALSE, TRUE, " + total_price + ", '" + date_string + "', '" + quant_list + "');";
    console.log(query_string);
    //add order to database
    return new Promise((resolve, reject) => {
        pool.query(query_string , (error, results) => {
            if (error) {
                throw error
            }
            console.log("added order");
        });
        resolve();
    });


    // return new Promise (function(resolve, reject){
        
    //     //"INSERT INTO orders(id, order_num, product_ids, in_progress, is_completed, total_price, date) VALUES(" + Main.order_id + ", " + Main.order_num + ", '" + id_list + "', FALSE, TRUE, " + total_price + ", '" + date + " " + time + "');"
        
    //     //remove last comma
    //     //id_list = id_list.slice(0, -1);
        
        
    //     pool.connect();
    //     pool.query('SELECT * FROM product', (error, results) => {
    //     if (error) {
    //         console.log("bad");
    //         reject(error)
    //     }
    //     resolve(results.rows);
    //     console.log(results.rows[0]['description']);
    //     })
    // })
}

const getProduct = async () => {
    //test addorder
    return new Promise(function(resolve, reject) {
        pool.query('SELECT * FROM product order by product_id', (error, results) => {
        if (error) {
            console.log("bad");
            reject(error)
        }
        //console.log(results.rows[0]['product_id']);
        resolve(results.rows);
        //console.log(results.rows[0]['description']);
        })
        
        //console.log("here");
    }) 
}


module.exports = {
    getProduct,
    addOrder,
    getOrders
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
