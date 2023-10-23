import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className="max-w-screen-xl mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;