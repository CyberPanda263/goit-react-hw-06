import css from './ContactList.module.css'
import Contact from '../Contact/Contact'
import { useSelector } from 'react-redux'
import { selectContacts } from '../../redux/contacts/selectors'
import { selectFilter } from '../../redux/filter/selectors'

const ContactList = () => {

    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
   const filterContacts = contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <div className= {css.contactsListBox}>
            <ul className={css.contactsList}>
                {filterContacts.map((contact) => (
                    <li className={css.contactCard} key={contact.id}>
                        <Contact
                            id={contact.id}
                            name={contact.name}
                            number={contact.number}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ContactList