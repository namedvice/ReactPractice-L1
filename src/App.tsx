import './App.css';

import React, {useEffect} from "react";
import KnowledgePanel from "./KnowledgePanel";
import Login from "./Login";
import {Route, Routes, useNavigate} from "react-router-dom";

function App() {


    const navigate = useNavigate()

    useEffect(() => {
        if (sessionStorage.getItem('authorizationKey')) {
            navigate("/Home")
        } else {
            navigate("/Auth")
        }
    }, [])

    return (

        <div className="App">
            <header className="bg-creme">
                <div className="container">
                    <div className="navigation">
                        {sessionStorage.getItem('authorizationKey') ?
                            <button id="mainButton" className="pageButton">Main</button>
                            : <button id="signButton" className="pageButton">Sign in</button>}
                    </div>
                </div>
            </header>

            <Routes>
                <Route path="/Auth" element={<Login/>}/>
                <Route path="/Home"
                       element={<KnowledgePanel/>}/>
            </Routes>
        </div>

    );

}

export default App;
