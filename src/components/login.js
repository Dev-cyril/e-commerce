import React from 'react'
import { useState } from 'react'
import '../styles/components/login.css'
import '../styles/components/createAccount.css'
import { Link } from 'react-router-dom';

export default function Login() {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('');

    //Sign In function with using email and password from userInfo object
    const signIn = async (email, password) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log(userCredential)
            console.log(userCredential.user)
            navigate('/dashboard')
        } catch (err) {
            console.error(err);
        }
    };
    const submit = async () => {
        try{
            await signIn(userInfo.Email, userInfo.Password);
        }
        catch(err){
            alert(err)
        }
    }
    // google sign in
    const signInWithGoogle = async () => {
        try {
            const userCredential = await signInWithPopup(auth, googleProvider);
            await addDoc(userAccountsRef, userInfo)
            navigate('/dashboard')
        } catch (err) {
            console.error(err);
        }
    };
  return (
    <div className='loginContainer'>
        <div class="form-group col-1-2">
            <label for="your-email">Email Address <span>*</span></label>
            <div class="form-field">
                <span class="form-field-container">
                    <input type="email" name="your-email" id="your-email"
                        placeholder="e.g. youremail@gmail.com"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" maxlength="55" autocomplete
                        accesskey="e" required onChange={(e) => setEmail(e.target.value)}/>
                </span>
            </div>
        </div>
        <div class="form-group col-1-2">
            <label for="your-Password">Password <span>*</span></label>
            <div class="form-field">
                <span class="form-field-container">
                    <input type="password" name="your-Password" id="your-Password" maxlength="15" minLength='8' accesskey="p" required 
                        onChange={(e) => setPassword(e.target.value)}/>
                </span>
            </div>
        </div>
        <div class="form-group col-1-2">
            <div class="form-field">
                <span class="form-field-container">
                    <button onClick={submit}>Sign Up</button>
                </span>
            </div>
        </div>
        <div class="form-group col-1-2">
            <div class="form-field">
                <span class="form-field-container">
                    <button onClick={signInWithGoogle}>Continue with Google</button>
                </span>
            </div>
        </div>
        <n3>Do not have an account? <Link to='/signup'>Sign Up</Link></n3>
    </div>
  )
}
