import axios from 'axios';
import React from 'react'
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { removeUserFromFeed } from '../utils/feedSlice';

const UserCard = ({user}) => {
  const {_id,firstName, lastName, photoUrl, age, gender, about,isPremium}=user;
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
    <div className="w-80 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      
      {/* Image Section */}
      <div className="relative">
        <img
          src={photoUrl}
          alt="photo"
          className="w-full h-72 object-cover"
        />

        {/* Blue Tick on Image */}
        {isPremium && (
          <div className="absolute bottom-3 right-3 bg-blue-500 rounded-full p-[4px] border-2 border-white shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-white"
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

      {/* Info Section */}
      <div className="p-4 text-center">
        
        {/* Name + Tick */}
        <h2 className="text-xl font-semibold text-gray-800 flex items-center justify-center gap-1">
          {firstName} {lastName}

          {isPremium && (
            <span className="bg-blue-500 rounded-full p-[2px]">
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
            </span>
          )}
        </h2>

        {/* Age + Gender */}
        {age && gender && (
          <p className="text-gray-500 text-sm mt-1">
            {age} • {gender}
          </p>
        )}

        {/* About */}
        <p className="text-gray-600 text-sm mt-3 line-clamp-3">
          {about}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 mt-5">
          <button
            className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-100 transition"
            onClick={() => handleSendRequest("ignored", _id)}
          >
            Ignore
          </button>

          <button
            className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            onClick={() => handleSendRequest("interested", _id)}
          >
            Interested
          </button>
        </div>

      </div>
    </div>
  );
};

export default UserCard