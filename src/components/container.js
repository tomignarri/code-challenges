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


    const zones = data.zones && data.zones.map(zone => zone.name);

    const zoneUpdate = (userZone) => {
        setFareInformation({...fareInformation, zone: userZone});
        console.log(fareInformation);
    }

    const timeframeUpdate = (userTimeframe) => {
        setFareInformation({...fareInformation, timeFrame: userTimeframe});
        console.log(fareInformation);
    }

    const purchaseLocationUpdate = (purchaseLocation) => {
        setFareInformation({...fareInformation, purchaseLocation: purchaseLocation});
        console.log(fareInformation);
    }

    const rideQuantityUpdate = (rideQuantity) => {
        setFareInformation({...fareInformation, rideQuantity: rideQuantity});
        var fare = 0;
        
        if(fareInformation.zone && fareInformation.timeFrame && fareInformation.purchaseLocation){
            fare = calculateFare(fareInformation, data.zones);
        }
        
        setFareInformation({...fareInformation, calculatedFare: fare});
    }

    //useFareCalculation(fareInformation, data.zones);


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
                userSelection={fareInformation}
                fare={fareInformation.calculatedFare} />   

        </div>
    );
}

export default Container;