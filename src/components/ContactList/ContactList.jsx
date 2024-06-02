import css from './ContactList.module.css'
import {ContactListItem} from '../ContactListItem/ContactListItem'

export const ContactList = ({ contacts, deleteContact }) => (
        <ul className={css.contactsList}>
        {contacts.map(({name, number, id}) => (
                <ContactListItem
                    name={name}
                    number={number}
                    key={id}
                    id={id}
                    deleteContact={deleteContact}
                />
                ))
        }
        </ul>
)