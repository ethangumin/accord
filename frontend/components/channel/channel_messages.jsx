import React, { Component } from "react";
import ChannelMessageForm from "./channel_message_form";

export default class ChannelMessages extends Component {
  constructor(props) {
    super(props);
    this.bottom = React.createRef();
    this.loadChat = this.loadChat.bind(this);
    this.createSubscription = this.createSubscription.bind(this);
  }

  componentDidMount() {
    this.createSubscription();
    this.loadChat();
  }

  componentDidUpdate(prevProps) {
    const currentSubscriptions = App.cable.subscriptions.subscriptions;
    let channelInSubscriptions = false;
    for (let subscription of currentSubscriptions) {
      const subscriptionId = JSON.parse(subscription.identifier).channelId;
      if (subscriptionId === this.props.currentChannelId) {
        channelInSubscriptions = true;
      }
    }
    if (channelInSubscriptions === false) {
      this.createSubscription();
    }

    if (this.bottom.current) {
      this.bottom.current.scrollIntoView();
    }

    if (prevProps.currentChannelId !== this.props.currentChannelId) {
      this.loadChat();
    } else if (
      prevProps.currentMessages.length !== this.props.currentMessages.length
    ) {
      this.loadChat();
    } else if (Object.values(prevProps.currentChannel).length === 0) {
      this.loadChat();
    } else if (prevProps.currentChannel !== this.props.currentChannel) {
      this.loadChat();
    }
  }

  createSubscription() {
    App.cable.subscriptions.create(
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

  loadChat() {
    const currentSubscriptions = App.cable.subscriptions.subscriptions;
    for (let i = 0; i < currentSubscriptions.length; i++) {
      const subscriptionId = JSON.parse(
        App.cable.subscriptions.subscriptions[i].identifier
      ).channelId;
      if (subscriptionId === this.props.currentChannelId) {
        App.cable.subscriptions.subscriptions[i].load();
      }
    }
  }

  render() {
    // debugger;
    const messageList = this.props.currentMessages
      ? Object.values(this.props.currentMessages).map((message, index) => {
          return (
            <li key={index} className="channel-message">
              <p>{message.sender_username ? message.sender_username[0] : ""}</p>
              <div className="channel-message_info">
                <div className="channel-message__username-date">
                  <p>{message.sender_username}</p>
                  <p>{message.created_at}</p>
                </div>
                <p>{message.body}</p>
              </div>
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
