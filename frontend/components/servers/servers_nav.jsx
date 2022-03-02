import React from "react";

const ServersNav = ({ enrolledServers }) => {
  return (
    <ul className="server-index__servers-nav">
      <li className="server-nav__item">Home</li>
      <li className="home-button-separator"></li>
      {/* {enrolledServers.map((server) => {
        const serverAcronym = server.serverName
          .split(" ")
          .map((word) => word[0])
          .join("");

        return (
          <li key={server.id} className="server-nav__item">
            {serverAcronym}
          </li>
        );
      })} */}
      <li className="server-nav__item create-server">+</li>
      <li className="server-nav__item explore-servers">Exp</li>
    </ul>
  );
};

export default ServersNav;
