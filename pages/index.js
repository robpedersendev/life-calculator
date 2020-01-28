import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import Newsletter from "../components/newsletter";
// import BlackSandHiddenSun from "../assets/balck_sand_hidden_sun.jpg";

const Home = () => (
  <div className="body">
    <Head>
      <title>Home</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>

      <title>Your Website Title</title>

      <meta property="og:url" content="https://life-calculator.now.sh/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Life Calculator" />
      <meta
        property="og:description"
        content="Do you know what your ideal salary is both pre and post tax is? If not, I hope to help answer that question with you."
      />
      <meta
        property="og:image"
        content="https://life-calculator.now.sh/assets/balck_sand_hidden_sun.png"
      />
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
      .hero {
        width: 100%;
      }
      .centered_oneline {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: column;
      }
      .body {
        height: auto;
        background-image: url("/assets/balck_sand_hidden_sun.png");
        background-position: center; /* Center the image */
        background-repeat: no-repeat; /* Do not repeat the image */
        background-size: cover; /* Resize the background image to cover the entire container */
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        align-content: center;
      }
    `}</style>
  </div>
);

export default Home;
