import React from 'react'
import { useState } from 'react'

function List({ contacts }) {
    const [filterText, setFilterText] = useState('');
    const filtered = contacts.filter((y) => {
        return Object.keys(y).some((key) => {
            return y[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase());
        })
    })
    console.log('filtered :>> ', filtered);
    return (
        <div>
            <input placeholder='Filter Contact' value={filterText} onChange={(e) => { setFilterText(e.target.value) }} />
            <ul className='list'>
                {
                    filtered && filtered.map((y, i) => <li key={i}>
                        <span>{y.fullName} </span>
                        <span>{y.phone_number} </span>
                    </li>)
                }
            </ul>
            <p> Total contacts ({filtered.length}) </p>
        </div>
    )
}

export default List
