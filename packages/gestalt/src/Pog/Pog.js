// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Box from '../Box/Box.js';
import Icon from '../Icon/Icon.js';
import icons from '../icons/index.js';
import styles from './Pog.css';

const SIZE_NAME_TO_PIXEL = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 56,
};

/*
type Props = {|
  active?: boolean,
  bgColor?: 'transparent' | 'lightGray' | 'white',
  focused?: boolean,
  hovered?: boolean,
  iconColor?: 'gray' | 'darkGray' | 'red' | 'blue' | 'white',
  icon: $Keys<typeof icons>,
  size?: $Keys<typeof SIZE_NAME_TO_PIXEL>,
|};

// : Props

*/
const defaultIconButtonIconColors = {
  transparent: 'gray',
  lightGray: 'gray',
  white: 'gray',
};

export default function Pog(props) {
  const {
    active = false,
    bgColor = 'transparent',
    focused = false,
    hovered = false,
    iconColor = defaultIconButtonIconColors[bgColor],
    icon,
    size = 'md',
  } = props;

  const iconSize = SIZE_NAME_TO_PIXEL[size] / 2;

  const inlineStyle = {
    height: SIZE_NAME_TO_PIXEL[size],
    width: SIZE_NAME_TO_PIXEL[size],
  };

  const classes = classnames(styles.pog, styles[bgColor], {
    [styles.active]: active,
    [styles.focused]: focused,
    [styles.hovered]: hovered && !focused && !active,
  });

  return (
    <div className={classes} style={inlineStyle}>
      <Box shape="circle">
        {/*
          We're explicitly setting an empty string as a label on the Icon since we
          already have an aria-label on the button container.
          This is similar to having empty `alt` attributes:
          https://davidwalsh.name/accessibility-tip-empty-alt-attributes
        */}
        <Icon
          color={iconColor}
          icon={icon}
          size={iconSize}
          accessibilityLabel=""
        />
      </Box>
    </div>
  );
}

Pog.propTypes = {
  active: PropTypes.bool,
  bgColor: PropTypes.oneOf(['transparent', 'lightGray', 'white']),
  focused: PropTypes.bool,
  hovered: PropTypes.bool,
  iconColor: PropTypes.oneOf(['gray', 'darkGray', 'red', 'blue', 'white']),
  icon: PropTypes.oneOf([
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
  ]).isRequired,
  size: PropTypes.oneOf(Object.keys(SIZE_NAME_TO_PIXEL)),
};
