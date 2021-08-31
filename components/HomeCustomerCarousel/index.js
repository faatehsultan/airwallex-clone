import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";

export default function HomeCustomerCarousel() {
  return (
    <div
      className={
        styles.homeCustomerCarousel +
        " py-5 my-3 d-flex justify-content-center align-items-center"
      }
    >
      <CarouselTile />
    </div>
  );
}

//individual tile
function CarouselTile() {
  return (
    <div className={styles.carouselTile + " rounded "}>
      <div className="row h-100">
        <div
          className="col-3 d-none d-md-block rounded"
          style={{
            background: "url(/dovetail_image.jpg)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="col-12 col-md-9 p-5 d-flex align-items-center justify-content-center">
          <div className="row">
            <div className="col-12">
              <p style={{ color: "gray" }}>
                “Having all our global SaaS subscriptions in one place has
                streamlined our finance processes and enabled better tracking
                and control of expenses. It’s even better knowing that Airwallex
                isn’t hitting us with any international transaction fees.”
              </p>
            </div>
            <div className="col-12 py-4">
              <div className="row align-items-center">
                <div className="col-2">
                  <Image
                    src="/dovetail_image.jpg"
                    width={80}
                    height={80}
                    alt=""
                    className="rounded-circle"
                  />
                </div>
                <div className="col-10">
                  <h6>Warren Durling</h6>
                  <h6 style={{ opacity: "0.6" }}>
                    Chief Operating Officer, Dovetail
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
