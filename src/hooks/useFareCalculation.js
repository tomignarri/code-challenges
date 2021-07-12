


const useFareCalculation = () => {

    var zone = undefined;

    const calculateFare = (userSelection, fareData) => {
        zone = fareData.filter(zone => zone.name === userSelection.zone)
        console.log(zone);    
        
    }
    
    

    return { calculateFare };
    

}

export default useFareCalculation;