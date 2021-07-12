


const useFareCalculation = () => {

    const calculateFare = (userSelection, fareData) => {
        const zone = fareData.filter(zone => zone.name === userSelection.zone)
        console.log(zone[0].fares);
        const timeFrame = zone[0].fares.filter(timeFrame => 
            timeFrame.type === userSelection.timeFrame && 
            timeFrame.purchase === userSelection.purchaseLocation);
           
        return timeFrame[0].price * userSelection.rideQuantity;
        
    }
    
    

    return { calculateFare };
    

}

export default useFareCalculation;