import { collection, doc, onSnapshot, orderBy, query, querySnapshot, where } from 'firebase/firestore';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { db } from '../../../firebase/firebase.config';


export default function Pin(){
  const router = useRouter()
  const { user, entegre,pin } = router.query
  const[todos, setTodos] = useState([]);
  const variableValue = useState([]);
 

  useEffect(()=>{

    const unsub = onSnapshot(doc(db, "users","h1qQkZmjRchupA8MIlHFs4SEfDU2"), (doc) => {
      setTodos(doc.data());
    });
    return unsub;
  },[]);

  if(pin==="Q1"){
    variableValue= todos.Entegre_01_Q0;
  }else if(pin==="Q2"){
    variableValue= todos.Entegre_01_Q1;
  }else
  if(pin==="Q3"){
    variableValue= todos.Entegre_01_Q2;
  }else
  if(pin==="Q4"){
    variableValue= todos.Entegre_01_Q3;
  }else
  if(pin==="Q5"){
    variableValue= todos.Entegre_01_Q4;
  }else
  if(pin==="Q6"){
    variableValue= todos.Entegre_01_Q5;
  }
  else
  if(pin==="Q7"){
    variableValue= todos.Entegre_01_Q6;
  }
  else
  if(pin==="Q8"){
    variableValue= todos.Entegre_01_Q7;
  }
  
  const Object = [
    {
    user:user,
    entegre : entegre,
    pin:variableValue
  }
];


return JSON.stringify(Object);

}

