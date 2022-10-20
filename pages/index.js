import React from 'react'

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';
import { scrollToMenu } from '../lib/utils';


const Home = ({ products, bannerData }) => (
  <div>
    <background>
      <div className="index-background"></div>
    </background>
    <div className='showcase-container'>
      <div class="showcase-title">
          <h1>AnhVy Tea</h1>
          <h2>Milk tea to your doorstep!</h2>
      </div>
      <div class="buttons">
        <button type='button' className='order-now' onClick={scrollToMenu}>Order Now</button>
      </div>
    </div>
    <div className='main-inner-container'>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
      <div className="products-heading">
        <h2>Choose your drinks</h2>
        <p>Tea of many variations</p>
      </div>

      <div className="products-container" id="menu">
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}


export default Home;

