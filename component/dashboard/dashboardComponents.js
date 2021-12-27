import { async } from "@firebase/util";
import { collection, doc, getDoc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Switch from "react-switch";
import { db, useAuth } from "../../firebase/firebase.config";


export default function dashboards(){
  const [Entegre_01_Q0, setEntegre_01_Q0] = useState();
  const [Entegre_01_Q1,setEntegre_01_Q1] = useState();
  const [Entegre_01_Q2, setEntegre_01_Q2] = useState();
  const [Entegre_01_Q3,setEntegre_01_Q3] = useState();
  const [Entegre_01_Q4, setEntegre_01_Q4] = useState();
  const [Entegre_01_Q5,setEntegre_01_Q5] = useState();
  const [Entegre_01_Q6, setEntegre_01_Q6] = useState();
  const [Entegre_01_Q7,setEntegre_01_Q7] = useState();



  const Entegre_01_Q0_Handle = nextChecked => {setEntegre_01_Q0(nextChecked);};
  const Entegre_01_Q1_Handle = nextChecked => {setEntegre_01_Q1(nextChecked);};
  const Entegre_01_Q2_Handle = nextChecked => {setEntegre_01_Q2(nextChecked);};
  const Entegre_01_Q3_Handle = nextChecked => {setEntegre_01_Q3(nextChecked);};
  const Entegre_01_Q4_Handle = nextChecked => {setEntegre_01_Q4(nextChecked);};
  const Entegre_01_Q5_Handle = nextChecked => {setEntegre_01_Q5(nextChecked);};
  const Entegre_01_Q6_Handle = nextChecked => {setEntegre_01_Q6(nextChecked);};
  const Entegre_01_Q7_Handle = nextChecked => {setEntegre_01_Q7(nextChecked);};




      async function dataUpdate(WhichEntegre,value){
        const userInCollection = doc(db,"users","h1qQkZmjRchupA8MIlHFs4SEfDU2");
        await updateDoc(userInCollection,{
          [WhichEntegre]:value
        });
  
      }
      


      const Entegre_01_Q0_handleClick = () =>{ 
        dataUpdate("Entegre_01_Q0",!Entegre_01_Q0 ? 1:0);
      }
      const Entegre_01_Q1_handleClick = () =>{ 
        dataUpdate("Entegre_01_Q1",!Entegre_01_Q1 ? 1:0);
      }
      const Entegre_01_Q2_handleClick = () =>{ 
        dataUpdate("Entegre_01_Q2",!Entegre_01_Q2 ? 1:0);
      }
      const Entegre_01_Q3_handleClick = () =>{ 
        dataUpdate("Entegre_01_Q3",!Entegre_01_Q3 ? 1:0);
      }
      const Entegre_01_Q4_handleClick = () =>{ 
        dataUpdate("Entegre_01_Q4",!Entegre_01_Q4 ? 1:0);
      }
      const Entegre_01_Q5_handleClick = () =>{ 
        dataUpdate("Entegre_01_Q5",!Entegre_01_Q5 ? 1:0);
      }
      const Entegre_01_Q6_handleClick = () =>{ 
        dataUpdate("Entegre_01_Q6",!Entegre_01_Q6 ? 1:0);
      }
      const Entegre_01_Q7_handleClick = () =>{ 
        dataUpdate("Entegre_01_Q7",!Entegre_01_Q7 ? 1:0);
      }

    return(
      <div className="main">
          <h2>Entegre 1 e bağlı olanlar</h2>
          <div class="switches">
            <label style={{background:Entegre_01_Q0 ? "#2693e6":"#fff"}} htmlFor="Entegre_01_Q0">
              <span style={{color:Entegre_01_Q0 ? "#fff":""}}>Değişken 1 </span>
              <Switch
                checked={Entegre_01_Q0}
                onChange={Entegre_01_Q0_Handle}
                onColor="#86d3ff"
                onHandleColor="#fff"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}
                className="react-switch"
                id="Entegre_01_Q0"
                onClick={Entegre_01_Q0_handleClick}
              />
            </label>
            
            <label style={{background:Entegre_01_Q1 ? "#2693e6":"#fff"}} htmlFor="Entegre_01_Q1">
              <span style={{color:Entegre_01_Q1 ? "#fff":""}}>Değişken 2 </span>
              <Switch
                checked={Entegre_01_Q1}
                onChange={Entegre_01_Q1_Handle}
                onColor="#86d3ff"
                onHandleColor="#fff"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}
                className="react-switch"
                id="Entegre_01_Q1"
                onClick={Entegre_01_Q1_handleClick}
              />
            </label>

            <label style={{background:Entegre_01_Q2 ? "#2693e6":"#fff"}} htmlFor="Entegre_01_Q2">
              <span style={{color:Entegre_01_Q2 ? "#fff":""}}>Değişken 3</span>
              <Switch
                checked={Entegre_01_Q2}
                onChange={Entegre_01_Q2_Handle}
                onColor="#86d3ff"
                onHandleColor="#fff"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}
                className="react-switch"
                id="Entegre_01_Q2"
                onClick={Entegre_01_Q2_handleClick}
              />
            </label>
            <label style={{background:Entegre_01_Q3 ? "#2693e6":"#fff"}} htmlFor="Entegre_01_Q3">
              <span style={{color:Entegre_01_Q3 ? "#fff":""}}>Değişken 4 </span>
              <Switch
                checked={Entegre_01_Q3}
                onChange={Entegre_01_Q3_Handle}
                onColor="#86d3ff"
                onHandleColor="#fff"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}
                className="react-switch"
                id="Entegre_01_Q3"
                onClick={Entegre_01_Q3_handleClick}
              />
            </label>
            <label style={{background:Entegre_01_Q4 ? "#2693e6":"#fff"}} htmlFor="Entegre_01_Q4">
              <span style={{color:Entegre_01_Q4 ? "#fff":""}}>Değişken 5</span>
              <Switch
                checked={Entegre_01_Q4}
                onChange={Entegre_01_Q4_Handle}
                onColor="#86d3ff"
                onHandleColor="#fff"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}
                className="react-switch"
                id="Entegre_01_Q4"
                onClick={Entegre_01_Q4_handleClick}
              />
            </label>
            <label style={{background:Entegre_01_Q5 ? "#2693e6":"#fff"}} htmlFor="Entegre_01_Q5">
              <span style={{color:Entegre_01_Q5 ? "#fff":""}}>Değişken 6 </span>
              <Switch
                checked={Entegre_01_Q5}
                onChange={Entegre_01_Q5_Handle}
                onColor="#86d3ff"
                onHandleColor="#fff"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}
                className="react-switch"
                id="Entegre_01_Q5"
                onClick={Entegre_01_Q5_handleClick}
              />
            </label>
            <label style={{background:Entegre_01_Q6 ? "#2693e6":"#fff"}} htmlFor="Entegre_01_Q6">
              <span style={{color:Entegre_01_Q6 ? "#fff":""}}>Değişken 7 </span>
              <Switch
                checked={Entegre_01_Q6}
                onChange={Entegre_01_Q6_Handle}
                onColor="#86d3ff"
                onHandleColor="#fff"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}
                className="react-switch"
                id="Entegre_01_Q6"
                onClick={Entegre_01_Q6_handleClick}
              />
            </label>
            <label style={{background:Entegre_01_Q7 ? "#2693e6":"#fff"}} htmlFor="Entegre_01_Q7">
              <span style={{color:Entegre_01_Q7 ? "#fff":""}}>Değişken 8 </span>
              <Switch
                checked={Entegre_01_Q7}
                onChange={Entegre_01_Q7_Handle}
                onColor="#86d3ff"
                onHandleColor="#fff"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}
                className="react-switch"
                id="Entegre_01_Q7"
                onClick={Entegre_01_Q7_handleClick}
              />
            </label>
          

          </div>
      </div>
        

    );
}
