import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// @ts-ignore
import Lottie from "react-lottie";

export default function Home() {
  const [open, setOpen] = useState(false);

  const hearts = {
    loop: true,
    autoplay: true,
    animationData: require("../lotties/hearts.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const flowers = {
    loop: true,
    autoplay: true,
    animationData: require("../lotties/flowers.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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
            <Lottie options={flowers} className="lottie-flowers" />
            <h1>Z okazji Twojego święta</h1>
            <h1 className="card-title">Mamo</h1>
          </div>
        </div>
        <div className="back"></div>
      </div>
      <div className="inside" style={{left: open ? "49.8%" : "50%"}}>
        <Lottie options={hearts} className="lottie-hearts" />
        <h1 className="inside-text">Wszystkiego <br />co<br />najlepsze!</h1>
      </div>
    </div>
    </>
  );
}
