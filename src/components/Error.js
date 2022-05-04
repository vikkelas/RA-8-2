import React from 'react';
import useJsonFetch from "../hook/useJsonFetch";

function Error() {
    const [data, load, error]=useJsonFetch('http://localhost:7070/error');
    return (
        <div>{error}</div>
    );
}

export default Error;