import { useState, useEffect } from 'react'

const initFormValue = { fullName: '', phone_number: '' }

function Form({ addContacts, contacts }) {
    const [form, setForm] = useState(initFormValue)

    useEffect(() => {
        setForm(initFormValue)
    }, [contacts])

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if (form.fullName === '' | form.phone_number === '') {
            return false
        }
        addContacts([...contacts, form])
    }
    return (
        <form onSubmit={onSubmit}>
            <div>
                <input value={form.fullName} name="fullName" placeholder='full name' onChange={onChangeInput} />
            </div>
            <div>
                <input value={form.phone_number} name="phone_number" placeholder='phone number' onChange={onChangeInput} />
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

export default Form
