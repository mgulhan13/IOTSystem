import { initializeApp } from "@firebase/app";
import { async } from "@firebase/util";
import { getAuth } from "firebase/auth";
import {addDoc, collection, doc, getDoc, getFirestore, setDoc } from "firebase/firestore"; 
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../firebase/firebase.config";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB7l89QcToW6W-jyj9MgOsLm5yOOD6XfLs",
    authDomain: "smarthome-6c9ba.firebaseapp.com",
    projectId: "smarthome-6c9ba",
    storageBucket: "smarthome-6c9ba.appspot.com",
    messagingSenderId: "25260033046",
    appId: "1:25260033046:web:cccaee485e76c222d2a137",
    measurementId: "G-89BR9LEWM6"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default function test(){

   async function handleAdd() {
        // Add a new document in collection "cities"
        await setDoc(doc(db,"users",currentUser.uid),{
            Email:currentUser.email,
            CurrentUserUID:currentUser.uid,
            FullName:"Mehmet GULHAN",
            Tel:"05434861945",
            Entegre_01_Q0:0,
            Entegre_01_Q1:0,
            Entegre_01_Q2:0,
            Entegre_01_Q3:0,
            Entegre_01_Q4:0,
            Entegre_01_Q5:0,
            Entegre_01_Q6:0,
            Entegre_01_Q7:0
        });

   }
   const [data, setData] = useState([]);

   async function handleGet() {
        // Add a new document in collection "cities"
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);

        if(docSnap.exists()){
           setData(docSnap.data());
        }else{
            alert("Document is not found");
        }
       
        
   }

   

   const [loading, setLoading] = useState(false);
    const currentUser=useAuth();

    const emailRef = useRef();
    const passwordRef= useRef();

    async function handleSignUp(){
        setLoading(true);
        try {
            await singUp(emailRef.current.value,passwordRef.current.value);
            alert("Başarılı");
        } catch (e) {
            alert("Error!", e);
        }
        setLoading(false);
    }

    async function handleLogout(){
        setLoading(true);
        try {
            await logout(); 
        } catch (e) {
            alert("Error!", e);
        }
        setLoading(false);
    }

    async function handleLogin(){
        setLoading(true);
        try {
            await  login(emailRef.current.value,passwordRef.current.value);
        } catch (e) {
            alert("Error!", e);
        }
        setLoading(false);
    }
   

    return(
        <div>
            <button onClick={handleAdd}>Send Data</button>
            <div>Currently logged in as: {currentUser?.email} </div>

            <button onClick={handleGet}>Get Data</button>
            {data.Entegre_01_Q0}


            <div>
            <div>Currently logged in as: { currentUser?.email } </div>
            <input type="text" ref={emailRef}/>
            <input type="Password" ref={passwordRef}/>
            <button disabled={loading} onClick={handleSignUp}>Kayıt ol</button>
            <button disabled={loading} onClick={handleLogin}>Giriş yap</button>
            <button disabled={loading} onClick={handleLogout}>Çıkış Yap</button>

        </div>
        </div>
    
    );
}
