let rerenderEntireTree = () => {
    console.log('State changed');
}
let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: '0'},
            {id: 2, message: 'It\'s my first post!', likesCount: '23'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'What is your name?'},
            {id: 5, message: 'how old are you?'},
            {id: 6, message: 'Yo'}
        ],
        newPostText: 'It Ninja'
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'What is your name?'},
            {id: 5, message: 'how old are you?'},
            {id: 6, message: 'Yo'}
        ]
    },
    sidebar: {}
}

window.state = state;

export const addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}
export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;