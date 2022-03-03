import React, { Component } from "react";
import ChannelContentMessagesForm from "./channel_content_messages_form";

export default class ChannelContentMessages extends Component {
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

  //   componentDidUpdate() {
  //     this.bottom.current.scrollIntoView();
  //   }

  render() {
    const messageList = this.state.messages.map((message) => {
      return (
        //   tentative key
        <li key={Math.random() * 1000000000}>
          {message}
          <div ref={this.bottom} />
        </li>
      );
    });

    return (
      <div className="channel-messages__container">
        <div className="channel-messages__list">{messageList}</div>

        {/* input should be in ChannelContentMessagesForm */}
        {/* <input
          type="text"
          placeholder={`Message #${this.props.currentChannel.channelName}`}
        /> */}
        <ChannelContentMessagesForm
          currentChannel={this.props.currentChannel}
        />
      </div>
    );
  }
}
