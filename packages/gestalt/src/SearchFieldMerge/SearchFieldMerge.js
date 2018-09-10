import * as React from 'react';
import PropTypes from 'prop-types';
import SearchField from '../SearchField/SearchField.js';
import Icon from '../Icon/Icon.js';
import IconButton from '../IconButton/IconButton.js';
import Box from '../Box/Box.js';

export default class SearchFieldMerge extends React.Component {
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

SearchFieldMerge.propTypes = {
  containerPadding: PropTypes.number,
  logoSize: PropTypes.number,
  leftIcon: PropTypes.oneOf([
    'add',
    'add-circle',
    'add-pin',
    'angled-pin',
    'arrow-back',
    'arrow-circle-down',
    'arrow-circle-forward',
    'arrow-down',
    'arrow-forward',
    'arrow-up',
    'arrow-up-right',
    'bell',
    'camera',
    'camera-roll',
    'cancel',
    'check',
    'check-circle',
    'circle-outline',
    'clear',
    'clock',
    'cog',
    'compass',
    'dash',
    'edit',
    'ellipsis',
    'ellipsis-circle-outline',
    'envelope',
    'eye',
    'facebook',
    'face-happy',
    'face-sad',
    'face-smiley',
    'filter',
    'flag',
    'flashlight',
    'gif',
    'globe',
    'globe-checked',
    'gmail',
    'google-plus',
    'graph-bar',
    'handle',
    'hand-pointing',
    'heart',
    'heart-broken',
    'knoop',
    'lightbulb',
    'link',
    'location',
    'lock',
    'maximize',
    'megaphone',
    'menu',
    'minimize',
    'move',
    'mute',
    'pause',
    'people',
    'person',
    'person-add',
    'pin',
    'pin-hide',
    'pinterest',
    'play',
    'question-mark',
    'remove',
    'report',
    'search',
    'shopping-bag',
    'smiley',
    'smiley-outline',
    'send',
    'share',
    'sound',
    'speech',
    'speech-ellipsis',
    'tag',
    'twitter',
    'view-type-default',
    'view-type-dense',
    'view-type-list',
  ]),
  leftIconSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  leftIconAccLabel: PropTypes.string,
  rightIcon: PropTypes.oneOf([
    'add',
    'add-circle',
    'add-pin',
    'angled-pin',
    'arrow-back',
    'arrow-circle-down',
    'arrow-circle-forward',
    'arrow-down',
    'arrow-forward',
    'arrow-up',
    'arrow-up-right',
    'bell',
    'camera',
    'camera-roll',
    'cancel',
    'check',
    'check-circle',
    'circle-outline',
    'clear',
    'clock',
    'cog',
    'compass',
    'dash',
    'edit',
    'ellipsis',
    'ellipsis-circle-outline',
    'envelope',
    'eye',
    'facebook',
    'face-happy',
    'face-sad',
    'face-smiley',
    'filter',
    'flag',
    'flashlight',
    'gif',
    'globe',
    'globe-checked',
    'gmail',
    'google-plus',
    'graph-bar',
    'handle',
    'hand-pointing',
    'heart',
    'heart-broken',
    'knoop',
    'lightbulb',
    'link',
    'location',
    'lock',
    'maximize',
    'megaphone',
    'menu',
    'minimize',
    'move',
    'mute',
    'pause',
    'people',
    'person',
    'person-add',
    'pin',
    'pin-hide',
    'pinterest',
    'play',
    'question-mark',
    'remove',
    'report',
    'search',
    'shopping-bag',
    'smiley',
    'smiley-outline',
    'send',
    'share',
    'sound',
    'speech',
    'speech-ellipsis',
    'tag',
    'twitter',
    'view-type-default',
    'view-type-dense',
    'view-type-list',
  ]),
  rightIconSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rightIconAccLabel: PropTypes.string,

}

SearchFieldMerge.defaultProps = {
  containerPadding: 3,
  logoSize: 20,
  leftIcon: "speech-ellipsis",
  leftIconSize: "md",
  leftIconAccLabel: "Notifications",
  rightIcon: "person",
  rightIconSize: "md",
  rightIconAccLabel: "Profile"
}
