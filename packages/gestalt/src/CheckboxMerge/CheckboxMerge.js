import * as React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../Checkbox/Checkbox.js';

export default class CheckboxMerge extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: this.props.initialChecked };
    this.handleChecked = this._handleChecked.bind(this);
  }

  _handleChecked({ checked }) {
    this.setState({ checked });
  }

  render() {
    return (
      <Checkbox
        checked={this.state.checked}
        disabled={this.props.disabled}
        hasError={this.props.hasError}
        id={this.props.id}
        name={this.props.name}
        onChange={this.handleChecked}
        size={this.props.size}
        indeterminate={this.props.indeterminate}
      />
    );
  }
}

CheckboxMerge.propTypes = {
  initialChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  hasError: PropTypes.bool,
  id: PropTypes.string.isRequired,
  indeterminate: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md']),
};

CheckboxMerge.defaultProps = {
  initialChecked: false,
  disabled: false,
  hasError: false,
  indeterminate: false,
  size: 'md',
};
