import React from 'react';
import ReactDOM from 'react-dom';

import Message from '../Message.js';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Message user={{}} message={{ user: {} }} />, div);
});