import React from 'react';
import PropTypes from "prop-types";
import "./vendor.scss"

const Vendor = ({vendor}) => {
    const restaurant = vendor.data
    return <div className="single-vendor">
        <div className="single-vendor--background">
            <img src={restaurant.backgroundImage} alt={restaurant.title} className="single-vendor--background-image"/>
            <div className="single-vendor--logo-container">
                <img className="single-vendor--logo" src={restaurant.defLogo} alt="لوگو"/>
            </div>
            {vendor.data?.badges.length !== 0 &&
                <div className="single-vendor--badge">{restaurant.badges[0].title}</div>}
        </div>
        <div className="single-vendor--content">
            <div className="single-vendor--content-header">
                <div><h3> {restaurant.title}</h3></div>
                <div className="single-vendor--score">
                    <p>({restaurant.voteCount})</p>
                    <div className="single-vendor--rate"> {restaurant.rate}</div>
                </div>
            </div>
            <div>{restaurant.description}</div>
            <div><p><span
                className="single-vendor--delivery">پیک فروشنده:</span><span>{restaurant.deliveryFee === 0 ? "رایگان" : restaurant.deliveryFee}</span>
            </p></div>
        </div>

    </div>
}


Vendor.propTypes = {
    vendor: PropTypes.shape({
        // eslint-disable-next-line react/forbid-prop-types
        data: PropTypes.object,
        type: PropTypes.string
    }).isRequired

};

export default Vendor;