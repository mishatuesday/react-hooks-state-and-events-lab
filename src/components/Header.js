import React from 'react'

const Header = ({changeMode}) => {
    return (
        <header>
        <h2>Shopster</h2>
        <button onClick={() => changeMode()}>Dark Mode</button>
      </header>
    )
}

export default Header;