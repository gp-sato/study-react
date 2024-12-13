import Head from 'next/head'
import styles from 'styles/Home.module.css'
import { Footer } from 'components/Footer'
import { Main } from 'components/Main'
import { Header } from 'components/Header'
import { useCallback, useEffect } from 'react'

// const handleClick = (e, foo) => {
//   console.log(e.target.href);
//   e.preventDefault();
//   alert(foo);
// }

export default function Home() {
  const foo = 1;

  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  }, []);

  useEffect(() => {
    console.log("マウント");
    document.body.style.backgroundColor = "lightblue";

    return () => {
      console.log("アンマウント");
      document.body.style.backgroundColor = "";
    }
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <a href="/about" onClick={handleClick}>
        ボタン
      </a>
      <Main page="index" />
      <Footer />
    </div>
  )
}
