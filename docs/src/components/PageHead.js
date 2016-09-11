// @flow weak

import React, {PropTypes} from 'react';
import {css, withStyles} from 'withStyles';

const PageHead = (props) => {
  const {
    description,
    name,
    repositoryUrl,
    styles,
  } = props;

  return (
    <section {...css(styles.root)}>
      <h1 {...css(styles.name)}>
        {name}
      </h1>
      <h2 {...css(styles.description)}>
        {description}
      </h2>
      <a {...css(styles.button)} href={repositoryUrl}>
        {'View on GitHub'}
      </a>
    </section>
  );
};

PageHead.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  repositoryUrl: PropTypes.string.isRequired,
  styles: PropTypes.object.isRequired,
};

export default withStyles(({media, pseudo}) => ({
  root: {
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#159957',
    backgroundImage: 'linear-gradient(120deg, #155799, #159957)',
    padding: '32px 16px',
  },
  name: {
    marginTop: 0,
    marginBottom: 1,
    fontSize: 28,
  },
  description: {
    marginBottom: 32,
    fontWeight: 'normal',
    opacity: 0.7,
    fontSize: 16,
  },
  button: {
    boxSizing: 'border-box',
    marginBottom: 16,
    color: 'rgba(255, 255, 255, 0.7)',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 6,
    transition: 'color 0.2s, background-color 0.2s, border-color 0.2s',
    textDecoration: 'none',
    display: 'block',
    width: '100%',
    padding: 12,
    fontSize: '14px',
    [pseudo.hover]: {
      color: 'rgba(255, 255, 255, 0.8)',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderColor: 'rgba(255, 255, 255, 0.3)',
    },
  },
  [media.medium]: {
    root: {
      padding: '48px 64px',
    },
    name: {
      fontSize: 36,
    },
    description: {
      fontSize: 18,
    },
    button: {
      display: 'inline-block',
      width: 'auto',
      padding: '10px 14px',
    },
  },
  [media.large]: {
    root: {
      padding: '80px 96px',
    },
    name: {
      fontSize: 52,
    },
    description: {
      fontSize: 20,
    },
    button: {
      display: 'inline-block',
      width: 'auto',
      padding: '12px 16px',
    },
  },
}))(PageHead);
