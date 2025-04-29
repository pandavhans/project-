import React,{useEffect,useState} from "react";
import Mealcads from "./mealCads";

function Mainpage(){
    const [data,setData] = useState([])
    const [search,setSearch] = useState("")
    
    // useEffect 
    useEffect(()=>{
        myFun()
    },[search]);
    function myFun(){
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`).then((result)=>{
            return result.json().then((res)=>{
                // console.log(res.meals)
                setData(res.meals)
                
            })
        })
    }

    // console.log(data)
    return(
        <div>
            <h1 className="head">FOOD RECIPE APP</h1>
            <div className="container">
            <div className="serchbar">
                <input type="text" placeholder="Enter Dishe" value={search} onChange={(e) => setSearch(e.target.value)}/>
                <button onClick={myFun}>Search</button>
            </div>
            <div>
                <Mealcads detail ={data}/>
            </div>
            </div>
       </div>
        
    )
}

export default Mainpage;