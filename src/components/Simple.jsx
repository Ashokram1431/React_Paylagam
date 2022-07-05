import { useState } from "react"
import './Simple.css';
export function Simple(){
    const[data,setData]=useState(1);
    const Increace=()=>{
        setData(data+1);
    }
    const Decreace=()=>{
        setData(data-1);
    }
    
    const[user,setUser]=useState([]);
    const items=["Ashok","Ram"];
    const users=()=>{
        setUser(items);
    }
return<>
<div>
    <h1>Using useState( ) Method</h1>
</div>
<div className="Inc_Dec">
<button onClick={Decreace}>-</button><h1>{data}</h1><button onClick={Increace}>+</button>
</div>
<br/>
<div>
{user.map((x)=>{return <li>{x}</li>;})}
<button onClick={users}>Users Name</button>
</div>

</>
}