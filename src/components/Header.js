import React from 'react'

const Header = ({currency}) => {
  return (
    <>
    <nav>
        <h1 className="logo">Crypto-Tracker</h1>
        <div className="nav-menu">
            <select name="currency" onChange={e => currency.setCurrency(e.target.value)}>
                <option value="USD">USD</option>   
                <option value="CAD">CAD</option>   
                <option value="INR">INR</option>   
            </select>
        </div>
    </nav>
    </>
  )
}

export default Header