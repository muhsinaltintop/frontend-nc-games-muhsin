import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { getAllCategories } from "../utils/api";

const Navbar = () => {
    const [categories, setCategories] = useState([]);
    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    getAllCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
    });
  }, []);

  return (
    <nav className={styles.navbar}>
        <Link to={`/`}>
        <h1 className={styles.logo}>NC GAMEs</h1>
        </Link>
      <ul className={isMobile? styles.nav_link_mobile : styles.nav_links}
      onClick={()=> setIsMobile(false)}
      >
        {categories.map((category) => {
          return (
            <Link to={`category/${category.slug}/reviews`}>
              <li key={category.slug} className={styles.menuitem} >
                <h2>
                  {/* /reviews/${category.slug} */}
                  <span>{category.slug}</span>
                </h2>
              </li>
            </Link>
          );
        })}
      </ul>
      <button className={styles.mobile_menu_icon}
      onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
        <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
