//This will complile all of the articles generated into a list
//This function should be exported to dashboard
//Rushay


import { getArticlesByUser } from "../../../modules/articleManager"
import React, { useEffect, useState } from "react";
import { Article } from "./Article.js";
import { Link } from "react-router-dom";



export const ArticleList = () => {
  const [articles, setArticles] = useState([]);

 
    const theUser = sessionStorage.getItem("nutshell_user")


   const getArticles = () => {
       return getArticlesByUser(theUser).then(arrayOfArticles => {
           setArticles(arrayOfArticles)
       })
   }


   useEffect(() => {
    getArticles();
  }, []);


    

    return(
        <>
            <h2>My Articles</h2>
            <div className="articleCardsHolder">
            {articles.map(singleArticle =>
                <Article key={singleArticle.id} object={singleArticle} getArticles={getArticles} />
            )}
            </div>
            <div>
                <Link to={`/createArticle`}>
                    <button>New</button>
                </Link>
            
            </div>
        </>

    )
}
