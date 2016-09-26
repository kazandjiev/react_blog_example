import Post from './Post';
import React, {Component} from 'react';

class PostsContainer extends Component {
    render() {
        return (
            <section className="posts">
                {this.props.posts.map(post =>
                    <Post
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        body={post.body}
                        onDelete={this.props.onDelete.call(this.props.onDelete, post.id)}
                    />
                )}
            </section>
        );
    }
}
PostsContainer.propTypes = {
    posts: React.PropTypes.arrayOf(
        React.PropTypes.object
    ).isRequired
};

export default PostsContainer;