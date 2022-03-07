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
    e.preventDefault();
    const payload = Object.assign({}, this.state);
    payload.channel_id = this.props.currentChannel.id;
    let currentSubscriptionIdx;
    for (let i = 0; i < App.cable.subscriptions.subscriptions.length; i++) {
      const subscriptionId = JSON.parse(
        App.cable.subscriptions.subscriptions[i].identifier
      ).channelId;
      if (subscriptionId === payload.channel_id) {
        currentSubscriptionIdx = i;
      }
    }
    App.cable.subscriptions.subscriptions[currentSubscriptionIdx].speak({
      message: payload,
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
