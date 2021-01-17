import React, { useContext, useEffect } from 'react'
import AppContext from '../contexts/userContext'
import firebase from '../firebase';

export default function Page() {
  useEffect(() => {
    const fetchData =  () => {
      const db = firebase.firestore()
      const data = db.collection("headlines").doc('coding')
      data.get().then(doc => {
       console.log(doc.data());
      })
    }
    fetchData();
}, [])

  return (
    <div>
     hello
    </div>
  )
}