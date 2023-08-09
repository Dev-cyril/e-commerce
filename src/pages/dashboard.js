import React from 'react'
import UserDashboard from '../components/dashboard/UserDashboard'
import WelcomePage from '../components/dashboard/welcomePage'
import SettingWrapper from '../components/dashboard/setting/SettingWrapper'
import SendAndRecieve from '../components/dashboard/SendAndRecieve'
import Transactions from '../components/dashboard/Transactions'
import Notifications from '../components/dashboard/Notifications'

const componets = [WelcomePage, Transactions,Notifications, SendAndRecieve, SettingWrapper]
export default function Dashboard() {
  return (
    <UserDashboard components={componets}/>
  )
}
