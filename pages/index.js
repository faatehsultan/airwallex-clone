import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Airwallex</title>
      </Head>

      <Header />

      <div className="container">
        <div className={styles.hero}>
          <div style={{ maxWidth: "365px" }}>
            <div className="fs-2">
              A business account, built for the modern business.
            </div>
            <br />
            <p>Get started with zero monthly account fees.</p>
            <br />
            <div className="d-flex">
              <div className="px-2">
                <Link href="#">
                  <a className="btn btn-primary fw-bold">Get Started</a>
                </Link>
              </div>
              <div className="px-2">
                <Link href="#">
                  <a className="btn border text-purple fw-bold">
                    Contact Sales
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
