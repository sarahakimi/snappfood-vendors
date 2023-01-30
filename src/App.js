import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import routes from "config/route-path";
import Page404 from "./views/404-page/404-page";

const App = () => (
    <BrowserRouter>
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
)

export default App;
