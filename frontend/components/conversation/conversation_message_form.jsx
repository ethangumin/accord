import React from 'react'

const ConversationMessageForm = () => {
  return (
    <div className="channel_content_messages_form__container">
      <form>
        <input
          type="text"
        //   placeholder={`Message #${
        //     this.props.currentChannel
        //       ? this.props.currentChannel.channelName
        //       : ""
        //   }`}
        //   onChange={this.update("body")}
        //   value={this.state.body}
        />
        <button
          type="submit"
        //   onClick={(e) => this.handleSubmit(e)}
          style={{ display: "none" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ConversationMessageForm;