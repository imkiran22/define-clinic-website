import type { NextPage } from 'next'
import Head from 'next/head'
import HomeComponent from '../components/Home/Home';

const Home: NextPage = () => {
  return (
    <div id={'container'}>
      <Head>
        <title>Define Cosmetic Clinic</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={'main'}>
        <div className="App">
          <HomeComponent/>
        </div>
      </main>
    </div>
  )
}

export default Home
