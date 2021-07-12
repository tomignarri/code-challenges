import '../App.css';
import Dropdown from './Dropdown';
import useFetch from '../hooks/useFetch';
import PurchaseLocation from '../components/PurchaseLocation';
import RideQuantity from './RideQuantity';
import React, { useState, useEffect } from 'react';
import CalculatedFare from './CalculatedFare'
import useFareCalculation from '../hooks/useFareCalculation'


//Hello!
//
// With more time, I would implement code to handle anytime advance purchase
// I would change and lock the ticket quantity to 10 itmes
// I would add text to the ride quantity component and maybe a lock icon
// so that they don't think the widget is broken. 
// 
// I would also add dynamic alerts for users who choose options that are not possible,
// such as "onboard and anytime" tickets.





function Container() {

    const { data } = useFetch();
    const { calculateFare } = useFareCalculation();
    
    const [zone, setZone] = useState("Select a zone");
    const [timeFrame, setTimeFrame] = useState("Select a timeframe");
    const [purchaseLocation, setPurchaseLocation] = useState("");
    const [rideQuantity, setRideQuantity] = useState(0);
    const [calculatedFare, setCalculatedFare] = useState(0);
    
    const zones = data.zones && data.zones.map(zone => zone.name);

    useEffect(() => {
        
        if((zone !== "Select a zone" && timeFrame !== "Select a timeframe" && purchaseLocation)
        && !(timeFrame === "anytime" && purchaseLocation === "onboard_purchase")){
            console.log("stuff ",zone, timeFrame, purchaseLocation, rideQuantity);
            var fare = calculateFare(zone, timeFrame, purchaseLocation, rideQuantity, data.zones);
            setCalculatedFare(fare);
        }
    }, [zone, timeFrame, purchaseLocation, rideQuantity, data.zones, calculateFare])
    
    const zoneUpdate = (userZone) => {
        setZone(userZone);
    }

    const timeframeUpdate = (userTimeframe) => {
        setTimeFrame(userTimeframe);
    }

    const purchaseLocationUpdate = (purchaseLocation) => {
        setPurchaseLocation(purchaseLocation);
    }

    const rideQuantityUpdate = (rideQuantity) => {
        setRideQuantity(rideQuantity);
    }


    return (
        <div className="container">
            <div className="header"></div>
            <Dropdown 
                title="Where are you going?" 
                dropdownOptions={zones}
                dropdownPreview="Select a zone"
                passUserInput={zoneUpdate} />
            <Dropdown 
                title="When are you riding?" 
                dropdownOptions={["weekday", "evening_weekend", "anytime"]} 
                dropdownPreview="Select a timeframe"
                passUserInput={timeframeUpdate} />
            <PurchaseLocation 
                title="Where will you purchase the fare?" 
                passUserInput={purchaseLocationUpdate} />
            <RideQuantity 
                title="How many rides will you need?"
                passUserInput={rideQuantityUpdate} />
            <CalculatedFare
                fare={calculatedFare} />   
        </div>
    );
}

export default Container;