
import css from './ContactListItem.module.css';
import { Icon } from '../img/Icon';

export const ContactListItem = ({ name, number, id, deleteContact }) => {
  const handleDel = () => {
    deleteContact(id);

  };

  return (
    <li className={css.contactItem}>
      <span>{name}</span>
      <span>{number}</span>

      <button className={css.buttonDel} onClick={handleDel}>
        <Icon id="user-minus" className={css.icons} />
        {/* <i className={css.icon} class="icon ion-md-trash"></i> */}
        Delete
      </button>
    </li>
  );
};