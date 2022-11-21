
import {useNavigate} from 'react-router-dom';
import React, {useState, useEffect} from 'react';//import './BaseStyle.css';
import './ManagerStyle.css';
import {raise_admin_bar} from './HomeFunctions';

var test = "Test Query1";
let query_string = "";
///var x = "";
var d = [];
var p = [];
var key1 = [1];

const ViewOrders = () => {

    const [product, setProduct] = useState(false);
    let t = "";
    useEffect(() => {
        getProduct();
    }, []);
    var count = 0;
    var key_count = 1;
    async function getProduct(test) {
        fetch('http://localhost:3001')
        .then(res => res.json())
        .then(res => {
            // grab the description value of the first object in the array
            
            // console.log(res[0].description)
            //document.getElementById("to_test").innerHTML = res[0].description;
            // console.log(res[0].description);
            // for (t in res) {
            //     console.log(res[t].description);
            // }
            test = res[0].description;
            for (t in res) {
                if(count == 0){
                    document.getElementById("test_query_string").innerHTML += res[t].description + " | ";
                    document.getElementById("test_query_string1").innerHTML += res[t].price + " | ";
                    key_count++;
                    key1.push(key_count);
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
        console.log(key1);
    }

    // const INITIAL_STATE = [
    //     { id: 1, name:  test, age: 21, hobby: 'coding' },
    //     { id: 2, name: 'Anna', age: 19, hobby: 'reading' },
    //     { id: 3, name: 'Bobby', age: 16, hobby: 'swimming' },
    //     { id: 4, name: 'Lauren', age: 25, hobby: 'running' }
    //   ]
    var INITIAL_STATE= [];
    
    
    const [users, setUsers] = useState(INITIAL_STATE)

    // const renderUsers = () => {
    //     return users.map(({ id, name, age, hobby }) => {
    //     return <tr key={id} >
    //     <td style={{ padding: '50px', border: '5px solid white', font: '25px white', color: 'white' }}>{id}</td>
    //     <td style={{ padding: '50px', border: '5px solid white', font: '25px white', color: 'white' }}>{name}</td>
    //     <td style={{ padding: '50px', border: '5px solid white', font: '25px white', color: 'white' }}>{age}</td>
    //     <td style={{ padding: '50px', border: '5px solid white', font: '25px white', color: 'white' }}>{hobby}</td>
    //     </tr>
    //     })
    // }
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
        <h1 id="to_test">here</h1>
        
        {/* <div class="homebutton" onLoad={getProduct}>{getProduct()}</div> */}
        </div>
        <div id="test_query_string" style={{visibility: 'visible' }}></div>
        <div id="test_query_string1" style={{visibility: 'visible' }}></div>
        <table>
            <tbody>
            {renderProducts()}
            </tbody>
        </table>
        </div>
    );
    
};
export default ViewOrders;


