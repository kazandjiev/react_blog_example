import React, {Component} from 'react';
import './Comment.css';

class Comment extends Component {
    render() {
        return (
            <p><a href={"mailto:" + this.props.email}>{this.props.email}</a> said: {this.props.body}</p>
        );
    }
}

Comment.propTypes = {
    email: React.PropTypes.string.isRequired,
    body: React.PropTypes.string.isRequired
};

export default Comment;