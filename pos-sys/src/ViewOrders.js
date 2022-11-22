

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
        //window.location.reload();
    }, []); 
    var count = 0;
    var INITIAL_STATE= [];
    const [users, setUsers] = useState(INITIAL_STATE)
    function read_products(){
        console.log("getting product in array");
        var pstring = document.getElementById("test_query_string").innerHTML;
        d = pstring.split(" | ");
       /// console.log("Description " + d);
    }
    function read_price(){
 
        console.log("getting price in array");
        var pstring1 = document.getElementById("test_query_string1").innerHTML;
        p = pstring1.split(" | ");
       // console.log("Price: "+ p);
    }
    async function getProduct() {
        fetch('http://localhost:3001') 
        .then(res => res.json())
        .then(res => {
            console.log("About to get info from query");
            test = res[0].description;
            for (t in res) {
                if(count == 0){
                    document.getElementById("test_query_string").innerHTML += res[t].description + " | ";
                    document.getElementById("test_query_string1").innerHTML += res[t].price + " | ";
                    
                }         
            }
            
            count ++;
            if (count  == 1){
                console.log("if statement for creation of arrays");
                read_products();  
                read_price();
                for (var i = 0; i < d.length; i++) {
                    INITIAL_STATE.push({id: i, name: d[i], price: p[i]});
                }
                //console.log("Initial State: " + INITIAL_STATE);
            }
            console.log("End of getProduct");
            
            
        })
    }

    const renderAll = () => {
        // sets a timeout to render products after the data has been fetched
        setTimeout(() => {
            renderProducts();
        }, 3000);
        setTimeout(() => {
            console.log("briggamonoだよ");
            }, 3500);
    }

    const renderProducts = () => {
        console.log("render products");
        return users.map(({ id, name, price }) => {
        return <tr key={id}>
        <td >{name}</td>
        <td >{price}</td>
        {console.log("rendered products")}
        
        </tr>
         
        })
    }
    
    return  (
        <div>
        {/* <script  src="http://code.jquery.com/jquery-1.9.1.min.js" ></script>
        <script>
            $(document).ready(function(){
            $("#myTable td").click(function() {
         
                var column_num = parseInt( $(this).index() ) + 1;
                var row_num = parseInt( $(this).parent().index() )+1;
        
                $("#result").html( "Row_num =" + row_num + "  ,  Rolumn_num ="+ column_num );
            });
            });
        </script> */}
        <div>
        {console.log("Website creation begun")}
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
<<<<<<< HEAD
            
            {renderProducts()}  
=======
            {renderAll()}  
>>>>>>> b9c1d2f6ca1f1af9d1698fa24f81ab68770e120d
            <tr onClick={()=> console.log("clicked")}></tr>
            </tbody>
        </table>
        <div style = {{color: 'white'}}> Howdy</div>
        {console.log("code done")}
        </div>
        </div> 
    );  
    
};
export default ViewOrders;  


