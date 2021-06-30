import React, { useState, useRef } from 'react';
import BJJLogs from './BJJLogs';


export default function App() {
   const [logs, setBJJLogs] = useState([]);
   const instructionalRef = useRef();
   const techniqueRef = useRef();
   let logNo = Math.floor(Math.random()*100000);
    function createLog(e) {
       const technique = techniqueRef.current.value;
       let color = "#" + getRandom(2000000, 1000000).toString(16);
    
       for(let i = 0; i < logs.length; i++)
       { 
           if (color == logs[i].color)
           {
                const replace = color.replace('#', '');
                const number= parseInt(replace)
               const newNumber = number + 100000;
                color = newNumber
           }
       }

       if(technique === "")
       { alert("Please enter a technique.") 
       return;
        }
        
       setBJJLogs(prevLogs => {
        console.log(logs)
           return [...prevLogs, {id: logNo, technique:technique, color:color}];

       })
       
  
       techniqueRef.current.value = null
    }

    function getRandom(max, min) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    
   const handleDeleteLog = (logID) => {
    setBJJLogs(logs => {return logs.filter(log => log.id !== logID)})
    
   
}

    
   

    return (
        <>
        <div id="mainHeader" class="header">BJJ NOTES</div>
        <div id="description" class="header">
            <p>Add your techniques below. You can also add categories if you scroll down further (Instructionals, positions etc).</p>
            <p>Feel free to drag and drop your techniques into their respective categories.</p>
        </div>
        <div class="inContain">
        <div id="techniques" class="header">Techniques</div>
        <label for="technique">Technique</label>    
        <input ref={techniqueRef} id="technique" class="input" type="text"></input>
        <button onClick={createLog} id="addNote" class="input">Add Technique</button>
        </div>
        <BJJLogs handleDeleteLog={handleDeleteLog} logs={ logs } />
        <div class="inContain">
        <label for="instructional">Instructional</label>    
        <input ref={instructionalRef} id="instructional" class="input" type="text"></input>
        </div>
        </>
    )
    
}


