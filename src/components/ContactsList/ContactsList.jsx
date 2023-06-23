import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/selectors';
import { fetchContacts, deleteContact } from 'redux/operations';
import css from '../GlobalStyles.module.css';
import Loader from 'components/Loader/Loader';

const ContactsList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  return (
    <ul className={css.contactList}>
      {isLoading && <Loader />}
      {!filteredContacts?.length && !error && !isLoading && (
        <h2>No contacts found.</h2>
      )}
      {error && <h2>{error}</h2>}
      {filteredContacts.map(({ id, name, phone }) => (
        <li className={css.item} key={id}>
          <p>{name}: </p>
          <p>{phone}</p>
          <button
            onClick={() => onDeleteContact(id)}
            className={css.contactsBtn}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
