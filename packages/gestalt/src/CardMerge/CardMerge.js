// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Box from '../Box/Box.js';
import Avatar from '../Avatar/Avatar.js';
import styles from './CardMerge.css';

/*
type Props = {|
  active?: ?boolean,
  children?: React.Node,
  avatarSrc?: string,
  avatarName: string,
  avatarSize?:  'sm' | 'md' | 'lg',
  avatarOutline?: boolean,
  avatarVerified?: boolean,
  onMouseEnter?: ({ event: SyntheticMouseEvent<HTMLDivElement> }) => void,
  onMouseLeave?: ({ event: SyntheticMouseEvent<HTMLDivElement> }) => void,
|};


type State = {|
  hovered: boolean,
|};

*/

// <Props, State>

export default class CardMerge extends React.Component {
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    avatarSrc: PropTypes.string,
    avatarSize: PropTypes.oneOf(['sm', 'md', 'lg']),
    avatarName: PropTypes.string,
    avatarOutline: PropTypes.bool,
    avatarVerified: PropTypes.bool,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
  };

  state: State = {
    hovered: false,
  };

  handleMouseEnter = (event: SyntheticMouseEvent<HTMLDivElement>) => {
    const { onMouseEnter } = this.props;
    this.setState(
      { hovered: true },
      onMouseEnter && (() => onMouseEnter({ event }))
    );
  };

  handleMouseLeave = (event: SyntheticMouseEvent<HTMLDivElement>) => {
    const { onMouseLeave } = this.props;
    this.setState(
      { hovered: false },
      onMouseLeave && (() => onMouseLeave({ event }))
    );
  };

  render() {
    const { active, children, image } = this.props;
    const { hovered } = this.state;

    const classes = classnames(styles.card, {
      // If, like @chrislloyd, you can't remember Javascript equality rules,
      // == null checks for `null` or `undefined` and leaves out `false`.
      [styles.hover]: active || (active == null && hovered),
    });

    return (
      <Box
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        position="relative"
      >
        <Box marginBottom={1}>
          <Avatar
            name={this.props.avatarName}
            src={this.props.avatarSrc}
            verified={this.props.avatarVerified}
            outline={this.props.avatarOutline}
            size={this.props.avatarSize}
          />
        </Box>
        <Box>{children}</Box>
        <div className={classes} />
      </Box>
    );
  }
}

/*
{image && <Box marginBottom={1}>{image}</Box>}
*/
