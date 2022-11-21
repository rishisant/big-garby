

import React, {useState, useEffect} from 'react';//import './BaseStyle.css';
import './ManagerStyle.css';
import {raise_admin_bar} from './HomeFunctions';
import './TableStyle.css';

var test = "Test Query1";
let query_string = "";
var d = [];
var p = [];

function ViewOrders (){

    const [product, setProduct] = useState(false);
    let t = "";
    useEffect(() => {
        getProduct();
    }, []); 
    var count = 0;
    async function getProduct(test) {
        fetch('http://localhost:3001')
        .then(res => res.json())
        .then(res => {
            test = res[0].description;
            for (t in res) {
                if(count == 0){
                    document.getElementById("test_query_string").innerHTML += res[t].description + " | ";
                    document.getElementById("test_query_string1").innerHTML += res[t].price + " | ";
                }         
            }
            
            count ++;
            if (count  == 1){
                read_products();  
                read_price();
                for (var i = 0; i < d.length; i++) {
                    INITIAL_STATE.push({id: i, name: d[i], price: p[i]});
                }
                console.log(INITIAL_STATE);
            }
        })
    }
   
    function read_products(){
        var pstring = document.getElementById("test_query_string").innerHTML;
        d = pstring.split(" | ");
        console.log(d);
    }
    function read_price(){
        var pstring1 = document.getElementById("test_query_string1").innerHTML;
        p = pstring1.split(" | ");
        console.log(p);
    }

    var INITIAL_STATE= [];
    
    const [users, setUsers] = useState(INITIAL_STATE)

    const renderProducts = () => {
        return users.map(({ id, name, price }) => {
        return <tr key={id}>
        <td style={{ padding: '50px', border: '5px solid white', font: '25px white', color: 'white' }}>{name}</td>
        <td style={{ padding: '50px', border: '5px solid white', font: '25px white', color: 'white' }}>{price}</td>

        </tr>
        })
    }

    return (
        <div>
        
        <div style={{ margin: '50px' }}>
        </div>
        {/* The strings that we pull for query functions */}
        <div id="test_query_string" style={{visibility: 'hidden', fontSize: '0.1px' }}></div>
        <div id="test_query_string1" style={{visibility: 'hidden', fontSize: '0.1px' }}></div>

        <table className="table_s">
            <thead>
                <tr>
                <th>Product</th>
                <th>Price</th>
                </tr>
            </thead>
            <tbody>
            {renderProducts()}
            </tbody>
        </table>

        </div>
    );
    
};
export default ViewOrders;


