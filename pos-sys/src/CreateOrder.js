

import React, {useState, useEffect} from 'react';//import './BaseStyle.css';
import './ManagerStyle.css';
import './TableStyle.css';
import {useNavigate} from 'react-router-dom';
import {raise_admin_bar} from './HomeFunctions';

import { useRowSelect, useTable } from 'react-table';
var test = "Test Query1";
let query_string = "";
var d = [];
var p = [];
var orders = [];
function ViewOrders (){
    const navigate = useNavigate();
    const [product, setProduct] = useState(false);
    var t = "";
    useEffect(() => {
        getProduct();
    }, []); 
    var count = 0;
    var INITIAL_STATE = [];
    const [users, setUsers] = useState(INITIAL_STATE)
    // function read_products(){
    //     //console.log("getting product in array");
    //     var pstring = document.getElementById("test_query_string").innerHTML;
    //     d = pstring.split(" | ");
    //    /// console.log("Description " + d);
    // }
    // function read_price(){
 
    //     //console.log("getting price in array");
    //     var pstring1 = document.getElementById("test_query_string1").innerHTML;
    //     p = pstring1.split(" | ");
    //    // console.log("Price: "+ p);
    // }
    async function getProduct(t) {
        fetch('http://localhost:3001')
        .then(res => res.json())
        .then(res => { 
            //console.log("About to get info from query");
            test = res[0].description;
            for (t in res) {
                if(count == 0){
                    document.getElementById("test_query_string").innerHTML += res[t].description + " | ";
                    document.getElementById("test_query_string1").innerHTML += res[t].price + " | ";
                    d.push(res[t].description);
                    p.push(res[t].price);
                }         
            }
            for (var i = 0; i < d.length; i++) {  
                INITIAL_STATE.push({id: i, name: d[i], price: p[i]});
            }  
            count ++;
            // if (count  == 1){   
            //     //console.log("if statement for creation of arrays");
            //     read_products();  
            //     read_price();
            //     for (var i = 0; i < d.length; i++) { 
            //         INITIAL_STATE.push({id: i, name: d[i], price: p[i]});
            //     }
            //     //console.log("Initial State: " + INITIAL_STATE);
            // }
            console.log(p);
            console.log(d);
            console.log("End of getProduct");
            
        })
    }
    
    // const renderProducts = () => {
    //     console.log("render products");
    //     getProduct();
    //     return users.map(({ id, name, price }) => {
    //     {console.log("mapped")}
    //     return <tr key={id} > 
    //     <td >{name}</td>  
    //     <td >{price}</td> 
    //     {console.log("rendered products")}
    //     </tr> 
          
    //     }) 
    // }
    
    function checkFlag() { 
        if(p.length < 1 || d.length < 1) {
            console.log("wait");
           window.setTimeout(checkFlag, 100); /* this checks the flag every 100 milliseconds*/
        } else { 
          return;
        }
    }  
    
 
    const renderProducts = () =>{
        console.log("render products");
        ////var wait = await getProduct();
        //setTimeout(() => console.log(JSON.stringify(p)), 6000);
        //checkFlag();
        console.log("waited");
        console.log("price: " + p);  
        console.log("description: " + d);
        return users.map(({ id, name, price }) => { 
        {console.log("mapped")} 
           
        return <tr key={id} >  
        <td >{name}</td>  
        <td >{price}</td>   
        {console.log("rendered products")}   
        </tr>   
           
        }) 
    } 

    // function highlight_row() {
    //     var table = document.getElementById('table_s');
    //     var cells = table.getElementsByTagName('tr');

    //     for (var i = 0; i < c ells.length; i++) {
    //         // Take each cell
    //         var cell = cells[i];
    //         // do something on onclick event for cell
    //         cell.onclick = function () {
    //             // Get the row id where the cell exists
    //             var rowId = this.parentNode.rowIndex;

    //             var rowsNotSelected = table.getElementsByTagName('tr');
    //             for (var row = 0; row < rowsNotSelected.length; row++) {
    //                 rowsNotSelected[row].style.backgroundColor = "";
    //                 rowsNotSelected[row].classList.remove('selected');
    //             }
    //             var rowSelected = table.getElementsByTagName('tr')[rowId];
    //             rowSelected.style.backgroundColor = "yellow";
    //             rowSelected.className += " selected";

    //             var msg = 'The ID of the company is: ' + rowSelected.cells[0].innerHTML;
    //             msg += '\nThe cell value is: ' + this.innerHTML;
    //             console.log(msg);
    //         }
    //     }

    // }
    
    return (
        <div>
        {/* {console.log("Website creation begun")} */}
        <div style={{ margin: '50px' }}>
        </div>
        {/* The strings that we pull for query functions */}
        <div id="test_query_string" style={{visibility: 'hidden', fontSize: '0.1px' }}></div>
        <div id="test_query_string1" style={{visibility: 'hidden', fontSize: '0.1px' }}></div>
        <div>
        <table className="table_s" > 
            <thead>
                <tr > 
                <th>Product</th>  
                <th>Price</th> 
                </tr>  
            </thead>    
            <tbody> 
            {renderProducts()}    
            </tbody>  
        </table>
        </div>  
        
        <div className="homebutton" id="add_product"  >Add to Order</div>

        </div>  
    );
      
};
export default ViewOrders;




