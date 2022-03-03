import React from "react";

export default class ChannelMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "" };
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    App.cable.subscriptions.subscriptions[0].speak({
      message: this.state.body,
    });
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
