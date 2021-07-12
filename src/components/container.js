import '../App.css';
import Dropdown from './Dropdown';
import useFetch from '../hooks/useFetch';
import PurchaseLocation from '../components/PurchaseLocation';
import RideQuantity from './RideQuantity';
import React, { useState } from 'react';
import CalculatedFare from './CalculatedFare'
import useFareCalculation from '../hooks/useFareCalculation'


function Container() {

    const { data } = useFetch();
    const { calculateFare } = useFareCalculation();
    

    const [fareInformation, setFareInformation] = useState({
        zone: "",
        timeFrame: "",
        purchaseLocation: "",
        rideQuantity: 1,
        calculatedFare: 0
    });

    const [zone, setZone] = useState("");
    const [timeFrame, setTimeFrame] = useState("");
    const [purchaseLocation, setPurchaseLocation] = useState("");
    const [rideQuantity, setRideQuantity] = useState(0);
    const [calculatedFare, setCalculatedFare] = useState(0);
    

    

    const zones = data.zones && data.zones.map(zone => zone.name);

    const zoneUpdate = (userZone) => {
        setZone(userZone);
       
        if(zone && timeFrame && purchaseLocation){
            var fare = calculateFare(zone, timeFrame, purchaseLocation, rideQuantity, data.zones);
            setCalculatedFare(fare);
        }
    }

    const timeframeUpdate = (userTimeframe) => {
        setTimeFrame(userTimeframe);

        if(zone && timeFrame && purchaseLocation){
            var fare = calculateFare(zone, timeFrame, purchaseLocation, rideQuantity, data.zones);
            setCalculatedFare(fare);
        }
    }

    const purchaseLocationUpdate = (purchaseLocation) => {
        
        setPurchaseLocation(purchaseLocation);

        if(zone && timeFrame && purchaseLocation){
            var fare = calculateFare(zone, timeFrame, purchaseLocation, rideQuantity, data.zones);
            setCalculatedFare(fare);
        }
    }

    const rideQuantityUpdate = (rideQuantity) => {
        
        setRideQuantity(rideQuantity);
        console.log("quant ", rideQuantity);
        if(zone && timeFrame && purchaseLocation){
            var fare = calculateFare(zone, timeFrame, purchaseLocation, rideQuantity, data.zones);
            setCalculatedFare(fare);
        }
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