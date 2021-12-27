import { doc, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { db } from "../../../firebase/firebase.config";




export default function handler(req, res) {

  const {entegre,pinId} = req.query;
  const unsub = onSnapshot(doc(db, "users","h1qQkZmjRchupA8MIlHFs4SEfDU2"), (doc) => {
 
  if(pinId==="Q1"){
    res.status(200).json({ Entegre: entegre, Pin:doc.data().Entegre_01_Q1})
  }else if(pinId==="Q2"){
    res.status(200).json({ Entegre: entegre, Pin:doc.data().Entegre_01_Q2})
  }else
  if(pinId==="Q3"){
    res.status(200).json({ Entegre: entegre, Pin:doc.data().Entegre_01_Q3})
  }else
  if(pinId==="Q4"){
    res.status(200).json({ Entegre: entegre, Pin:doc.data().Entegre_01_Q4})
  }else
  if(pinId==="Q5"){
    res.status(200).json({ Entegre: entegre, Pin:doc.data().Entegre_01_Q5})
  }else
  if(pinId==="Q6"){
    res.status(200).json({ Entegre: entegre, Pin:doc.data().Entegre_01_Q6})
  }
  else
  if(pinId==="Q7"){
    res.status(200).json({ Entegre: entegre, Pin:doc.data().Entegre_01_Q7})
  }
  else
  if(pinId==="Q8"){
    res.status(200).json({ Entegre: entegre, Pin:doc.data().Entegre_01_Q8})
  }
  
  });

  }