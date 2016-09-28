import PostsContainer from './components/Post';
import React, {Component} from 'react';
import './App.css';
// eslint-disable-next-line
import normalize from 'normalize.css/normalize.css';

class App extends Component {
    render() {
        return (
            <main className="app" role="main">
                <h1>Blog</h1>
                <PostsContainer />
            </main>
        );
    }
}

export default App;
