import axios from 'axios';
import {GET_POSTS} from './utils/constants';
import PostsContainer from './components/Post';
import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        // might use fetch API depending on the browser support;
        axios.get(GET_POSTS)
            .then(response => {
                this.setState({posts: response.data.slice(0, 20)})
            });
    }

    render() {
        return (
            <main className="app" role="main">
                <h1>My Awesome Blog</h1>
                <PostsContainer posts={this.state.posts}/>
            </main>
        );
    }
}

export default App;
