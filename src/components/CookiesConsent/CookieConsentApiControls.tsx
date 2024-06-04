import { run, reset, hide, acceptCategory, showPreferences } from 'vanilla-cookieconsent';
import pluginConfig from './CookieConsentConfig';

const generateRandomId = () =>
  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

const acceptAndHide = (acceptType: string | string[]) => {
  const userId = generateRandomId();
  const expires = new Date();
  expires.setTime(expires.getTime() + 7 * 24 * 60 * 60 * 1000);

  document.cookie = `UserId=${userId};expires=${expires.toUTCString()};path=/`;
  acceptCategory(acceptType);
  hide();
};

const resetPlugin = () => {
  reset(true);
  run(pluginConfig);
};

const toggleDarkMode = () => {
  document.documentElement.classList.toggle('cc--darkmode');
};

export default function CookieConsentApiControls() {
  return (
    <div>
      <p>Api calls:</p>
      <div className='cc-btns'>
        <button
          type='button'
          onClick={showPreferences}>
          Show Preferences Modal
        </button>
        <button
          type='button'
          onClick={() => acceptAndHide('all')}>
          Accept All
        </button>
        <button
          type='button'
          onClick={() => acceptAndHide([])}>
          Accept Necessary
        </button>
        <button
          type='button'
          onClick={resetPlugin}>
          Reset plugin
        </button>
        <button
          type='button'
          onClick={toggleDarkMode}>
          Toggle DarkMode
        </button>
      </div>
    </div>
  );
}
