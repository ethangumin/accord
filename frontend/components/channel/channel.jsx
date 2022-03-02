import React from "react";
import ChannelNav from "./channel_nav";
import ChannelContent from "./channel_content";

// class Channel extends React.Component {
//   render(){
//     return (
//       <div className="channel__container">
//         <ChannelNav />
//         <ChannelContent />
//       </div>
//     );
//   }
// }

const Channel = () => {
  return (
    <div className="channel__container">
      <ChannelNav />
      <ChannelContent />
    </div>
  );
};

export default Channel;
