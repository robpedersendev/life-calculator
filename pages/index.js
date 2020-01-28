import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import Newsletter from "../components/newsletter";
// import BlackSandHiddenSun from "../assets/balck_sand_hidden_sun.jpg";

const Home = () => (
  <div className="body">
    <Head>
      <title>Home</title>
    </Head>

    <div className="hero">
      <div className="centered">
        <Newsletter className="centered_oneline" />
      </div>
    </div>
    <Nav />
    <style jsx>{`
      .centered {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: column;
      }

      .centered_oneline {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: column;
      }
      body {
        height: auto;
        background-image: url("/assets/balck_sand_hidden_sun.png");
      }
    `}</style>
  </div>
);

export default Home;
