"use client"
import { createContext, ReactNode, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import {auth} from "@/app/lib/firebase/firebase";

interface AuthContextType {
  user: User | null;
}

export const AuthContext = createContext<AuthContextType>({ user: null });

export default function AuthContextProvider ({children}: {children: ReactNode}) {

    // const auth = getAuth();
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        // console.log("Auth state changed:", currentUser);
        setUser(currentUser);
      });

      return () => {
        unsubscribe();
      };
    }, []);


    const authContextValue: AuthContextType = {
        user
    };

 return (
    <AuthContext.Provider value={authContextValue}>
    {children}
    </AuthContext.Provider>
 )
  
}


