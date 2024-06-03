import { useEffect } from 'react';
import * as CookieConsent from 'vanilla-cookieconsent';
import pluginConfig from './CookieConsentConfig';
import 'vanilla-cookieconsent/dist/cookieconsent.css';

export default function CookiesConsent() {
  useEffect(() => {
    CookieConsent.run(pluginConfig);
    CookieConsent.show(true);
  }, []);

  return <></>;
}
