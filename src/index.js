import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: '0'},
    {id: 2, message: 'It\'s my first post!', likesCount: '23'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'What is your name?'},
    {id: 5, message: 'how old are you?'},
    {id: 6, message: 'Yo'}
];

ReactDOM.render(<App post={posts}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
