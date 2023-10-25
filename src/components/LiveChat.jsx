import React, { useEffect, useState } from "react";
import Chat from "./Chat";
import { useDispatch, useSelector } from "react-redux";
import { chatAction } from "../utils/store/chatSlice";
import { randomName, randomText } from "../utils/helper";

const LiveChat = () => {
  const chat = useSelector((state) => state.chat.chat);
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const fetchChat = () => {
    dispatch(
      chatAction.addChats({ name: randomName(), message: randomText(10) })
    );
  };

  //code for lice chat
  useEffect(() => {
    // console.log("first");
    const T = setInterval(() => {
      // console.log("chat api call...")
      fetchChat();
    }, 1500);

    return () => clearInterval(T);
  }, []);

  const handleMessageEnd = (e) => {
    e.preventDefault();
    dispatch(chatAction.addChats({ name: "Souvik", message: message }));
    setMessage("");
  };

  return (
    <div className=" border w-[97%] lg:w-[500px] ">
      <h1 className=" cursor-pointer font-semibold text-xl pl-6 p-3 bg-slate-100 w-full border ">
        Live Chat
      </h1>

      <div className="overflow-y-scroll bg-slate-100 w-full border h-[550px]">
        <div className=" ml-2 p-2 justify-self-start flex flex-col-reverse">
          {chat.map((item, index) => (
            <Chat key={index} data={item} />
          ))}
        </div>
      </div>

      <form action="" className="border w-full" onSubmit={handleMessageEnd}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="type your message"
          type="text"
          className=" p-1 w-full h-10 focus:border-none focus:outline-none pl-3 border-slate-950"
        />
      </form>
    </div>
  );
};

export default LiveChat;
