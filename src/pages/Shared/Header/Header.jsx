import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from './ActiveLink/ActiveLink';
import { AuthContext } from '../../../providers/AuthProviders';
import { Tooltip } from 'react-tooltip';

const Header = () => {

    const { user } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='flex flex-wrap items-center justify-between py-3 border-b'>
            <div className='flex items-center flex-shrink-0 mr-6'>
                <a href="/">
                    <h2 className='font-extrabold text-3xl text-black'>Recipe<span className='text-success'>Fusion</span></h2>
                </a>
            </div>
            <div className='block lg:hidden'>
                <button className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white' onClick={toggleMenu}>
                    <svg className='fill-current h-3 w-3' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                        <title>Menu</title>
                        <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
                    </svg>
                </button>
            </div>
            <div className={`w-full text-center block flex-grow lg:flex lg:items-center lg:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
                <div className='text-sm lg:flex-grow'>
                    <ActiveLink to='/' onClick={toggleMenu}> Home</ActiveLink>
                    <ActiveLink to='/blog' onClick={toggleMenu}>Blog</ActiveLink>
                    <ActiveLink to='/login' onClick={toggleMenu}>Login</ActiveLink>
                    <ActiveLink to='/register' onClick={toggleMenu}>
                        Register
                    </ActiveLink>
                </div>
                <div>
                    {
                        user
                            ? <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div data-tooltip-id="tooltip"
                                    data-tooltip-content={user.displayName} className="w-10 rounded-full">
                                    <img src={user.photoURL} />
                                    <Tooltip id='tooltip' />
                                </div>
                            </label>
                            : <Link to="/login"><button className='btn btn-success text-white'>Login</button></Link>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Header;