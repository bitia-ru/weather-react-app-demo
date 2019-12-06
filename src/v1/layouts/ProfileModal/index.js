import * as R from 'ramda';
import React from 'react';
import Modal from '../Modal';
import Button from '../../components/Button';
import Switch from '../../components/Switch';
import CheckBox from '../../components/CheckBox';
import ListBox from '../../components/ListBox';


class ProfileModal extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      cities: {
        moscow: { text: 'Moscow, RUS' },
        new_york: { text: 'Moscow, USA' },
        berlin: { text: 'Moscow, DEU' },
        astana: { text: 'Moscow, KZN' },
        paris: { text: 'Paris, FR' },
      },
    }
  }

  cityFieldExpansionChanged = isExpanded => {
    console.log(isExpanded);

    if (!isExpanded)
      return;

    // request city list and...
    // .then () => { this.setState(filteredCities: cities); }
  };

  cityFieldChanged = newText => {
  };

  render() {
    return (
      <Modal>
        <Button onClick={() => alert('asdf')}>Save</Button>
        Foo bar
        <Switch value={false} />
        <CheckBox disabled value={true}>Test</CheckBox>
        <ListBox
          onTextChanged={this.cityFieldChanged}
          onExpansionChanged={this.cityFieldExpansionChanged}
          items={
            R.map(
              e => ({id: e[0], text: e[1]['text']})
            )(R.toPairs(this.state.cities))
          }
        />
      </Modal>
    );
  }
}

export default ProfileModal;
