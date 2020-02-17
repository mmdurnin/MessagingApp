import React, { Component } from 'react';

class MessageItem extends Component {

    render() {
        let date = new Date(this.props.sentAt);

        let weekday = date.toLocaleString('en-us', {  weekday: 'long' });
        let day = date.getDate();
        let month = date.toLocaleString('en-us', {month: 'long'});
        let year = date.getFullYear();

        let hours = date.getHours();
        let noonRef = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;

        let minutes = date.getMinutes();
        minutes = minutes < 10 ? "0" + minutes : minutes;

        const sentAt = `${weekday}, ${month} ${day}, ${year} at ${hours}:${minutes} `.concat(noonRef)

        return (
          <div>
            <h3>
              <strong>From: {this.props.senderUuid}</strong>
              <time>{sentAt}</time>
            </h3>
            <b>"{this.props.content}"</b>
          </div>
        );
    }
}

export default MessageItem