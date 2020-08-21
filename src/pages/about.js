// Vendor libs
import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from '../lib/i18n';

// Custom components
import Header from '../components/header';

// Component definition
const AboutPage = ({ t }) => {
  return (
    <>
      <Header />
      <h1>{t('about:title')}</h1>
    </>
  );
};

// Exportation
AboutPage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'header', 'about']
});

// PropTypes
AboutPage.propTypes = {
  t: PropTypes.func.isRequired
};

// Exportation
export default withTranslation('common')(AboutPage);
