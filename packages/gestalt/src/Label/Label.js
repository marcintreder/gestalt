// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './Label.css';

/*
type Props = {|
  children?: React.Node,
  htmlFor: string,
|};
*/

// Props

export default function Label(props) {
  const { children, htmlFor } = props;
  return (
    <label className={styles.label} htmlFor={htmlFor}>
      {children}
    </label>
  );
}

Label.propTypes = {
  children: PropTypes.node,
  htmlFor: PropTypes.string.isRequired,
};
