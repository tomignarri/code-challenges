import { useEffect, useState } from 'react';


const useFetch = () => {

    const [data, setData] = useState([]);
    
    useEffect(() => {
      
        const getFares = async () => {
            try {
                const response = await fetch("../../fares.json");
                const data = await response.json();
                setData(data);
            } catch(err) {
                alert(err);
            }
        };

        getFares();
    },[]);
    
    return { data }
}

export default useFetch;