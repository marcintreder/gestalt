import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '../Tabs/Tabs.js';

export default class TabsMerge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: this.props.firstActive,
    };
    this.handleChange = this._handleChange.bind(this);
  }

  _handleChange({ activeTabIndex, event }) {
    event.preventDefault();
    this.setState({
      activeIndex: activeTabIndex,
    });
  }

  render() {
    return (
      <Tabs
        tabs={this.props.tabs}
        activeTabIndex={this.state.activeIndex}
        onChange={this.handleChange}
      />
    );
  }
}

TabsMerge.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object),
  firstActive: PropTypes.number
}

TabsMerge.defaultProps = {
  tabs: [
    {
      text: 'Boards',
      href: '#',
    },
    {
      text: 'Pins',
      href: '#',
    },
    {
      text: 'Topics',
      href: '#',
    },
  ],
  firstActive: 0,
}
