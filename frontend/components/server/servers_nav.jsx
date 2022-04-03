import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ServerModal from "../modals/server_modal";
import ServerNavItemBubble from "./server_nav_item_bubble";
import Plus from "../../../app/assets/images/plus-solid.svg";
import Compass from "../../../app/assets/images/compass-solid.svg";
import EditDeleteServerContextMenu from "./edit_delete_server_context_menu";
import ExploreServersModal from "../modals/explore_servers_modal";

const ServersNav = (props) => {
  const [serverModal, setServerModal] = useState(false);
  const [serverModalType, setServerModalType] = useState(null);
  const [serverBubble, setServerBubble] = useState(false);
  const [bubbleServer, setBubbleServer] = useState(null);
  const [editDeleteMenu, setEditDeleteMenu] = useState(false);
  const [serverPos, setServerPos] = useState({ x: "0px", y: "0px" });
  const [ctxServer, setCtxServer] = useState(null);
  const [exploreModal, setExploreModal] = useState(false);

  const currentUser = useSelector(
    (state) => state.entities.users[state.session.id]
  );

  useEffect(() => {
    const controller = new AbortController();

    window.addEventListener("click", (e) => {
      e.preventDefault();
      setEditDeleteMenu(false);
    });

    return () => controller.abort;
  }, []);

  const toggleServerModal = (e, modalType) => {
    e.preventDefault();
    setServerModalType(modalType);
    setServerModal(!serverModal);
  };

  const toggleExploreModal = () => {
    setExploreModal(!exploreModal);
  };

  const toggleEditDeleteServer = (e, server) => {
    // if (server.creatorId !== currentUser.id) return;

    e.preventDefault();
    const xPos = e.pageY + "px";
    const yPos = e.pageX + "px";

    setServerPos({ x: xPos, y: yPos });
    setEditDeleteMenu(true);
    setCtxServer(server);
  };

  // const toggleBubbleHandler = (server) => {

  // }

  return (
    <ul className="server-index__servers-nav">
      <Link to="/home" style={{ textDecoration: "none", color: "#D4D5D6" }}>
        <li className="server-nav__item">Home</li>
      </Link>
      <li className="home-button-separator"></li>
      <div className="server-nav__servers">
        {props.enrolledServers
          ? props.enrolledServers.map((server) => {
              const serverAcronym = server.serverName
                .split(" ")
                .map((word) => word[0])
                .join("");

              const serverChannels = props.currentChannels
                ? props.currentChannels.filter((channel) => {
                    return channel.serverId === server.id;
                  })
                : "";
              return (
                <div
                  key={server.id}
                  className="server-nav__item-div"
                  onContextMenu={(e) => toggleEditDeleteServer(e, server)}
                >
                  <Link
                    to={
                      serverChannels.length > 0
                        ? `/server/${server.id}/channel/${serverChannels[0].id}`
                        : "/home"
                    }
                    style={{ textDecoration: "none", color: "#D4D5D6" }}
                    onMouseEnter={() => {
                      setServerBubble(true);
                      setBubbleServer(server);
                    }}
                    onMouseLeave={() => {
                      setServerBubble(false);
                      setBubbleServer(null);
                    }}
                  >
                    <div className="server-nav__item">{serverAcronym}</div>
                  </Link>
                  <ServerNavItemBubble
                    serverBubbleActive={serverBubble}
                    server={server}
                    bubbleServer={bubbleServer}
                  />
                </div>
              );
            })
          : ""}
      </div>
      <img
        src={Plus}
        alt="create server button"
        className="server-nav__item create-server"
        onClick={(e) => toggleServerModal(e, "create")}
      />
      <img
        src={Compass}
        className="server-nav__item explore-servers"
        alt="explore servers button"
        onClick={() => toggleExploreModal()}
      />
      <ServerModal
        serverModalType={serverModalType}
        ctxServer={ctxServer}
        active={serverModal}
        toggleServerModal={toggleServerModal}
        createServer={props.createServer}
        createServerMember={props.createServerMember}
        createChannel={props.createChannel}
        // currentUser={props.currentUser}
        fetchChannel={props.fetchChannel}
      />
      <EditDeleteServerContextMenu
        style={{ top: serverPos.x, left: serverPos.y }}
        status={editDeleteMenu}
        ctxServer={ctxServer}
        toggleServerModal={toggleServerModal}
        currentUser={currentUser}
      />
      <ExploreServersModal
        active={exploreModal}
        toggleExploreModal={toggleExploreModal}
      />
    </ul>
  );
};

export default ServersNav;
