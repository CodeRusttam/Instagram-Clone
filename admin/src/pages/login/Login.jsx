import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import './login.scss'

const Login = () => {
    const [credentials, setCredentials] = useState({
       username: undefined,
       password: undefined
    })
    const { loading, error, dispatch } = useContext(AuthContext)

    const navigate = useNavigate()
     const handleChange = (e) => {
         setCredentials(prev => ({...prev, [e.target.id]: e.target.value}))
     }

     const handleLogin = async (e) => {
         e.preventDefault()
         dispatch({type:"LOGIN_START"})
         try{
           const res = await axios.post("/auth/login", credentials)
           if(res.data.isAdmin){
            dispatch({type: "LOGIN_SUCCESS", payload: res.data.details});
            navigate("/")
           }else{
             dispatch({type: "LOGIN_FAILURE", payload: { message: "You are not allowed" }})
           }
         }catch (err){
             dispatch({type:"LOGIN_FAILURE", payload: err.response.data})
         }
     };

  return (
    <div className='login'>
        <div className="lContainer">
            <input type="text" className="lInput" placeholder='username' id='username' onChange={handleChange} />
            <input type="password" className="lInput" placeholder='password' id='password' onChange={handleChange} />
            <button disabled={loading} onClick={handleLogin} className='lButton'>Login</button>
            {error && <span>{error.message}</span>}
        </div>
    </div>
  )
}

export default Login