import React, { useContext, useEffect } from 'react';
import ArticlesContext from '../contexts/articleContext';
import { getSources } from '../service/feed';
import firebase from '../firebase';

const Articles = () => {
    const [articles, setArticles] = useContext(ArticlesContext);    
    useEffect(() => {
        getSources("dev.to,smashingmagazine.com").then((data) => {
            const db = firebase.firestore()
            const addData = db.collection("headlines").doc('coding').set(data)
            addData.then(() => {
                const data = db.collection("headlines").doc('coding')
                data.get().then(doc => {
              //    console.log(doc.data().articles);
                 setArticles(doc.data().articles);
                })
            })
        })
    }, [])
    return (
        <div>
            yo
            {articles.map((data: any) => {
                return (
                    <div>
                        {data.source.name}
                    </div>
                )
            })}
        </div>
    )
}
export default Articles;


