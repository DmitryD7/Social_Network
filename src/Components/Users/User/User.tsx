import React from "react";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/logo192.png";
import s from "../Users.module.css";

export const User = (props: UserPropsType) => {
    return <div key={props.userId}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + props.userId}>
                            <img src={props.userPhotoSmall !== null ? props.userPhotoSmall : userPhoto}
                                 alt="avatar"
                                 className={s.avatar}/>
                        </NavLink>
                    </div>
                    <div>
                        {props.isUserFollowed
                            ? <button
                                disabled={props.followingInProgress.some(id => id === props.userId)}
                                onClick={() => {
                                    props.unFollow(props.userId)
                                }}
                            >UnFollow</button>
                            : <button
                                disabled={props.followingInProgress.some(id => id === props.userId)}
                                onClick={() => {
                                    props.follow(props.userId)
                                }}
                            >Follow</button>}
                    </div>
                </span>
        <span>
                    <span>
                        <div>{props.userName}</div>
                        <div>{props.userStatus}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
    </div>
}
type UserPropsType = {
    userId: number
    userPhotoSmall: string
    userName: string
    userStatus: string
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    followingInProgress: Array<number>
    isUserFollowed: boolean
}