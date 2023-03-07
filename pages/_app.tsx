import Cursor from '../components/cursor';
import Header from '../components/header'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { useRef } from 'react';

export default function App({ Component, pageProps }: AppProps) {

  return (  
  <>
  <Cursor/>
   <Component {...pageProps} />
  </>
 )
}
