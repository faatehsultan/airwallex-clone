import React, { useState } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import ImgLogo from "../../public/airwallex_logo.png";

export default function Footer() {
  const [linksList, setLinksList] = useState([
    [
      { name: "Global Accounts", link: "#" },
      { name: "Transfers & FX", link: "#" },
      { name: "Borderless Cards", link: "#" },
      { name: "Xero Integration", link: "#" },
    ],
    [
      { name: "Online Payments", link: "#" },
      { name: "Treasury", link: "#" },
      { name: "Transactional FX", link: "#" },
      { name: "Payouts", link: "#" },
      { name: "Issuing", link: "#" },
      { name: "Scale", link: "#" },
    ],
    [
      { name: "Business Accounts", link: "#" },
      { name: "Platform", link: "#" },
    ],
    [
      { name: "Product Documentation", link: "#" },
      { name: "API Reference", link: "#" },
    ],
    [
      { name: "Who we are", link: "#" },
      { name: "Careers", link: "#" },
      { name: "Blog", link: "#" },
      { name: "Newsroom", link: "#" },
      { name: "FAQ", link: "#" },
      { name: "Contact us", link: "#" },
      { name: "About Airwallex", link: "#" },
    ],
  ]);

  return (
    <div className={styles.footer}>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-12 py-5">
            <div className={styles.logoContainer}>
              <Image src={ImgLogo} alt="logo" />
            </div>
          </div>
          <div className="col-12">
            <div className="row justify-content-between ">
              <div className="col-6 py-3 col-md-2">
                <div className="fw-bold mb-2">Business Account</div>
                {linksList[0].map((item, index) => (
                  <div key={index} className={styles.footerLink}>
                    <Link href={item.link}>
                      <a>{item.name}</a>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="col-6 py-3 col-md-2">
                <div className="fw-bold mb-2">Platforms</div>
                {linksList[1].map((item, index) => (
                  <div key={index} className={styles.footerLink}>
                    <Link href={item.link}>
                      <a>{item.name}</a>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="col-6 py-3 col-md-2">
                <div className="fw-bold mb-2">Pricing</div>
                {linksList[2].map((item, index) => (
                  <div key={index} className={styles.footerLink}>
                    <Link href={item.link}>
                      <a>{item.name}</a>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="col-6 py-3 col-md-2">
                <div className="fw-bold mb-2">Developers</div>
                {linksList[3].map((item, index) => (
                  <div key={index} className={styles.footerLink}>
                    <Link href={item.link}>
                      <a>{item.name}</a>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="col-6 py-3 col-md-2">
                <div className="fw-bold mb-2">Company</div>
                {linksList[4].map((item, index) => (
                  <div key={index} className={styles.footerLink}>
                    <Link href={item.link}>
                      <a>{item.name}</a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
