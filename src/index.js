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

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'What is your name?'},
    {id: 5, message: 'how old are you?'},
    {id: 6, message: 'Yo'}
];

let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrew'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'}
];

ReactDOM.render(<App posts={ posts } messages={ messages } dialogs={ dialogs }/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
