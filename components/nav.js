import React from "react";
import Link from "next/link";

const links = [
  {
    href:
      "https://twitter.com/intent/tweet?text=I%20am%20excited%20to%20know%20my%20minimal%20needed%20pretax%20income?hashtag=LifeCalculator",
    label: "Twitter",
    className: "twitter-share-button",
    alt: "twitter logo",
    img: "/assets/twitter.png"
  },
  {
    href:
      "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flife-calculator.now.sh%2F&amp;src=sdkpreparse",
    label: "Facebook",
    className: "facebook",
    alt: "facebook logo",
    img: "/assets/facebook.png"
  },
  {
    href: "https://github.com/robpedersendev/life-calculator",
    label: "GitHub",
    className: "github",
    alt: "github logo",
    img: "/assets/github.png"
  }
].map(link => ({
  ...link,
  key: `nav-link-${link.href}-${link.label}-${link.className}-${link.alt}-${link.img}`
}));

const Nav = () => (
  <nav>
    <ul>
      {/* <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li> */}
      {links.map(({ key, href, label, className, alt, img }) => (
        <li key={key}>
          <a href={href} className={className}>
            <p>{label}</p>
            <img src={img} alt={alt} />
          </a>
        </li>
      ))}
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
        width: 100%;
        height: 100px;
      }
      ul {
        display: flex;
        justify-content: space-around;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        justify-content: space-around;
        padding: 6px 8px;
      }
      a,
      a:visited,
      a:active {
        color: white;
        text-decoration: none;
        font-size: 3vw;
        font-weight: bold;
        text-shadow: 2px 2px 10px black;
      }
      a:hover {
        color: black;
        text-decoration: underline;
        text-decoration-color: white;
        text-shadow: 2px 2px 10px white;
        font-weight: bolder;
        font-size: 3vw;
      }
      a {
        display: flex;
        align-items: center;
        align-content: center;
        flex-direction: column;
        justify-content: center;
      }
      img {
        border-radius: 25px;
        width: 5vw;
        box-shadow: 1px 1px 30px white;
        height: 65%;
      }
    `}</style>
  </nav>
);

export default Nav;
