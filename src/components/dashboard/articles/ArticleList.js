//This will complile all of the articles generated into a list
//This function should be exported to dashboard
// Should also sort articles by timestamp and render friends' articles differently.
//Rushay && Jae

import { getAllArticles } from "../../../modules/articleManager";
import React, { useEffect, useState } from "react";
import { Article } from "./Article.js";
import { Link } from "react-router-dom";

export const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [friends, setFriends] = useState([]);

  const theUser = sessionStorage.getItem("nutshell_user");

  const getArticles = () => {
    return getAllArticles().then((arrayOfArticles) => {
      setArticles(arrayOfArticles);
    });
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <h2>My Articles</h2>
      <div className="articleCardsHolder">
        {articles.map((singleArticle) => (
          <Article
            key={singleArticle.id}
            object={singleArticle}
            getArticles={getArticles}
            userId={theUser}
          />
        ))}
      </div>
      <div>
        <Link to={`/createArticle`}>
          <button>New</button>
        </Link>
      </div>
    </>
  );
};
