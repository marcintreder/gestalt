import * as React from 'react';
import PropTypes from 'prop-types';
import SearchField from '../SearchField/SearchField.js';
import Icon from '../Icon/Icon.js';
import IconButton from '../IconButton/IconButton.js';
import Box from '../Box/Box.js';

export default class SearchFieldExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  render() {
    return (
      <Box color="white" shape="rounded" padding={this.props.containerPadding} display="flex" direction="row" alignItems="center">
        <Box padding={3}>
          <Icon
            icon="pinterest"
            color="red"
            size={this.props.logoSize}
            accessibilityLabel="Pinterest"
          />
        </Box>
        <Box flex="grow" paddingX={2}>
          <SearchField
            accessibilityLabel="Demo Search Field"
            id="searchField"
            onChange={({ value }) => this.setState({ value })}
            placeholder="Search and explore"
            value={this.state.value}
          />
        </Box>
        <Box paddingX={2}>
          <IconButton
            accessibilityLabel={this.props.leftIconAccLabel}
            icon={this.props.leftIcon}
            size={this.props.leftIconSize}
          />
        </Box>
        <Box paddingX={2}>
          <IconButton
            accessibilityLabel={this.props.rightIconAccLabel}
            icon={this.props.rightIcon}
            size={this.props.rightIconSize}
          />
        </Box>
      </Box>
    );
  }
}

SearchFieldExample.propTypes = {
  containerPadding: PropTypes.number,
  logoSize: PropTypes.number,
  leftIcon: PropTypes.string,
  leftIconSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  leftIconAccLabel: PropTypes.string,
  rightIcon: PropTypes.string,
  rightIconSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rightIconAccLabel: PropTypes.string,

}

SearchFieldExample.defaultProps = {
  containerPadding: 3,
  logoSize: 20,
  leftIcon: "speech-ellipsis",
  leftIconSize: "md",
  leftIconAccLabel: "Notifications",
  rightIcon: "person",
  rightIconSize: "md",
  rightIconAccLabel: "Profile"
}
