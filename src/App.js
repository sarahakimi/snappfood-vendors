import React, {useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import routes from "config/route-path";
import {useDispatch, useSelector} from "react-redux";
import Page404 from "./views/404-page/404-page";
import {fetchVendors, removeChange} from "./redux/vendorsSlice";

const App = () => {
    const change = useSelector((state) => state.vendors.change);
    const dispatch = useDispatch()

    useEffect(() => {
        if (change) {
            dispatch(fetchVendors())
            dispatch(removeChange())
        }
    }, [change])
    
    return <BrowserRouter>
        <Routes>
            ...{routes.map((element) => {
            const elemPath = element.path;
            return (
                <Route
                    path={elemPath}
                    exact
                    element={<element.component/>}
                    key={element.path}
                />
            );
        })}
            <Route path="*" element={<Page404/>}/>
        </Routes>
    </BrowserRouter>
}

export default App;
