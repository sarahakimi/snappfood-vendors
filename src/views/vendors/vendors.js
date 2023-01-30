import React from 'react';
import {useDispatch} from "react-redux";
import {addPage} from "../../redux/vendorsSlice";

const Vendors = () => {
    
    const dispatch = useDispatch()
    return < div>
        <button type="button" onClick={() => dispatch(addPage())}>hi</button>
    </div>
}


export default Vendors;