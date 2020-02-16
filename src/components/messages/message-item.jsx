import React, { Component } from 'react';

class MessageItem extends Component {

    render() {
        const months = {1: "January", 2: "February", 3: "March", 4: "April", 5: "May", 6: "June", 7: "July", 8: "August", 9: "September", 10: "October", 11: "November", 12: "December"}
        const weekdays = {0: "Sunday", 1: "Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thursday", 5: "Friday", 6: "Saturday"}

        let date = new Date(this.props.sentAt);
        let weekday = weekdays[date.getDay()];
        let day = date.getDate();
        let month = months[date.getMonth() + 1];
        let year = date.getFullYear();

        let hours = date.getHours();
        let noonRef = hours >= 12 ? 'PM' : 'AM'
        hours = hours % 12;
        hours = hours ? hours : 12;

        let minutes = date.getMinutes();
        minutes = minutes < 10 ? "0" + minutes : minutes;

        const sentAt = `${weekday}, ${month} ${day}, ${year} at ${hours}:${minutes}`.concat(noonRef)

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