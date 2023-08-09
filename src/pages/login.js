import React, { useState, useContext } from 'react'
import '../styles/components/login.css'
import '../styles/components/createAccount.css'
import { useNavigate } from 'react-router-dom'
import { auth, googleProvider } from "../config/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Link } from 'react-router-dom';
import { UserInfoContext } from '../routes/AppRouter';

export default function Login() {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('');
    const navigate = useNavigate()

    const { userInfo, setUserInfo } = useContext(UserInfoContext);

    //Sign In function with using email and password from userInfo object
    const signIn = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setUserInfo(userCredential.user);
            navigate('/dashboard')
        } catch (err) {
            alert(err);
        }
    };
    const submit = async () => {
        try{
            await signIn(email, password);
        }
        catch(err){
            alert(err)
        }
    }
    // google sign in
    const signInWithGoogle = async () => {
        try {
            const userCredential = await signInWithPopup(auth, googleProvider);
            setUserInfo(userCredential.user);
            navigate('/dashboard')
        } catch (err) {
            console.error(err);
        }
    };
    console.log(userInfo)
  return (
    <div className='loginContainer'>
        <div class="form-group col-1-2">
            <label for="your-email">Email Address <span>*</span></label>
            <div class="form-field">
                <span class="form-field-container">
                    <input type="email" name="your-email" id="your-email"
                        placeholder="e.g. youremail@gmail.com"
                        accesskey="e" onChange={(e) => setEmail(e.target.value)}/>
                </span>
            </div>
        </div>
        <div class="form-group col-1-2">
            <label for="your-Password">Password <span>*</span></label>
            <div class="form-field">
                <span class="form-field-container">
                    <input type="password" name="your-Password" accesskey="p" 
                        onChange={(e) => setPassword(e.target.value)}/>
                </span>
            </div>
        </div>
        <div class="form-group col-1-2">
            <div class="form-field">
                <span class="form-field-container">
                    <button type='submit' onClick={submit}>Sign in</button>
                </span>
            </div>
        </div>
        <div class="form-group col-1-2">
            <div class="form-field">
                <span class="form-field-container">
                    <button type='submit' onClick={signInWithGoogle}>Continue with Google</button>
                </span>
            </div>
        </div>
        <n3>Do not have an account? <Link to='/signup'>Sign Up</Link></n3>
    </div>
  )
}
