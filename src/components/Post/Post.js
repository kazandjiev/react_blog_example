import Button from '../Button';
import CommentsContainer from '../Comment';
import {commentsForPostEndPoint, editPost} from '../../utils/helpers';
import React, {Component} from 'react';
import {SHOW_COMMENTS, HIDE_COMMENTS} from '../../utils/constants';
import './Post.css';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComments: false,
            postBody: props.body
        };
        this.postBody = props.body;
    }

    onCancel() {
        this.setState({editMode: false})
    }

    onEdit() {
        this.setState({editMode: true})
    }

    onPostChange(event) {
        this.postBody = event.target.value;
    }

    onSave() {

        this.setState({
            editMode: false,
            postBody: this.postBody
        });
        fetch(editPost(this.props.id), {
            method: 'POST',
            body: this.state.postBody
        })
            .then(response => response)
            .catch(err => {

                console.log(err.message);
            });
    }

    onToggleComments() {
        if (this.state.showComments) {
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
        const commentsComponent = this.state.showComments ?
            <CommentsContainer comments={this.state.comments}/> : undefined;

        const commentsBtnText = this.state.showComments ? HIDE_COMMENTS : SHOW_COMMENTS;

        const postEditMode = this.state.editMode ?
            <textarea defaultValue={this.props.body} onChange={this.onPostChange.bind(this)}></textarea> :
            <p>{this.state.postBody}</p>;

        const modifyButton = this.state.editMode ?
            <Button classes="button" text="Save" onClick={this.onSave.bind(this)}/> :
            <Button classes="button" text="Edit" onClick={this.onEdit.bind(this)}/>;

        const ammendButton = this.state.editMode ?
            <Button classes="button error" text="Cancel" onClick={this.onCancel.bind(this)}/> :
            <Button classes="button error" text="Delete" onClick={this.props.onDelete}/>;

        return (
            <article className="post">
                <section>
                    <h3>{this.props.title}</h3>
                    {postEditMode}
                </section>
                <div className="buttonContainer">
                    {modifyButton}
                    {ammendButton}
                    <Button classes="button success" onClick={this.onToggleComments.bind(this)} text={commentsBtnText}/>
                </div>
                {commentsComponent}
            </article>
        );
    }
}

Post.propTypes = {
    body: React.PropTypes.string.isRequired,
    onDelete: React.PropTypes.func.isRequired,
    title: React.PropTypes.string.isRequired,
};

export default Post;