import {GET_POSTS_ENDPOINT} from '../../utils/constants';
import {deletePost} from '../../utils/helpers';
import Post from './Post';
import React, {Component} from 'react';

class PostsContainer extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        };
        this.oldState = {};
    }

    componentDidMount() {
        fetch(GET_POSTS_ENDPOINT)
            .then(response => {
                response.json()
                    .then(data => this.setState({posts: data.slice(0, 20)}))
            });
    }

    onDelete(id) {
        this.oldState.posts = this.state.posts;
        this.setState({posts: this.state.posts.filter(post => post.id !== id)});
        fetch(deletePost(id), {method: 'DELETE'})
            .then(response => response)
            .catch(err => {
                    this.setState({posts: this.oldState.posts});
                    console.error(err.message)
                }
            );
    }

    render() {
        return (
            <section className="posts">
                {this.state.posts.map(post =>
                    <Post
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        body={post.body}
                        onDelete={this.onDelete.bind(this, post.id)}
                    />
                )}
            </section>
        );
    }
}

export default PostsContainer;