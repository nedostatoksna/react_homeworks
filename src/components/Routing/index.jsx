import React, { useState } from "react";
import style from "./Routing.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import Greeting from "./Greeting";
const Routing = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <>
        <section className={style.section}>
            <BrowserRouter>
                <Routes>

                    <Route path="*" element={<Navigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> } >
                        <Route path=":pageId" element={<Greeting isLoggedIn={isLoggedIn} />} />
                    </Route>
            </Routes>
            </BrowserRouter>

        </section>


        </>
    )
};

export default Routing;