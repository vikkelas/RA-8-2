import React from 'react';
import useJsonFetch from "../hook/useJsonFetch";

function Data() {
    const [data, load, error]=useJsonFetch('http://localhost:7070/data');
    const render = (dataObj)=>{
        const arr = []
        for(let key in dataObj){
            arr.push(<div>Status: {dataObj[key]}</div>)
        }
        return arr
    }
    return(
        <div>
            {render(data)}
        </div>
        )





}

export default Data;