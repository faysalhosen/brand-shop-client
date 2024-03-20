import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import { FaGoogle } from "react-icons/fa";

const Register = () => {
    const {googleLogin, createUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.url.value;
        const password = form.password.value;

        if(password.length <6 ){
            swal("oops!", "Password should be at last 6 characters", "error");
            return;
        }
        else if(!/[A-Z]/.test(password)){
            swal("oops!", "Password should be at last one uppercase characters", "error");
            return;
        }
        else if(!/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/.test(password)){
            swal("oops!", "Password be at last one special characters", "error");
            return;
        }
        
        createUser(email, password)
        .then((result) => {
            updateProfile(result.user, {
                displayName: name, 
                photoURL: photo
            })
                .then(() => {

                })
                .catch(() => {

                });
                swal("Good job!", "User register successfully!", "success");
                navigate('/')
        })
        .catch((error) => {
            swal("oops!", `${error.message}`, "error");
        });
    };
    const handleGoogleLogin = () => {
        googleLogin()
        .then(() => {
            swal("Good job!", "User register successfully!", "success");
        })
        .catch((error) => {
            swal("oops!", `${error.message}`, "error");
        });
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                        
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo url</span>
                                </label>
                                <input type="text" name="url" placeholder="photo url" className="input input-bordered" required />
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
                                <input className="bg-slate-600 text-white py-2 rounded font-semibold" type="submit" value="Register" />
                            </div>
                            <div onClick={handleGoogleLogin} className=" px-4 flex justify-center items-center py-1 rounded">
                                    <button className="text-center text-2xl"> <FaGoogle></FaGoogle></button>
                                </div>
                           
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;