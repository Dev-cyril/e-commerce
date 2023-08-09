import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { db, auth, googleProvider } from '../config/firebase';
import { collection } from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
} from 'firebase/auth';
import logo from '../assets/Saverbank.png';
import img from '../assets/createAccImg.png';
import '../styles/components/createAccount.css';
import { UserInfoContext } from '../routes/AppRouter';

function CreateAccount() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPassword] = useState('');
  const [inputState, setInputState] = useState([true, true, true, true, true, true]);

  const {userInfo, setUserInfo} = useContext(UserInfoContext)

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) console.log(user);
    });
  }, [auth]);

  const userAccountsRef = collection(db, 'userAccount');

  const validateFirstName = (name) => {
    const namePattern = /^[A-Za-zÀ-ž\s]{3,}/;
    return namePattern.test(name);
  };

  const validateLastName = (name) => {
    const namePattern = /^[A-Za-zÀ-ž\s]{3,}/;
    return namePattern.test(name);
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password, confirmPassword) => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,15}$/;
    if (password === confirmPassword) return passwordPattern.test(password);
    return false;
  };

  const validatePhoneNumber = (number) => {
    if (number.trim().length >= 5) return true;
    return false;
  };

  // Function to validate all fields and return true if all are valid
  const isFormValid = () => {
    return (
      validateFirstName(firstName) &&
      validateLastName(lastName) &&
      validateEmail(email) &&
      validatePhoneNumber(phoneNumber) &&
      validatePassword(password, confirmPass)
    );
  };

  const signUp = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      userCredential.user.auth.displayName = `${firstName.trim()} ${lastName.trim()}`
      userCredential.user.metadata.phoneNumber = phoneNumber.trim()
      console.log(userCredential.user);
      navigate('/signin');
    } catch (err) {
      alert(err);
    }
  };

  const submit = async () => {
    setInputState([
      validateFirstName(firstName),
      validateLastName(lastName),
      validateEmail(email),
      validatePhoneNumber(phoneNumber),
      validatePassword(password, confirmPass),
      true,
    ]);

    if (isFormValid()) {
      try {
        await signUp(email.trim(), password.trim());
      } catch (err) {
        alert(err);
      }
    } else {
      alert('Check your details again');
    }
  };

  const signInWithGoogle = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      setUserInfo(userCredential.user);
      navigate('/dashboard');
      console.log(userInfo)
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <main className="main">
      <section className="inputDetails">
        <div className="imgContainer">
          <img src={logo} alt="logo" />
        </div>
        <h2>Create an Account</h2>
        <small>Please enter the required Information</small>
        <div className="inputfields">
          <div className="form-group col-1-2">
            <label htmlFor="your-first-name">First Name <span>*</span></label>
            <div className="form-field">
              <span className="form-field-container">
                <input
                  type="text"
                  name="your-first-name"
                  id="your-first-name"
                  placeholder="e.g. Mike"
                  pattern="[A-Za-zÀ-ž\s]{3,}"
                  maxLength="35"
                  autoComplete="off"
                  accessKey="f"
                  required
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <i className="form-field-icon"></i>
                <p className={`${inputState[0] === false ? 'form-help' : 'p'}`}>
                  First name should be at least 3 characters and only contains letters
                </p>
              </span>
            </div>
          </div>
          <div class="form-group col-1-2">
                    <label for="your-first-name">Last Name <span>*</span></label>
                    <div class="form-field">
                        <span class="form-field-container">
                            <input type="text" name="your-last-name" id="your-last-name"
                                placeholder="e.g. John" pattern="[A-Za-zÀ-ž\s]{3,}" maxlength="35"
                                autocomplete accesskey="l" required onChange={(e) => setLastName(e.target.value)}/>
                            <i class="form-field-icon"></i>
                            <p class={`${inputState[1] === false ? 'form-help' : 'p'}`}>Last name should be at least 3 characters and only
                                contains letters</p>
                        </span>
                    </div>
                </div>
                <div class="form-group col-1-2">
                    <label for="your-email">Email Address <span>*</span></label>
                    <div class="form-field">
                        <span class="form-field-container">
                            <input type="email" name="your-email" id="your-email"
                                placeholder="e.g. youremail@gmail.com"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" maxlength="55" autocomplete
                                accesskey="e" required onChange={(e) => setEmail(e.target.value)}/>
                            <i class="form-field-icon"></i>
                            <p class={`${inputState[2] === false ? 'form-help' : 'p'}`}>This field is required and should match the email pattern <span>youremail@domain.com</span></p>
                        </span>
                    </div>
                </div>
                <div class="form-group col-1-2">
                    <label for="your-email">Phone Number <span>*</span></label>
                    <div class="form-field">
                        <span class="form-field-container">
                            <input name="your-phone-number" id="your-phone-number"
                                placeholder="e.g. +1234567890" maxlength="55" autocomplete
                                accesskey="n" required onChange={(e) => setPhoneNumber(e.target.value)}/>
                            <i class="form-field-icon"></i>
                            <p class={`${inputState[3] === false ? 'form-help' : 'p'}`}>This field is required</p>
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
                            <p class={`${inputState[4] === false ? 'form-help' : 'p'}`}>Password length must be at least 8 characters, not more than 15 characters and must be the same as confirm password. <br /> 
                                Must contain at least one uppercase, lowercase, number and a special charcter !@#$%^&*()_+</p>
                        </span>
                    </div>
                </div>
                <div class="form-group col-1-2">
                    <label for="your-Password">Confirm Password <span>*</span></label>
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
                            <button onClick={submit}>Sign Up</button>
                        </span>
                    </div>
                </div>
                <div class="form-group col-1-2">
                    <div class="form-field">
                        <span class="form-field-container">
                            <button onClick={signInWithGoogle}>Sign Up using Google Account</button>
                        </span>
                    </div>
                </div>
                <n3>Have an account already? <Link to='/signin'>Log In</Link></n3>
            </div>
        </section>
        <section className='img'>
            <img src={img} alt='img'/>
        </section>
    </main>
  )
}

export default CreateAccount
