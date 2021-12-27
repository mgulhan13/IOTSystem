// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword,onAuthStateChanged,signOut,signInWithEmailAndPassword} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const auth = getAuth();
const db = getFirestore();

export{db};

export function singUp(email,password){
    return createUserWithEmailAndPassword(auth,email,password);
}

export function useAuth(){
    const [currentUser,setCurrentUser] = useState();

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth,user=>setCurrentUser(user));
        return unsub;
    },[])
    return currentUser;

}

export function logout(){
    return signOut(auth);
}

export function login(email,password){
    if(email && password){
        return signInWithEmailAndPassword(auth,email,password);        
    }else{
        return toast.error("Kullanıcı Adı Şifre Boş Bırakılamaz",{
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

}


