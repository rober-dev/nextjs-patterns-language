// Vendor libs
import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from '../lib/i18n';

// Custom components
import Header from '../components/header';

// Component definition
const HomePage = ({ t }) => {
  // Event handlers
  const buttonHandler = e => {
    e.preventDefault();
    const msg = t('common:msg', { username: 'Rober' });
    // eslint-disable-next-line no-alert
    alert(msg);
  };

  return (
    <>
      <Header />
      <h1>{t('home:title')}</h1>
      <button type='button' onClick={e => buttonHandler(e)}>
        {t('common:show_translated_message')}
      </button>
    </>
  );
};

// Exportation
HomePage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'header', 'home']
});

// PropTypes
HomePage.propTypes = {
  t: PropTypes.func.isRequired
};

// Exportation
export default withTranslation('common')(HomePage);
