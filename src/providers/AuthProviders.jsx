import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { toast } from 'react-toastify';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const githubAuthProvider = new GithubAuthProvider();


const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {

        //validate
        if (!/(?=.*[A-Z])/.test(password)) {
            toast.error('Please add at least one uppercase')
            return;
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            toast.error('Please add two number')
            return;
        }
        else if (password.length < 6) {
            toast.error('Please add six digit number')
            return;
        }
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleAuthProvider);
    }
    const signInWithGithub = () => {
        return signInWithPopup(auth, githubAuthProvider);
    }

    const logOut = () => {
        return signOut(auth);
    }

    // observe auth state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('auth state change', currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }

    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        signInWithGithub,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;