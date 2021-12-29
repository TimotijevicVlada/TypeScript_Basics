import {createContext, useState} from "react";

export type AuthUser = {
    name: string
    email: string
}

type UserContextType = {
    user: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

type UserContextProviderProps = {
    children: React.ReactNode
}

//Ovaj inital value stavljamo ako necemo da proveravamo kasnije da li je null ili ima nesto
export const UserContextt = createContext({} as UserContextType);

export const UserContextProvider = ({children}: UserContextProviderProps) => {

    const [user, setUser] = useState<AuthUser | null>(null);

    return (
        <UserContextt.Provider value={{user, setUser}}>
            {children}
        </UserContextt.Provider>
    )
}