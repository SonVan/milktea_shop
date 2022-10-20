import Link from 'next/link';
import React from 'react';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <section className="hero-banner-container">
      <div class="hero-text-container">
        <div class="hero-text">
          <h3>
            <img src="/check.svg" className="hero-svg"></img>
            Free lightning fast delivery
          </h3>
          <p>Reliable and fast delivery anywhere within the city for free!</p>
        </div>
        <div class="hero-text">
          <h3>
            <img src="/check.svg" className="hero-svg"></img>
            Premium quality tea
          </h3>
          <p>Using only the highest quality natural ingredients, we ensure that our tea is one of the best. </p>
        </div>
        <div class="hero-text">
          <h3>
            <img src="/check.svg" className="hero-svg"></img>
            Convenient and affortable
          </h3>
          <p>Super cheap price! Order online now with just a click of a button.</p>
        </div>
      </div>
      <img className="hero-image" src="/boba-tea-wooden-cutting-board.webp" />
    </section>
  )
}

export default HeroBanner