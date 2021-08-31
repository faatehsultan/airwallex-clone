import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
import HomeCustomerCarousel from "../components/HomeCustomerCarousel";
import ImgApiProductsBanner from "../public/home_api.webp";
import ImgHeroDesktop from "../public/UK_Hero_Image_-_Web.svg";
import ImgHeroMobile from "../public/UK_Hero_Image_-_Mobile.svg";

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
          <br />
          <br />
          <div style={{ maxWidth: "450px" }}>
            <div className="fs-1 fw-bold text-center text-md-start">
              A business account, built for the modern business.
            </div>
            <br />
            <p className="text-center text-md-start">Get started with zero monthly account fees.</p>
            <br />
            <div className="d-flex justify-content-center justify-content-md-start">
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
          <div
            className="d-none d-md-block position-absolute"
            style={{ top: "25%", maxWidth: "50%", left: "50%" }}
          >
            <Image src={ImgHeroDesktop} alt="" />
          </div>
          <div className="d-block d-md-none">
            <Image src={ImgHeroMobile} alt="" />
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
        <div className="container text-white py-5 my-3">
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
        <div className="container py-5 my-3">
          <div className="row">
            <div className="col-12 d-flex justify-content-start">
              <div className="small">TRANSFERS</div>
            </div>
            <div className="col-12">
              <div className="fs-3 fw-bold" style={{ maxWidth: "450px" }}>
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

      {/* global accounts section */}
      <div className="py-5" style={{ backgroundColor: "white" }}>
        <div className="container py-5 my-3">
          <div className="row">
            <div className="col-12 d-flex justify-content-end">
              <div className="small">GLOBAL ACCOUNTS</div>
            </div>
            <div className="col-12 d-flex justify-content-end">
              <div className="col-6 d-none d-md-block"></div>
              <div className="col-12 col-md-6">
                <div className="fs-3 fw-bold">
                  Reach new markets with foreign currency accounts
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-12 col-md-6">
                <Image src={ImgTransfersBig} alt="" />
              </div>
              <div className="col-12 col-md-6 py-3 px-3">
                <div className="row py-3">
                  <div className="col-1">
                    <Image src={ImgIcon5} alt="" />
                  </div>
                  <div className="col-11">
                    <div className="row">
                      <div className="col-12 fw-bold">
                        Open currency accounts in EUR, USD, AUD & GBP within
                        minutes{" "}
                      </div>
                      <div className="col-12">
                        Invoice and accept payments from overseas customers in
                        their preferred currency.
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
                      <div className="col-12 fw-bold">
                        Integrate with online stores
                      </div>
                      <div className="col-12">
                        Easily connect your currency accounts with popular
                        platforms like eBay, Shopify and PayPal.
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
                      <div className="col-12 fw-bold">
                        Direct settlement in foreign currency
                      </div>
                      <div className="col-12">
                        Pay out in the same currency, or convert and bring your
                        money back with outstanding FX rates.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="col-12 d-flex justify-content-end">
                <div className="col-6 d-none d-md-block"></div>
                <div className="col-12 col-md-6">
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
        </div>
      </div>

      {/* empower team section */}
      <div className="py-5" style={{ backgroundColor: "white" }}>
        <div className="container py-5 my-3">
          <div className="row">
            <div className="col-12 d-flex justify-content-start">
              <div className="small">COMING SOON</div>
            </div>
            <div className="col-12">
              <div className="fs-3 fw-bold" style={{ maxWidth: "450px" }}>
                Empower your team to make purchasing decisions
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
                        Set your team up in minutes, not weeks
                      </div>
                      <div className="col-12">
                        Create dedicated cards and employee logins with ease, no
                        more shared cards or chasing down mystery spend.
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
                      <div className="col-12 fw-bold">
                        Stay in control with real-time visibility of spend
                      </div>
                      <div className="col-12">
                        Set flexible daily, monthly or card spend limits that
                        your team can track to, so you are always in budget.
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
                      <div className="col-12 fw-bold">
                        Save on global SaaS and marketing spend
                      </div>
                      <div className="col-12">
                        Pay your global card expenses with your multi-currency
                        balance, with zero international card transaction fees.
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
                    <a className="btn btn-primary fw-bold">Join the waitlist</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* world class payment section */}
      <div className="py-5" style={{ backgroundColor: "white" }}>
        <div className="container py-5 my-3">
          <div className="row">
            <div className="col-12 d-flex justify-content-end">
              <div className="small">ONLINE PAYMENTS</div>
            </div>
            <div className="col-12 d-flex justify-content-end">
              <div className="col-6 d-none d-md-block"></div>
              <div className="col-12 col-md-6">
                <div className="fs-3 fw-bold">
                  World-class payment acceptance for Visa & Mastercard
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-12 col-md-6">
                <Image src={ImgTransfersBig} alt="" />
              </div>
              <div className="col-12 col-md-6 py-3 px-3">
                <div className="row py-3">
                  <div className="col-1">
                    <Image src={ImgIcon5} alt="" />
                  </div>
                  <div className="col-11">
                    <div className="row">
                      <div className="col-12 fw-bold">Protect from fraud</div>
                      <div className="col-12">
                        Reduce chargebacks with our 3DS fraud engine,
                        customizable risk settings and built-in dispute
                        management.
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
                      <div className="col-12 fw-bold">
                        Settle in multiple currencies
                      </div>
                      <div className="col-12">
                        Easily collect and settle in the same currency. No
                        forced conversions or unnecessary fees.
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
                      <div className="col-12 fw-bold">
                        Flexible integration methods to suit your business
                      </div>
                      <div className="col-12">
                        Any business can get started by generating no-code
                        payment links in seconds, shopping platform integrations
                        or flexible APIs for more control.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="col-12 d-flex justify-content-end">
                <div className="col-6 d-none d-md-block"></div>
                <div className="col-12 col-md-6">
                  <div className="d-flex">
                    <div className="px-2">
                      <Link href="#">
                        <a className="btn btn-primary fw-bold">Contact Sales</a>
                      </Link>
                    </div>
                    <div className="px-2">
                      <Link href="#">
                        <a className="btn border text-purple fw-bold">
                          Learn More
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* maze bookkeeping section */}
      <div className="py-5" style={{ backgroundColor: "white" }}>
        <div className="container py-5 my-3">
          <div className="row">
            <div className="col-12 d-flex justify-content-start">
              <div className="small">XERO INTEGRATION (BETA)</div>
            </div>
            <div className="col-12">
              <div style={{ maxWidth: "450px" }}>
                <div className="fs-3 fw-bold">Make bookkeeping a breeze </div>
                <p>
                  Seamlessly integrate your Airwallex account with Xero for easy
                  payment reconciliation.
                </p>
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
                        Quick and easy integration
                      </div>
                      <div className="col-12">
                        Link your Airwallex and Xero accounts in just a few
                        clicks.
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
                      <div className="col-12 fw-bold">
                        Multi-currency transaction syncing
                      </div>
                      <div className="col-12">
                        Sync your multi-currency Airwallex transactions to Xero,
                        including who made the transaction and where.
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
                      <div className="col-12 fw-bold">Syncs hourly</div>
                      <div className="col-12">
                        Ensure your Xero transaction records are up to date for
                        your accountant or bookkeeper.
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

      {/* customer carousel section */}
      <div className="container py-5">
        <div className="fs-2 text-center">
          See how our customers are finding Airwallex
        </div>
        <HomeCustomerCarousel />

        <div className="w-100 d-flex justify-content-center">
          <Link href="#">
            <a className="btn border text-purple fw-bold">Get Started</a>
          </Link>
        </div>
      </div>

      {/* API products section */}
      <div className="container d-flex flex-column align-items-center justify-content-center pt-5 mt-5 text-center">
        <div className="small">API PRODUCTS</div>
        <div className="fs-3 my-3" style={{ maxWidth: "600px" }}>
          Move your business forward with our complete financial technology
          toolkit
        </div>
        <small className="my-3">
          Streamline your global financial operations with our best-in-class
          APIs.
        </small>
        <Link href="#">
          <a className="btn btn-primary fw-bold">Get Started</a>
        </Link>
        <Image src={ImgApiProductsBanner} alt="" />
      </div>
      <div
        className="py-5"
        style={{
          background: "linear-gradient(180deg,#2f3237 0,#1a1d21 100%);",
        }}
      >
        <div className="container text-white py-5 my-3">
          <div className="fs-3 fw-bold text-white py-4">
            Security is at our core
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
                      <div className="fw-bold text-danger">Protected </div>
                    </div>
                    <div className="col-12">
                      <div className="">
                        Your money is held securely in a ring-fenced account.
                        You can access your funds whenever you like as they&apos;re
                        never invested or lent to anyone else.
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
                      <div className="fw-bold text-danger">Authenticated</div>
                    </div>
                    <div className="col-12">
                      <div className="">
                        Your data is stored and protected behind multiple layers
                        of authentication. Two factor authentication is enabled
                        on your account for added security.
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
                      <div className="fw-bold text-danger">Secure</div>
                    </div>
                    <div className="col-12">
                      <div className="">
                        Our security systems and procedures are based on the
                        highest international standards including PCI Level 1
                        compliance.
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
                      <div className="fw-bold text-danger">Compliant</div>
                    </div>
                    <div className="col-12">
                      <div className="">
                        Airwallex is regulated by the Dutch Central Bank (De
                        Nederlandsche Bank, DNB) and holds an Electronic Money
                        Institution (EMI) licence.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
