import Post from './Post';
import React from 'react';
import ReactDOM from 'react-dom';

it('renders Post without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Post id={1} title="test" body="test"/>, div);
});