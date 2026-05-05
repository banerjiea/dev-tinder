import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/constants'
import { removeUser } from '../utils/userSlice'

const NavBar = () => {
  const user=useSelector((store)=>store.user)

  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleLogout=async()=>{
    try{
      await axios.post(BASE_URL+"/logout",{
        withCredentials:true
      })
      dispatch(removeUser())
      navigate("/login");
    }
    catch(err){
      console.error(err)
    }
  }
 return (
  <div className="navbar bg-base-300 shadow-sm px-4">
    
    {/* Left */}
    <div className="flex-1">
      <Link to="/" className="btn btn-ghost text-xl">
        DevTinder
      </Link>
    </div>

    {/* Right */}
    {user && (
      <div className="flex items-center gap-3">
        
        <p className="text-sm">Welcome, {user.firstName}</p>

        {/* Dropdown */}
        <div className="dropdown dropdown-end">
          
          {/* Avatar = Trigger */}
          <div
            tabIndex={0}
            role="button"
            className="relative btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img src={user.photoUrl} alt="user" />
            </div>

            {/* Blue Tick */}
            {user.isPremium && (
              <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-[2px] border-2 border-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3.25-3.25a1 1 0 111.414-1.414l2.543 2.543 6.543-6.543a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}
          </div>

          {/* Menu */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/profile">
                Profile <span className="badge">New</span>
              </Link>
            </li>
            <li><Link to="/connections">Connections</Link></li>
            <li><Link to="/requests">Requests</Link></li>
            <li><Link to="/premium">Premium</Link></li>
            <li><a onClick={handleLogout}>Logout</a></li>
          </ul>

        </div>
      </div>
    )}
  </div>
);
}

export default NavBar