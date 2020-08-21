import React from 'react';
import App from 'next/app';
import { appWithTranslation } from '../lib/i18n';

const BaseApp = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

BaseApp.getInitialProps = async appContext => ({
  ...(await App.getInitialProps(appContext))
});

// Exportation
export default appWithTranslation(BaseApp);
