import { useEffect } from 'react';
import * as CookieConsent from 'vanilla-cookieconsent';
import pluginConfig from './CookieConsentConfig';
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import Button from '../Outlet/Button';
import CookieConsentApiBtns from './CookieConsentApiContols';

export default function CookiesConsent() {
  useEffect(() => {
    CookieConsent.run(pluginConfig);
  }, []);

  return (
    <>
      <Button
        text='Show Cookie Preferences'
        href='#'
        onClick={CookieConsent.showPreferences}
      />
      {/* <CookieConsentApiBtns /> */}
    </>
  );
}
