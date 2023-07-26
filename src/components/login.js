import React from 'react'
import { useState } from 'react'
import '../styles/components/createAccount.css'

export default function Login() {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('');
  return (
    <div>
        <div class="form-group col-1-2">
            <label for="your-email">Email Address <span>*</span></label>
            <div class="form-field">
                <span class="form-field-container">
                    <input type="email" name="your-email" id="your-email"
                        placeholder="e.g. youremail@gmail.com"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" maxlength="55" autocomplete
                        accesskey="e" required onChange={(e) => setEmail(e.target.value)}/>
                    <i class="form-field-icon"></i>
                    <p class={`${inputState[2] === true ? 'form-help' : 'p'}`}>This field is required and should match the email pattern <span>youremail@domain.com</span></p>
                </span>
            </div>
        </div>
        <div class="form-group col-1-2">
            <label for="your-Password">Password <span>*</span></label>
            <div class="form-field">
                <span class="form-field-container">
                    <input type="password" name="your-Password" id="your-Password" maxlength="15" minLength='8' accesskey="p" required 
                        onChange={(e) => setPassword(e.target.value)}/>
                    <i class="form-field-icon"></i>
                    <p class={`${inputState[4] === true ? 'form-help' : 'p'}`}>Password length must be at least 8 charactersa, not more than 15 characters and must be the same as confirm password. <br /> 
                        Must contain at least one uppercase, lowercase, number and a special charcter !@#$%^&*()_+</p>
                </span>
            </div>
        </div>
    </div>
  )
}
