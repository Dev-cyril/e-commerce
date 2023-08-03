import React, { useState, createContext } from 'react';
// import './dashboard.css';
import Saverbank from '../../assets/Saverbank.png';
import profilePic from '../../assets/profilePic.png'
import updateIcon from '../../assets/updateIcon.png'
import deleteIcon from "../../assets/deleteIcon.png";
import navNotificationBell from "../../assets/navNotificationBell.png";
import settingsIcon from '../../assets/settingsIcon.png'
import dashboardIcon from '../../assets/dashboardIcon.png'
import cardsAndReceiptIcon from '../../assets/CardsAndReceiptIcon.png'
import transactionsIcon from "../../assets/transactionsIcon.png";
import logoutIcon from "../../assets/logoutIcon.png";
import sendAndReceiveIcon from "../../assets/sendAndReceiveIcon.png";

const UserInfoContext = createContext();

const UserDashboard = ({ components }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ActiveComponent = components[activeIndex];
  const [userInfo, setUserInfo] = useState({});

  const changeComponent = (index) => {
    setActiveIndex(index);
  };

  return (
    <UserInfoContext.Provider value={{ setUserInfo, userInfo }}>
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
            <img src={cardsAndReceiptIcon} alt="cardsAndReceipt" />
            <div>
              <h3>Cards and Receipt</h3>
            </div>
          </div>
          <div
            onClick={() => changeComponent(2)}
            className={`div ${activeIndex === 2 ? "active" : ""}`}
          >
            <img src={transactionsIcon} alt="Transactions" />
            <div>
              <h3>Transactions</h3>
            </div>
          </div>
          <div
            onClick={() => changeComponent(3)}
            className={`div ${activeIndex === 3 ? "active" : ""}`}
          >
            <img src={navNotificationBell} alt="Notification Bell" />
            <div>
              <h3>Notifications</h3>
            </div>
          </div>
          <div
            onClick={() => changeComponent(4)}
            className={`div ${activeIndex === 4 ? "active" : ""}`}
          >
            <img src={sendAndReceiveIcon} alt="Receive" />
            <div>
              <h3>Send and Receive</h3>
            </div>
          </div>
          <div
            onClick={() => changeComponent(5)}
            className={`div ${activeIndex === 5 ? "active" : ""}`}
          >
            <img src={settingsIcon} alt="Settings" />
            <div>
              <h3>Settings</h3>
            </div>
          </div>
          <div
            onClick={() => changeComponent(6)}
            className={`div ${activeIndex === 6 ? "active" : ""}`}
          >
            <img src={updateIcon} alt="Update" />
            <div>
              <h3>Update Account</h3>
            </div>
          </div>
          <div
            onClick={() => changeComponent(7)}
            className={`div ${activeIndex >= 7 ? "active" : ""}`}
          >
            <img src={deleteIcon} alt="Delete" />
            <div>
              <h3>Delete Account</h3>
            </div>
          </div>
          <div
            onClick={() => changeComponent(8)}
            className={`div ${activeIndex >= 8 ? "active" : ""}`}
          >
            <img src={logoutIcon} alt="LogOut" />
            <div>
              <h3>Log Out</h3>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="header">
            <p>Account</p>
            {/* replace with user name after api call */}
            <div className="profile">
              <div className="img">
              <img src = {profilePic} alt='profile pic' className='profile-pic'/>
              </div>
              <h4>{userInfo.auth.displayName}</h4>
            </div>
          </div>
          <div>

          </div>
          {ActiveComponent && <ActiveComponent />}
        </div>
      </div>
      </UserInfoContext.Provider>
  );
};

export {UserDashboard, UserInfoContext};