import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllUsers, getUserByName } from "../utils/api";
import styles from "./User.module.css";

export const User = () => {
  const { username } = useParams();
  const [user, setUser] = useState("");

  useEffect(() => {
    getUserByName(username).then((user) => {
      setUser(user);
    });
  }, [username]);

  return (
    <main className={styles.user}>
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

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(()=> {

    getAllUsers().then((users) => {
      setUsers(users);
    });



  }, []);
  return (
    <main className={styles.users} >
      <ul className={styles.users_user}>
        <li className={styles.users_userlist}>User List:</li>
          {users.map((user) => {
            return(
              
              <li className={styles.users_username} key={user.user_id}>
                {user.username}
              </li>
            )
          })
}
      </ul>
    </main>



  );


}

