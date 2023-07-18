import React from 'react'
import logo from '../assests/Saverbank.png'
import img from '../assests/createAccImg.png'
import '../styles/components/createAccount.scss'

function CreateAccount() {
  return (
    <main className='main'>
        <section className='inputDetails'>
            <figure>
                <img src={logo} alt='logo'/>
            </figure>
            <p>Create an Account</p>
            <small>Please enter the required Information</small>
            <div className='inputfields'>
                <form action="#" method="post">
                    <fieldset>
                        <legend class="visually-hidden">Your personal information</legend>
                            <div class="form-group col-1-2">
                                <label for="your-first-name">First Name</label>
                                <div class="form-field">
                                    <span class="form-field-container">
                                        <input type="text" name="your-first-name" id="your-first-name"
                                            placeholder="e.g. Mike" pattern="[A-Za-zÀ-ž\s]{3,}" maxlength="35"
                                            autocomplete accesskey="f" required />
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
                                            autocomplete accesskey="l" required />
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
                                            accesskey="e" required />
                                        <i class="form-field-icon"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="form-group col-1-2">
                                <label for="your-email">Phone Number</label>
                                <div class="form-field">
                                    <span class="form-field-container">
                                        <input type="number" name="your-phone-number" id="your-phone-number"
                                            placeholder="e.g. +1234567890" maxlength="55" autocomplete
                                            accesskey="n" required />
                                        <i class="form-field-icon"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="form-group col-1-2">
                                <label for="your-Password">Password</label>
                                <div class="form-field">
                                    <span class="form-field-container">
                                        <input type="password" name="your-Password" id="your-Password"
                                            placeholder="e.g. youremail@gmail.com" maxlength="15" minLength='8' accesskey="p" required />
                                        <i class="form-field-icon"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="form-group col-1-2">
                                <label for="your-Password">Password</label>
                                <div class="form-field">
                                    <span class="form-field-container">
                                        <input type="password" name="your-Password" id="your-Password"
                                            placeholder="e.g. youremail@gmail.com" maxlength="15" minLength='8' accesskey="cp" required />
                                        <i class="form-field-icon"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="form-group col-1-2">
                                <div class="form-field">
                                    <span class="form-field-container">
                                        <input type="submit" value='Sign Up' />
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
