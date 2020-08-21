// Vendor libs
import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from '../lib/i18n';

// Page definition
const NotFoundPage = ({ t }) => {
  return <h1>{t('page_not_found')}</h1>;
};

// PropTypes
NotFoundPage.propTypes = {
  t: PropTypes.func.isRequired
};

// Exportation
export default withTranslation('common')(NotFoundPage);
