import '../App.css';
import Dropdown from './Dropdown'
import useFetch from '../hooks/useFetch'
import PurchaseLocation from '../components/PurchaseLocation'



function Container() {

    const { getFares } = useFetch();

    getFares();

    return (
        <div className="container">
            <div className="header"></div>
            <Dropdown title="Where are you going?" dropdownOptions="" />
            <Dropdown title="When are you riding?" dropdownOptions="" />
            <PurchaseLocation title="Where will you purchase the fare?" />
        </div>
    );
}

export default Container;