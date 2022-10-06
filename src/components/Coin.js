import React from 'react'

const Coin = ({name, image, symbol, price, volume, mktCap, priceChange}) => {
  return (
    <>
    <tr className="coin">
        <td>
            <img src={image} alt={name + " logo"} /> {name}
        </td>
        <td>{symbol}</td>
        <td>${price}</td>
        <td>${volume}</td>
        {priceChange < 0 ? (<td className='red'>{priceChange}%</td>) : (<td className='green'>{priceChange}%</td>)}
        
        <td>Mkt Cap: ${mktCap}</td>
    </tr>
    </>
  )
}

export default Coin