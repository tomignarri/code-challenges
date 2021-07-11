
const useFetch = () => {
    
    const getFares = async () => {
        const response = await fetch("../fares,json");
        const data = await response.json;
        console.log(data);
        return data;
    }

    return { getFares }
}

export default useFetch;