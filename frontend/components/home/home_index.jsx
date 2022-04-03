import React, { useState, useEffect } from "react";
import HomeContent from "./home_content";
import HomeNav from "./home_nav";
import ServersNav from "../server/servers_nav";
import DmIndex from "./dm/dm_index";

const HomeIndex = (props) => {
  const [friendsList, setFriendsList] = useState(true);
  const [addFriend, setAddFriend] = useState(false);

  useEffect(() => {
    props.fetchUser(props.currentUser.id);
  }, []);

  return (
    <div className="server-index__container">
      <ServersNav
        enrolledServers={props.enrolledServers}
        currentChannels={props.currentChannels}
        createServer={props.createServer}
        createServerMember={props.createServerMember}
        createChannel={props.createChannel}
        currentUser={props.currentUser}
        fetchChannel={props.fetchChannel}
      />
      <DmIndex friends={props.friends} currentUser={props.currentUser} />
      <div className="server-index__home">
        <HomeNav
          logout={props.logout}
          history={props.history}
          setFriendsList={setFriendsList}
          setAddFriend={setAddFriend}
        />
        <HomeContent
          friendsListActive={friendsList}
          addFriendActive={addFriend}
          setFriendsList={setFriendsList}
        />
      </div>
    </div>
  );
};

export default HomeIndex;
