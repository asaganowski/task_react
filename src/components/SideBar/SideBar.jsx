import React, {useState} from 'react'
import { NavLink, Link } from "react-router-dom";
import "./SideBar.scss"
import { FiUsers } from "react-icons/fi";
import { BsFileEarmarkPost } from "react-icons/bs";
import { RiTodoLine, RiCloseFill } from "react-icons/ri";
import { FaBars } from "react-icons/fa";



function SideBar() {

    const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => setSidebar(!sidebar);

const menu = [
    {
        icon: <FiUsers/>,
        path: "/",
        name: "Users"
    },
    {
        icon: <BsFileEarmarkPost/>,
        path: "/posts",
        name: "Posts"
    },
    {
        icon: <RiTodoLine/>,
        path: "/todos",
        name: "Todos"
    },
]

  return (
    <div className="sidebar-wrapper">
        <div className='menu-open-icon'>
          <Link to='#' className='menu-open-icon-link'>
            <FaBars onClick={toggleSidebar} />
          </Link>
        </div>
        <nav className={`${sidebar ? 'active' : ''} nav-menu` }>
            
          <ul className='header-menu'>
            <Link to='#' className='menu-close-icon-link menu-item'  onClick={toggleSidebar}>
                <RiCloseFill />
            </Link>
            {menu.map((menu_item, index) =>{

                return(

                    <li className="menu-item" key={index}>
                        <NavLink end to={menu_item.path} className="menu-item-link" onClick={toggleSidebar}>
                            {menu_item.icon}&emsp;
                            <span className="text">{menu_item.name}</span>
                        </NavLink>
                    </li>
                )

            } )}
          </ul>
        </nav>
        
    </div>
  )
}

export default SideBar