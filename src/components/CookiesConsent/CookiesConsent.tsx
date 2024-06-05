import 'vanilla-cookieconsent/dist/cookieconsent.css';
import { useEffect } from 'react';
import * as CookieConsent from 'vanilla-cookieconsent';
import pluginConfig from './CookieConsentConfig';

export default function CookiesConsent() {
  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (!userData) {
      CookieConsent.run(pluginConfig);
      CookieConsent.show(true);
    }
  }, []);

  return null;
}
