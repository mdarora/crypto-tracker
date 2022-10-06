import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Coin from './components/Coin';

function App() {
  const apiUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=50&page=1&sparkline=false";

  const [coins, setCoins] = useState([]);

  useEffect(()=>{

    axios.get(apiUrl).then((res)=>{
      setCoins(res.data);
    }).catch((err) => console.log(err));

  }, []);

  return (
    <section className="App">
      <div className="container">
        <div className="search">
          <h1>Search a currency</h1>
          <input type="text" placeholder='search' />
        </div>

        <div className="coins">
          <table>
            <thead>
              <tr>
                <td>Coin</td>
                <td>Symbol</td>
                <td>Price</td>
                <td>Volume</td>
                <td>24h Change</td>
                <td>Market Cap</td>
              </tr>
            </thead>
            <tbody>
              {coins.map((coin, i) =><Coin key={coin.symbol} name={coin.name} image={coin.image} symbol={coin.symbol.toUpperCase()} price={coin.current_price} volume={coin.total_volume} mktCap={coin.market_cap} priceChange={coin.price_change_percentage_24h} />)} 

            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}

export default App;
