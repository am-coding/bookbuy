import React, {useContext} from 'react'
import UserContext from '../contexts/userContext'

export default function Page() {
  const [token, setToken] = useContext(UserContext)
  return (
    <div>
        {token}
    </div>
  )
}
