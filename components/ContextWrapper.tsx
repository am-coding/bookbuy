import UserContext from '../contexts/userContext';
import { useState, useEffect } from 'react';
import app from '../axiosConfig';

export const AppProvider = ({children}) => {
    const [token, setToken] = useState<string>("");
    // const refreshToken = async () => {
    //     const headers = { 
    //         'Content-Type': 'application/json'
    //     };
    //     const req = await app.post("http://localhost:9000/tokens/refresh", {
    //       withCredentials: true,
    //       headers,
    //     })
    //     const resp = req.data
    //     setToken(resp.access_token)
    //     console.log(resp.access_token);
    // }
    // useEffect(() => {
    //   refreshToken()
    // }, [])
    return (
        <UserContext.Provider value={[token, setToken]}>
            {children} 
        </UserContext.Provider>
    )
}