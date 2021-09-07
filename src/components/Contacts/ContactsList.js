import PropTypes from "prop-types"
import Contact from "./Contact"
import shortid from "shortid"
import s from "./ContactsList.module.css"

const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <ul className={s.list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={s.item}>
          <p className={s.discribe}>
            {contact.name}: {contact.number}
          </p>
          <button type="button" onClick={() => deleteContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}
export default ContactsList

ContactsList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
}
