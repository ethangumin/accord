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
      { channel: "ChatChannel" },
      {
        received: (data) => {
          this.setState({
            messages: this.state.messages.concat(data.message),
          });
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
        <ChannelMessageForm currentChannel={this.props.currentChannel} />
      </div>
    );
  }
}
