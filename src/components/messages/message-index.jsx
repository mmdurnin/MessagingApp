import React, { Component } from 'react';
import MessageItem from './message-item';

import { messages } from '../../data.json';
import { sortData } from '../../util/message-util';
var sortedMessages = sortData(messages);


class MessageIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: sortedMessages,
            order: 0,
            enlarged: "",
            start: 0,
            end: 5
        }
        this.sortMessages = this.sortMessages.bind(this)
        this.deleteMessage = this.deleteMessage.bind(this)
    }

    sortMessages() {
        this.setState({
            messages: this.state.messages.reverse(),
            order: this.state.order === 0 ? 1 : 0
        })
    }

    deleteMessage(i) {
        let temp1 = this.state.messages.slice(0, i)
        let temp2 = this.state.messages.slice(i + 1)
        this.setState({ messages: temp1.concat(temp2) })
    }

    move(direction) {
        if (direction === "left" && this.state.start !== 0) {
            this.setState({
                start: this.state.start - 5,
                end: this.state.end - 5
            })
        } else if (direction === "right" && this.state.end < this.state.messages.length - 1) {
            this.setState({
                start: this.state.start + 5,
                end: this.state.end + 5
            })
        }
    }

    render() {
        var sortTitles = ["Ascending", "Descending"]

        let displayedMessages = this.state.messages.slice(this.state.start, this.state.end).map((message, i) => {
            return (
                <li key={i} onClick={(e) => e.target.addClass("active")}>
                <MessageItem
                    idx={i}
                    uuid={message.uuid}
                    senderUuid={message.senderUuid}
                    content={message.content}
                    sentAt={message.sentAt}
                />
                <button onClick={() => this.deleteMessage(i)}></button>
                </li>
            )
        })

        return (
            <ul>
                <section>
                    Message Display: <button onClick={this.sortMessages}>{sortTitles[this.state.order]}</button>
                </section>
                <section>
                    { displayedMessages }
                </section>
                <section>
                    <button onClick={() => this.move("left")}>Prev</button>
                    <button onClick={() => this.move("right")}>Next</button>
                </section>
            </ul>
        );
    }
}

export default MessageIndex