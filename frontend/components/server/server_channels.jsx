import React from "react";
import Hashtag from "../../../app/assets/images/hashtag-solid.svg";

class ServerChannels extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   channels: [],
    // };
    // this.toggleChannelHandler = this.toggleChannelHandler.bind(this);
  }

  // componentDidUpdate() {
  //   this.props.server
  //     ? this.setState({ channels: this.props.server.channels })
  //     : null;
  //   console.log(this.state);
  // }

  // toggleChannelHandler(e) {}

  render() {
    return (
      <div className="server-channels__container">
        <h3 className="server-channels__header">
          {this.props.server ? this.props.server.serverName : ""}
        </h3>
        <div className="server-channels__channels-idx">
          <ul>
            {this.props.server
              ? this.props.server.channels.map((channel) => (
                  <li key={channel.id} onClick={(e) => toggleChannelHandler(e)}>
                    <img
                      src={Hashtag}
                      alt="hashtag"
                      className="channel-pound"
                    />
                    <p>{channel.channelName}</p>
                  </li>
                ))
              : ""}
          </ul>
          <div className="server-channels__curr-user">
            <p></p>
            <p>{this.props.currentUser.username}</p>
          </div>
        </div>
      </div>
    );
  }
}

// const ServerChannels = ({ server, currentUser }) => {
//   // const activeChannel = () => {

//   // }

//   return (
//     <div className="server-channels__container">
//       <h3 className="server-channels__header">
//         {server ? server.serverName : ""}
//       </h3>
//       <div className="server-channels__channels-idx">
//         <ul>
//           {server
//             ? server.channels.map((channel) => (
//                 <li key={channel.id}>
//                   <img src={Hashtag} alt="hashtag" className="channel-pound" />
//                   <p>{channel.channelName}</p>
//                 </li>
//               ))
//             : ""}
//         </ul>
//         <div className="server-channels__curr-user">
//           <p></p>
//           <p>{currentUser.username}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

export default ServerChannels;
