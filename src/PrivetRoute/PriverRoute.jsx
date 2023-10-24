import { useContext } from "react";
import { AuthContext } from "../Login/Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import { Vortex } from 'react-loader-spinner'

const PriverRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <div className="">
            <div className="flex justify-center mt-20">
                <Vortex
                    visible={true}
                    height="300"
                    width="300"
                    ariaLabel="vortex-loading"
                    wrapperStyle={{}}
                    wrapperClass="vortex-wrapper"
                    colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                />
            </div>
        </div>
    }
    if (user) {
        return children;
    }
    return (
        <Navigate to="/login"></Navigate>
    );
};

export default PriverRoute;