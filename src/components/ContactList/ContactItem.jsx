import PropTypes from 'prop-types';
import { MdPermContactCalendar } from 'react-icons/md';
import css from './ContactItem.module.css';

const ContactItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <>
      <MdPermContactCalendar />
      <p className={css.text}>
        {name}: <span>{number}</span>
      </p>
      <button
        type="button"
        className={css.btn}
        id={id}
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
