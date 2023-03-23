import Head from "next/head";
import styles from "../styles/typeography.module.css"
import btn_styles from "../styles/button.module.css"

export default function index() {
  return (
    <>
      <Head>
        <title>Helping Hands</title>
        <meta name="description" content="" />
      </Head>
      <main className="wrapper">
        <section className="">
          <h1 className={styles.hero__headline_large}>Lending A Hand To People In Need!</h1>
          <p className={styles.hero__body_large}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <button className={btn_styles.btn_primary}>Button Text Goes Here</button>
          <button className={btn_styles.btn_secondary}>Button Text Goes Here</button>
        </section>
        {/* SECTION 01: */}
        <section className="">
          <h2 className={`${styles.headline_large}`}>Headline 2</h2>
        </section>
        {/* SECTION 02: */}
        <section className="">
          <h3 className={`${styles.headline_large}`}>Headline 3</h3>
        </section>
        {/* SECTION 03: */}
        <section className="">
          <h4 className={`${styles.headline_large}`}>Headline 4</h4>
        </section>
        {/* SECTION 04: */}
        <section className="">
          <h5 className={`${styles.headline_large}`}>Headline 5</h5>
        </section>
        {/* SECTION 05: */}
        <section className="">
          <h6 className={`${styles.headline_large}`}>Headline 6</h6>
        </section>
        {/* SECTION 06: */}
      </main>
    </>
  )
}
