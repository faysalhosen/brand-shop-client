import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import swal from 'sweetalert';
import { FaGoogle } from "react-icons/fa";


const Login = () => {
    const {googleLogin, logIn} = useContext(AuthContext);

    const handleLogin =  event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(() => {
                swal("Good job!", "User login successfully!", "success");
            })
            .catch((error) => {
                swal("Opps!", `${error.message}`, "error");
            });
    };
    const handleGoogleLogin = () => {
        googleLogin()
        .then(() => {
            swal("Good job!", "user login in successfully", "success");
        })
        .catch((error) => {
            swal("oops!", `${error.message}`, "error");
        });
    };
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="bg-slate-600 text-white">Login</button>
                                <div onClick={handleGoogleLogin} className=" px-4 flex justify-center items-center py-1 rounded">
                                    <button className="text-center text-2xl"> <FaGoogle></FaGoogle></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;