import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button, DatePicker, Space, version } from "antd";
import App from '../components/App';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Define Cosmetic Clinic</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <div className="App">
        {/* <h1>antd version: {version}</h1>
        <Space>
          <DatePicker />
          <Button type="primary">Primary Button</Button>
        </Space> */}
        <App />
      </div>
      </main>
    </div>
  )
}

export default Home