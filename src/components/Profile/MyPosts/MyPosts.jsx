import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: '0'},
        {id: 2, message: 'It\'s my first post!', likesCount: '23'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'What is your name?'},
        {id: 5, message: 'how old are you?'},
        {id: 6, message: 'Yo'}
    ];

    let postsElements = posts.map(p => <Post massege={p.message} likesCount={p.message} />);

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;