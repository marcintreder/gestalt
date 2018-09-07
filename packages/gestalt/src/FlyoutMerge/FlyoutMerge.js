import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box/Box.js';
import Button from '../Button/Button.js';
import Flyout from '../Flyout/Flyout.js';

export default class FlyoutMerge extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleClick = this._handleClick.bind(this);
    this.handleDismiss = this._handleDismiss.bind(this);
  }

  _handleClick() {
    this.setState(() => ({ open: !this.state.open }));
  }

  _handleDismiss() {
    this.setState(() => ({ open: false }));
  }

  render() {
    return (
      <Box>
        <div
          style={{ display: "inline-block" }}
          ref={c => {
            this.anchor = c;
          }}
        >
          <Button
            accessibilityExpanded={!!this.state.open}
            accessibilityHaspopup
            onClick={this.handleClick}
            text={this.props.buttonText}
            name={this.props.buttonName}
            color={this.props.buttonColor}
            size={this.props.buttonSize}
            type={this.props.buttonType}
            inline={this.props.buttonInline}
            disabled={this.props.buttonDisabled}
          />
        </div>
        {this.state.open &&
          <Flyout
            anchor={this.anchor}
            idealDirection={this.props.idealDirection}
            onDismiss={this.handleDismiss}
            size={this.props.size}
            color={this.props.color}
            positionRelativeToAnchor={this.props.positionRelativeToAnchor}

          >
          {this.props.children}
          </Flyout>}
      </Box>
    );
  }
}


FlyoutMerge.propTypes = {
  anchor: PropTypes.shape({
    contains: PropTypes.func,
    getBoundingClientRect: PropTypes.func,
  }),
  children: PropTypes.node,
  idealDirection: PropTypes.oneOf(['up', 'right', 'down', 'left']),
  onDismiss: PropTypes.func,
  positionRelativeToAnchor: PropTypes.bool,
  color: PropTypes.oneOf(['blue', 'orange', 'white']),
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']), // default: sm
  ]),
  buttonText: PropTypes.string,
  buttonName: PropTypes.string,
  buttonColor: PropTypes.oneOf(['blue', 'gray', 'red', 'transparent', 'white']),
  buttonSize: PropTypes.oneOf(['sm', 'md', 'lg']),
  buttonType: PropTypes.oneOf(['button', 'submit']),
  buttonInline: PropTypes.bool,
  buttonDisabled: PropTypes.bool,
};

FlyoutMerge.defaultProps = {
  idealDirection: "up",
  color: "white",
  size: "md",
  buttonColor: "gray",
  buttonType: "button",
  buttonInline: false,
  buttonDisabled: false
}
