import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCategories } from "../utils/api";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    getAllCategories()
      .then((categoriesFromApi) => {
        setCategories(categoriesFromApi);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return (
    <main>
      <h2>NC GAME CATEGORIES</h2>
      {isLoading ? (
        <p>Loading</p>
      ) : error ? (
        <p>error!</p>
      ) : (
        <ul>
          {categories.map((category) => {
            return (
              <li key={category.slug}>
                <h3>
                  <Link to={`/`}>{category.slug}</Link>
                </h3>
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
};

export default Categories;
