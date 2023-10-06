import { createContext, useContext, useState } from "react";

const AuthCodeContext = createContext<any>(undefined)

export function AuthContextProvider({ children }: any) {
    const [auth, setAuth] = useState('')

    return (
        <>
            <AuthCodeContext.Provider value={{auth, setAuth}}>
                {children}
            </AuthCodeContext.Provider>
        </>
    )
}

export function useAuthContext() {
    return useContext(AuthCodeContext)
}