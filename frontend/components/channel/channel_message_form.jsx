import React from "react";

export default class ChannelMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sender_id: this.props.currentUser ? this.props.currentUser.id : "",
      channel_id: this.props.currentChannelId,
      sender_username: this.props.currentUser
        ? this.props.currentUser.username
        : "",
      body: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    // debugger;
    return (e) => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    // debugger;
    e.preventDefault();
    const payload = Object.assign({}, this.state);
    payload.channel_id = this.props.currentChannelId;
    let currentSubscriptionIdx;

    for (let i = 0; i < App.cable.subscriptions.subscriptions.length; i++) {
      const subscriptionId = JSON.parse(
        App.cable.subscriptions.subscriptions[i].identifier
      ).channelId;
      if (subscriptionId === payload.channel_id.toString()) {
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
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            placeholder={`Message #${
              this.props.currentChannel
                ? this.props.currentChannel.channelName
                : ""
            }`}
            onChange={this.update("body")}
            value={this.state.body}
          />
          <button
            type="submit"
            onClick={(e) => this.handleSubmit(e)}
            style={{ display: "none" }}
          >
            Submit
          </button>
          {/* <input type="submit" style={{ display: "none" }} /> */}
        </form>
      </div>
    );
  }
}
