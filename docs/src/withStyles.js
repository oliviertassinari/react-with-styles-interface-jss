// @flow weak

import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
// import aphroditeInterface from 'react-with-styles-interface-aphrodite';
import jssInterface from 'react-with-styles-interface-jss';
import {css, withStyles, ThemeProvider} from 'react-with-styles';

ThemedStyleSheet.registerDefaultTheme({
  media: {
    medium: '@media (min-width: 672px)',
    large: '@media (min-width: 1024px)',
  },
  pseudo: {
    hover: '&:hover',
  },
});
ThemedStyleSheet.registerInterface(jssInterface);

export {css, withStyles, ThemeProvider, ThemedStyleSheet};
