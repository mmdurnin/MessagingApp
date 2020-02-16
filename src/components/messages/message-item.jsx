import React, { Component } from 'react';

class MessageItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                {this.props.idx}
                {this.props.sentAt}
            </div>
        )
    }
}

export default MessageItem