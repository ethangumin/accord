import React, { Component } from "react";
// import App from "../app";
import ChannelMessageForm from "./channel_message_form";

export default class ChannelMessages extends Component {
  constructor(props) {
    super(props);
    this.bottom = React.createRef();
  }

  componentDidMount() {
    // debugger;

    // if (App.cable.subscriptions.subscriptions.length > 1) {
    //   App.cable.subscriptions.remove(App.cable.subscriptions.subscriptions[1]);
    // }

    App.cable.subscriptions.create(
      // How can I make this dynamic? Currently, subscription only created on mount
      {
        channel: "ChatChannel",
        channelId: this.props.currentChannelId,
      },
      {
        received: (data) => {
          // debugger;
          switch (data.type) {
            case "message":
              this.props.receiveMessage(data.message);
              // debugger;
              break;
          }
        },
        speak: function (data) {
          // debugger;
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
    // debugger;
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
