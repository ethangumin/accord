import React, { Component } from "react";
import ChannelMessageForm from "./channel_message_form";

export default class ChannelMessages extends Component {
  constructor(props) {
    super(props);
    this.bottom = React.createRef();
    this.loadChat = this.loadChat.bind(this);
  }

  componentDidMount() {
    // debugger;
    App.cable.subscriptions.create(
      // How can I make this dynamic? Currently, subscription only created on mount
      {
        channel: "ChatChannel",
        channelId: this.props.currentChannelId,
      },
      {
        received: (data) => {
          switch (data.type) {
            case "message":
              this.props.receiveMessage(data.message);
              break;
            case "messages":
              this.props.receiveMessages(data.messages);
              break;
          }
        },
        speak: function (data) {
          return this.perform("speak", data);
        },
        load: function () {
          return this.perform("load");
        },
      }
    );
  }

  loadChat(e) {
    e.preventDefault();
    App.cable.subscriptions.subscriptions[0].load();
  }

  componentDidUpdate() {
    if (this.bottom.current) {
      this.bottom.current.scrollIntoView();
    }
  }

  render() {
    // debugger;

    // const messageList = this.props.currentChannel.messages
    //   ? this.props.currentChannel.messages.map((message, index) => {
    //       return (
    //         <li key={index} className="channel-message">
    //           {message.body}
    //           <div ref={this.bottom} />
    //         </li>
    //       );
    //     })
    //   : "";

    const messageList = this.props.currentMessages
      ? Object.values(this.props.currentMessages).map((message, index) => {
          return (
            <li key={index} className="channel-message">
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
        <button onClick={(e) => this.loadChat(e)}>Load Messages</button>
      </div>
    );
  }
}
