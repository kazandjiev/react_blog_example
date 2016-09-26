import Button from './Button';
import React from 'react';
import ReactDOM from 'react-dom';

it('renders Button without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button classes="test" text="test"/>, div);
});
