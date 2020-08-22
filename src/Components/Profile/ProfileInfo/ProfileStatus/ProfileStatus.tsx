import React, {ChangeEvent} from 'react';
import s from './ProfileStatus.module.css';

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }
    deactivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    render() {
        return <div>
            {!this.state.editMode
                ? <div className={s.ProfileStatus}>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "-------"}</span>
                </div>
                : <div className={s.ProfileStatus}>
                    <input
                        onBlur={this.deactivateEditMode}
                        value={this.state.status}
                        autoFocus
                        onChange={this.onStatusChange}
                    />
                </div>
            }
        </div>
    }
}

export default ProfileStatus;