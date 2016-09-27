import Button from '../Button';
import CommentsContainer from '../Comment';
import React, {Component} from 'react';
import {SHOW_COMMENTS, HIDE_COMMENTS} from '../../utils/constants';
import {commentsForPostEndPoint} from '../../utils/helpers';
import './Post.css';

class Post extends Component {
    constructor() {
        super();
        this.state = {
            showComments: false
        };
        this.toggleComments = this.toggleComments.bind(this);
    }

    toggleComments() {

        if(this.state.showComments) {
            this.setState({
                showComments: !this.state.showComments
            });
            return;
        }

        fetch(commentsForPostEndPoint(this.props.id))
            .then(response => {
                response.json()
                    .then(data => this.setState({
                            showComments: !this.state.showComments,
                            comments: data.slice(0, 10)
                        })
                    );
            });

    }

    render() {
        let commentsComponent = this.state.showComments ?
            <CommentsContainer comments={this.state.comments}/> : undefined;
        const commentsBtnText = this.state.showComments ? HIDE_COMMENTS : SHOW_COMMENTS;

        return (
            <article className="post">
                <section>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.body}</p>
                </section>
                <div className="buttonContainer">
                    <Button classes="button" text="Edit"/>
                    <Button classes="button error" text="Delete" onClick={this.props.onDelete}/>
                    <Button classes="button success" onClick={this.toggleComments} text={commentsBtnText}/>
                </div>
                {commentsComponent}
            </article>
        );
    }
}

Post.propTypes = {
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    body: React.PropTypes.string.isRequired
};

export default Post;