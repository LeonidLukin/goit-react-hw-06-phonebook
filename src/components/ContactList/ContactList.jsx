import PropTypes from 'prop-types';
import Contact from '../Contact';
import css from './ContactList.module.css';

function ContactList({ contacts, onDeleteContact }) {
    return (
        <ul>
            {contacts.map(({ id, name, number }) => {
                return (
                    <li className={css.item} key={id}>
                        <Contact
                            name={name}
                            number={number}
                            onDeleteContact={onDeleteContact}
                            contactId={id}
                        />
                    </li>
                )
            })}
        </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            number: PropTypes.string,
        })
    ).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;