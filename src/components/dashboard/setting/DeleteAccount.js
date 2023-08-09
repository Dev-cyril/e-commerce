import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserInfoContext } from '../../../routes/AppRouter'

export default function DeleteAccount() {
    const {setActiveIndex} = useContext(UserInfoContext)
    const deleteAccount = () => {

    }
    const cancel = () => {
        setActiveIndex(0)
    }
  return (
    <section className='deletePage'>
        <p>Do you want to delete your account?</p>
        <h5>Are you sure you want to delete your Saver bank account?you can not undo this action</h5>
        <div className='warning'>
            <h3>Warning</h3>
            <h5>By Deleting your account , you will loose all saved data and your account will be permanently deleted </h5>
        </div>
        <button className='delete' onClick={deleteAccount}>Delete Account</button>
        <button className='cancel'onClick={cancel}>Cancel</button>
    </section>
  )
}
