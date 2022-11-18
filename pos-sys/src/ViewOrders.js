
import {useNavigate} from 'react-router-dom';
import React, {useState, useEffect} from 'react';//import './BaseStyle.css';
import './ManagerStyle.css';
import {raise_admin_bar} from './HomeFunctions';

var test = "Test Query1";
let query_string = "";


const INITIAL_STATE = [
  { id: 1, name: 'Tommy', age: 21, hobby: 'coding' },
  { id: 2, name: 'Anna', age: 19, hobby: 'reading' },
  { id: 3, name: 'Bobby', age: 16, hobby: 'swimming' },
  { id: 4, name: 'Lauren', age: 25, hobby: 'running' }
]

const ViewOrders = () => {
    const [product, setProduct] = useState(false);
    var t;
    useEffect(() => {
        getProduct();
    }, []);
    function getProduct() {
        fetch('http://localhost:3001')
        .then(res => res.json())
        .then(res => {
            // grab the description value of the first object in the array
            
            // console.log(res[0].description)
            t = document.getElementById("to_test").innerHTML = res[0].description
        })
        return t;
    }
    const [users, setUsers] = useState(INITIAL_STATE)

    const renderUsers = () => {
        return users.map(({ id, name, age, hobby }) => {
        return <tr key={id} >
        <td style={{ padding: '50px', border: '5px solid white' }}>{id}</td>
        <td style={{ padding: '50px', border: '5px solid white' }}>{name}</td>
        <td style={{ padding: '50px', border: '5px solid white' }}>{age}</td>
        <td style={{ padding: '50px', border: '5px solid white' }}>{hobby}</td>
        </tr>
        })
    }

    

    const renderTable = () => {
        return (
        <table>
            <tbody>
            {renderUsers()}
            </tbody>
        </table>
        )
    }

    return (
        <div style={{ margin: '50px' }}>
        <h1 >{getProduct}</h1>
        {renderTable()}
        <div class="homebutton" id="to_test">{getProduct}</div>
        </div>
    );
    
};
export default ViewOrders;


