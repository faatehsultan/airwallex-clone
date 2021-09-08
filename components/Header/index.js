import React, { useState } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import ImgLogo from "../../public/kyng_logo.png";

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className={styles.header + " container"}>
      {/* desktop header */}
      <div className="py-4 d-none d-md-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-start align-items-center">
          <div className={styles.logoContainer + " mx-3"}>
            <Image src={ImgLogo} alt="logo" />
          </div>
          <div className={styles.navLink + " mx-3"}>
            <Link href="#">
              <a>Products</a>
            </Link>
          </div>
          <div className={styles.navLink + " mx-3"}>
            <Link href="#">
              <a>Pricing</a>
            </Link>
          </div>
          <div className={styles.navLink + " mx-3"}>
            <Link href="#">
              <a>Developers</a>
            </Link>
          </div>
          <div className={styles.navLink + " mx-3"}>
            <Link href="#">
              <a>Company</a>
            </Link>
          </div>
        </div>
        <div className="d-flex justify-content-start align-items-center">
          <div className={styles.navLink + " mx-1"}>
            <Link href="#">
              <a className="btn text-purple fw-bold">Log in</a>
            </Link>
          </div>
          <div className={styles.navLink + " mx-1"}>
            <Link href="#">
              <a className="btn btn-primary fw-bold">Get Started</a>
            </Link>
          </div>
        </div>
      </div>
      {/* mobile header */}
      <div className="py-2 d-flex d-md-none justify-content-between align-items-center">
        <div className="d-flex justify-content-start align-items-center">
          <div className={styles.logoContainer + " mx-2 p-1"}>
            <Image src={ImgLogo} alt="logo" />
          </div>
        </div>
        <div className="d-flex justify-content-start align-items-center">
          <div className={styles.navLink + " mx-1"}>
            <button
              className="btn p-0"
              onClick={() => setIsMobileNavOpen(true)}
            >
              <i className="bi bi-list fs-1 p-0 m-0"></i>
            </button>
          </div>
        </div>
      </div>
      {isMobileNavOpen && (
        <div className={styles.mobileOverlayNav + " d-block d-md-none"}>
          {/* mobile header in nav overlay */}
          <div className="container">
            <div className="py-2 d-flex  justify-content-between align-items-center">
              <div className="d-flex justify-content-start align-items-center">
                <div className={styles.logoContainer + " mx-2 p-1"}>
                  <Image src={ImgLogo} alt="logo" />
                </div>
              </div>
              <div className="d-flex justify-content-start align-items-center">
                <div className={styles.navLink + " mx-1"}>
                  <button
                    className="btn p-0"
                    onClick={() => setIsMobileNavOpen(false)}
                  >
                    <i className="bi bi-x fs-1 p-0 m-0"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-100">
              <div className="row my-4">
                <div className="col-12">
                  <div className={styles.navLink + " mx-3"}>
                    <Link href="#">
                      <a>Products</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row my-4">
                <div className="col-12">
                  <div className={styles.navLink + " mx-3"}>
                    <Link href="#">
                      <a>Pricing</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row my-4">
                <div className="col-12">
                  <div className={styles.navLink + " mx-3"}>
                    <Link href="#">
                      <a>Developers</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row my-4">
                <div className="col-12">
                  <div className={styles.navLink + " mx-3"}>
                    <Link href="#">
                      <a>Company</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row position-absolute w-100 justify-content-center bottom-0 pb-5">
              <div className="col-6 px-2 d-flex justify-content-center">
                <Link href="#">
                  <a className="btn text-purple fw-bold w-100 border">Log in</a>
                </Link>
              </div>
              <div className="col-6 px-2 d-flex justify-content-center">
                <Link href="#">
                  <a className="btn btn-primary fw-bold w-100">Get Started</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
