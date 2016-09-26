import React, {Component} from 'react';
import Post from './Post';

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
                    />
                )}
            </section>
        );
    }
}
PostsContainer.propTypes = {
    posts: React.PropTypes.array
};

export default PostsContainer;