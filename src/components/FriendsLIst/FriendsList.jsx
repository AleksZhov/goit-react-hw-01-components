import styles from './FriendsList.module.css';
export default function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={styles.item} key={id}>
          {isOnline ? (
            <span className={styles.online}>•</span>
          ) : (
            <span className={styles.offline}>•</span>
          )}
          <img
            className={styles.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className={styles.name}>{name}</p>
        </li>
      ))}
    </ul>
  )
}
