import React, { useEffect, useState } from 'react'
import logo from '../assests/Saverbank.png'
import img from '../assests/createAccImg.png'
import '../styles/components/createAccount.css'
import { db } from "./config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

function CreateAccount() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPassword] = useState('')
    const [inputState, setInputState] = useState([true, true, true, true, true])

    useEffect(() => {

    }, [])
    const userAccountsRef = collection(db, "userAccount");
    const validateFirstName = (name) =>{
        const namePattern = /^[A-Za-zÀ-ž\s]{3,}/;
        return namePattern.test(name);
    }

    const validateLastName = (name) =>{
        const namePattern = /^[A-Za-zÀ-ž\s]{3,}/;
        return namePattern.test(name);
    }

    const validateEmail = (email) =>{
        const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        return emailPattern.test(email);
    }

    const validatePassword = (password, confirmPassword) => {
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,15}$/;
        if (password === confirmPassword)
            return passwordPattern.test(password);
    }


    const userInfo = {
        FirstName: '',
        LastName: '',
        Email: '',
        'Phone Number': '',
        Password: ''
    }
    const submit = async () => {
        setInputState([validateFirstName(firstName), validateLastName(lastName), validateEmail(email), validatePassword(password, confirmPass)])
        if (!inputState.includes(false)){
            userInfo.FirstName = firstName.trim();
            userInfo.LastName = lastName.trim();
            userInfo.Email = email.trim();
            userInfo.Password = password;
            userInfo['Phone Number'] = phoneNumber.trim();
            try{
                await addDoc(userAccountsRef, userInfo)
            }
            catch(err){
                alert(err)
            }
        } else {
            alert('check your details again')
        }
    }
    // google sign in
    const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <main className='main'>
        <section className='inputDetails'>
            <div className='imgContainer'>
                <img src={logo} alt='logo'/>
            </div>
            <h2>Create an Account</h2>
            <small>Please enter the required Information</small>
            <div className='inputfields'>
                <form action="#">
                    <fieldset>
                        <div class="form-group col-1-2">
                            <label for="your-first-name">First Name</label>
                            <div class="form-field">
                                <span class="form-field-container">
                                    <input type="text" name="your-first-name" id="your-first-name"
                                        placeholder="e.g. Mike" pattern="[A-Za-zÀ-ž\s]{3,}" maxlength="35"
                                        autocomplete accesskey="f" required onChange={(e) => setFirstName(e.target.value)}/>
                                    <i class="form-field-icon"></i>
                                    <p class="form-help">First name should be at least 3 characters and only
                                        contains letters</p>
                                </span>
                            </div>
                        </div>
                        <div class="form-group col-1-2">
                            <label for="your-first-name">Last Name</label>
                            <div class="form-field">
                                <span class="form-field-container">
                                    <input type="text" name="your-last-name" id="your-last-name"
                                        placeholder="e.g. John" pattern="[A-Za-zÀ-ž\s]{3,}" maxlength="35"
                                        autocomplete accesskey="l" required onChange={(e) => setLastName(e.target.value)}/>
                                    <i class="form-field-icon"></i>
                                    <p class="form-help">Last name should be at least 3 characters and only
                                        contains letters</p>
                                </span>
                            </div>
                        </div>
                        <div class="form-group col-1-2">
                            <label for="your-email">Email Address</label>
                            <div class="form-field">
                                <span class="form-field-container">
                                    <input type="email" name="your-email" id="your-email"
                                        placeholder="e.g. youremail@gmail.com"
                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" maxlength="55" autocomplete
                                        accesskey="e" required onChange={(e) => setEmail(e.target.value)}/>
                                    <i class="form-field-icon"></i>
                                </span>
                            </div>
                        </div>
                        <div class="form-group col-1-2">
                            <label for="your-email">Phone Number</label>
                            <div class="form-field">
                                <span class="form-field-container">
                                    <input name="your-phone-number" id="your-phone-number"
                                        placeholder="e.g. +1234567890" maxlength="55" autocomplete
                                        accesskey="n" required onChange={(e) => setPhoneNumber(e.target.value)}/>
                                    <i class="form-field-icon"></i>
                                </span>
                            </div>
                        </div>
                        <div class="form-group col-1-2">
                            <label for="your-Password">Password</label>
                            <div class="form-field">
                                <span class="form-field-container">
                                    <input type="password" name="your-Password" id="your-Password" maxlength="15" minLength='8' accesskey="p" required 
                                        onChange={(e) => setPassword(e.target.value)}/>
                                    <i class="form-field-icon"></i>
                                </span>
                            </div>
                        </div>
                        <div class="form-group col-1-2">
                            <label for="your-Password">Confirm Password</label>
                            <div class="form-field">
                                <span class="form-field-container">
                                    <input type="password" name="your-Password" id="your-Password"
                                        maxlength="15" minLength='8' accesskey="cp" required 
                                        onChange={(e) => setConfirmPassword(e.target.value)}/>
                                    <i class="form-field-icon"></i>
                                </span>
                            </div>
                        </div>
                        <div class="form-group col-1-2">
                            <div class="form-field">
                                <span class="form-field-container">
                                    <button type="submit" value='Sign Up' onClick={submit}></button>
                                </span>
                            </div>
                        </div>
                        <div class="form-group col-1-2">
                            <div class="form-field">
                                <span class="form-field-container">
                                    <button type="submit" value='Sign Up using Google Account' onClick={signInWithGoogle}></button>
                                </span>
                            </div>
                        </div>
                        <n3>Have an account already? <a>Log In</a></n3>
                    </fieldset>
                </form>
            </div>
        </section>
        <section className='img'>
            <img src={img} alt='img'/>
        </section>
    </main>
  )
}

export default CreateAccount
