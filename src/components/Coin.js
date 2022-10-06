import React from 'react'

const Coin = ({name, image, symbol, price, volume, mktCap, priceChange}) => {
  return (
    <>
    <tr className="coin">
        <td>
            <img src={image} alt={name + " logo"} /> {name}
        </td>
        <td>{symbol}</td>
        <td>${price.toLocaleString()}</td>
        <td>${volume.toLocaleString()}</td>
        {priceChange < 0 ? (<td className='red'>{priceChange.toFixed(2)}%</td>) : (<td className='green'>{priceChange.toFixed(2)}%</td>)}
        
        <td>Mkt Cap: ${mktCap.toLocaleString()}</td>
    </tr>
    </>
  )
}

export default Coin