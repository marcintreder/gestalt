import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box/Box.js';
import Label from '../Label/Label.js';
import Text from '../Text/Text.js';
import Switch from '../Switch/Switch.js';

export default class SwitchMerge extends React.Component {
  constructor(props) {
    super(props);
    this.state = { switched: this.props.initialSwitched };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({ switched: !this.state.switched });
  }

  render() {
    return (
      <Switch
        onChange={this.handleChange}
        id={this.props.id}
        switched={this.state.switched}
      />
    );
  }
}

SwitchMerge.propTypes = {
  initialSwitched: PropTypes.bool,
  id: PropTypes.string,
};

SwitchMerge.defaultProps = {
  initialSwitched: false,
};