// import React, { Component,useState, useEffect } from 'react'

// var d = [];
// var p = [];
// var count = 0;

// var t;
// function read_products(){
//     console.log("getting product in array");
//     var pstring = document.getElementById("test_query_string").innerHTML;
//     d = pstring.split(" | ");
//     /// console.log("Description " + d);
// }
// function read_price(){

//     console.log("getting price in array");
//     var pstring1 = document.getElementById("test_query_string1").innerHTML;
//     p = pstring1.split(" | ");
//     // console.log("Price: "+ p);
// }
// class Table extends Component {
//     constructor(props) {
//       super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
//       this.state = { //state is by default an object
//          students: []
//       }
//    } 
//    getProduct() {
//         fetch('http://localhost:3001')
//         .then(res => res.json())
//         .then(res => {
//             //console.log("About to get info from query");
            
//             for (t in res) {
//                 if(count == 0){
//                     document.getElementById("test_query_string").innerHTML += res[t].description + " | ";
//                     document.getElementById("test_query_string1").innerHTML += res[t].price + " | ";
                    
//                 }         
//             }
              
//             count ++;
//             if (count  == 1){
//                 console.log("if statement for creation of arrays");
//                 read_products();    
//                 read_price();
//                 for (var i = 0; i < d.length; i++) {
//                     this.state.students.push({id: i, name: d[i], price: p[i]});
//                 }
//                 console.log("D" + d);
//                 console.log("P" + p);
//                 console.log("Initial State: " + this.state.students);
//                 //console.log("Initial State: " + INITIAL_STATE);
//             }
//             //console.log("End of getProduct");
//         })
//     }
    
   

//    renderTableData() {
//     return this.state.students.map((student, index) => {
//        const { id, name, price } = student //destructuring
//        return (
//           <tr key={id}>
//              <td>{name}</td>
//              <td>{price}</td>

//           </tr>
//        )
//     })
//     }

//     // renderTableHeader() {
//     //     let header = Object.keys(this.state.students[0])
//     //     return header.map((key, index) => {
//     //        return <th key={index}>{key.toUpperCase()}</th>
//     //     })
//     //  }
  
//      render() {
//         return (
//            <div>
//             {this.getProduct()}
//             <div id="test_query_string" style={{visibility: 'hidden', fontSize: '0.1px' }}></div>
//             <div id="test_query_string1" style={{visibility: 'hidden', fontSize: '0.1px' }}></div>
//               <h1 id='title' style = {{color: 'white'}}>React Dynamic Table</h1>
//               <table id='students' style = {{color: 'white'}}>
//                  <tbody>
//                     {/* <tr>{this.renderTableHeader()}</tr> */}
//                     {this.renderTableData()}
//                  </tbody>
//               </table>
//            </div>
//         )
//      }

// }

// export default Table      

// import React, { Component } from 'react';  
// import ReactTable from "react-table";  

  
// class Order extends Component {  
//   render() {  
//      const data = [{  
//         name: 'Ayaan',  
//         age: 26  
//         },{  
//          name: 'Ahana',  
//          age: 22  
//          },{  
//          name: 'Peter',  
//          age: 40      
//          },{  
//          name: 'Virat',  
//          age: 30  
//          },{  
//          name: 'Rohit',  
//          age: 32  
//          },{  
//          name: 'Dhoni',  
//          age: 37  
//          }]  
//      const columns = [{  
//        Header: 'Name',  
//        accessor: 'name'  
//        },{  
//        Header: 'Age',  
//        accessor: 'age'  
//        }]  
//     return (  
//           <div>  
//               <ReactTable  
//                   data={data}  
//                   columns={columns}  
//                   defaultPageSize = {2}  
//                   pageSizeOptions = {[2,4, 6]}  
//               />  
//           </div>        
//     )  
//   }  
// }  
// export default Order;  