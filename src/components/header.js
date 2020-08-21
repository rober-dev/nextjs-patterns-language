// Vendor libs
import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from '../lib/i18n';

// Component definition
const Header = ({ t }) => {
  return (
    <div>
      <h4>{t('header:title')}</h4>
    </div>
  );
};

// PropTypes
Header.propTypes = {
  t: PropTypes.func.isRequired
};

// Exportation
export default withTranslation('common')(Header);
