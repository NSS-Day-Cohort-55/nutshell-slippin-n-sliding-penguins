//This will allow a user to creat a new article
//Rushay

import React, { useState } from "react";
import { addArticle } from "../../../modules/articleManager";
import { useNavigate } from "react-router-dom";

export const CreateArticleForm = () => {
  const navigate = useNavigate();
  const [article, setArticle] = useState({
    title: "",
    synopsis: "",
    url: "",
    timestamp: 0,
    userId: 0,
  });

  //Here we will collect the userId and the Timestamp
  const theDate = Date.now();
  const theUserId = parseInt(sessionStorage.getItem("nutshell_user"));

  const handleControlledInputChange = (event) => {
    // This creates a new article object
    const newArticle = { ...article };
    let selectedVal = event.target.value;

    // forms always provide values as strings. But we want to save the ids as numbers.
    if (event.target.id.includes("Id")) {
      selectedVal = parseInt(selectedVal);
    }
    /* Article is an object with properties.
		Set the property to the new value
		using object bracket notation. */
    newArticle[event.target.id] = selectedVal;
    // update state
    newArticle.timestamp = theDate;
    newArticle.userId = theUserId;
    setArticle(newArticle);
  };

  const saveToArticles = (event) => {
  
    if (article.title === "" || article.synopsis === "" || article.url === "") {
			window.alert("Please fill in title, synopsis, and url")
		} else {
      addArticle(article).then(() => navigate("/"));
		}
  };

  return (
    <>
      <div className="dash_weather">
        <h2>Today's Weather Here</h2>
      </div>
      <div className="dash_main">
        <div className="dash_events">events go here</div>
        <div className="dash_news">
          <div className="articleFormPopUp">
            <p>Look at me I'm a fancy form!!!!</p>
            <fieldset>
              <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input
                  type="text"
                  id="title"
                  onChange={handleControlledInputChange}
                  required
                  autoFocus
                  className="form-control"
                  placeholder="Great News Title"
                  value={article.title}
                />
              </div>
            </fieldset>
            <fieldset>
              <div className="form-group">
                <label htmlFor="synopsis">Synopsis:</label>
                <input
                  type="text"
                  id="synopsis"
                  onChange={handleControlledInputChange}
                  required
                  autoFocus
                  className="form-control"
                  placeholder="A quick recap"
                  value={article.synopsis}
                />
              </div>
            </fieldset>
            <fieldset>
              <div className="form-group">
                <label htmlFor="url">URL:</label>
                <input
                  type="text"
                  id="url"
                  onChange={handleControlledInputChange}
                  required
                  autoFocus
                  className="form-control"
                  placeholder="Paste the url here"
                  value={article.url}
                />
              </div>
            </fieldset>
            <button class="btn">Close</button>
            <button class="btn" onClick={saveToArticles}>Save</button>
          </div>
        </div>
        <div className="dash_friends">friends go here</div>
      </div>
    </>
  );
};
