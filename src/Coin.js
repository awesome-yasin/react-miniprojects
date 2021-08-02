import React from 'react';
import './Coin.css';

const Coin = ({
market,
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange
}) => {
  return (
      
  
          
    <div className='coin-container'>
        
      <div className='coin-row'>
        <div className='coin'>
      
        <p className='coin-symbol spac'>{market}</p>
          <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <p className='coin-symbol'>{symbol}</p>
        </div>
        <div className='coin-data'>
          <p className='coin-price'>₹ {price}</p>
          <p className='coin-volume'>₹ {volume.toLocaleString()}</p>

        

          <p className='coin-marketcap'>
            Mkt Cap: ₹{marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
    
  );
};

export default Coin;