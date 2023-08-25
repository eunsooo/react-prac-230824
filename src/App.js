import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import AboutView from "./views/AboutView";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <HomeView /> } />  {/* 메인 페이지 생성 */ }
                <Route path="/about" element={ <AboutView /> } /> {/* about 페이지 생성 */ }
            </Routes>
        </BrowserRouter>
    );
}

export default App;