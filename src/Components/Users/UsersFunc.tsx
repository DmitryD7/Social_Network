import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/logo192.png";
import {UsersType} from "../../redux/UsersReducer/usersReducer";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../API/API";

type UsersFuncType = {
    users: Array<UsersType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChange: (pageNumber: number) => void
    follow: (userID: number) => void
    unFollow: (userID: number) => void
}

const UsersFunc = (props: UsersFuncType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={s.Users}>
            <div>
                {pages.map((p, i) => <span
                    key={i}
                    className={props.currentPage === p ? s.selectedPage : s.pages}
                    onClick={() => {
                        props.onPageChange(p)
                    }}
                >
                        {p}
                    </span>)}
            </div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                 alt="avatar"
                                 className={s.avatar}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                usersAPI.unFollow(u.id).then(data => {
                                    if (data.resultCode == 0) {
                                        props.unFollow(u.id)
                                    }
                                })
                            }}>UnFollow</button>
                            : <button onClick={() => {
                                usersAPI.follow(u.id).then(data => {
                                    if (data.resultCode == 0) {
                                        props.follow(u.id)
                                    }
                                })
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}

export default UsersFunc;