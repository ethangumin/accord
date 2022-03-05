import React, { Component } from "react";
import ChannelMessageForm from "./channel_message_form";

export default class ChannelMessages extends Component {
  constructor(props) {
    super(props);
    this.bottom = React.createRef();
  }

  componentDidMount() {
    // debugger;

    App.cable.subscriptions.create(
      // How can I make this dynamic? Currently, subscription only created on mount
      {
        channel: "ChatChannel",
        channelId: Object.keys(this.props.currentChannel).length !== 0
          ? this.props.currentChannel.id
          : this.props.currentUser.servers[0].channels[0].id,
      },
      {
        received: (data) => {
          switch (data.type) {
            case "message":
              this.props.receiveMessage(data.message);
              break;
          }
        },
        speak: function (data) {
          return this.perform("speak", data);
        },
      }
    );
  }

  componentDidUpdate() {
    if (this.bottom.current) {
      this.bottom.current.scrollIntoView();
    }
  }

  render() {
    const messageList = this.props.currentChannel.messages
      ? this.props.currentChannel.messages.map((message) => {
          return (
            <li key={message.id} className="channel-message">
              {message.body}
              <div ref={this.bottom} />
            </li>
          );
        })
      : "";

    return (
      <div className="channel-messages__container">
        <div className="channel-messages__list" ref={this.bottom}>
          {messageList}
        </div>
        <ChannelMessageForm
          currentChannel={this.props.currentChannel}
          sendMessage={this.props.sendMessage}
          currentUser={this.props.currentUser}
        />
      </div>
    );
  }
}
