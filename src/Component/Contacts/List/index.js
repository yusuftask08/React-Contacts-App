import React from 'react'

function List({ contacts }) {
    return (
        <div>
            {
                contacts && contacts.map((y, i) => <li key={i}> {y.fullName} </li>)
            }
        </div>
    )
}

export default List
