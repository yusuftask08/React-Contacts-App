import React from 'react'
import { useState } from 'react/cjs/react.development'

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
            {
                filtered && filtered.map((y, i) => <li key={i}> {y.fullName} </li>)
            }
        </div>
    )
}

export default List
