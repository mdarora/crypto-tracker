import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Coin from './components/Coin';
import Header from './components/Header';

function App() {
  const [currency, setCurrency] = useState('USD');
  const apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=50&page=1&sparkline=false`;

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');


  useEffect(()=>{

    axios.get(apiUrl).then((res)=>{
      setCoins(res.data);
    }).catch((err) => console.log(err));

  }, [apiUrl]);

  const filteredCoins = coins.filter(coin => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
    <Header currency={{currency, setCurrency}}/>
    <section className="App">
      <div className="container">
        <div className="search">
          <h1>Search a currency</h1>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='search' />
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
              {filteredCoins.map((coin, i) =><Coin key={coin.symbol} name={coin.name} image={coin.image} symbol={coin.symbol.toUpperCase()} price={coin.current_price} volume={coin.total_volume} mktCap={coin.market_cap} priceChange={coin.price_change_percentage_24h} />)} 

            </tbody>
          </table>
        </div>

      </div>
    </section>
    </>
  );
}

export default App;
