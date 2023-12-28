import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact, editContatc } from '../../redux/operations';
import { Modal, Input, Button, message, Popconfirm, Card } from 'antd';

const { Meta } = Card;

function ContactItem({ contact }) {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [newName, setNewName] = useState(contact.name);
  const [newNumber, setNewNumber] = useState(contact.number);

  const confirm = () => {
    handleDelete();
    message.success('Contact deleted');
  };
  const cancel = () => message.error('Canceled');

  const handleDelete = () => dispatch(deleteContact(contact.id));

  const handleEdit = () => setShowModal(true);

  const handleSave = () => {
    setShowModal(false);
    dispatch(editContatc({ id: contact.id, name: newName, number: newNumber }));
  };

  const handleCancel = () => setShowModal(false);

  const handleNameChange = e => setNewName(e.target.value);

  const handleNumberChange = e => setNewNumber(e.target.value);

  return (
    <Card
      title={contact.name}
      extra={
        <Button type="primary" onClick={handleEdit}>
          Edit
        </Button>
      }
      style={{ width: 300, marginBottom: 16 }}
    >
      <Meta
        title="Contact Number"
        description={<a href={`tel:${contact.number}`}>{contact.number}</a>}
        style={{ marginBottom: 12, fontSize: 24 }}
      />

      <Popconfirm
        title="Delete the contact"
        description="Are you sure to delete this contact?"
        onConfirm={confirm}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
      >
        <Button danger>Delete</Button>
      </Popconfirm>

      <Modal
        visible={showModal}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="save" type="primary" onClick={handleSave}>
            Save
          </Button>,
        ]}
      >
        <div className="modal-content">
          <label>New Name:</label>
          <Input
            type="text"
            value={newName}
            onChange={handleNameChange}
            pattern="^[a-zA-Zа-яА-Я]+([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label>New Number:</label>
          <Input
            type="text"
            value={newNumber}
            onChange={handleNumberChange}
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Phone number format could be: +1 555 1234567 or 555 1234567."
            required
          />
        </div>
      </Modal>
    </Card>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
