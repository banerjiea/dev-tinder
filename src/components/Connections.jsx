import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addConnections } from '../utils/connectionSlice'
import { Link } from 'react-router-dom'

const Connections = () => {
  const connections=useSelector((store)=>store.connections);
  const dispatch=useDispatch();

    const user = useSelector((store) => store.user);
    const currentUserId = user?._id;

  const fetchConnections=async()=>{
    try{
      const res=await axios.get(BASE_URL+"/user/connections",{
        withCredentials: true
      })
     console.log(res.data.data)
     dispatch(addConnections(res.data.data))
    }catch(err){
      console.error(err)
    }
  }

  useEffect(()=>{
     fetchConnections();
  },[])

  if(!connections) return;

  if(connections.length===0) return <h1 className='flex justify-center my-10'>No Connections Found</h1>
 return (
  <div className="max-w-3xl mx-auto px-4 my-10">
    
    <h1 className="text-3xl font-bold text-center mb-8">
      💬 Your Connections
    </h1>

    <div className="space-y-5">
      {connections.length === 0 && (
        <div className="text-center opacity-60">
          No connections yet 👀
        </div>
      )}

      {connections.map((connectionData) => {
  const { user, lastMessage, lastMessageTime } = connectionData;
  const { _id, firstName, lastName, photoUrl } = user;


        return (
          <div
            key={_id}
            className="card card-side bg-base-200 shadow-md hover:shadow-xl transition-all duration-300"
          >
            
            {/* Avatar */}
            <figure className="p-4">
              <div className="avatar">
                <div className="w-20 rounded-xl ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={photoUrl} alt="profile" />
                </div>
              </div>
            </figure>

            {/* Content */}
<div className="card-body py-4">

  {/* Header */}
  <div className="flex items-center justify-between">
    <h2 className="card-title">
      {firstName} {lastName}
    </h2>

    <div className="flex items-center gap-2">
     

      {lastMessageTime && (
        <span className="text-xs opacity-60">
          {new Date(lastMessageTime).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
          })}
        </span>
      )}
    </div>
  </div>

  {/* Last message preview */}
  <p className="text-sm opacity-70 line-clamp-1">
    {connectionData.lastMessageSenderId === currentUserId ? "You: " : ""}
    {lastMessage || "Start conversation..."}
  </p>

  {/* Action */}
  <div className="card-actions justify-end mt-2">
    <Link to={"/chat/" + _id}>
      <button className="btn btn-primary btn-sm">Chat</button>
    </Link>
  </div>

</div>

</div>
        );
      })}
    </div>

  </div>
);

}

export default Connections;
