import {FC, useState} from 'react';
import axios from 'axios';
import Router from 'next/router'

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleEmailChange =  (e: any) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange =  (e: any) => {
        setPassword(e.target.value)
    }
    const data = JSON.stringify({
        "email": email,
        "password": password,
    });
     const handleSubmit =  async (e: any) => { 
         e.preventDefault();
        const headers = { 
            'Content-Type': 'application/json'
        };
        const req = await axios.post("http://localhost:8000/login", data, {headers})
        if (req.status === 200) {
            Router.push("/dashboard")
        }                
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login here</h1>
            <p>email</p>
            <input onChange={handleEmailChange} placeholder="email" />
            <p>password</p>
            <input onChange={handlePasswordChange} type="password" placeholder="password" />
            <button>Login</button>
        </form>
    )
}

export default LoginForm;