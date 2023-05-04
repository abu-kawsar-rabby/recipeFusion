import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Login = () => {

    const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        const from = location.state?.from || '/';

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                navigate(from, { replace: true });
                toast.success("Login Successfull");
            })
            .catch(error => {
                console.log(error);
                toast.error('Something went wrong. Please try again later.');
            });
    };

    const handleGoogleSignIn = () => {
        const from = location.state?.from || '/';

        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                navigate(from, { replace: true });
                toast.success("Login Successfull With Your Gmail");
            })
            .catch(error => {
                console.log(error);
                toast.error('Something went wrong. Please try again later.');
            });
    };

    const handleGithubSignIn = () => {
        const from = location.state?.from || '/';

        signInWithGithub()
            .then(result => {
                const loggedUser = result.user;
                navigate(from, { replace: true });
                toast.success("Login Successfull With Your Github Account");
            })
            .catch(error => {
                console.log(error);
                toast.error('Something went wrong. Please try again later.');
            });
    };

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col w-2/5">

                <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">


                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-xl font-bold mb-3">Please Login to your account!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-success text-white">Login</button>
                        </div>
                        <div className="flex flex-col">
                            <div className="relative py-2">
                                <div className="absolute inset-0 flex items-center"><div className="w-full border-b border-gray-300"></div>
                                </div>
                                <div className="relative flex justify-center">
                                    <span className="bg-white px-4 text-sm text-gray-500">Or</span>
                                </div>
                            </div>
                            <button onClick={handleGoogleSignIn} type="button" className="btn btn-outline btn-success mb-4 text-white">
                                <span className="flex justify-center items-center">
                                    <FaGoogle />
                                    <span> Sign in with Google</span>
                                </span>
                            </button>
                            <button onClick={handleGithubSignIn} type="button" className="btn btn-outline btn-success hover:text-white">
                                <span className="flex justify-center items-center">
                                    <FaGithub></FaGithub>
                                    <span> Sign in with Github</span>
                                </span>
                            </button>
                        </div>

                    </form>
                    <p className='mb-4 ml-8'>
                        <Link to="/register" className="label-text-alt link link-hover">
                            New to Recipe Fusion? Please Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;