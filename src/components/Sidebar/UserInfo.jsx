import avatar from '../../img/avatars/avatar-128.jpg';

export const UserInfo = () => {
    return (
        <div className="left-panel__user clearfix">
            <div className="left-panel__user-photo">
                <img src={avatar} alt="Avatar" />
            </div>
            <div className="left-panel__user-name">Петр <br />Васильевич</div>
        </div>
    )
}
