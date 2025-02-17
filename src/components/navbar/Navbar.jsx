import { ArrowDropDown, Search } from "@material-ui/icons"
import { Notifications } from "@material-ui/icons"

import "./navbar.scss"
import { useState } from "react"

const Navbar = () => {
    const [isScrolled,setIsScrolled]=useState(false);
    window.onscroll = ()=>{
        setIsScrolled(window.pageYOffset===0 ? false:true);
        return ()=>(window.onscroll=null);
    };
  return (
    <div className={isScrolled ? "navbar scrolled":"navbar"}>
      <div className="container">
        <div className="left">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt=""
        />
        <span>Homepage</span>
        <span>Series</span>
        <span>Movies</span>
        <span>New and Popular</span>
        <span>My List</span>
        </div>
        <div className="right">
            <Search className="icon"/>
            <span>KIDS</span>
        <Notifications className="icon"/>
        <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
        />
        <div className="profile">
        <ArrowDropDown className="icon"/>
        <div className="options">
            <span>Settings</span>
            <span>Log-Out</span>

        </div>
        </div>

        </div>

        </div>
    </div>
  )
}

export default Navbar
