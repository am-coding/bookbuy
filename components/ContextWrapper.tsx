import UserContext from '../contexts/userContext';
import { useState } from 'react'

export const AppProvider = ({children}) => {
    const [token, setToken] = useState<string>("");
    return (
        <UserContext.Provider value={[token, setToken]}>
            {children} 
        </UserContext.Provider>
    )
}