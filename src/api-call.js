import { useEffect, useState } from "react";
import Img from './Elon Musk.jpg'

function ApiApp() {
  const [apiValue,newValue] = useState([])
useEffect(function() {
    const ApiCall=fetch("https://jsonplaceholder.typicode.com/albums");
    // console.log(ApiCall,"apicall");
    const Data = ApiCall.then((res)=> res.json());
    // console.log(Data,'data')
     Data.then((item)=> newValue(item))
    console.log(apiValue,'item')
},[])

    return (
      <div className="Api">
   {apiValue.map((data,index)=>{
    return(
      <>
      <img src=""></img>
        <h1>{data.id} --- {data.title}</h1>
      </>
    )
   }) }
      </div>
    );
  }
  
  export default ApiApp;