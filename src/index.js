// @flow weak

import {create} from 'jss';
import preset from 'jss-preset-default';
import classNames from 'classnames';

const jss = create();
jss.setup(preset());

export default {
  create(styleHash) {
    return jss.createStyleSheet(styleHash).attach().classes;
  },

  // Styles is an array of properties returned by `create()`, a POJO, or an
  // array thereof. POJOs are treated as inline styles.
  // This function returns an object to be spread onto an element.
  resolve(styles) {
    return {className: classNames(styles)};
  },

  // Flushes all buffered styles to a style tag. Required for components
  // that depend upon previous styles in the component tree (i.e.
  // for calculating container width, including padding/margin).
  flush() {
  },
};
