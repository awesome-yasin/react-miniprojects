import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './crypto.css';
import Coin from './Coin';

const Crypto = () =>{

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
  
    useEffect(() => {
      axios
        .get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=260&page=1&sparkline=false'
        )
        .then(res => {
          setCoins(res.data);
          console.log(res.data);
        })
        .catch(error => console.log(error));
    }, []);
  
    const handleChange = e => {
      setSearch(e.target.value);
    };
  
    const filteredCoins = coins.filter(coin =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );

    return(
       <div className='coin-app'>
      <div className='coin-search'>
        <h1 className='coin-text'>Search a currency</h1>
        <form>
          <input
            className='coin-input'
            type='text'
            onChange={handleChange}
            placeholder='Search from hundreds Crypto'
          />
        </form>
      </div>
      
      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            market = {coin.market_cap_rank}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
    )
}
export default Crypto