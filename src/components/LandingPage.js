import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import ParticleBackground from "./ParticleBackground";
import DecentralizedTradingProtocol from "./DecentralizedTradingProtocol";
import OurCoin from "./OurCoin";
import Savings from "./Savings";
import Protocol from "./Protocol";
import Borrow from "./Borrow";
import DEFIDevelopers from "./DEFIDevelopers";
import Partners from "./Partners";
import Markets from "./Markets";
import Footer from "./Footer";

function LandingPage() {
  return (
    <div className="wrapper">
      <ParticleBackground />
      <Header />
      <main id="main">
        <Banner />
        <DecentralizedTradingProtocol />
        <OurCoin />
        <Savings />
        <Protocol />
        <Borrow />
        <DEFIDevelopers />
        <Partners />
        <Markets />
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
