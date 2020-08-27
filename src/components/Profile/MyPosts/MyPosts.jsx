import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postData = [
        {id: 1, message: 'Hi, how are you?', likesCount: '0'},
        {id: 2, message: 'It\'s my first post!', likesCount: '23'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'What is your name?'},
        {id: 5, message: 'how old are you?'},
        {id: 6, message: 'Yo'}
    ];

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
                <Post massege={postData[0].message} likesCount={postData[0].message} />
                <Post massege={postData[1].message} likesCount={postData[1].message} />
            </div>
        </div>
    )
}

export default MyPosts;