// @flow weak

import React, {PropTypes} from 'react';
import {css, withStyles} from 'withStyles';

const PageBody = (props) => {
  const {
    children,
    styles,
  } = props;

  return (
    <div {...css(styles.root)}>
      {children}
    </div>
  );
};

PageBody.propTypes = {
  children: PropTypes.node.isRequired,
  styles: PropTypes.object.isRequired,
};

export default withStyles(({media}) => ({
  root: {
    padding: '32px 16px',
    fontSize: 16,
    [media.medium]: {
      padding: '32px 64px',
      fontSize: 18,
    },
    [media.large]: {
      padding: '32px 112px',
      maxWidth: 1024,
      margin: '0 auto',
    },
  },
}))(PageBody);
