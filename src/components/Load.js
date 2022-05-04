import React from 'react';
import useJsonFetch from "../hook/useJsonFetch";

function Load() {
    const [data, load, error]=useJsonFetch('http://localhost:7070/loading');
    if (load){
        return <>Load.....</>
    }
    return (
        <div>Hello</div>
    );
}

export default Load;