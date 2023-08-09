import React, { useState } from 'react'
import '../../styles/components/settings.css'
import updateIcon from '../../assets/updateIcon.png'
import deleteIcon from "../../assets/deleteIcon.png";

export default function Settings({components}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const ActiveComponent = components[activeIndex]

  //seting onclicks
  const changeComponent = (index) => {
    setActiveIndex(index)
  }
  return (
    <section className='settings'>
      <div className='nav'>
        <div
            onClick={() => changeComponent(0)}
            className={`div ${activeIndex === 0 ? "active" : ""}`}
          >
            <img src={updateIcon} alt="Update" />
            <div>
              <h3>Update Account</h3>
            </div>
          </div>
          <div
            onClick={() => changeComponent(2)}
            className={`div ${activeIndex >= 1 ? "active" : ""}`}
          >
            <img src={deleteIcon} alt="Delete" />
            <div>
              <h3>Delete Account</h3>
            </div>
          </div>
      </div>
      {ActiveComponent && <ActiveComponent />}
    </section>
  )
}
