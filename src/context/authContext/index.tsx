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
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");
    const [user, setUser] = useState<any>(null);
    const [token, setToken] = useState("");
    const [verificationErrorState, setVerificationErrorState] = useState(false);
    const [verificationTimer, setVerificationTimer] = useState(60);

    // Load from localStorage on mount
    useEffect(() => {
        const storedStep = localStorage.getItem("step");
        if (storedStep) setStep(parseInt(storedStep));

        const storedUser = localStorage.getItem("user");
        if (storedUser) setUser(JSON.parse(storedUser));

        const storedToken = localStorage.getItem("token");
        if (storedToken) setToken(storedToken);

        const storedVerificationError = localStorage.getItem("verificationErrorState");
        if (storedVerificationError) setVerificationErrorState(JSON.parse(storedVerificationError));

        const storedEmail = localStorage.getItem("email");
        if (storedEmail) setEmail(storedEmail);
    }, []);

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
