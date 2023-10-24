import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { useState } from "react";

const Root = () => {
    const [darkMode, setDarkMode] = useState(false);
    const handleDarkMode = () => {
        setDarkMode(!darkMode)
    }
    return (
        <div className={`${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
            <Header darkMode={darkMode} handleDarkMode={handleDarkMode}></Header>
            <div className="max-w-screen-xl mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;