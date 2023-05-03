import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { FaGithub, FaGoogle } from 'react-icons/fa';


const Login = () => {

    const { signIn, signInWithGoogle } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error)
            })
    }
    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error)
            })
    }

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
                        <div class="flex flex-col">
                            <div class="relative py-2">
                                <div class="absolute inset-0 flex items-center"><div class="w-full border-b border-gray-300"></div>
                                </div>
                                <div class="relative flex justify-center">
                                    <span class="bg-white px-4 text-sm text-gray-500">Or</span>
                                </div>
                            </div>
                            <button onClick={handleGoogleSignIn} type="button" class="btn btn-outline btn-success mb-4 text-white">
                                <span class="flex justify-center items-center"> 
                                     <FaGoogle /> 
                                    <span> Sign in with Google</span>
                                </span>
                            </button>
                            <button onClick={handleGithubSignIn} type="button" class="btn btn-outline btn-success hover:text-white">
                                <span class="flex justify-center items-center"> 
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