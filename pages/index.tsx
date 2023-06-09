import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Lottie from "lottie-react";
import hearts from "../lotties/hearts.json";
import flowers from "../lotties/flowers.json";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Mothers Day</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="card"
        onClick={() => setOpen((prev) => !prev)}
        style={{ transform: open ? "rotate(-5deg)" : "unset" }}
      >
        <div
          className="outside"
          style={{ transform: open ? "rotateY(-130deg)" : "unset" }}
        >
          <div className="front">
            <div className="front-content">
              <div className="lottie-container">
                <Lottie animationData={flowers} className="flowers" />
                <h1 className="card-title">Mamo</h1>
              </div>
              <h1>Z okazji Twojego dnia</h1>
            </div>
          </div>
          <div className="back"></div>
        </div>
        <div className="inside" style={{ left: open ? "49.8%" : "50%" }}>
          <Lottie animationData={hearts} />
          <h1 className="inside-text">
            Wszystkiego <br />
            co
            <br />
            najlepsze!
          </h1>
        </div>
      </div>
    </>
  );
}
