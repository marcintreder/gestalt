import * as React from 'react';
import PropTypes from 'prop-types';
import ToastMerge from '../ToastMerge/ToastMerge.js';
import Box from '../Box/Box.js';
import Button from '../Button/Button.js';

export default class ToastMergeInteractive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showConfirmationToast: false,
    };
    this.handleConfirmationClick = this.handleConfirmationClick.bind(this);
  }

  handleConfirmationClick({ event }) {
    this.setState(prevState => ({ showConfirmationToast: !prevState.showConfirmationToast }));
  }

  render() {
    return (
      <Box>
        <Button
          inline={this.props.buttonInline}
          text={ this.state.showConfirmationToast ? this.props.buttonTextClose : this.props.buttonTextOpen }
          onClick={this.handleConfirmationClick}
          size={this.props.buttonSize}
          type={this.props.buttonType}
          name={this.props.buttonName}
          color={this.props.buttonColor}
          disabled={this.props.buttonDisabled}
        />
        <Box
          fit
          dangerouslySetInlineStyle={{
            __style: {
              bottom: 50,
              left: '50%',
              transform: 'translateX(-50%)',
            },
          }}
          paddingX={1}
          position='fixed'
        >
          {this.state.showConfirmationToast ? (
            <ToastMerge
              text={this.props.text}
              icon={this.props.icon}
              color={this.props.color}
              thumbnailSrc={this.props.thumbnailSrc}
              thumbnailHeight={this.props.thumbnailHeight}
              thumbnailWidth={this.props.thumbnailWidth}
              thumbnailAlt={this.props.thumbnailAlt}
            />
          ) : null}
        </Box>
      </Box>
    );
  }
}

ToastMergeInteractive.propTypes = {
  color: PropTypes.oneOf(['darkGray', 'orange']),
  icon: PropTypes.oneOf(['arrow-circle-forward']), // leaving open to additional icons in the future
  text: PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.arrayOf(PropTypes.string),
]).isRequired,
  thumbnailSrc: PropTypes.string,
  thumbnailHeight: PropTypes.number,
  thumbnailWidth: PropTypes.number,
  thumbnailAlt: PropTypes.string,
  buttonColor: PropTypes.oneOf(['blue', 'gray', 'red', 'transparent', 'white']),
  buttonDisabled: PropTypes.bool,
  buttonInline: PropTypes.bool,
  buttonName: PropTypes.string,
  buttonSize: PropTypes.oneOf(['sm', 'md', 'lg']),
  buttonTextOpen: PropTypes.string,
  buttonTextClose: PropTypes.string,
  buttonType: PropTypes.oneOf(['button', 'submit']),
}

ToastMergeInteractive.defaultProps = {
  color: "darkGray",
  buttonColor: "gray",
  buttonSize: "md",
  buttonTextOpen: "Show confirmation toast",
  buttonTextClose: "Close toast",
  buttonType: "button"
}


