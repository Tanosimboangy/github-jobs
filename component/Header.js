import React, { useState } from 'react'

function Header() {
    const [inputValue, setInputValue] = useState('');

    return (
        <header className="header">
            <form>
                <input 
                    type="text" 
                    value={inputValue} 
                    onChange={e => setInputValue(e.target.value)} 
                />
                <button type="submit">Search</button>
            </form>
        </header>
    )
}

export default Header
