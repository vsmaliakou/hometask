import React from "react";
import {messageData} from "./HW1";
import s from './Message.module.css'

type messageProps = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: messageProps) {
    return (
        <div className={s.message}>
            <img className={s.img} src={props.avatar}/>
            <div className={s.content}>
                <div className={s.name}>{props.name}</div>
                <div>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    );
}

export default Message;
