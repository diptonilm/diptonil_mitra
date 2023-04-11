import { useState } from "react";
import React from 'react';

function EventLogger(){
  const[logs, setLogs]= useState([]);

  function handleMouseOver(){
    setLogs(logs=> [...logs, {time: new Date().toLocaleString(), eventName: "mouseover" }]);
  }
  function handleMouseOut(){
    setLogs(logs=> [...logs, {time: new Date().toLocaleString(), eventName: "mouseout" }]);
  }

  return(
    <>
      <h1 onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>This is an h1 element</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Event Name</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index)=>(
              <tr key={index}>
                <td>{log.time}</td>
                <yd>{log.eventName}</yd>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default EventLogger;