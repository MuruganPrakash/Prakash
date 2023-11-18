import {useState} from "react";
export default function TodoList(){
  const [List,setlist] = useState(["ufh","wwjdh"]);
  const [item,setitem] = useState('');
  const handleAdd=()=>{
    setlist([...List,item]);
    setitem('');
  }
   return(
     <div className="container">
        <h1>Todo List</h1>
        <h3>Enter Your City : </h3>
        <input type="text" value={item} onChange={(e)=>{setitem(e.target.value)}}></input>
        <button onClick={handleAdd}>Add</button>
        <h3>Entered Cities :</h3>
            <ul id='list'>
            {
                List.map((value,index)=>(
                <li key={index}>{value}</li>
                ))
            }
            </ul>
     </div>
   )
}