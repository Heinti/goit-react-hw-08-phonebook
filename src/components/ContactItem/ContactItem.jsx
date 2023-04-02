import PropTypes from 'prop-types';
import css from '../ContactItem/ContactItem.module.css';

export const ContactItem = ({ data: { id, name, phone }, onDelete }) => {
  return (
    <li key={id} className={css.list__li}>
      <p>
        {name}: {phone}
        <button
          className={css.list__Btn}
          type="button"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </p>
    </li>
  );
};

ContactItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
