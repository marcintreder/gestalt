import * as React from 'react';
import PropTypes from 'prop-types';
import SegmentedControl from '../SegmentedControl/SegmentedControl.js';
import Icon from '../Icon/Icon.js';

export default class SegmentedControlMerge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemIndex: this.props.firstActive,
    };
    this.handleItemChange = this.handleItemChange.bind(this);
  }

  handleItemChange({ activeIndex }) {
    this.setState(prevState => ({ itemIndex: activeIndex }));
  }

  render() {
    const items = this.props.items;

    return (
      <SegmentedControl
        items={items}
        selectedItemIndex={this.state.itemIndex}
        onChange={this.handleItemChange}
      />
    );
  }
}

SegmentedControlMerge.propTypes = {
  items: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
  firstActive: PropTypes.number
};

SegmentedControlMerge.defaultProps = {
  items: [
    'News',
    'You',
    'Messages',
    <Icon icon="pin" accessibilityLabel="Pin" color="gray" />,
  ],
  firstActive: 0
};
