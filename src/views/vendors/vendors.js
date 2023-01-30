import React, {useCallback, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Vendor from "../../components/vendor/vendor";
import "./vendors.scss"
import {addPage} from "../../redux/vendorsSlice";

const Vendors = () => {
    const vendors = useSelector((state) => state.vendors.vendors);
    const loader = useRef(null);
    const dispatch = useDispatch()
    const handleObserver = useCallback((entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
            dispatch(addPage())
        }
    }, []);

    useEffect(() => {
        const option = {
            root: null,
            rootMargin: "20px",
            threshold: 0
        };
        const observer = new IntersectionObserver(handleObserver, option);
        if (loader.current) observer.observe(loader.current);
    }, [handleObserver]);

    return < div className="vendors-container">
        <div className="vendors-container--contents">{vendors.map(element => <Vendor vendor={element}
                                                                                     key={element.data.id}/>)}
            <div ref={loader}/>
        </div>
    </div>
}


export default Vendors;