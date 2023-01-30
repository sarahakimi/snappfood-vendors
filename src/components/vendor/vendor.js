import React from 'react';
import PropTypes from "prop-types";
import "./vendor.scss"

const Vendor = ({vendor}) => <div className="single-vendor">
    <div className="single-vendor--background">
        <img src={vendor?.data.backgroundImage} alt={vendor.data.title} className="single-vendor--background-image"/>
        <div className="single-vendor--logo-container">
            <img className="single-vendor--logo" src={vendor.data.defLogo} alt="لوگو"/>
        </div>
        {vendor.data?.badges.length !== 0 && <div className="single-vendor--badge">{vendor.data.badges[0].title}</div>}
    </div>
    <div className="single-vendor--content"><h3> {vendor.data.title}</h3></div>

</div>


Vendor.propTypes = {
    vendor: PropTypes.shape({
        // eslint-disable-next-line react/forbid-prop-types
        data: PropTypes.object,
        type: PropTypes.string
    }).isRequired

};

export default Vendor;