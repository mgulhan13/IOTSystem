import { useState,useRef} from 'react';
import { login, useAuth } from '../firebase/firebase.config';

import Head from "next/head";
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { animate, motion } from "framer-motion"
import { AiOutlineUser,AiOutlineLogin,AiFillGithub,AiFillTwitterCircle,AiFillApple,AiOutlineArrowLeft, AiOutlineGateway} from 'react-icons/ai';
import { MdPassword} from 'react-icons/md';
import {SiQuantconnect,SiFacebook} from 'react-icons/si'
import {FcGoogle} from 'react-icons/fc'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginPage(){
    const currentUser=useAuth();
    const router = useRouter();
    if(currentUser){
     router.push("./dashboard")
    }
    const [loading, setLoading] = useState(false);

   const usernameRef = useRef();
   const passwordRef = useRef();

   async function handleLogin(){
       setLoading(true);
       try {
        await login(usernameRef.current.value,passwordRef.current.value);           
       } catch (e) {
        toast.error("Kullanıcı Adı veya Şifre Yanlış",{
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
       }     
       setLoading(false); 
   }


    return(
        <div>
            <Head><title>Giriş Yap</title></Head>
            
            <motion.div initial={{opacity:0}} animate={{opacity:1}} className="loginBox" >

                <span>
                    <Link href="./">
                        <a><AiOutlineArrowLeft/></a>
                    </Link>
                </span>
                <div className='loginlogo'>
                    <span><i><SiQuantconnect/></i></span>
                    <p >Giriş Yap</p>
                </div>
                <div className="form" >
                <FormGroup className='loginInput'>
                   <Label for="email"><i><AiOutlineUser /> </i></Label>
                    <input
                    id="email"
                    type="email"
                    required="Boş Olamaz"
                    placeholder="Email - Telefon - Ürün Numarası"
                    ref={usernameRef}
                    />
                </FormGroup>
                <FormGroup className='loginInput'>
                  <Label for="password"> <i> <MdPassword/></i></Label>
                    <input
                    id="password"
                    type="password"
                    placeholder="********"
                    ref={passwordRef}
                    />
                </FormGroup>
                <Button disabled={loading} onClick={handleLogin}><i><AiOutlineLogin/></i></Button>
               <div className='OtherSignIn'>
                <p>Diğer Giriş Seçenekleri</p>
                    <div className='otherSign'>
                            <Link href="/">
                                <a><FcGoogle/></a>
                            </Link>
                            <Link href="/">
                                <a><AiFillGithub/></a>
                            </Link>
                            <Link href="/">
                                <a><SiFacebook/></a>
                            </Link>
                            <Link href="/">
                                <a><AiFillTwitterCircle/></a>
                            </Link>
                            <Link href="/">
                                <a><AiFillApple/></a>
                            </Link>
                    </div>
                    <div className='LoginForgetorRegister'>
                        <Link href="./forgetpassword">
                            <a>Şifremi Unuttum</a>
                        </Link>
                        <Link href="./signup">
                            <a>Kayıt Ol</a>
                        </Link>
                    </div>
               </div>
    
                </div>
            </motion.div>

		</div>

    );
}