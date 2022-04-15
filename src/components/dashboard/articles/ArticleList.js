//This will complile all of the articles generated into a list
//This function should be exported to dashboard
//Rushay

import { getAllArticles } from "../../../modules/articleManager";
import React, { useEffect, useState } from "react";
import { Article } from "./Article.js";

export const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  const getArticles = () => {
    return getAllArticles().then((arrayOfArticles) => {
      setArticles(arrayOfArticles);
    });
  };

  useEffect(() => {
    getArticles();
  }, []);

  // useEffect(() => {
  //     getAllArticles()
  // }, []);

  return (
    <>
      <h2>My Articles</h2>
      <div className="articleCardsHolder">
        {articles.map((singleArticle) => (
          <Article object={singleArticle} key={singleArticle.id} />
        ))}
      </div>
    </>
  );
};
