
let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: '0'},
            {id: 2, message: 'It\'s my first post!', likesCount: '23'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'What is your name?'},
            {id: 5, message: 'how old are you?'},
            {id: 6, message: 'Yo'}
        ]
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
export let addPost = (postMessage) => {
    debugger;
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
}

export default state;