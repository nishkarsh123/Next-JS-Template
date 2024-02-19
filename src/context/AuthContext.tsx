'use client'
import React, { createContext, useContext } from 'react';
import {
    onAuthStateChanged,
    getAuth,
    User,
} from 'firebase/auth';
import firebase_app, { auth } from '@/firebase/config';

interface props{
    user:User|null
}

export const AuthContext = createContext<props>(null!);

export const useAuthContext = () => React.useContext(AuthContext);

export const AuthContextProvider = ({
    children,
}:{children: React.ReactNode}) => {
    const [user, setUser] = React.useState<User|null>(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);
    return (
        <AuthContext.Provider value={{ user }}>
            {loading ? <div>Loading...</div> : children}
        </AuthContext.Provider>
    );
};

export const UserAuth=()=>{
    return useContext(AuthContext)
}