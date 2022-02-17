import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserByName } from "../utils/api";
import styles from "./User.module.css";

const User = () => {
  const { username } = useParams();
  const [user, setUser] = useState("");

  useEffect(() => {
    getUserByName(username).then((user) => {
      setUser(user);
    });
  }, [username]);

  return (
    <main>
      <h2 className={styles.user_header}>USER {user.username}</h2>
      <ul>
        <li key={user.username} className={styles.username}>
        </li>
        
        
        <li className={styles.avatar}>
          
        <img src={user.avatar_url} alt="" />
          
        </li>
        <li className={styles.name} key={user.name}>{user.name}</li>
      </ul>
    </main>
  );
};

export default User;
