import Head from 'next/head'
import Image from 'next/image'
import 'antd/dist/antd.css';
import Header from '../components/site/header/Header';


export default function Home() {
  return (
    <div>
      <Head>
        <title>SOXPROX Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='site-content'>
        <p>Hello World</p>
      </main>

      <footer></footer>
    </div>
  )
}
