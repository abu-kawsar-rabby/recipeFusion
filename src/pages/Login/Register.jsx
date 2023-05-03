import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Register = () => {

    const { user, createUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const ImageURL = form.ImageURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, ImageURL, email, password);

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="hero h-screen bg-base-200">
            <div className="hero-content flex-col w-2/5">

                <div className="card flex-shrink-0 w-full max-w-2xl  h-fit shadow-2xl bg-base-100">


                    <form onSubmit={handleRegister} className="card-body">
                        <h1 className="text-xl font-bold mb-3">Please Register to your account!</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">ImageURL</span>
                            </label>
                            <input type="text" name='ImageURL' placeholder="ImageURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link to="/login" className="label-text-alt link link-hover">Already have an account?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-3">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;