import avatar from '../../images/AvatarPicture.png';
import './SideBar.css';

const SideBar = ({ handleUserLogout, currentUser }) => {
  return (
    <div className="sidebar">
      <div className="sidebar__avatar-wrapper">
        <img
          alt="sidebar__avatar"
          src={avatar}
          className="sidebar__avatar-picture"
        />
        <p className="sidebar__avatar-name">
          {currentUser ? currentUser.name : 'No Name'}
        </p>
      </div>
      <div className="sidebar__user-wrapper">
        <button
          className="sidebar__button sidebar__edit-profile"
          type="button"
          onClick={() => {
            console.log('Edit profile clicked');
          }}
        >
          Edit Profile
        </button>
        <button
          className="sidebar__button sidebar__logout"
          type="button"
          onClick={() => handleUserLogout()}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default SideBar;
