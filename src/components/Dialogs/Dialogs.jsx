import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
let path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>;
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>;
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
        ];

    let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let MessagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'What is your name?'},
        {id: 5, message: 'how old are you?'},
        {id: 6, message: 'Yo'}
    ];

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}

                {/*<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>*/}
                {/*<DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>*/}
                {/*<DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>*/}
                {/*<DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>*/}
                {/*<DialogItem name="Sasha" id="4"/>*/}
                {/*<DialogItem name="Viktor" id="5"/>*/}
                {/*<DialogItem name="Valera" id="6"/>*/}
            </div>
            <div className={s.messages}>
                {/*<Message message={MessagesData[0].message} id={MessagesData[0].id}/>*/}
                {/*<Message message={MessagesData[1].message} id={MessagesData[1].id}/>*/}
                {/*<Message message={MessagesData[2].message} id={MessagesData[2].id}/>*/}
                {/*<Message message={MessagesData[3].message} id={MessagesData[3].id}/>*/}
                {/*<Message message={MessagesData[4].message} id={MessagesData[4].id}/>*/}
                {/*<Message message={MessagesData[5].message} id={MessagesData[5].id}/>*/}
            </div>
        </div>
    )
}

export default Dialogs;