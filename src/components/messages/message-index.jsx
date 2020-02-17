import React, { Component } from 'react';
import MessageItem from './message-item';

// import data & sort / remove duplicates
import { messages } from '../../data.json';
import { sortData } from '../../util/message-util';
var sortedMessages = sortData(messages);

// set # messages to be displayed
const DISPLAY_NUM = 5;

class MessageIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
          messages: sortedMessages,
          order: 0,
          enlarged: "",
          start: 0,
          end: DISPLAY_NUM
        };
        this.sortMessages = this.sortMessages.bind(this)
        this.deleteMessage = this.deleteMessage.bind(this)
    }

    // reverse order of messages, change description of order between "ascending / descending"
    // (this.state.order used to index rendered word, see sortTitles below)
    sortMessages() {
        this.setState({
            messages: this.state.messages.reverse(),
            order: this.state.order === 0 ? 1 : 0
        })
    }

    // remove message from state by slicing / concatenating messages before and after message @index (i)
    deleteMessage(i) {
        let temp1 = this.state.messages.slice(0, i)
        let temp2 = this.state.messages.slice(i + 1)
        this.setState({ messages: temp1.concat(temp2) })
    }

    // change indices of displayed messages (pagination)
    move(direction) {
        if (direction === "left" && this.state.start > 0) {
            this.setState({
                start: this.state.start - DISPLAY_NUM,
                end: this.state.end - DISPLAY_NUM
            })
        } else if (direction === "right" && this.state.end < this.state.messages.length - 1) {
            this.setState({
                start: this.state.start + DISPLAY_NUM,
                end: this.state.end + DISPLAY_NUM
            })
        }
    }

    render() {
        var sortTitles = ["Ascending", "Descending"]

        let displayedMessages = this.state.messages.slice(this.state.start, this.state.end).map((message, i) => {
            return (
                <li key={i}>
                <MessageItem
                    idx={i}
                    uuid={message.uuid}
                    senderUuid={message.senderUuid}
                    content={message.content}
                    sentAt={message.sentAt}
                />
                <button onClick={() => this.deleteMessage(i)}><p>x</p></button>
                </li>
            )
        })

        return (
            <ul>
                <span>
                    Message Display: 
                    <button className="sort-button" onClick={this.sortMessages}>
                        {sortTitles[this.state.order]}
                        <i></i>
                    </button>
                </span>
                <section>
                    { displayedMessages }
                </section>
                <span>
                    <button onClick={() => this.move("left")}>Prev</button>
                    <button onClick={() => this.move("right")}>Next</button>
                </span>
            </ul>
        );
    }
}

export default MessageIndex