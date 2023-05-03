import { useEffect } from 'react';
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
/* import 'jquery/dist/jquery.min.js'
import 'popper.js/dist/popper.min.js'
import 'bootstrap/dist/js/bootstrap.min.js' */

export default function App({ Component, pageProps }) {
  useEffect(()=>{
  Aos.init({
    duration:1000,
    easing:'ease-out',
    once:true
  });
})
  return <Component {...pageProps} />
}
