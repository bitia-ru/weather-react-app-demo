import React from 'react';
import Modal from '../Modal';
import Button from '../../components/Button';


const ProfileModal = () => (
  <Modal>
    <Button onClick={() => alert('asdf')}>Save</Button>
  </Modal>
);

export default ProfileModal;
