import { useEffect } from 'react';
import {SessionProvider} from 'next-auth/react'
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function App({ Component, pageProps}) {
  useEffect(()=>{
  Aos.init({
    duration:1000,
    easing:'ease-out',
    once:true
  });
})
  return(
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  ) 
}
