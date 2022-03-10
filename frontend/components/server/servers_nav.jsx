import React from "react";
import { Link } from "react-router-dom";
import ServerModal from "../modals/server_modal";
import ServerNavItemBubble from "./server_nav_item_bubble";
import Plus from "../../../app/assets/images/plus-solid.svg";
import Compass from "../../../app/assets/images/compass-solid.svg";

class ServersNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ServerModal: false,
      serverBubble: false,
    };
    this.toggleServerModal = this.toggleServerModal.bind(this);
  }

  toggleServerModal(e) {
    e.preventDefault();
    this.setState({ ServerModal: !this.state.ServerModal });
  }

  // toggleServerBubble(e) {
  //   this.setState({ serverBubble: true });
  // }

  render() {
    return (
      <ul className="server-index__servers-nav">
        {/* <Link to="/home" style={{ textDecoration: "none", color: "#D4D5D6" }}>
          <li className="server-nav__item">Home</li>
        </Link>
        <li className="home-button-separator"></li> */}
        <div className="server-nav__servers">
          {this.props.enrolledServers
            ? this.props.enrolledServers.map((server) => {
                const serverAcronym = server.serverName
                  .split(" ")
                  .map((word) => word[0])
                  .join("");

                const serverChannels = this.props.currentChannels
                  ? this.props.currentChannels.filter((channel) => {
                      return channel.serverId === server.id;
                    })
                  : "";
                return (
                  <div key={server.id} className="server-nav__item-div">
                    <Link
                      to={
                        serverChannels.length > 0
                          ? `/server/${server.id}/channel/${serverChannels[0].id}`
                          : "/home"
                      }
                      style={{ textDecoration: "none", color: "#D4D5D6" }}
                      onMouseEnter={() => this.setState({ serverBubble: true })}
                      onMouseLeave={() =>
                        this.setState({ serverBubble: false })
                      }
                    >
                      <div className="server-nav__item">{serverAcronym}</div>
                    </Link>
                    {/* <ServerNavItemBubble
                      serverBubbleActive={this.state.serverBubble}
                      serverName={server.serverName}
                    /> */}
                  </div>
                );
              })
            : ""}
        </div>
        <img
          src={Plus}
          alt="create server button"
          className="server-nav__item create-server"
          onClick={(e) => this.toggleServerModal(e)}
        />
        {/* <Link to="/server-discovery"> */}
        {/* <img
          src={Compass}
          alt="explore servers button"
          className="server-nav__item explore-servers"
        /> */}
        {/* </Link> */}
        <ServerModal
          active={this.state.ServerModal}
          toggleServerModal={this.toggleServerModal}
          createServer={this.props.createServer}
          createServerMember={this.props.createServerMember}
          createChannel={this.props.createChannel}
          currentUser={this.props.currentUser}
          fetchChannel={this.props.fetchChannel}
        />
      </ul>
    );
  }
}

export default ServersNav;
