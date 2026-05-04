"use client";
import { createContext } from "react";
import { useState, useEffect } from "react";


export type AuthContextType = {
    step: number;
    setStep: (step: number) => void;
    email: string;
    setEmail: (email: string) => void;
    user: any;
    setUser: (user: any) => void;
    token: string;
    setToken: (token: string) => void;
    verificationErrorState: boolean;
    setVerificationErrorState: (verificationErrorState: boolean) => void;
    verificationTimer: number;
    setVerificationTimer: (verificationTimer: number) => void;
};
export const AuthContext = createContext<AuthContextType>({
    step: 1,
    setStep: (step: number) => { },
    email: "",
    setEmail: (email: string) => { },
    user: null,
    setUser: (user: any) => { },
    token: "",
    setToken: (token: string) => { },
    verificationErrorState: false,
    setVerificationErrorState: (verificationErrorState: boolean) => { },
    verificationTimer: 60,
    setVerificationTimer: (verificationTimer: number) => { },
});



export default function AuthContextProvider({ children }: { children: React.ReactNode }) {
    const [step, setStep] = useState(localStorage.getItem("step") ? parseInt(localStorage.getItem("step") as string) : 1);
    const [email, setEmail] = useState("");
    const [user, setUser] = useState(localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") as string) : null);
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const [verificationErrorState, setVerificationErrorState] = useState(localStorage.getItem("verificationErrorState") ? JSON.parse(localStorage.getItem("verificationErrorState") as string) : false);
    const [verificationTimer, setVerificationTimer] = useState(60);
    const value: AuthContextType = { step, setStep, email, setEmail, user, setUser, token, setToken, verificationErrorState, setVerificationErrorState, verificationTimer, setVerificationTimer };


    useEffect(() => {
        localStorage.setItem("step", step.toString());
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        localStorage.setItem("verificationErrorState", verificationErrorState.toString());
        localStorage.setItem("email", email);
    }, [step, user, token, verificationErrorState, email]);
    useEffect(() => {
        setVerificationTimer(59);
    }, [verificationErrorState]);


    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )

}