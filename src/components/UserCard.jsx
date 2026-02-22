import axios from 'axios';
import React from 'react'
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { removeUserFromFeed } from '../utils/feedSlice';

const UserCard = ({user}) => {
  const {_id,firstName, lastName, photoUrl, age, gender, about}=user;
  const dispatch=useDispatch();
  if (!user) return null;
  const handleSendRequest=async(status,userId)=>{
    try{
      const res=await axios.post(BASE_URL+"/request/send/"+status+"/"+userId,
        {},
        {withCredentials: true}
      );
      dispatch(removeUserFromFeed(userId))

    }catch(err){
      console.error(err)
    }
  }
  return (
    <>
    <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={photoUrl}
      alt="photo"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{firstName + " " + lastName}</h2>
    {age && gender &&  <p>{age+ " ,"+ gender}</p>}
    <p>{about}</p>
    <div className="card-actions justify-center ms-4">
      <button className="btn btn-primary" onClick={()=>handleSendRequest("ignored",_id)}>Ignore</button>
       <button className="btn btn-secondary" onClick={()=>handleSendRequest("interested",_id)}>Interested</button>
    </div>
  </div>
</div></>
  )
}

export default UserCard