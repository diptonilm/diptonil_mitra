import {React, useState} from "react";

function RandomNumber1(){
    const[number, setNumber]= useState(0);
    const[tableData, setTableData]= useState([]);

    //Function to generate table data
    const generateTableData=()=>{
        const data= [];
        for(let i=1; i<=10; i++){
            data.push({
                number: i,
                randomValue: Math.floor(Math.random()*100)
            })
        }
        setTableData(data);
    }

    //Function to update number state with a random value
    const updateNumber=()=>{
        setNumber(Math.floor(Math.random()*100));
    }
    return(
        <div>
            <p>Number: {number}</p>
            <button onClick={updateNumber}>Generate Random Number</button>
            <br/>
            <br/>
            <button onClick={generateTableData}>Generate Table</button>
            <br/>
            <br/>
            <table>
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Random Value</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((data)=>(
                        <tr key={data.number}>
                            <td>{data.number}</td>
                            <td>{data.randomValue}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default RandomNumber1;