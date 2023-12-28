import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Empty, Alert } from 'antd';
import {
  selectFilteredContacts,
  selectError,
  selectIsLoading,
} from '../../redux/selectors';
import { fetchContacts } from '../../redux/operations';
import ContactItem from 'components/ContactItem/ContactItem';
import { Loader } from 'components/Loader/Loader';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 12,
      }}
    >
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id} contact={{ id, name, number }} />
      ))}
      {isLoading && !error && <Loader size="large" />}
      {error && <Alert message="Error fetching contacts" type="error" />}
      {!isLoading && filteredContacts.length === 0 && (
        <Empty description="The Phonebook is empty. Add your first contact." />
      )}
    </div>
  );
};

export default ContactList;
