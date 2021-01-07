import React, {useContext, useEffect} from 'react'
import UserContext from '../contexts/userContext'
import axios from "axios"

export default function Page() {
  const [token, setToken] = useContext(UserContext)
  const refreshToken = async () => {
    const headers = { 
        'Content-Type': 'application/json'
    };
    const req = await axios.post("https://22f8ecec375a.ngrok.io/tokens/refresh", {
      withCredentials: true,
      headers
    })
    const resp = req.data
    setToken(resp.access_token)
    console.log(resp);
    
    useEffect(() => {
        refreshToken()
    }, [])
}
  return (
    <div>
        {token}
        <button onClick={refreshToken}>click</button>
    </div>
  )
}
