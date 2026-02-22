import React, { useState } from 'react'
import UserCard from './UserCard'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { addUser } from '../utils/userSlice'

const EditProfile = ({user}) => {

  const [firstName,setFirstName]=useState(user.firstName)
  const [lastName,setLastName]=useState(user.lastName)
  const [age,setAge]=useState(user.age || "")
  const [gender,setGender]=useState(user.gender || "")
  const [about,setAbout]=useState(user.about || "")
  const[photoUrl, setPhotoUrl]=useState(user.photoUrl || "")
  const[error,setError]=useState("")
  const[showToast,setShowToast]=useState("")
  const dispatch=useDispatch();

  const saveProfile=async()=>{
    setError("");
    try{
      const res=await axios.patch(BASE_URL+"/profile/edit",{
        firstName,lastName,age,gender,about,photoUrl
      },
      {withCredentials: true})
      dispatch(addUser(res.data.data));
      setShowToast(true);
      setTimeout(()=>{
        setShowToast(false)
      },3000)
    }
    catch(err){
       setError(err.response.data)
    }
  }
  return (
    <>
    <div className='flex justify-center my-10'>
    <div className="flex justify-center mx-10">
      <div className="card card-border bg-base-100 w-96">
        <div className="card-body">
          <h2 className="card-title justify-center">Edit Profile</h2>
          <div>
            <label className="floating-label my-4">
              <span>First Name</span>
              <input
                type="text"
                value={firstName}
                placeholder="Your first name"
                className="input input-md"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
          </div>
           <div>
            <label className="floating-label my-4">
              <span>Last Name</span>
              <input
                type="text"
                value={lastName}
                placeholder="Your Last name"
                className="input input-md"
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
          </div>
           <div>
            <label className="floating-label my-4">
              <span>Age</span>
              <input
                type="text"
                value={age}
                placeholder="Your Age"
                className="input input-md"
                onChange={(e) => setAge(e.target.value)}
              />
            </label>
          </div>
           <div>
           <label className="floating-label my-4">
           <span>Gender</span>
  <select
    value={gender}
    className="select select-md"
    onChange={(e) => setGender(e.target.value)}
  >
    <option value="" disabled>Select your gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="others">Others</option>
  </select>
</label>
          </div>
           <div>
            <label className="floating-label my-4">
              <span>About</span>
              <input
                type="text"
                value={about}
                placeholder="About"
                className="input input-md"
                onChange={(e) => setAbout(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className="floating-label my-4">
              <span>Photo URL</span>
              <input
                type="text"
                value={photoUrl}
                placeholder="Photo URL"
                className="input input-md"
                onChange={(e) => setPhotoUrl(e.target.value)}
              />
            </label>
          </div>
          <p className="text-red-500">{error}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={saveProfile}>
              Save Profile
            </button>
          </div>
        </div>
      </div>
    </div>
    <UserCard user={{firstName,lastName,photoUrl,age,gender,about}}/>
    </div>
    {
      showToast &&  
  <div className="toast toast-top toast-center">
  <div className="alert alert-success">
    <span>Profile saved successfully.</span>
  </div>
</div> 
    }
   
    </>
  )
}

export default EditProfile;