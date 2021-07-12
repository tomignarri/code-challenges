import React, { useEffect, useState } from 'react';


const useFetch = () => {

    const [data, setData] = useState([]);
    
    useEffect(() => {
        const getFares = async () => {
            const response = await fetch("../../fares.json");
            const data = await response.json();
            setData(data);
        };

        getFares();
    },[]);
    //first i was returning html b/c fares.json could not be located
    //is the fetch url cached? this makes no sense
    

    return { data }
}

export default useFetch;