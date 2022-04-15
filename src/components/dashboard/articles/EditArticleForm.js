//This will allow a user to edit an existing
//Rushay

import React, {useState, useEffect} from "react";
import { getSpecificArticle, updateArticle } from "../../../modules/articleManager";
import { useNavigate, useParams } from "react-router-dom";







export const EditArticleForm = () => {
    //you absolutely need something in "useState", otherwise the page doesn't know
    //how to render lines 87 93 and 99, which have a "value=article.title" or
    //similar
    const [article, setArticle] = useState({
        id: 0,
        userId: 0,
        title: "",
        synopsis: "",
        url: "",
        timestamp: 0
    });
    
    const {articleId} = useParams();
    const navigate= useNavigate()

    const handleChangedInfo = evt => {
        const stateToChange = { ...article };
        stateToChange[evt.target.id] = evt.target.value;
        setArticle(stateToChange);
    };

    const UpdateArticleButtonAction = evt => {
        evt.preventDefault()

        const editedArticle = {
            id: articleId,
            userId: article.userId,
            title: article.title,
            synopsis: article.synopsis,
            url: article.url,
            timestamp: article.timestamp
        };
        //pass the editedArticle object to the database
        updateEditedArticle(editedArticle)
    }

    const getArticleToEdit = () =>{
        return getSpecificArticle(articleId).then(specificArticle =>{
            setArticle(specificArticle)
        })
    }

    useEffect(() => {
        getArticleToEdit()
      }, []);


    
    const updateEditedArticle = (newObject) => {
        updateArticle(newObject).then(() =>navigate("/"))
    }


    




    return (

      
        <>
            <div className="dash_weather">
                <h2>Today's Weather Here</h2>
            </div>
            <div className="dash_main">
                <div className="dash_events">events go here</div>
                <div className="dash_news">
                    <div className="articleFormPopUp" >
                        <p>Look at me I can edit articles!!!!</p>
                        <fieldset>
                            <div className="form-group">
                                <label htmlFor="title">Title:</label>
                                <input type="text" id="title" onChange={handleChangedInfo} required autoFocus className="form-control" placeholder="Great News Title" value={article.title}/>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="form-group">
                                <label htmlFor="synopsis">Synopsis:</label>
                                <input type="text" id="synopsis" onChange={handleChangedInfo} required autoFocus className="form-control" placeholder="A quick recap" value={article.synopsis}  />
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="form-group">
                                <label htmlFor="url">URL:</label>
                                <input type="text" id="url" onChange={handleChangedInfo} required autoFocus className="form-control" placeholder="Paste the url here" value={article.url}/>
                            </div>
                        </fieldset>
                        <button >Close</button>
                        <button onClick={UpdateArticleButtonAction}>Save</button>

                    </div>
                </div>
                <div className="dash_friends">friends go here</div>                         
            </div>
        </>
    )
}