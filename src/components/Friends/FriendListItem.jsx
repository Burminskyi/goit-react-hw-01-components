import css from './Friends.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const bColor = isOnline ? 'green' : 'red';
  return (
    <li className={css.item}>
      <span className={css.status} style={{ backgroundColor: bColor }}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
