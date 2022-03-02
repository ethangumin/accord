import React from "react";
import { Link } from "react-router-dom";

const ServersNav = (props) => {
  let fetchServer = props.requestServer ? props.requestServer : null;

  return (
    <ul className="server-index__servers-nav">
      <li className="server-nav__item">
        <Link
          to="/servers"
          style={{ textDecoration: "none", color: "#D4D5D6" }}
        >
          Home
        </Link>
      </li>
      <li className="home-button-separator"></li>
      <div className="server-nav__servers">
        {props.enrolledServers
          ? props.enrolledServers.map((server) => {
              const serverAcronym = server.serverName
                .split(" ")
                .map((word) => word[0])
                .join("");

              return (
                <div key={server.id} className="server-nav__item">
                  <Link
                    to={`/server/${server.id}`}
                    style={{ textDecoration: "none", color: "#D4D5D6" }}
                    onClick={
                      fetchServer
                        ? () => fetchServer(server.id)
                        : console.log("no access to requestServer")
                    }
                  >
                    {serverAcronym}
                  </Link>
                </div>
              );
            })
          : ""}
      </div>
      <li className="server-nav__item create-server">+</li>
      <li className="server-nav__item explore-servers">Exp</li>
    </ul>
  );
};

export default ServersNav;
