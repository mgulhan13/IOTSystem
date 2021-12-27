import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ToastContainer />
      <Component {...pageProps} />
    </div>
    )
}

export default MyApp
