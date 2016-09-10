// @flow weak

import React, {PropTypes} from 'react';
import {css, withStyles} from 'withStyles';

const Button = (props) => {
  const {
    children,
    component: Component = 'div',
    styles,
    theme, // eslint-disable-line no-unused-vars
    ...other,
  } = props;

  return (
    <Component {...css(styles.link)} {...other}>
      {children}
    </Component>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  styles: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(({pseudo}) => ({
  link: {
    color: '#1e6bb8',
    textDecoration: 'none',
    [pseudo.hover]: {
      textDecoration: 'underline',
    },
  },
}))(Button);
