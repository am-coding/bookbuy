import React, { useContext, useEffect } from 'react';
import ArticlesContext from '../contexts/articleContext';
import { getSources } from '../service/feed';
import firebase from '../firebase';

const Articles = () => {
    const [articles, setArticles] = useContext(ArticlesContext);    
    useEffect(() => {
        getSources("thenextweb.com").then((data) => {
            const db = firebase.firestore()
            const addData = db.collection("headlines").doc('coding').set(data)
            addData.then(() => {
                console.log("added");
                
            })
        })
    }, [])
    return (
        <div>
            {articles.map((data: any) => {
                return (
                    <div>
                        {data.content}
                    </div>
                )
            })}
        </div>
    )
}
export default Articles;


