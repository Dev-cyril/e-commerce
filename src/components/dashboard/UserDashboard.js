import React, { useState, useContext } from 'react';
import Saverbank from '../../assets/Saverbank.png';
import profilePic from '../../assets/profilePic.png'
import navNotificationBell from "../../assets/navNotificationBell.png";
import settingsIcon from '../../assets/settingsIcon.png'
import dashboardIcon from '../../assets/dashboardIcon.png';
import transactionsIcon from "../../assets/transactionsIcon.png";
import logoutIcon from "../../assets/logoutIcon.png";
import sendAndReceiveIcon from "../../assets/sendAndReceiveIcon.png";
import { UserInfoContext } from '../../routes/AppRouter';

const UserDashboard = ({ components }) => {
  const ActiveComponent = components[activeIndex];
  const {userInfo, activeIndex, setActiveIndex} = useContext(UserInfoContext)

  const changeComponent = (index) => {
    setActiveIndex(index);
  };

  return (
    <React.Fragment>
      <div className="sect">
        <nav>
          <div className='logo-container'>
            <img src={Saverbank} alt="Saver Bank Logo" className='BankLogo' />
          </div>
          <div
            onClick={() => changeComponent(0)}
            className={`div ${activeIndex === 0 ? "active" : ""}`}
          >
            <img src={dashboardIcon} alt="dashboard" />
            <div>
              <h3>Dashboard</h3>
            </div>
          </div>
          
          <div
            onClick={() => changeComponent(1)}
            className={`div ${activeIndex === 1 ? "active" : ""}`}
          >
            <img src={transactionsIcon} alt="Transactions" />
            <div>
              <h3>Transactions</h3>
            </div>
          </div>
          <div
            onClick={() => changeComponent(2)}
            className={`div ${activeIndex === 2 ? "active" : ""}`}
          >
            <img src={navNotificationBell} alt="Notification Bell" />
            <div>
              <h3>Notifications</h3>
            </div>
          </div>
          <div
            onClick={() => changeComponent(3)}
            className={`div ${activeIndex === 3 ? "active" : ""}`}
          >
            <img src={sendAndReceiveIcon} alt="Receive" />
            <div>
              <h3>Send and Receive</h3>
            </div>
          </div>
          <div
            onClick={() => changeComponent(4)}
            className={`div ${activeIndex === 4 ? "active" : ""}`}
          >
            <img src={settingsIcon} alt="Settings" />
            <div>
              <h3>Settings</h3>
            </div>
          </div>
          <div
            onClick={() => changeComponent(5)}
            className={`div ${activeIndex >= 5 ? "active" : ""}`}
          >
            <img src={logoutIcon} alt="LogOut" />
            <div>
              <h3>Log Out</h3>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="header">
            <p>Account Setting</p>
            <div className="profile">
              <div className="img">
                <img src = {profilePic} alt='profile pic' className='profile-pic'/>
              </div>
              <h4>{userInfo.auth.displayName}</h4>
            </div>
          </div>
          {ActiveComponent && <ActiveComponent />}
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserDashboard;