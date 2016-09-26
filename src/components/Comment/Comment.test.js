import Comment from './Comment';
import React from 'react';
import ReactDOM from 'react-dom';

it('renders Comment without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Comment email="test" body="test"/>, div);
});