import React from 'react'
import { BsJustify } from "react-icons/bs";

const Sidebar = () => {

  function toggleSidebar() {
    document.getElementById("dropdown").classList.toggle("show");
  }

  const tabs = <div>
  <BsJustify className={'sidebar-button-show'} size={40} color={'white'} style={{border:'2px solid white', borderRadius:'5px'}} onClick={toggleSidebar}/>
  <nav id="dropdown" className={'dropdown'}>
    <ul className={'tabs-list-sidebar'}>
      <li>SHOP</li>
    </ul>
  </nav>
  </div>


  return (
    <>
      {tabs}
    </>
  )
}

export default Sidebar
