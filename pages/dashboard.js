import { motion } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import DashboardsComponents from "../component/dashboard/dashboardComponents";
import { logout, useAuth } from "../firebase/firebase.config";
export default function Dasboard() {
    const currentUser = useAuth();
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    async function handleLogout(){
        setLoading(true);
        try {
            await logout(); 
            router.push("./");

        } catch (e) {
            alert("Error!", e);
        }
        setLoading(false);
    }

    return(
        <div>
        <Head><title>Control Paneli</title></Head>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} className="dashboardbg" >
        <button disabled={loading} onClick={handleLogout} className="logoutButton">Çıkış Yap</button>
            <DashboardsComponents/>
        </motion.div>

    </div>

    );
}