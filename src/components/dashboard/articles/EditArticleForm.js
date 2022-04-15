//This will allow a user to edit an existing
//Rushay

import React, {useState, useEffect} from "react";
import { addArticle, getSpecificArticle } from "../../../modules/articleManager";
import { useNavigate, useParams } from "react-router-dom";



export const EditArticleForm = () => {
    const navigate= useNavigate()
    const [article, setArticle] = useState();
    const {articleId} = useParams();

    const getArticleToEdit = () =>{
        return getSpecificArticle(articleId).then(specificArticle =>{
            setArticle(specificArticle)
        })
    }

    useEffect(() => {
        getArticleToEdit();
        console.log("It's all set and ready to go")
        console.log(article)
      }, []);


    //Here we will collect the userId and the Timestamp
    const theDate=Date.now()
    const theUserId=sessionStorage.getItem("nutshell_user")
    

    const handleControlledInputChange = (event) => {
		// This creates a new article object
		const newArticle = { ...article }
		let selectedVal = event.target.value

		// forms always provide values as strings. But we want to save the ids as numbers.
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		/* Article is an object with properties.
		Set the property to the new value
		using object bracket notation. */
		newArticle[event.target.id] = selectedVal
		// update state
        newArticle.timestamp = theDate
        newArticle.userId = theUserId
		setArticle(newArticle)
	}

    

    const saveToArticles = (event) => {
        addArticle(article).then(() =>navigate("/"))
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
                                <input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Great News Title" value={article.title}/>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="form-group">
                                <label htmlFor="synopsis">Synopsis:</label>
                                <input type="text" id="synopsis" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="A quick recap" value={article.synopsis}  />
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="form-group">
                                <label htmlFor="url">URL:</label>
                                <input type="text" id="url" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Paste the url here" value={article.url}/>
                            </div>
                        </fieldset>
                        <button >Close</button>
                        <button onClick={saveToArticles}>Save</button>

                    </div>
                </div>
                <div className="dash_friends">friends go here</div>                         
            </div>
        </>
    )
}