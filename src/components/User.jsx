import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllUsers, getUserByName } from "../utils/api";
import styles from "./User.module.css";

export const User = () => {
  const { username } = useParams();
  const [user, setUser] = useState("");
  const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);


  useEffect(() => {
        setIsLoading(true);
        setError(null);
        getUserByName(username)
          .then((user) => {
            setUser(user);
            setIsLoading(false);

    }).catch((err)=>{
      setError({ err })
    })
    ;
  }, [username]);

  return (


    <main className={styles.user} key={Math.random().toString(36).substr(2, 9)}>
      { isLoading ? (
        <p>Loading...</p>
        ) : error ? (
          <p>Error!</p>
          ) : (
      <ul >
        <h2 className={styles.user_header}>USER {user.username}</h2>
        <li className={styles.username}>
        </li>       
        <li className={styles.avatar}>
        <img src={user.avatar_url} alt="" />
        </li>
        <li className={styles.name} >{user.name}</li>
      </ul>
      )}
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
              <h3 className={styles.users_userlist} >User List:</h3>

      <ul className={styles.users_user}>
          {users.map((user) => {
            return(
              
              <li className={styles.users_username} key={user.name}>
                {user.username}
              </li>
            )
          })
}
      </ul>
    </main>
  );
}

