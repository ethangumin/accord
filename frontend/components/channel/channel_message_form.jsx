import React from "react";

export default class ChannelMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sender_id: this.props.currentUser.id,
      channel_id: this.props.currentChannel.id,
      body: "",
    };
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    // debugger;
    e.preventDefault();
    const payload = Object.assign({}, this.state);
    payload.channel_id = this.props.currentChannel.id;
    App.cable.subscriptions.subscriptions[0].speak({ message: payload });
    this.setState({ body: "" });
  }

  render() {
    return (
      <div className="channel_content_messages_form__container">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            placeholder={`Message #${this.props.currentChannel.channelName}`}
            onChange={this.update("body")}
            value={this.state.body}
          />
          <input type="submit" style={{ display: "none" }} />
        </form>
      </div>
    );
  }
}
