


const useFareCalculation = () => {

    const calculateFare = (userZone, userTimeFrame, userPurchaseLocation, userRideQuantity, fareData) => {
        
            const zone = fareData.filter(zone => zone.name === userZone)
            console.log(zone[0].fares);
            const timeFrame = zone[0].fares.filter(timeFrame => 
            timeFrame.type === userTimeFrame && 
            timeFrame.purchase === userPurchaseLocation);
            return timeFrame[0].price * userRideQuantity;
    }

    return { calculateFare };
    

}

export default useFareCalculation;