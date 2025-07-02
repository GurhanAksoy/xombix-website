
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Home() {
  return (
    <section className="main">
      <div className="home">
        <div className="home__content">
          <p className="mars-text" style={{ color: "#e38b06" }}>
            First stop: MARS
          </p>
          <h1 className="xombix-title">XombiX</h1>
          <p className="slogan">The Meme Coin Revolution</p>
          <div className="home__buttons">
            <Link to="/presale" className="btn" aria-label="Join the XombiX Presale">
              Join the Presale
            </Link>
            <Link to="/whitepaper" className="btn btn-secondary" aria-label="Read the XombiX Whitepaper">
              Whitepaper
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
