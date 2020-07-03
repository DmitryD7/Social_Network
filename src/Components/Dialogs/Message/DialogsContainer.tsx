import React, {ChangeEvent} from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogsReducer";
import DialogItem from "../DialogItem/DialogsItem";
import Message from "./Message";
import Dialogs from "../Dialogs";


type DialogsPagePropsType = {
    store: any
};


function DialogsContainer(props: DialogsPagePropsType) {

    let state = props.store.getState().dialogsPage;

    function sendMessage() {
        props.store.dispatch(addMessageActionCreator());
    };

    let onMessageChange = (text:string) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    };

    return (
        <Dialogs updateNewMessageText={onMessageChange}
                 addMessage={sendMessage}
                 dialogsPage={state}
        />
    )
}

export default DialogsContainer;