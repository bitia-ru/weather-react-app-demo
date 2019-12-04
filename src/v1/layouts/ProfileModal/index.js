import React from 'react';
import Modal from '../Modal';
import Button from '../../components/Button';
import Switch from '../../components/Switch';
import CheckBox from '../../components/CheckBox';


const ProfileModal = () => (
  <Modal>
    <Button onClick={() => alert('asdf')}>Save</Button>
    Foo bar
    <Switch value={false} />
    <CheckBox disabled value={true}>Test</CheckBox>
  </Modal>
);

export default ProfileModal;
