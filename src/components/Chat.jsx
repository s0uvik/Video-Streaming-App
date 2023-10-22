import React from 'react'
import {BiUserCircle} from "react-icons/bi"

const Chat = ({data}) => {
  return (
    <div className=' flex items-center mt-3'>
        <BiUserCircle className=' text-3xl mr-1'/>
        <span className=' font-bold mr-2'>{data.name}:</span>
        <span>{data.message}</span>
    </div>
  )
}

export default Chat