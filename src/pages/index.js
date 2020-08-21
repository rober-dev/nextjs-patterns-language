// Vendor libs
import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from '../lib/i18n';

// Custom components
import Header from '../components/header';

// Component definition
const HomePage = ({ t }) => {
  return (
    <>
      <Header />
      <h1>{t('common:home_page')}</h1>
    </>
  );
};

// Exportation
HomePage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'header']
});

// PropTypes
HomePage.propTypes = {
  t: PropTypes.func.isRequired
};

// Exportation
export default withTranslation('common')(HomePage);
