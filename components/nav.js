import React from "react";
import Link from "next/link";

const links = [
  {
    href: "https://github.com/robpedersendev/life-calculator",
    label: "Twitter",
    className: "twitter",
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
  key: `nav-link-${link.href}-${link.label}-${link.className}-${link.alt}`
}));

const Nav = () => (
  <nav>
    <ul>
      {/* <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li> */}
      {links.map(({ key, href, label, className, alt }) => (
        <li key={key}>
          <a href={href} alt={alt} className={className}>
            {label}
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
        font-size: 5vw;
        font-weight: bold;
        text-shadow: 2px 2px 10px black;
      }
      a:hover {
        color: black;
        text-decoration: underline;
        text-decoration-color: white;
        text-shadow: 2px 2px 10px white;
        font-weight: bolder;
        font-size: 10vw;
      }
    `}</style>
  </nav>
);

export default Nav;
