//This will create the Articles component to display in the Dashboard
//Rushay

import React from "react";
import "./Article.css";
import { deleteArticle } from "../../../modules/articleManager";
import { formatMDY } from "../../../helpers/formatDate";
import { Link } from "react-router-dom";

export const Article = ({ object, getArticles, userId }) => {
  const handleDelete = () => {
    deleteArticle(object.id).then(() => getArticles());
  };

  const theDate = formatMDY(object.timestamp);

  if (userId === object.userId) {
    return (
      <>
        <div className="userArticleCard" id={`article_${object.id}`}>
          <h4>{object.title}</h4>
          <p>{object.synopsis}</p>
          {/* This need to open a new tab or I will go nuts */}
          <a href={object.url}>See the full article here</a>
          <p>{theDate}</p>
          <div>
            <button onClick={handleDelete}>Delete</button>
            <Link to={`/editArticle/${object.id}`}>
              <button>Edit</button>
            </Link>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="articleCard" id={`article_${object.id}`}>
          <h4>{object.title}</h4>
          <p>{object.synopsis}</p>
          {/* This need to open a new tab or I will go nuts */}
          <a href={object.url}>See the full article here</a>
          <p>{theDate}</p>
          <div>
            <button onClick={handleDelete}>Delete</button>
            <Link to={`/editArticle/${object.id}`}>
              <button>Edit</button>
            </Link>
          </div>
        </div>
      </>
    );
  }
};
