import { useState, useEffect } from 'react'
import List from './List'
import Form from './Form'

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
        <div>
            <List contacts={contacts} />
            <Form addContacts={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts
