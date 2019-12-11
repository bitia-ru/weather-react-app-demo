import * as R from 'ramda';
import React from 'react';
import Modal from '../Modal';
import Form, {FormRow, FormSeparator} from '../Form';
import Button from '../../components/Button';
import Switch from '../../components/Switch';
import CheckBox from '../../components/CheckBox';
import ListBox from '../../components/ListBox';
import Avatar from '../../components/Avatar/Avatar';


class ProfileModal extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      cities: {
        moscow: { text: 'Moscow, RUS' },
        new_york: { text: 'Moscow, USA' },
        berlin: { text: 'Moscow, DEU' },
        astana: { text: 'Astana, KZN' },
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
        <Form
          controls={[
            <Button onClick={() => alert('asdf')}>Save</Button>,
          ]}
        >
          <FormRow left={<Avatar />}>John Johnson</FormRow>
          <FormRow
            title={'Current city'}
            description={'Select a city, information about which will be displayed by default'}
          >
            <ListBox
              onTextChanged={this.cityFieldChanged}
              onExpansionChanged={this.cityFieldExpansionChanged}
              items={
                R.map(
                  e => ({id: e[0], text: e[1]['text']})
                )(R.toPairs(this.state.cities))
              }
            />
            <CheckBox value={true}>Determine a city by geo position</CheckBox>
          </FormRow>
          <FormSeparator />
          <FormRow
            title={'Data auto update'}
            description={'Select if you want to automatically update data'}
            right={<Switch />}
          />
          <FormRow
            title={'Information displayed'}
          >
            <CheckBox>Humidity</CheckBox>
            <CheckBox>Weather</CheckBox>
            <CheckBox>Wind</CheckBox>
            <CheckBox>Pressure</CheckBox>
            <CheckBox>Night Temp</CheckBox>
          </FormRow>
        </Form>
      </Modal>
    );
  }
}

export default ProfileModal;
