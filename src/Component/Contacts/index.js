import { useState, useEffect } from 'react'
import List from './List'
import Form from './Form'
import './style.css'
function Contacts() {
    const [contacts, setContacts] = useState([{
        fullName: 'yusuf',
        phone_number: '1231231'
    },
    {
        fullName: 'memo',
        phone_number: '2222'
    },
    {
        fullName: 'cevo',
        phone_number: '111111'
    }
    ])
    useEffect(() => {
    }, [contacts])

    return (
        <div className='container'>
            <h1>Contacts</h1>
            <List contacts={contacts} />
            <Form addContacts={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts
