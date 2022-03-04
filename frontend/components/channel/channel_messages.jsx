import React, { Component } from "react";
import ChannelMessageForm from "./channel_message_form";

export default class ChannelMessages extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.bottom = React.createRef();
  }

  componentDidMount() {
    App.cable.subscriptions.create(
      // pass in currentChannelId to access it as params
      // not currently being passed as params :(
      { channel: "ChatChannel", channelId: this.props.currentChannel.id },
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
    this.bottom.current.scrollIntoView();
  }

  render() {
    const messageList = this.state.messages.map((message) => {
      return (
        //   tentative key
        <li key={Math.random() * 1000000000} className="channel-message">
          {message}
          <div ref={this.bottom} />
        </li>
      );
    });

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
