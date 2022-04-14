//This will create the Articles component to display in the Dashboard
//Rushay

import React from "react"
import "./Article.css"

export const Article = ({object}) => {
    console.log(object)


    return (
        <>
            <div className="articleCard" id="article_{object.id}">
                <h4>{object.title}</h4>
                <p>{object.synopsis}</p>
                {/* This need to open a new tab or I will go nuts */}
                <a href={object.url}>See the full article here</a>
                <p>{object.timestamp}</p>

            </div>
        </>
    );
}