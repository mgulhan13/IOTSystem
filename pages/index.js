import { async } from "@firebase/util";
import { useRef, useState} from "react";
import { singUp,useAuth,logout,login} from "../firebase/firebase.config";

export default function Home() {
   

    return (
    <div>
        <h1 class="homePageH1">Mehmet <span>GULHAN IOT</span> System</h1>
    </div>
    );
}
