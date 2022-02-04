import React, {useState} from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './Pages/Home/index'
import LandingPage from './Pages/LandingPage/index'
import Results from './Components/Results/index'
import {UserDataContext} from './Context/context'

function Router() {

const [userName, setUserName] =  useState('');
 
 
  return (
    <UserDataContext.Provider value={{userName:userName, setUserName:setUserName}}>
        <BrowserRouter>
            <Routes>  
                <Route path="/result" element={<Results />} /> 
                <Route path="/" element={<LandingPage />} /> 
                <Route path="/test" element={<Home />} /> 


                <Route path="*" element={<Home />} />

                </Routes>
        </BrowserRouter>
    </UserDataContext.Provider>
	);
}

export default Router;
