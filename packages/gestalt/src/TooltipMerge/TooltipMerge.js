import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box/Box.js';
import Tooltip from '../Tooltip/Tooltip.js';
import Button from '../Button/Button.js';

export default class TooltipMerge extends React.Component {
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
            text={this.state.open ? this.props.buttonTextClose : this.props.buttonTextOpen}
            name={this.props.buttonName}
            color={this.props.buttonColor}
            size={this.props.buttonSize}
            type={this.props.buttonType}
            inline={this.props.buttonInline}
            disabled={this.props.buttonDisabled}
          />
        </div>
        {this.state.open && (
          <Tooltip
            anchor={this.anchor}
            idealDirection={this.props.idealDirection}
            positionRelativeToAnchor={this.props.positionRelativeToAnchor}
            onDismiss={this.handleDismiss}
            size={this.props.size}
          >
           {this.props.children}
          </Tooltip>
        )}
      </Box>
    );
  }
}

TooltipMerge.propTypes = {
  anchor: PropTypes.shape({
    contains: PropTypes.func,
    getBoundingClientRect: PropTypes.func,
  }),
  children: PropTypes.node,
  idealDirection: PropTypes.oneOf(['up', 'right', 'down', 'left']),
  onDismiss: PropTypes.func,
  positionRelativeToAnchor: PropTypes.bool,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  buttonTextOpen: PropTypes.string,
  buttonTextClose: PropTypes.string,
  buttonName: PropTypes.string,
  buttonColor: PropTypes.oneOf(['blue', 'gray', 'red', 'transparent', 'white']),
  buttonSize: PropTypes.oneOf(['sm', 'md', 'lg']),
  buttonType: PropTypes.oneOf(['button', 'submit']),
  buttonInline: PropTypes.bool,
  buttonDisabled: PropTypes.bool,
};

TooltipMerge.defaultProps = {
  idealDirection: "up",
  size: "md",
  buttonColor: "gray",
  buttonType: "button",
  buttonInline: false,
  buttonDisabled: false,
  buttonTextOpen: "Show Tooltip",
  buttonTextClose: "Close Tooltip"
}
