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
    email: React.PropTypes.string,
    body: React.PropTypes.string
};

export default Comment;