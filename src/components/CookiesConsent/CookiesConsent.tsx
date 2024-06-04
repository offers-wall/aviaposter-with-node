import 'vanilla-cookieconsent/dist/cookieconsent.css';
import { useEffect } from 'react';
import * as CookieConsent from 'vanilla-cookieconsent';
import pluginConfig from './CookieConsentConfig';

export default function CookiesConsent() {
  useEffect(() => {
    CookieConsent.run(pluginConfig);
    CookieConsent.show(true);
  }, []);

  return null;
}
