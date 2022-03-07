import React from "react";
import { Link } from "react-router-dom";
import ServerModal from "../modals/server_modal";

class ServersNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ServerModal: false,
    };
    this.toggleServerModal = this.toggleServerModal.bind(this);
  }

  toggleServerModal(e) {
    e.preventDefault();
    this.setState({ ServerModal: !this.state.ServerModal });
  }

  render() {
    // debugger;
    return (
      <ul className="server-index__servers-nav">
        <li className="server-nav__item">
          <Link to="/home" style={{ textDecoration: "none", color: "#D4D5D6" }}>
            Home
          </Link>
        </li>
        <li className="home-button-separator"></li>
        <div className="server-nav__servers">
          {this.props.enrolledServers
            ? this.props.enrolledServers.map((server) => {
                const serverAcronym = server.serverName
                  .split(" ")
                  .map((word) => word[0])
                  .join("");

                return (
                  <div key={server.id} className="server-nav__item">
                    <Link
                      to={`/server/${server.id}/channel/${server.channels[0].id}`}
                      style={{ textDecoration: "none", color: "#D4D5D6" }}
                      onClick={
                        this.props.requestServer
                          ? () =>
                              this.props
                                .requestServer(server.id)
                                .then(() =>
                                  this.props.fetchChannel(server.channels[0].id)
                                )
                          : () => null
                      }
                    >
                      {serverAcronym}
                    </Link>
                  </div>
                );
              })
            : ""}
        </div>
        <li
          className="server-nav__item create-server"
          onClick={(e) => this.toggleServerModal(e)}
        >
          +
        </li>
        <li className="server-nav__item explore-servers">Exp</li>
        <ServerModal
          active={this.state.ServerModal}
          toggleServerModal={this.toggleServerModal}
          createServer={this.props.createServer}
          createServerMember={this.props.createServerMember}
          createChannel={this.props.createChannel}
          currentUser={this.props.currentUser}
        />
      </ul>
    );
  }
}

export default ServersNav;
