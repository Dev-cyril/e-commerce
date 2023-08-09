import React from 'react'
import Settings from '../Settings'
import '../../../styles/components/settings.css'
import DeleteAccount from './DeleteAccount'
import UpdateProfile from './UpdateProfile'

const components = [UpdateProfile, DeleteAccount]
export default function SettingWrapper() {
  return (
    <Settings components={components}/>
  )
}
