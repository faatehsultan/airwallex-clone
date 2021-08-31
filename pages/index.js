import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/Home.module.scss";
import ImgOtherLogos1 from "../public/other_logos/TC.svg";
import ImgOtherLogos2 from "../public/other_logos/Financial_time_final.svg";
import ImgOtherLogos3 from "../public/other_logos/KPMG.svg";
import ImgOtherLogos4 from "../public/other_logos/The_economist_final.svg";
import ImgIcon1 from "../public/icons/Combined_Shape.svg";
import ImgIcon2 from "../public/icons/Glyph_10.svg";
import ImgIcon3 from "../public/icons/Rocket_Copy_2.svg";
import ImgIcon4 from "../public/icons/Settings_icon.svg";
import ImgIcon5 from "../public/icons/Rate_icon.svg";
import ImgIcon6 from "../public/icons/Combined_Shape (1).svg";
import ImgIcon7 from "../public/icons/Rocket_Copy_6.svg";
import ImgTransfersBig from "../public/International_Payments.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Airwallex</title>
      </Head>

      <Header />

      {/* hero */}
      <div className={styles.hero}>
        <div className="container">
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

      {/* testimonials with logos */}
      <div className="py-5" style={{ backgroundColor: "white" }}>
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-md-3 d-flex flex-column align-items-center justify-content-center">
              <Image src={ImgOtherLogos1} alt="" />
              <small>
                &quot;Massively simplifies the challenge of doing business
                overseas&quot;
              </small>
            </div>
            <div className="col-12 col-md-3 d-flex flex-column align-items-center justify-content-center">
              <Image src={ImgOtherLogos2} alt="" />
              <small>
                &quot;Airwallex aims to upend global payments system&quot;
              </small>
            </div>
            <div className="col-12 col-md-3 d-flex flex-column align-items-center justify-content-center">
              <Image src={ImgOtherLogos3} alt="" />
              <small>
                &quot;Airwallex is the highest ranked Australian firm at
                #32&quot;
              </small>
            </div>
            <div className="col-12 col-md-3 d-flex flex-column align-items-center justify-content-center">
              <Image src={ImgOtherLogos4} alt="" />
              <small>
                &quot;Airwallex offers exchange services that are cheaper and
                faster&quot;
              </small>
            </div>
          </div>
        </div>
      </div>

      {/* better than bank section */}
      <div
        className="py-5"
        style={{
          background: "linear-gradient(180deg,#2f3237 0,#1a1d21 100%);",
        }}
      >
        <div className="container text-white">
          <div className="fs-3 fw-bold text-white py-4">
            We&apos;re not a bank,{" "}
            <span className="text-danger">we&apos;re better.</span>
          </div>
          <br />
          <div className="row">
            <div className="col-12 col-md-6 py-4">
              <div className="row px-2">
                <div className="col-1 d-flex justify-content-center align-items-start">
                  <Image src={ImgIcon4} alt="" />
                </div>
                <div className="col-11 d-flex justify-content-start align-items-center">
                  <div className="row">
                    <div className="col-12">
                      <div className="fw-bold text-danger">
                        Multi-currency business account
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="">
                        Collect, hold and send money in multiple currencies.
                        Avoid double conversions and hedge against currency
                        fluctuations.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 py-4">
              <div className="row px-2">
                <div className="col-1 d-flex justify-content-center align-items-start">
                  <Image src={ImgIcon2} alt="" />
                </div>
                <div className="col-11 d-flex justify-content-start align-items-center">
                  <div className="row">
                    <div className="col-12">
                      <div className="fw-bold text-danger">Transfers </div>
                    </div>
                    <div className="col-12">
                      <div className="">
                        Save on everyday business expenses, with zero
                        international fees¹ and competitive exchange rates.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 py-4">
              <div className="row px-2">
                <div className="col-1 d-flex justify-content-center align-items-start">
                  <Image src={ImgIcon3} alt="" />
                </div>
                <div className="col-11 d-flex justify-content-start align-items-center">
                  <div className="row">
                    <div className="col-12">
                      <div className="fw-bold text-danger">
                        Virtual debit cards
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="">
                        Create virtual debit cards in seconds, set spending
                        limits and controls, and see all employee expenses, in
                        one place, in real-time.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 py-4">
              <div className="row px-2">
                <div className="col-1 d-flex justify-content-center align-items-start">
                  <Image src={ImgIcon1} alt="" />
                </div>
                <div className="col-11 d-flex justify-content-start align-items-center">
                  <div className="row">
                    <div className="col-12">
                      <div className="fw-bold text-danger">
                        Xero integration (Beta)
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="">
                        Automatically sync your multi-currency transactions to
                        Xero. Ensure your books are always up to date.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* tranfers section */}
      <div className="py-5" style={{ backgroundColor: "white" }}>
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-start">
              <div className="small">TRANSFERS</div>
            </div>
            <div className="col-12">
              <div className="fs-3 fw-bold">
                Transfer funds across the globe, without excessive fees
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-12 col-md-6 py-3 px-3">
                <div className="row py-3">
                  <div className="col-1">
                    <Image src={ImgIcon5} alt="" />
                  </div>
                  <div className="col-11">
                    <div className="row">
                      <div className="col-12 fw-bold">
                        Spend less on FX fees and more on growth
                      </div>
                      <div className="col-12">
                        We charge just 0.5% - 1% above our interbank rate when
                        exchanging currencies. You always get our best FX rates,
                        no matter the amount.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row py-3">
                  <div className="col-1">
                    <Image src={ImgIcon7} alt="" />
                  </div>
                  <div className="col-11">
                    <div className="row">
                      <div className="col-12 fw-bold">Global coverage</div>
                      <div className="col-12">
                        Transfer funds in 31+ currencies into over 130 countries
                        and counting.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row py-3">
                  <div className="col-1">
                    <Image src={ImgIcon6} alt="" />
                  </div>
                  <div className="col-11">
                    <div className="row">
                      <div className="col-12 fw-bold">Time better spent</div>
                      <div className="col-12">
                        Save time by making batch payments, especially when
                        regularly paying international employees.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <Image src={ImgTransfersBig} alt="" />
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex">
                <div className="px-2">
                  <Link href="#">
                    <a className="btn btn-primary fw-bold">Get Started</a>
                  </Link>
                </div>
                <div className="px-2">
                  <Link href="#">
                    <a className="btn border text-purple fw-bold">
                      Learn More{" "}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
