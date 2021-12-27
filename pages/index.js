import Link from 'next/link'
export default function Home() {
   

    return (
    <div>
        <h1 className="homePageH1">Mehmet <span>GULHAN IOT</span> Sistem</h1>
        <Link href="./login"><a className='loginBTN'>Giriş Yap</a></Link>
    </div>
    );
}
