/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import Html from 'components/Html';
import PageHead from 'components/PageHead';
import PageBody from 'components/PageBody';
import PageFooter from 'components/PageFooter';
import Button from 'components/Button';
import {ThemeProvider} from 'withStyles';

const REPOSITORY_URL = 'https://github.com/oliviertassinari/react-with-styles-interface-jss';

const Main = () => (
  <ThemeProvider>
    <div>
      <Html />
      <PageHead
        name="react-with-styles-interface-jss"
        description="Interface to use react-with-styles with JSS."
        repositoryUrl={REPOSITORY_URL}
      />
      <PageBody>
        {'Interface to use '}
        <Button component="a" href="https://github.com/airbnb/react-with-styles">
          {'react-with-styles'}
        </Button>
        {' with '}
        <Button component="a" href="https://github.com/cssinjs/jss">
          {'JSS'}
        </Button>.
        <PageFooter
          maintainerName="oliviertassinari"
          maintainerUrl="https://github.com/oliviertassinari"
          repositoryName="react-with-styles-interface-jss"
          repositoryUrl={REPOSITORY_URL}
        />
      </PageBody>
    </div>
  </ThemeProvider>
);

export default Main;
